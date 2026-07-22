import { ServiceDetailClient } from "@/components/pages/ServiceDetailClient";
import { Metadata } from "next";

export const revalidate = 86400; // 24 hours

const KNOWN_SERVICES = [
  "custom-software-development",
  "erp-development",
  "saas-development",
  "ai-automation",
  "shopify-development",
  "mobile-app-development",
  "cloud-devops",
  "pos-system",
  "crm-development",
  "inventory-management"
];

export async function generateStaticParams() {
  return KNOWN_SERVICES.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${formattedTitle} | NRT Services`,
    description: `Enterprise-grade ${formattedTitle} services by Next Revolution Tech.`,
    alternates: {
      canonical: `https://www.nextrevolutiontech.tech/services/${slug}`,
    },
    openGraph: {
      title: `${formattedTitle} Services`,
      description: `Enterprise-grade ${formattedTitle} services by Next Revolution Tech.`,
      url: `https://www.nextrevolutiontech.tech/services/${slug}`,
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formattedTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": formattedTitle,
    "provider": {
      "@type": "Organization",
      "name": "Next Revolution Tech"
    },
    "description": `Enterprise-grade ${formattedTitle} services.`,
    "url": `https://www.nextrevolutiontech.tech/services/${slug}`
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nextrevolutiontech.tech" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.nextrevolutiontech.tech/services" },
      { "@type": "ListItem", "position": 3, "name": formattedTitle, "item": `https://www.nextrevolutiontech.tech/services/${slug}` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* We pass the slug to the Client component which will fetch the data on mount or we could fetch it server-side. Since the component handles fetching, we just render it. */}
      <ServiceDetailClient slug={slug} />
    </>
  );
}
