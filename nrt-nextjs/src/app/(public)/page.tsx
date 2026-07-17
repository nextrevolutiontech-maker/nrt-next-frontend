import { HomeClient } from "@/components/pages/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software & AI Automation",
  description: "Next Revolution Tech is a global technology partner delivering custom enterprise software, AI automation, and eCommerce ecosystems.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech",
  },
};

export default function HomePage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Next Revolution Tech",
            "url": "https://www.nextrevolutiontech.tech",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.nextrevolutiontech.tech/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Next Revolution Tech",
            "url": "https://www.nextrevolutiontech.tech",
            "logo": "https://www.nextrevolutiontech.tech/logo.png",
            "description": "Enterprise Software Development and AI Automation Agency",
            "sameAs": [
              "https://www.linkedin.com/company/nextrevolutiontech",
              "https://www.instagram.com/nextrevolutiontech",
              "https://github.com/nextrevolutiontech-maker"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Next Revolution Tech",
            "image": "https://www.nextrevolutiontech.tech/og-image.png",
            "url": "https://www.nextrevolutiontech.tech",
            "telephone": "+92-344-201-3217",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "PK"
            },
            "priceRange": "$$$"
          }
        ]) }} 
      />
      <HomeClient />
    </>
  );
}
