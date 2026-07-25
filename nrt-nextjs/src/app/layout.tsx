import type { Metadata, Viewport } from "next";
import { Inter, Sora, Playfair_Display } from "next/font/google";
import "./globals.css";

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
                {
                  "@type": "Organization",
                  "@id": "https://www.nextrevolutiontech.tech/#organization",
                  "name": "Next Revolution Tech",
                  "legalName": "Next Revolution Tech",
                  "url": "https://www.nextrevolutiontech.tech",
                  "logo": "https://www.nextrevolutiontech.tech/logo.png",
                  "image": "https://www.nextrevolutiontech.tech/og-image.png",
                  "telephone": "+923442013217",
                  "email": "contact@nextrevolutiontech.tech",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Gulistan-e-Johar",
                    "addressLocality": "Karachi",
                    "addressRegion": "Sindh",
                    "postalCode": "75290",
                    "addressCountry": "PK"
                  },
                  "foundingDate": "2022",
                  "founder": {
                    "@type": "Person",
                    "name": "Muhammad Ahsan Khan",
                    "jobTitle": "Founder & Lead Architect",
                    "url": "https://www.nextrevolutiontech.tech/author/muhammad-ahsan-khan"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/nextrevolutiontech",
                    "https://twitter.com/nextrevtech",
                    "https://github.com/nextrevolutiontech-maker"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.nextrevolutiontech.tech/#localbusiness",
                  "name": "Next Revolution Tech",
                  "image": "https://www.nextrevolutiontech.tech/og-image.png",
                  "url": "https://www.nextrevolutiontech.tech",
                  "telephone": "+923442013217",
                  "priceRange": "$$$",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Karachi",
                    "addressCountry": "PK"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.nextrevolutiontech.tech/#website",
                  "url": "https://www.nextrevolutiontech.tech",
                  "name": "Next Revolution Tech",
                  "description": "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
                  "publisher": {
                    "@id": "https://www.nextrevolutiontech.tech/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>{children}</body>
    </html>
  );
}
