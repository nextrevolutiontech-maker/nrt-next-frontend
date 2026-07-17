import { AboutClient } from "@/components/pages/AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Next Revolution Tech",
  description: "Learn about Next Revolution Tech's mission to drive digital transformation through cutting-edge enterprise software and AI automation.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Next Revolution Tech",
            "url": "https://www.nextrevolutiontech.tech/about",
            "description": "Learn about Next Revolution Tech's mission to drive digital transformation.",
            "publisher": {
              "@type": "Organization",
              "name": "Next Revolution Tech"
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "Next Revolution Tech",
              "founder": {
                "@type": "Person",
                "name": "Sajid Riaz",
                "jobTitle": "Founder & CEO",
                "url": "https://www.linkedin.com/in/sajid-riaz-nrt"
              }
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sajid Riaz",
            "jobTitle": "Founder & CEO",
            "worksFor": {
              "@type": "Organization",
              "name": "Next Revolution Tech"
            },
            "url": "https://www.linkedin.com/in/sajid-riaz-nrt",
            "sameAs": [
              "https://github.com/nextrevolutiontech-maker"
            ]
          }
        ]) }} 
      />
      <AboutClient />
    </>
  );
}
