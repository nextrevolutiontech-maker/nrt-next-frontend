import { AboutClient } from "@/components/pages/AboutClient";
import type { Metadata } from "next";
import { getPersonSchema, SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Next Revolution Tech | Enterprise Software & AI Leadership",
  description:
    "Discover Next Revolution Tech's engineering mission, software architecture team led by Muhammad Ahsan Khan, and commitment to business process optimization.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Next Revolution Tech | Enterprise Software & AI Leadership",
    description:
      "Discover Next Revolution Tech's engineering mission, software architecture team led by Muhammad Ahsan Khan, and commitment to business process optimization.",
    url: `${SITE_URL}/about`,
    siteName: "Next Revolution Tech",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Next Revolution Tech Leadership Team" }],
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
