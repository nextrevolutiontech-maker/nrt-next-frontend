import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  try {
    const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      const xmlContent = fs.readFileSync(sitemapPath, 'utf-8');
      return new NextResponse(xmlContent, {
        status: 200,
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
        },
      });
    }
  } catch (err) {
    console.error('Error in sitemap.xml route handler:', err);
  }

  // Fallback
  const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nextrevolutiontech.tech</loc>
    <priority>1.0</priority>
  </url>
</urlset>`;

  return new NextResponse(fallbackXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
