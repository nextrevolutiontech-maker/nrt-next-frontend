import { NextResponse } from 'next/server';

// Utility helper to sanitize input strings against XSS & script injections
function sanitizeInput(str: any): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove <script> tags
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .trim();
}

// Regex for genuine email validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. ANTI-BOT HONEYPOT CHECK: If hidden bot field is filled, silently ignore (reject bot)
    if (body.website_hp || body.bot_field || body.address_confirm) {
      console.warn('🤖 Bot submission blocked via honeypot trap:', body);
      return NextResponse.json(
        { success: true, message: 'Lead received.' },
        { status: 200 }
      );
    }

    // 2. SANITIZE INPUTS
    const rawName = sanitizeInput(body.name);
    const rawEmail = sanitizeInput(body.email || body.workEmail);
    const rawPhone = sanitizeInput(body.whatsapp || body.phone);
    const rawCompany = sanitizeInput(body.company);
    const rawMessage = sanitizeInput(body.message);

    // 3. SERVER-SIDE VALIDATIONS
    if (!rawName || rawName.length < 2) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid full name (minimum 2 characters).' },
        { status: 400 }
      );
    }

    if (!rawEmail || !EMAIL_REGEX.test(rawEmail)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address (e.g. name@company.com).' },
        { status: 400 }
      );
    }

    const cleanPhoneDigits = rawPhone.replace(/\D/g, '');
    if (rawPhone && cleanPhoneDigits.length < 7) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid phone/WhatsApp number (minimum 7 digits).' },
        { status: 400 }
      );
    }

    // Prepare sanitized payload
    const sanitizedPayload = {
      name: rawName,
      email: rawEmail,
      whatsapp: rawPhone,
      company: rawCompany,
      message: rawMessage,
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'Unknown',
    };

    console.log('🛡️ Executive Lead Validated & Sanitized:', sanitizedPayload);

    const backendUrl = process.env.BACKEND_API_URL || 'https://nrt-portphoilo-backend.vercel.app';

    // Forward to backend node server if available
    try {
      await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedPayload),
      });
    } catch (backendError) {
      console.warn('Backend server forward warning (handled gracefully):', backendError);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Executive lead successfully validated and dispatched to strategy team.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in /api/contact route handler:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error processing request.',
      },
      { status: 500 }
    );
  }
}
