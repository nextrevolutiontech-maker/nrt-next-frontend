import { PrivacyPolicyClient } from "@/components/pages/PrivacyPolicyClient";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Privacy Policy | Next Revolution Tech",
  description:
    "Read our Privacy Policy to understand how Next Revolution Tech collects, uses, and protects your data.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/privacy-policy/#webpage`,
    url: `${SITE_URL}/privacy-policy`,
    name: "NRT Privacy Policy",
    description:
      "Read our Privacy Policy to understand how Next Revolution Tech collects, uses, and protects your data.",
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
      <PrivacyPolicyClient />
    </>
  );
}
