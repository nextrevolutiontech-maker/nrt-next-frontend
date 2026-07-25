import { TermsOfServiceClient } from "@/components/pages/TermsOfServiceClient";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Terms of Service | Next Revolution Tech",
  description:
    "Read the Terms of Service for using Next Revolution Tech software and websites.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsOfServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/terms/#webpage`,
    url: `${SITE_URL}/terms`,
    name: "NRT Terms of Service",
    description:
      "Read the Terms of Service for using Next Revolution Tech software and websites.",
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
      <TermsOfServiceClient />
    </>
  );
}
