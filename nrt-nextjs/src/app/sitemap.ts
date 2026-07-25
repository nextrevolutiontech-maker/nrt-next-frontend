import { MetadataRoute } from 'next'
import { getAllContent } from '@/core/content-engine/loader'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nextrevolutiontech.tech'
  
  // 14 Static Routes
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
    '/solution-finder'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' || route === '/blog' || route === '/services') ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : (route === '/services' || route === '/pricing' ? 0.9 : 0.8),
  }))

  // 10 Service Pages
  const services = [
    "custom-software-development",
    "erp-development",
    "saas-development",
    "ai-automation",
    "shopify-development",
    "mobile-app-development",
    "cloud-devops",
    "pos-system",
    "crm-development",
    "inventory-management"
  ].map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // 6 Industry Landing Pages
  const industries = [
    "healthcare",
    "manufacturing",
    "retail",
    "logistics",
    "education",
    "real-estate"
  ].map(slug => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // 3 Comparison Pages
  const comparisons = [
    "custom-erp-vs-odoo",
    "erp-vs-excel",
    "ai-agent-vs-chatbot"
  ].map(slug => ({
    url: `${baseUrl}/comparisons/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // 3 Glossary Terms
  const glossary = [
    "what-is-erp",
    "what-is-agentic-ai",
    "what-is-saas"
  ].map(slug => ({
    url: `${baseUrl}/glossary/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 3 Author Profile Pages
  const authors = [
    "muhammad-ahsan-khan",
    "muzammil-khan",
    "taha-siraj"
  ].map(slug => ({
    url: `${baseUrl}/author/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic MDX Content (Blog & Case Studies)
  const allContent = getAllContent()
  
  const contentRoutes = allContent.map((content) => {
    const isCaseStudy = content.path.includes('case-studies');
    const prefix = isCaseStudy ? '/case-studies' : '/blog';
    
    return {
      url: `${baseUrl}${prefix}/${content.slug}`,
      lastModified: content.metadata.updatedAt ? new Date(content.metadata.updatedAt) : new Date(content.metadata.publishedAt || Date.now()),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  return [
    ...staticRoutes,
    ...services,
    ...industries,
    ...comparisons,
    ...glossary,
    ...authors,
    ...contentRoutes
  ]
}
