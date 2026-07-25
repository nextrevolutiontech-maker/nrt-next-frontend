import { HomeClient } from "@/components/pages/HomeClient";
import type { Metadata } from "next";
import { HOME_FAQS } from "@/data/faqs";
import { getFAQPageSchema, SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "ERP Development Company | AI Automation & Custom Software | Next Revolution Tech",
  description: "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "ERP Development Company | AI Automation & Custom Software | Next Revolution Tech",
    description: "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
    url: SITE_URL,
    siteName: "Next Revolution Tech",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Next Revolution Tech - ERP & AI Automation Agency" }],
  },
};

export default function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "ERP Development Company | AI Automation & Custom Software",
      description: "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
      },
    },
    {
      "@context": "https://schema.org",
      ...getFAQPageSchema(HOME_FAQS),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
