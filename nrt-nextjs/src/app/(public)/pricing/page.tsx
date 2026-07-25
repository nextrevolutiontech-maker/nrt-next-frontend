import { PricingClient } from "@/components/pages/PricingClient";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Pricing & Packages | Next Revolution Tech",
  description:
    "Transparent pricing for custom software development, AI automation, and dedicated engineering teams.",
  alternates: {
    canonical: `${SITE_URL}/pricing`,
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
