import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://www.nextrevolutiontech.tech';
const CACHE_FILE = path.resolve(__dirname, '../.cache/knowledge-graph.json');
const OUTPUT_FILE = path.resolve(__dirname, '../public/sitemap.xml');

const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.9', changefreq: 'weekly' },
  { url: '/portfolio', priority: '0.8', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/estimator', priority: '0.8', changefreq: 'monthly' },
  { url: '/process', priority: '0.8', changefreq: 'monthly' },
  { url: '/tech-stack', priority: '0.8', changefreq: 'monthly' },
  { url: '/discovery-framework', priority: '0.8', changefreq: 'monthly' },
  { url: '/dedicated-teams', priority: '0.8', changefreq: 'monthly' },
  { url: '/solution-finder', priority: '0.7', changefreq: 'monthly' },
  { url: '/resources', priority: '0.8', changefreq: 'weekly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'yearly' },
  { url: '/author/muhammad-ahsan-khan', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' }
];

const today = new Date().toISOString().split('T')[0];

function generateSitemap() {
  console.log('🔄 Generating dynamic sitemap.xml for Next.js...');

  const urls = staticRoutes.map(route => ({
    loc: `${SITE_URL}${route.url}`,
    lastmod: today,
    changefreq: route.changefreq,
    priority: route.priority
  }));

  if (fs.existsSync(CACHE_FILE)) {
    try {
      const graphData = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
      const nodes = graphData.nodes || [];

      nodes.forEach(node => {
        let routePath = '';
        let priority = '0.7';
        let changefreq = 'weekly';

        switch (node.type) {
          case 'casestudy':
            routePath = `/case-studies/${node.slug}`;
            priority = '0.8';
            changefreq = 'monthly';
            break;
          case 'industry':
            routePath = `/solutions/${node.slug}`;
            priority = '0.8';
            changefreq = 'monthly';
            break;
          case 'problem':
            routePath = `/business-problems/${node.slug}`;
            priority = '0.8';
            changefreq = 'monthly';
            break;
          case 'article':
          case 'framework':
          case 'report':
          case 'template':
            routePath = `/resources/${node.slug}`;
            priority = '0.7';
            changefreq = 'weekly';
            break;
          default:
            routePath = `/resources/${node.slug}`;
            break;
        }

        if (routePath) {
          urls.push({
            loc: `${SITE_URL}${routePath}`,
            lastmod: today,
            changefreq,
            priority
          });
        }
      });
    } catch (err) {
      console.error('⚠️ Could not parse Knowledge Graph cache for sitemap:', err.message);
    }
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  urls.forEach(u => {
    xml += `  <url>\n`;
    xml += `    <loc>${u.loc}</loc>\n`;
    xml += `    <lastmod>${u.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
    xml += `    <priority>${u.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  fs.writeFileSync(OUTPUT_FILE, xml, 'utf-8');
  console.log(`✅ sitemap.xml successfully generated with ${urls.length} URLs at nrt-nextjs/public/sitemap.xml`);
}

generateSitemap();
