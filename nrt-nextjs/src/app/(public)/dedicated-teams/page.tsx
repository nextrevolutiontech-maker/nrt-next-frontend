import { Metadata } from "next";
import DedicatedTeamsClient from "@/components/pages/DedicatedTeamsClient";

export const metadata: Metadata = {
  title: "Hire Dedicated Engineering Teams | Next Revolution Tech",
  description:
    "Extend your engineering capabilities with pre-vetted React, Node.js, and AI engineers — without the HR overhead. Embed directly into your team and ship from day one.",
  alternates: {
    canonical: "/dedicated-teams",
  },
  openGraph: {
    title: "Hire Dedicated Engineering Teams | NRT",
    description:
      "Skip the slow hiring funnel. Get pre-vetted React, Node, and AI engineers embedded in your team within 7 days.",
    url: "/dedicated-teams",
    type: "website",
  },
};

export default function DedicatedTeamsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Dedicated Engineering Teams",
            description:
              "Staff augmentation service providing pre-vetted React, Node.js, and AI engineers for enterprise software projects.",
            provider: {
              "@type": "Organization",
              name: "Next Revolution Tech",
              url: "https://www.nextrevolutiontech.com",
            },
            serviceType: "Staff Augmentation",
            areaServed: "Worldwide",
            url: "https://www.nextrevolutiontech.com/dedicated-teams",
          }),
        }}
      />
      <DedicatedTeamsClient />
    </>
  );
}
