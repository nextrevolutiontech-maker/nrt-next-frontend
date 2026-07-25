import { Metadata } from "next";
import DedicatedTeamsClient from "@/components/pages/DedicatedTeamsClient";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Hire Dedicated Engineering Teams | Next Revolution Tech",
  description:
    "Extend your engineering capabilities with pre-vetted React, Node.js, and AI engineers — without the HR overhead. Embed directly into your team and ship from day one.",
  alternates: {
    canonical: `${SITE_URL}/dedicated-teams`,
  },
  openGraph: {
    title: "Hire Dedicated Engineering Teams | NRT",
    description:
      "Skip the slow hiring funnel. Get pre-vetted React, Node, and AI engineers embedded in your team within 7 days.",
    url: `${SITE_URL}/dedicated-teams`,
    type: "website",
  },
};

export default function DedicatedTeamsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dedicated Engineering Teams",
    description:
      "Staff augmentation service providing pre-vetted React, Node.js, and AI engineers for enterprise software projects.",
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    serviceType: "Staff Augmentation",
    areaServed: "Worldwide",
    url: `${SITE_URL}/dedicated-teams`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DedicatedTeamsClient />
    </>
  );
}
