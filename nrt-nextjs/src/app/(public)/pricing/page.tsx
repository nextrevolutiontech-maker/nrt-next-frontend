import { PricingClient } from "@/components/pages/PricingClient";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Transparent Custom ERP & Software Engineering Pricing | NRT",
  description:
    "Explore transparent pricing plans for custom ERP software, AI workflow automation, and dedicated developer teams with 100% IP code ownership.",
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  openGraph: {
    title: "Transparent Custom ERP & Software Engineering Pricing | NRT",
    description:
      "Explore transparent pricing plans for custom ERP software, AI workflow automation, and dedicated developer teams with 100% IP code ownership.",
    url: `${SITE_URL}/pricing`,
    siteName: "Next Revolution Tech",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Next Revolution Tech Software Engineering Pricing" }],
  },
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/pricing/#webpage`,
    url: `${SITE_URL}/pricing`,
    name: "NRT Pricing and Packages",
    description:
      "Transparent pricing for custom software development, AI automation, and dedicated engineering teams.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingClient />
    </>
  );
}
