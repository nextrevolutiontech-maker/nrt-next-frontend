import { AboutClient } from "@/components/pages/AboutClient";
import type { Metadata } from "next";
import { getPersonSchema, SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Us | Next Revolution Tech",
  description:
    "Learn about Next Revolution Tech's mission to drive digital transformation through cutting-edge enterprise software and AI automation.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about/#webpage`,
      name: "About Next Revolution Tech",
      url: `${SITE_URL}/about`,
      description:
        "Learn about Next Revolution Tech's mission to drive digital transformation through cutting-edge enterprise software and AI automation.",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntity: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@context": "https://schema.org",
      ...getPersonSchema(),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
