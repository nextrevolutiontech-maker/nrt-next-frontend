import { PortfolioClient } from "@/components/pages/PortfolioClient";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Portfolio & Case Studies | Next Revolution Tech",
  description:
    "Explore our portfolio of successful enterprise ERP systems, AI automation solutions, and custom software projects.",
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
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
