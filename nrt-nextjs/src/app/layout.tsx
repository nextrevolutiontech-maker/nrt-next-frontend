import type { Metadata, Viewport } from "next";
import { Inter, Sora, Playfair_Display } from "next/font/google";
import "./globals.css";
import { getOrganizationSchema, getProfessionalServiceSchema, getWebSiteSchema } from "@/lib/jsonld";

export const viewport: Viewport = {
  themeColor: "#EA580C",
  width: "device-width",
  initialScale: 1,
};

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
    default: "ERP Development Company | AI Automation & Custom Software | Next Revolution Tech",
  },
  description: "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
  keywords: [
    "ERP Development Company",
    "Custom ERP Software",
    "AI Development Company",
    "Business Process Automation",
    "Enterprise Software Development",
    "SaaS Development Company",
    "Shopify Development Agency",
    "Healthcare Software Development",
    "Manufacturing ERP",
    "CRM Development",
    "POS System",
    "Inventory Management",
    "Agentic AI",
    "Dedicated Developers",
    "Next Revolution Tech",
    "NRT",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "TypeScript"
  ],
  metadataBase: new URL("https://www.nextrevolutiontech.tech"),
  authors: [{ name: "Next Revolution Tech", url: "https://www.nextrevolutiontech.tech" }],
  creator: "Next Revolution Tech",
  publisher: "Next Revolution Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "Next Revolution Tech",
    title: "ERP Development Company | AI Automation & Custom Software | Next Revolution Tech",
    description: "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
    url: "https://www.nextrevolutiontech.tech",
    locale: "en_US",
    images: [
      { 
        url: "/og-image.png", 
        width: 1200, 
        height: 630, 
        alt: "Next Revolution Tech - ERP Development & AI Automation Agency" 
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nextrevtech",
    creator: "@nextrevtech",
    title: "ERP Development Company | AI Automation & Custom Software | Next Revolution Tech",
    description: "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                getOrganizationSchema(),
                getProfessionalServiceSchema(),
                getWebSiteSchema(),
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (let registration of registrations) {
                    registration.unregister();
                  }
                });
                if ('caches' in window) {
                  caches.keys().then(function(names) {
                    for (let name of names) {
                      caches.delete(name);
                    }
                  });
                }
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>{children}</body>
    </html>
  );
}
