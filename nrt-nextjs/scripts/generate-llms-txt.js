import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://www.nextrevolutiontech.tech';
const CONTENT_DIR = path.resolve(__dirname, '../content');
const CACHE_FILE = path.resolve(__dirname, '../.cache/knowledge-graph.json');
const LLMS_TXT_FILE = path.resolve(__dirname, '../public/llms.txt');
const LLMS_FULL_TXT_FILE = path.resolve(__dirname, '../public/llms-full.txt');

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

function generateLLMSTxt() {
  console.log('🤖 Generating /llms.txt and /llms-full.txt for Next.js GEO...');

  let llmsTxt = `# Next Revolution Tech (NRT)\n\n`;
  llmsTxt += `> Next Revolution Tech is a global technology partner and enterprise software engineering consultancy specializing in custom ERP systems, AI workflow automation, agentic AI solutions, staff augmentation, and scalable cloud ecosystems.\n\n`;

  llmsTxt += `## Core Enterprise Services\n`;
  llmsTxt += `- [Enterprise Services](${SITE_URL}/services): Custom ERP Systems, AI Workflow Automation, Dedicated Technology Teams.\n`;
  llmsTxt += `- [Tech Stack & Architecture](${SITE_URL}/tech-stack): Enterprise stack (React, Next.js, Node.js, NestJS, Python, PostgreSQL, AWS, Agentic AI).\n`;
  llmsTxt += `- [Discovery Framework](${SITE_URL}/discovery-framework): 5-phase software architecture & project delivery framework.\n`;
  llmsTxt += `- [Cost Estimator Engine](${SITE_URL}/estimator): Interactive software project estimation engine.\n`;
  llmsTxt += `- [Dedicated Engineering Teams](${SITE_URL}/dedicated-teams): Pre-vetted React, Node.js, and AI engineers for staff augmentation.\n\n`;

  llmsTxt += `## Enterprise Case Studies\n`;
  llmsTxt += `- [Pulse Healthcare ERP](${SITE_URL}/case-studies/pulse-healthcare-erp): Multi-tenant HIPAA-compliant ERP system for US healthcare provider.\n`;
  llmsTxt += `- [Autonomous AI Router](${SITE_URL}/case-studies/autonomous-ai-agent): 24/7 lead qualification agentic AI router.\n`;
  llmsTxt += `- [Textile Mill Web POS](${SITE_URL}/case-studies/textile-mill-pos): Industrial Web POS with live FBR tax API integration.\n\n`;

  let graphNodes = [];
  if (fs.existsSync(CACHE_FILE)) {
    try {
      const graphData = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
      graphNodes = graphData.nodes || [];
    } catch (e) {
      console.warn('⚠️ Could not load knowledge graph cache:', e.message);
    }
  }

  const articles = graphNodes.filter(n => n.type === 'article');
  const frameworks = graphNodes.filter(n => n.type === 'framework');
  const industries = graphNodes.filter(n => n.type === 'industry');
  const problems = graphNodes.filter(n => n.type === 'problem');
  const reports = graphNodes.filter(n => n.type === 'report');

  if (frameworks.length > 0) {
    llmsTxt += `## Proprietary Frameworks\n`;
    frameworks.forEach(node => {
      llmsTxt += `- [${node.title}](${SITE_URL}/resources/${node.slug}): ${node.description}\n`;
    });
    llmsTxt += `\n`;
  }

  if (industries.length > 0) {
    llmsTxt += `## Industry Solutions & ERP Architectures\n`;
    industries.forEach(node => {
      llmsTxt += `- [${node.title}](${SITE_URL}/solutions/${node.slug}): ${node.description}\n`;
    });
    llmsTxt += `\n`;
  }

  if (problems.length > 0) {
    llmsTxt += `## Enterprise Problem Solutions\n`;
    problems.forEach(node => {
      llmsTxt += `- [${node.title}](${SITE_URL}/business-problems/${node.slug}): ${node.description}\n`;
    });
    llmsTxt += `\n`;
  }

  if (articles.length > 0) {
    llmsTxt += `## Knowledge Graph Articles & Research\n`;
    articles.forEach(node => {
      llmsTxt += `- [${node.title}](${SITE_URL}/resources/${node.slug}): ${node.description}\n`;
    });
    llmsTxt += `\n`;
  }

  if (reports.length > 0) {
    llmsTxt += `## Research & Benchmark Reports\n`;
    reports.forEach(node => {
      llmsTxt += `- [${node.title}](${SITE_URL}/resources/${node.slug}): ${node.description}\n`;
    });
    llmsTxt += `\n`;
  }

  llmsTxt += `## Optional Details\n`;
  llmsTxt += `- Full Knowledge Graph compiled dump available at: [llms-full.txt](${SITE_URL}/llms-full.txt)\n`;
  llmsTxt += `- Company Website: [Next Revolution Tech](${SITE_URL})\n`;

  fs.writeFileSync(LLMS_TXT_FILE, llmsTxt, 'utf-8');
  console.log(`✅ llms.txt generated at nrt-nextjs/public/llms.txt`);

  let llmsFullTxt = `# Next Revolution Tech (NRT) - Full Knowledge Graph Dump\n\n`;
  llmsFullTxt += `This file contains the complete markdown text of all published knowledge assets, frameworks, industry solutions, and case study documentation for Large Language Model (LLM) RAG ingestion.\n\n`;
  llmsFullTxt += `Source Domain: ${SITE_URL}\n`;
  llmsFullTxt += `Generated Date: ${new Date().toISOString().split('T')[0]}\n\n`;
  llmsFullTxt += `---\n\n`;

  const mdxFiles = getAllFiles(CONTENT_DIR);
  let compiledCount = 0;

  mdxFiles.forEach(filePath => {
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(rawContent);

    if (data.status && data.status !== 'Published') return;

    compiledCount++;
    llmsFullTxt += `## Asset: ${data.title || path.basename(filePath)}\n`;
    llmsFullTxt += `- **ID:** ${data.id || 'N/A'}\n`;
    llmsFullTxt += `- **Slug:** ${data.slug || 'N/A'}\n`;
    if (data.description) llmsFullTxt += `- **Description:** ${data.description}\n`;
    if (data.intent) llmsFullTxt += `- **Intent:** ${data.intent}\n`;
    if (data.cluster) llmsFullTxt += `- **Cluster:** ${data.cluster}\n`;
    if (data.aiSummary) llmsFullTxt += `- **AI Summary:** ${data.aiSummary}\n`;

    if (data.keyTakeaways && Array.isArray(data.keyTakeaways)) {
      llmsFullTxt += `- **Key Takeaways:**\n`;
      data.keyTakeaways.forEach(kt => llmsFullTxt += `  * ${kt}\n`);
    }

    llmsFullTxt += `\n### Article Content\n\n`;
    const cleanContent = content
      .replace(/^import\s+.*?;?\s*$/gm, '')
      .replace(/<[A-Z][A-Za-z0-9]*\b[^>]*\/?>/g, '')
      .replace(/<\/[A-Z][A-Za-z0-9]*>/g, '')
      .trim();

    llmsFullTxt += `${cleanContent}\n\n`;
    llmsFullTxt += `---\n\n`;
  });

  fs.writeFileSync(LLMS_FULL_TXT_FILE, llmsFullTxt, 'utf-8');
  console.log(`✅ llms-full.txt generated with ${compiledCount} assets at nrt-nextjs/public/llms-full.txt`);
}

generateLLMSTxt();
