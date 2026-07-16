// Configured via environment variables for Next.js

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || (
  process.env.NODE_ENV === 'production' 
    ? "https://nrt-portphoilo-backend.vercel.app" 
    : "http://localhost:5000"
);

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || (
  process.env.NODE_ENV === 'production'
    ? "https://www.nextrevolutiontech.tech"
    : "http://localhost:3000"
);
