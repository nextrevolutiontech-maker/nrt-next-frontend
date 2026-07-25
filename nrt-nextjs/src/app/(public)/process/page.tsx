import { ProcessClient } from "@/components/pages/ProcessClient";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Process | Next Revolution Tech",
  description:
    "Discover our proven agile methodology for designing, developing, and deploying enterprise software and AI solutions.",
  alternates: {
    canonical: `${SITE_URL}/process`,
  },
};

export default function ProcessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/process/#webpage`,
    url: `${SITE_URL}/process`,
    name: "NRT Software Development Process",
    description:
      "Discover our proven agile methodology for designing, developing, and deploying enterprise software and AI solutions.",
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
      <ProcessClient />
    </>
  );
}
