import { ContactClient } from "@/components/pages/ContactClient";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact Us | Next Revolution Tech",
  description:
    "Get in touch with Next Revolution Tech to discuss your enterprise software, AI automation, or custom business solutions.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
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
