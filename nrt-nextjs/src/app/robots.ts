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
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-Web', 'Google-Extended', 'CCBot', 'anthropic-ai', 'PerplexityBot', 'Bytespider', 'Bingbot'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.nextrevolutiontech.tech/sitemap.xml',
  };
}
