import { PortfolioClient } from "@/components/pages/PortfolioClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio & Case Studies | Next Revolution Tech",
  description: "Explore our portfolio of successful enterprise ERP systems, AI automation solutions, and custom software projects.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "url": "https://www.nextrevolutiontech.tech/portfolio",
            "name": "NRT Case Studies and Projects",
            "description": "Explore our portfolio of successful enterprise ERP systems, AI automation solutions, and custom software projects."
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "url": "https://www.nextrevolutiontech.tech/case-studies/enterprise-erp-implementation"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "url": "https://www.nextrevolutiontech.tech/case-studies/ai-agent-automation"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Next Revolution Tech",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "54"
            }
          }
        ]) }} 
      />
      <PortfolioClient />
    </>
  );
}
