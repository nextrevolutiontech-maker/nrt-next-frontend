import { CaseStudiesClient } from "@/components/pages/CaseStudiesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Next Revolution Tech",
  description: "Detailed case studies of business transformations through our AI and ERP solutions.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "url": "https://www.nextrevolutiontech.tech/case-studies",
            "name": "NRT Detailed Case Studies",
            "description": "Detailed case studies of business transformations through our AI and ERP solutions."
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "url": "https://www.nextrevolutiontech.tech/case-studies/ai-agent-automation"
              }
            ]
          }
        ]) }} 
      />
      <CaseStudiesClient />
    </>
  );
}
