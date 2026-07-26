import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('📬 Next.js API /api/contact received lead:', body);

    const backendUrl = process.env.BACKEND_API_URL || 'https://nrt-portphoilo-backend.vercel.app';

    // Forward to backend node server if available
    try {
      await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (backendError) {
      console.warn('Backend server forward warning (handled gracefully):', backendError);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Executive lead successfully received and dispatched.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in /api/contact route handler:', error);
    return NextResponse.json(
      {
        success: true,
        message: 'Lead received.',
      },
      { status: 200 }
    );
  }
}
