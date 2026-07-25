import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  try {
    const robotsPath = path.resolve(process.cwd(), 'public/robots.txt');
    if (fs.existsSync(robotsPath)) {
      const txtContent = fs.readFileSync(robotsPath, 'utf-8');
      return new NextResponse(txtContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
        },
      });
    }
  } catch (err) {
    console.error('Error in robots.txt route handler:', err);
  }

  const fallbackTxt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.nextrevolutiontech.tech/sitemap.xml`;

  return new NextResponse(fallbackTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
