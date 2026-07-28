import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://www.nextrevolutiontech.tech';
const OUTPUT_SITEMAP = path.resolve(__dirname, '../public/sitemap.xml');
const OUTPUT_ROBOTS = path.resolve(__dirname, '../public/robots.txt');
const CONTENT_DIR = path.resolve(__dirname, '../content');

const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.7', changefreq: 'yearly' },
  { url: '/portfolio', priority: '0.8', changefreq: 'monthly' },
  { url: '/process', priority: '0.8', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/case-studies', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.9', changefreq: 'weekly' },
  { url: '/resources', priority: '0.8', changefreq: 'weekly' },
  { url: '/dedicated-teams', priority: '0.8', changefreq: 'monthly' },
  { url: '/solution-finder', priority: '0.7', changefreq: 'monthly' },
];

const serviceRoutes = [
  'custom-software-development',
  'erp-development',
  'saas-development',
  'ai-automation',
  'shopify-development',
  'mobile-app-development',
  'cloud-devops',
  'pos-system',
  'crm-development',
  'inventory-management',
].map((slug) => ({ url: `/services/${slug}`, priority: '0.9', changefreq: 'monthly' }));

const industryRoutes = [
  'healthcare',
  'manufacturing',
  'retail',
  'logistics',
  'education',
  'real-estate',
].map((slug) => ({ url: `/industries/${slug}`, priority: '0.8', changefreq: 'monthly' }));

const comparisonRoutes = [
  'custom-erp-vs-odoo',
  'erp-vs-excel',
  'ai-agent-vs-chatbot',
].map((slug) => ({ url: `/comparisons/${slug}`, priority: '0.8', changefreq: 'monthly' }));

const glossaryRoutes = [
  'what-is-erp',
  'what-is-agentic-ai',
  'what-is-saas',
].map((slug) => ({ url: `/glossary/${slug}`, priority: '0.7', changefreq: 'monthly' }));

const authorRoutes = [
  'muhammad-ahsan-khan',
  'muzammil-khan',
  'taha-siraj',
].map((slug) => ({ url: `/author/${slug}`, priority: '0.7', changefreq: 'monthly' }));

function getMdxFilesRecursive(dir) {
  if (!fs.existsSync(dir)) return [];
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMdxFilesRecursive(file));
    } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
      results.push(file);
    }
  });
  return results;
}

function generateSitemapAndRobots() {
  console.log('🔄 Generating static sitemap.xml and robots.txt for Next.js build...');

  const allRouteObjects = [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...comparisonRoutes,
    ...glossaryRoutes,
    ...authorRoutes,
  ];

  // Dynamic MDX files
  const mdxFiles = getMdxFilesRecursive(CONTENT_DIR);
  mdxFiles.forEach((filePath) => {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      const slug = data.slug || path.basename(filePath).replace(/\.mdx?$/, '');
      const isCaseStudy = filePath.includes('case-studies');
      const prefix = isCaseStudy ? '/case-studies' : '/blog';
      
      allRouteObjects.push({
        url: `${prefix}/${slug}`,
        priority: isCaseStudy ? '0.8' : '0.7',
        changefreq: 'monthly',
      });
    } catch (err) {
      console.error(`⚠️ Error parsing MDX file ${filePath}:`, err.message);
    }
  });

  // Deduplicate by full URL
  const uniqueUrlsMap = new Map();
  allRouteObjects.forEach((routeObj) => {
    const fullUrl = `${SITE_URL}${routeObj.url}`;
    if (!uniqueUrlsMap.has(fullUrl)) {
      uniqueUrlsMap.set(fullUrl, routeObj);
    }
  });

  // Generate sitemap.xml
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const [fullUrl, routeObj] of uniqueUrlsMap.entries()) {
    xml += `  <url>\n`;
    xml += `    <loc>${fullUrl}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${routeObj.changefreq}</changefreq>\n`;
    xml += `    <priority>${routeObj.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(OUTPUT_SITEMAP, xml, 'utf-8');
  console.log(`✅ sitemap.xml successfully generated with ${uniqueUrlsMap.size} URLs at public/sitemap.xml`);

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  fs.writeFileSync(OUTPUT_ROBOTS, robotsTxt, 'utf-8');
  console.log(`✅ robots.txt successfully generated at public/robots.txt`);
}

generateSitemapAndRobots();
