import { Metadata } from "next";
import ResourcesClient from "@/components/pages/ResourcesClient";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Knowledge Hub | Next Revolution Tech",
  description:
    "Practical insights on ERP systems, AI automation, workflow optimization and business growth.",
  openGraph: {
    title: "Knowledge Hub | Next Revolution Tech",
    description:
      "Practical insights on ERP systems, AI automation, workflow optimization and business growth.",
    url: `${SITE_URL}/resources`,
    siteName: "Next Revolution Tech",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
};

export default function ResourcesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/resources/#webpage`,
      name: "Knowledge Hub | Next Revolution Tech",
      description:
        "Practical insights on ERP systems, AI automation, workflow optimization and business growth.",
      url: `${SITE_URL}/resources`,
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
          url: `${SITE_URL}/blog/digital-wallet-architecture`,
        },
        {
          "@type": "ListItem",
          position: 2,
          url: `${SITE_URL}/blog/what-is-manufacturing-erp`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: `${SITE_URL}/resources`,
      speakable: {
        "@type": "SpeakableSpecification",
        xpath: [
          "/html/head/title",
          "/html/head/meta[@name='description']/@content",
        ],
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResourcesClient />
    </>
  );
}
