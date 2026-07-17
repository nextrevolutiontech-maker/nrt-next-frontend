import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'CCBot', 'anthropic-ai', 'PerplexityBot', 'Bingbot'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.nextrevolutiontech.tech/sitemap.xml',
  };
}
