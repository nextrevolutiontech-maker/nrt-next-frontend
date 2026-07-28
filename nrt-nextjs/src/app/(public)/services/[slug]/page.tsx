import { ServiceDetailClient } from "@/components/pages/ServiceDetailClient";
import { Metadata } from "next";
import { getServiceSchema, getBreadcrumbListSchema, SITE_URL } from "@/lib/jsonld";

export const revalidate = 86400; // 24 hours

const SERVICE_METADATA: Record<string, { title: string; description: string; serviceType: string }> = {
  "custom-software-development": {
    title: "Enterprise Custom Software Development Agency | Next Revolution Tech",
    description: "Tailored software solutions engineered for your exact business model. 100% code ownership, zero vendor lock-in, and scalable cloud architectures.",
    serviceType: "Custom Software Engineering",
  },
  "erp-development": {
    title: "Custom ERP Software Development Company | Next Revolution Tech",
    description: "Scale enterprise operations with custom ERP software. Centralize multi-branch inventory, real-time financial reporting, FBR tax compliance, and automated workflows.",
    serviceType: "Enterprise Resource Planning",
  },
  "saas-development": {
    title: "SaaS Platform Development Company | Multi-Tenant Architecture",
    description: "Build and scale subscription SaaS products with secure multi-tenant architecture, automated billing, and high-availability cloud infrastructure.",
    serviceType: "SaaS Application Engineering",
  },
  "ai-automation": {
    title: "Agentic AI & Workflow Automation Solutions | Next Revolution Tech",
    description: "Automate manual support, lead qualification, and complex database queries using agentic LLM workflows and machine learning algorithms.",
    serviceType: "Artificial Intelligence & Automation",
  },
  "shopify-development": {
    title: "Custom Shopify & Headless eCommerce Agency | Next Revolution Tech",
    description: "High-converting custom Shopify themes, private app extensions, and headless Next.js storefronts built for sub-second load speeds.",
    serviceType: "eCommerce Store Development",
  },
  "mobile-app-development": {
    title: "Cross-Platform Mobile App Development (iOS & Android) | NRT",
    description: "Native-speed mobile app development using React Native and Flutter. Offline-first local database sync, push telemetry, and app store deployment.",
    serviceType: "Mobile Application Engineering",
  },
  "cloud-devops": {
    title: "Cloud Engineering & DevOps Infrastructure Services | NRT",
    description: "Ensure 99.99% uptime with automated Kubernetes/Docker deployments, CI/CD pipelines, AWS cloud scaling, and 24/7 infrastructure monitoring.",
    serviceType: "DevOps & Cloud Infrastructure",
  },
  "pos-system": {
    title: "Offline-First Point of Sale (POS) Systems & FBR Integration | NRT",
    description: "Fast retail POS software with offline terminal synchronization, barcode scanning, multi-branch management, and instant tax compliance.",
    serviceType: "Point of Sale Software",
  },
  "crm-development": {
    title: "Custom CRM Software & WhatsApp Lead Automation | Next Revolution Tech",
    description: "Track pipeline stages, automate WhatsApp and email follow-ups, and convert leads faster with bespoke CRM software tailored to your sales process.",
    serviceType: "CRM Systems Development",
  },
  "inventory-management": {
    title: "Warehouse & Inventory Management Software Development | NRT",
    description: "Eliminate stockouts with real-time barcode inventory intake, multi-warehouse stock transfer, batch expiry tracking, and automated reorder alerts.",
    serviceType: "Inventory & Logistics Software",
  },
};

const KNOWN_SERVICES = Object.keys(SERVICE_METADATA);

export async function generateStaticParams() {
  return KNOWN_SERVICES.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = SERVICE_METADATA[slug] || {
    title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | NRT Services`,
    description: `Enterprise-grade software and tech services by Next Revolution Tech.`,
    serviceType: "Technology Services",
  };

  const url = `${SITE_URL}/services/${slug}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: url,
      siteName: "Next Revolution Tech",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = SERVICE_METADATA[slug] || {
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: "Enterprise tech solution.",
    serviceType: "Software Development",
  };

  const formattedTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const serviceJsonLd = getServiceSchema({
    title: meta.title,
    description: meta.description,
    slug: slug,
    serviceType: meta.serviceType,
  });

  const breadcrumbJsonLd = getBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Service Details", url: `/services/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceDetailClient slug={slug} />
    </>
  );
}

