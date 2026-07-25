import { FAQItemData } from "@/data/faqs";

export const SITE_URL = "https://www.nextrevolutiontech.tech";

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Next Revolution Tech",
    alternateName: "NRT",
    legalName: "Next Revolution Tech",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    description:
      "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
    email: "ahsan.khan@nextrevolutiontech.tech",
    telephone: "+923442013217",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gulistan-e-Johar",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      postalCode: "75290",
      addressCountry: "PK",
    },
    areaServed: "Worldwide",
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: "Muhammad Ahsan Khan",
      jobTitle: "Founder & Lead Software Architect",
      sameAs: "https://www.linkedin.com/in/muhammad-ahsan-khan-founder-61a51032a",
    },
    sameAs: [
      "https://www.linkedin.com/company/nrt-team/",
      "https://www.facebook.com/share/1H3rqGTqLi/",
      "https://www.instagram.com/nextrevolutiontech",
      "https://www.tiktok.com/@next.revolution.t",
      "https://github.com/nextrevolutiontech-maker",
      "https://www.linkedin.com/in/muhammad-ahsan-khan-founder-61a51032a",
    ],
    knowsAbout: [
      "ERP Development",
      "AI Automation",
      "Business Process Automation",
      "Custom Software Development",
      "SaaS Development",
      "Shopify Development",
      "Mobile Application Development",
      "API Integration",
      "Cloud Solutions",
      "Enterprise Software",
    ],
  };
}

export function getProfessionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professionalservice`,
    name: "Next Revolution Tech",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    priceRange: "$1000-$3500",
    telephone: "+923442013217",
    email: "ahsan.khan@nextrevolutiontech.tech",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gulistan-e-Johar",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      postalCode: "75290",
      addressCountry: "PK",
    },
    areaServed: "Worldwide",
    serviceType: [
      "ERP Development",
      "AI Workflow Automation",
      "Custom Software Development",
      "SaaS Development",
      "Shopify Development",
      "Enterprise Integrations",
      "Cloud & DevOps",
      "Dedicated Technology Teams",
    ],
    availableLanguage: ["English", "Urdu"],
    paymentAccepted: ["Wire Transfer", "Credit Card", "Bank Transfer", "PayPal"],
    currenciesAccepted: "USD, EUR, GBP, PKR",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923442013217",
      contactType: "customer service",
      email: "ahsan.khan@nextrevolutiontech.tech",
      availableLanguage: ["English", "Urdu"],
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ERP Development",
          description:
            "Customized ERPs, POS systems, and portal software that sync operations in real-time, eliminating manual spreadsheets and inventory leaks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Workflow Automation",
          description:
            "Automate manual customer support, lead qualification, email follow-ups, and CRM pipelines using agentic LLMs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          description:
            "Tailored enterprise software, client portals, and bespoke web apps engineered to scale.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Development",
          description:
            "Database architecture to responsive dashboards - scalable software products designed to sell.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shopify Development",
          description:
            "Custom Shopify apps, themes, headless e-commerce architectures, and payment gateway syncs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Integrations",
          description:
            "Secure payment gateways, local FBR tax APIs, CRMs, and legacy database connections with reliable queue management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud & DevOps",
          description:
            "Infrastructure as code, automated CI/CD pipelines, security firewalls, and reliable edge scaling.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dedicated Technology Teams",
          description:
            "Scale development capacity with dedicated engineers, designers and technical specialists.",
        },
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Next Revolution Tech",
    description:
      "Next Revolution Tech helps businesses scale with ERP systems, AI automation, custom software development, SaaS platforms, Shopify solutions, and dedicated engineering teams.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function getFAQPageSchema(faqs: FAQItemData[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: "Muhammad Ahsan Khan",
    jobTitle: "Founder & Lead Software Architect",
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Next Revolution Tech",
    },
    sameAs: "https://www.linkedin.com/in/muhammad-ahsan-khan-founder-61a51032a",
  };
}
