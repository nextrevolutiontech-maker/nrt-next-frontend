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
  keywords: ["Software Development", "AI Solutions", "Enterprise Software", "Next Revolution Tech", "NRT", "eCommerce Development", "API Integration", "Agentic AI", "Dedicated Developers", "Business Automation"],
  metadataBase: new URL("https://www.nextrevolutiontech.tech"),
  authors: [{ name: "Next Revolution Tech", url: "https://www.nextrevolutiontech.tech" }],
  creator: "Next Revolution Tech",
  publisher: "Next Revolution Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Next Revolution Tech",
    title: "Next Revolution Tech | Enterprise Software Development & AI Solutions",
    description: "Global technology partner delivering enterprise-grade software solutions, AI innovations, and scalable cloud ecosystems.",
    url: "https://www.nextrevolutiontech.tech",
    locale: "en_US",
    images: [
      { 
        url: "/og-image.png", 
        width: 1200, 
        height: 630, 
        alt: "Next Revolution Tech Enterprise IT & AI Solutions" 
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nextrevtech",
    creator: "@nextrevtech",
    title: "Next Revolution Tech | Enterprise IT & AI Solutions",
    description: "Global technology partner delivering enterprise-grade software solutions, AI innovations, and scalable cloud ecosystems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
