import type { Metadata } from "next";
import { Inter, Sora, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Next Revolution Tech",
    default: "Next Revolution Tech | Enterprise Software Development & AI Solutions",
  },
  description: "Global technology partner delivering enterprise-grade software solutions, AI innovations, and scalable cloud ecosystems. Specialized in eCommerce, APIs, and Agentic AI.",
  keywords: ["Software Development", "AI Solutions", "Enterprise Software", "Next Revolution Tech", "NRT", "eCommerce Development", "API Integration", "Agentic AI", "Dedicated Developers"],
  metadataBase: new URL("https://www.nextrevolutiontech.tech"),
  openGraph: {
    type: "website",
    siteName: "Next Revolution Tech",
    title: "Next Revolution Tech | Enterprise Software Development & AI Solutions",
    description: "Global technology partner delivering enterprise-grade software solutions, AI innovations, and scalable cloud ecosystems.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Next Revolution Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nextrevtech",
    creator: "@nextrevtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${playfair.variable} h-full antialiased overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>{children}</body>
    </html>
  );
}
