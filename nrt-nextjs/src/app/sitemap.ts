import { MetadataRoute } from 'next';
import { getAllContent } from '@/core/content-engine/loader';

export const revalidate = 86400; // 24 hours ISR

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nextrevolutiontech.tech';
  const now = new Date();

  // 14 Core Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/portfolio',
    '/process',
    '/pricing',
    '/privacy-policy',
    '/terms',
    '/case-studies',
    '/blog',
    '/resources',
    '/dedicated-teams',
    '/solution-finder',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: (route === '' || route === '/blog' || route === '/services') ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : (route === '/services' || route === '/pricing' ? 0.9 : 0.8),
  }));

  // 10 Core Service Landing Pages
  const services = [
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
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 6 Industry Vertical Pages
  const industries = [
    'healthcare',
    'manufacturing',
    'retail',
    'logistics',
    'education',
    'real-estate',
  ].map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 3 Comparison Pages
  const comparisons = [
    'custom-erp-vs-odoo',
    'erp-vs-excel',
    'ai-agent-vs-chatbot',
  ].map((slug) => ({
    url: `${baseUrl}/comparisons/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 3 Glossary Pages
  const glossary = [
    'what-is-erp',
    'what-is-agentic-ai',
    'what-is-saas',
  ].map((slug) => ({
    url: `${baseUrl}/glossary/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3 Author Profile Pages
  const authors = [
    'muhammad-ahsan-khan',
    'muzammil-khan',
    'taha-siraj',
  ].map((slug) => ({
    url: `${baseUrl}/author/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic MDX Content (Blog Posts & Case Studies)
  const allContent = getAllContent();
  const contentRoutes = allContent.map((content) => {
    const isCaseStudy = content.path.includes('case-studies');
    const prefix = isCaseStudy ? '/case-studies' : '/blog';
    const dateStr = content.metadata.updatedAt || content.metadata.publishedAt;
    const lastModDate = dateStr ? new Date(dateStr) : now;

    return {
      url: `${baseUrl}${prefix}/${content.slug}`,
      lastModified: isNaN(lastModDate.getTime()) ? now : lastModDate,
      changeFrequency: 'monthly' as const,
      priority: isCaseStudy ? 0.8 : 0.7,
    };
  });

  // Deduplicate entries by URL
  const sitemapEntries = [
    ...staticRoutes,
    ...services,
    ...industries,
    ...comparisons,
    ...glossary,
    ...authors,
    ...contentRoutes,
  ];

  const uniqueUrls = new Set<string>();
  const deduplicatedSitemap: MetadataRoute.Sitemap = [];

  for (const entry of sitemapEntries) {
    if (!uniqueUrls.has(entry.url)) {
      uniqueUrls.add(entry.url);
      deduplicatedSitemap.push(entry);
    }
  }

  return deduplicatedSitemap;
}
