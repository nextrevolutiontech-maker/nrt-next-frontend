import { ServicesClient } from "@/components/pages/ServicesClient";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Services & Solutions | Next Revolution Tech",
  description:
    "Explore our comprehensive suite of enterprise services including custom software development, AI integration, cloud solutions, and eCommerce.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}/services/#webpage`,
      name: "Services & Solutions | Next Revolution Tech",
      url: `${SITE_URL}/services`,
      description:
        "Explore our comprehensive suite of enterprise services including custom software development, AI integration, cloud solutions, and eCommerce.",
      provider: {
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
          url: `${SITE_URL}/services/custom-software-development`,
          name: "Custom Software Development",
        },
        {
          "@type": "ListItem",
          position: 2,
          url: `${SITE_URL}/services/ai-automation`,
          name: "AI Automation Services",
        },
        {
          "@type": "ListItem",
          position: 3,
          url: `${SITE_URL}/services/erp-development`,
          name: "ERP Development",
        },
        {
          "@type": "ListItem",
          position: 4,
          url: `${SITE_URL}/services/saas-development`,
          name: "SaaS Development",
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
      <ServicesClient />
    </>
  );
}
