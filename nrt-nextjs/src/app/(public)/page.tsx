import { HomeClient } from "@/components/pages/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP Development Company | AI Automation & Custom Software | Next Revolution Tech",
  description: "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech",
  },
  openGraph: {
    title: "ERP Development Company | AI Automation & Custom Software | Next Revolution Tech",
    description: "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
    url: "https://www.nextrevolutiontech.tech",
    siteName: "Next Revolution Tech",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Next Revolution Tech - ERP & AI Automation Agency" }],
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
            "@type": "WebPage",
            "@id": "https://www.nextrevolutiontech.tech/#webpage",
            "url": "https://www.nextrevolutiontech.tech",
            "name": "ERP Development Company | AI Automation & Custom Software",
            "description": "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.nextrevolutiontech.tech/#website"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom ERP Development & Business Process Automation",
            "provider": {
              "@type": "Organization",
              "name": "Next Revolution Tech",
              "url": "https://www.nextrevolutiontech.tech"
            },
            "serviceType": "ERP Systems, AI Automation & Custom Software Development",
            "areaServed": "Global",
            "description": "Bespoke ERP software development, Agentic AI workflow automation, SaaS platforms, and enterprise system integration."
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Next Revolution Tech offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Next Revolution Tech specializes in custom ERP development, AI workflow automation, enterprise software engineering, SaaS platform development, Shopify eCommerce ecosystems, and dedicated engineering teams."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can Next Revolution Tech deploy a custom ERP or AI system?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We deliver initial MVPs and core ERP modules within 2 to 4 weeks using structured agile sprints, continuous deployment, and pre-built operational modules."
                }
              },
              {
                "@type": "Question",
                "name": "Does Next Revolution Tech sign non-disclosure agreements (NDAs)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we sign strict NDAs prior to any technical discovery session. All intellectual property, source code, and enterprise data belong 100% to your company."
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.nextrevolutiontech.tech"
              }
            ]
          }
        ]) }} 
      />
      <HomeClient />
    </>
  );
}
