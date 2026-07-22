import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.resolve(__dirname, '../content');
const OUTPUT_DIR = path.resolve(__dirname, '../.cache');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const knowledgeDebt = {
  outdatedArticles: 0,
  lowTrustAssets: 0,
  brokenReferences: 0,
  details: []
};

const slugs = new Set();

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.mdx')) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const allMdxFiles = getAllFiles(CONTENT_DIR);
const nodes = [];
const edges = [];
const searchIndex = [];

allMdxFiles.forEach(filePath => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);
  
  if (!data.id || !data.slug) return;
  if (slugs.has(data.slug)) return;
  slugs.add(data.slug);

  if (data.status && data.status !== 'Published') return;

  const type = filePath.includes('/industries/') ? 'industry' : 
               filePath.includes('/articles/') ? 'article' : 
               filePath.includes('/business-problems/') ? 'problem' : 
               filePath.includes('/case-studies/') ? 'casestudy' :
               filePath.includes('/reports/') ? 'report' :
               filePath.includes('/frameworks/') ? 'framework' :
               filePath.includes('/templates/') ? 'template' : 'unknown';

  let trustScore = 0;
  if (data.evidence && data.evidence.length > 0) trustScore += 30;
  
  const node = {
    id: data.id,
    type,
    slug: data.slug,
    title: data.title,
    description: data.description,
    cluster: data.cluster,
    intent: data.intent,
    industry: data.industry || [],
    related: data.related || [],
    evidence: data.evidence || [],
    trustScore: trustScore
  };

  nodes.push(node);
  
  searchIndex.push({
    id: data.id,
    title: data.title,
    slug: data.slug,
    description: data.description,
    type,
    intent: data.intent
  });
});

nodes.forEach(nodeA => {
  nodeA.related.forEach(relatedId => {
    const nodeB = nodes.find(n => n.id === relatedId);
    if (nodeB) {
      edges.push({ source: nodeA.id, target: nodeB.id, type: 'RELATES_TO', weight: 100 });
    }
  });
});

fs.writeFileSync(path.join(OUTPUT_DIR, 'knowledge-graph.json'), JSON.stringify({ nodes, edges }, null, 2));
fs.writeFileSync(path.join(OUTPUT_DIR, 'search-index.json'), JSON.stringify(searchIndex, null, 2));

console.log(`✅ Next.js Knowledge Graph Built: ${nodes.length} Nodes, ${edges.length} Edges.`);
