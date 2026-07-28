import { ContactClient } from "@/components/pages/ContactClient";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact Technical Architects | Schedule Audit | Next Revolution Tech",
  description:
    "Schedule a 30-minute technical audit directly with Founder Muhammad Ahsan Khan and lead software engineers at Next Revolution Tech.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Technical Architects | Schedule Audit | Next Revolution Tech",
    description:
      "Schedule a 30-minute technical audit directly with Founder Muhammad Ahsan Khan and lead software engineers at Next Revolution Tech.",
    url: `${SITE_URL}/contact`,
    siteName: "Next Revolution Tech",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Next Revolution Tech Technical Architects" }],
  },
};

export default function ContactPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact/#webpage`,
      url: `${SITE_URL}/contact`,
      name: "Contact Next Revolution Tech",
      description:
        "Get in touch with Next Revolution Tech to discuss your enterprise software, AI automation, or custom business solutions.",
      mainEntity: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
