import { PortfolioClient } from "@/components/pages/PortfolioClient";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Enterprise Software Portfolio & Verified Live Demos | NRT",
  description:
    "Browse 36+ verified enterprise ERP systems, POS software, and AI automation projects deployed by Next Revolution Tech.",
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: "Enterprise Software Portfolio & Verified Live Demos | NRT",
    description:
      "Browse 36+ verified enterprise ERP systems, POS software, and AI automation projects deployed by Next Revolution Tech.",
    url: `${SITE_URL}/portfolio`,
    siteName: "Next Revolution Tech",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Next Revolution Tech Enterprise Software Portfolio" }],
  },
};

export default function PortfolioPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/portfolio/#webpage`,
      url: `${SITE_URL}/portfolio`,
      name: "NRT Case Studies and Projects",
      description:
        "Explore our portfolio of successful enterprise ERP systems, AI automation solutions, and custom software projects.",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: `${SITE_URL}/case-studies/enterprise-erp-implementation`,
        },
        {
          "@type": "ListItem",
          position: 2,
          url: `${SITE_URL}/case-studies/ai-agent-automation`,
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
      <PortfolioClient />
    </>
  );
}
