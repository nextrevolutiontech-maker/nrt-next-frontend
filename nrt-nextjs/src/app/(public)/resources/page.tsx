import { Metadata } from "next";
import ResourcesClient from "@/components/pages/ResourcesClient";

export const metadata: Metadata = {
  title: "Knowledge Hub | Next Revolution Tech",
  description: "Practical insights on ERP systems, AI automation, workflow optimization and business growth.",
  openGraph: {
    title: "Knowledge Hub | Next Revolution Tech",
    description: "Practical insights on ERP systems, AI automation, workflow optimization and business growth.",
    url: "/resources",
    siteName: "Next Revolution Tech",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/resources",
  }
};

export default function ResourcesPage() {
  return (
    <>
      {/* JSON-LD Schema for the Resources Hub / WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Knowledge Hub | Next Revolution Tech",
              "description": "Practical insights on ERP systems, AI automation, workflow optimization and business growth.",
              "url": "https://www.nextrevolutiontech.tech/resources",
              "publisher": {
                "@type": "Organization",
                "name": "Next Revolution Tech"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "url": "https://www.nextrevolutiontech.tech/blog/digital-wallet-architecture"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "url": "https://www.nextrevolutiontech.tech/blog/what-is-manufacturing-erp"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://www.nextrevolutiontech.tech/resources",
              "speakable": {
                "@type": "SpeakableSpecification",
                "xpath": [
                  "/html/head/title",
                  "/html/head/meta[@name='description']/@content"
                ]
              }
            }
          ])
        }}
      />
      <ResourcesClient />
    </>
  );
}
