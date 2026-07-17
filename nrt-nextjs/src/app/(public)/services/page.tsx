import { ServicesClient } from "@/components/pages/ServicesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Solutions | Next Revolution Tech",
  description: "Explore our comprehensive suite of enterprise services including custom software development, AI integration, cloud solutions, and eCommerce.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Next Revolution Tech Services",
            "image": "https://www.nextrevolutiontech.tech/og-image.png",
            "url": "https://www.nextrevolutiontech.tech/services",
            "telephone": "+92-344-201-3217",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "PK"
            },
            "description": "Comprehensive suite of enterprise services including custom software development, AI integration, cloud solutions, and eCommerce.",
            "provider": {
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
                "url": "https://www.nextrevolutiontech.tech/services/custom-software-development",
                "name": "Custom Software Development"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "url": "https://www.nextrevolutiontech.tech/services/ai-automation",
                "name": "AI Automation Services"
              }
            ]
          }
        ]) }} 
      />
      <ServicesClient />
    </>
  );
}
