import { ContactClient } from "@/components/pages/ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Next Revolution Tech",
  description: "Get in touch with Next Revolution Tech to discuss your enterprise software, AI automation, or custom business solutions.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://www.nextrevolutiontech.tech/contact",
            "name": "Contact Next Revolution Tech",
            "description": "Get in touch with Next Revolution Tech to discuss your enterprise software, AI automation, or custom business solutions.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Next Revolution Tech",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-344-201-3217",
                "contactType": "customer service",
                "email": "nextrevolutiontech@gmail.com",
                "areaServed": "Global",
                "availableLanguage": ["English", "Urdu", "Hindi"]
              }
            }
          }
        ]) }} 
      />
      <ContactClient />
    </>
  );
}
