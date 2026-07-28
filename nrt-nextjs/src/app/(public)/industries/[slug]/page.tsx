import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

interface IndustryData {
  title: string;
  subtitle: string;
  description: string;
  keyChallenges: string[];
  nrtSolutions: string[];
  technologies: string[];
  caseStudyLink?: string;
  caseStudyTitle?: string;
  faqs: { question: string; answer: string }[];
}

const industries: Record<string, IndustryData> = {
  healthcare: {
    title: "Healthcare Software & Hospital ERP Systems",
    subtitle: "HIPAA-Compliant Patient Management, EMR, and Medical Inventory Automation",
    description: "Next Revolution Tech builds enterprise healthcare software, EMR systems, patient portals, and hospital ERPs that automate clinical workflows, reduce administrative overhead, and ensure 100% data security.",
    keyChallenges: [
      "Fragmented patient records across legacy systems",
      "Manual appointment scheduling and billing delays",
      "Strict HIPAA and data compliance regulations",
      "Medicine inventory leaks and expiration tracking"
    ],
    nrtSolutions: [
      "Centralized EMR & EHR cloud database",
      "Automated WhatsApp & Portal appointment booking",
      "Real-time pharmacy & inventory tracking module",
      "End-to-end telemetry & HL7/FHIR API integrations"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "FHIR API", "Docker"],
    caseStudyLink: "/case-studies/pulse-healthcare-erp",
    caseStudyTitle: "Pulse Healthcare ERP Case Study",
    faqs: [
      {
        question: "Is Next Revolution Tech's healthcare software HIPAA compliant?",
        answer: "Yes, all our healthcare software solutions adhere strictly to HIPAA guidelines, utilizing end-to-end AES-256 encryption, role-based access control (RBAC), and audited database logs."
      },
      {
        question: "Can you integrate our hospital ERP with existing lab equipment or diagnostic tools?",
        answer: "Absolutely. We build custom API connectors for HL7/FHIR protocols to sync diagnostic lab results, imaging software, and billing engines directly into the central EMR dashboard."
      }
    ]
  },
  "hospital-erp": {
    title: "Hospital & Healthcare ERP Software",
    subtitle: "HIPAA-Compliant Patient Management, EMR, and Medical Inventory Automation",
    description: "Next Revolution Tech builds enterprise healthcare software, EMR systems, patient portals, and hospital ERPs that automate clinical workflows, reduce administrative overhead, and ensure 100% data security.",
    keyChallenges: [
      "Fragmented patient records across legacy systems",
      "Manual appointment scheduling and billing delays",
      "Strict HIPAA and data compliance regulations",
      "Medicine inventory leaks and expiration tracking"
    ],
    nrtSolutions: [
      "Centralized EMR & EHR cloud database",
      "Automated WhatsApp & Portal appointment booking",
      "Real-time pharmacy & inventory tracking module",
      "End-to-end telemetry & HL7/FHIR API integrations"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "FHIR API", "Docker"],
    caseStudyLink: "/case-studies/pulse-healthcare-erp",
    caseStudyTitle: "Pulse Healthcare ERP Case Study",
    faqs: [
      {
        question: "Is Next Revolution Tech's healthcare software HIPAA compliant?",
        answer: "Yes, all our healthcare software solutions adhere strictly to HIPAA guidelines, utilizing end-to-end AES-256 encryption, role-based access control (RBAC), and audited database logs."
      }
    ]
  },
  manufacturing: {
    title: "Manufacturing ERP & Supply Chain Automation",
    subtitle: "Real-Time Shop Floor Tracking, MRP II, and Inventory Optimization",
    description: "Empower your factory floor with bespoke Manufacturing ERP software. Next Revolution Tech designs custom MRP systems, raw material tracking, bill of materials (BOM), and automated production scheduling.",
    keyChallenges: [
      "Inaccurate raw material inventory and stockouts",
      "Manual production line reporting and human error",
      "Lack of real-time machine utilization metrics",
      "Complex supply chain visibility across multi-plant facilities"
    ],
    nrtSolutions: [
      "Automated Bill of Materials (BOM) calculation engine",
      "Barcode & RFID inventory intake scanners",
      "Real-time machine telemetry & OEE dashboards",
      "Supplier portal with automated purchase order generation"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "MQTT/IoT", "Docker"],
    caseStudyLink: "/case-studies/textile-mill-pos",
    caseStudyTitle: "Textile Mill ERP & POS Case Study",
    faqs: [
      {
        question: "How does Next Revolution Tech's Manufacturing ERP reduce inventory wastage?",
        answer: "Our MRP engine tracks raw material consumption dynamically per batch, triggering automated reorder points and providing predictive waste telemetry."
      }
    ]
  },
  "manufacturing-erp": {
    title: "Manufacturing ERP & MRP II Automation",
    subtitle: "Real-Time Shop Floor Tracking, MRP II, and Inventory Optimization",
    description: "Empower your factory floor with bespoke Manufacturing ERP software. Next Revolution Tech designs custom MRP systems, raw material tracking, bill of materials (BOM), and automated production scheduling.",
    keyChallenges: [
      "Inaccurate raw material inventory and stockouts",
      "Manual production line reporting and human error",
      "Lack of real-time machine utilization metrics"
    ],
    nrtSolutions: [
      "Automated Bill of Materials (BOM) calculation engine",
      "Barcode & RFID inventory intake scanners",
      "Real-time machine telemetry & OEE dashboards"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "MQTT/IoT", "Docker"],
    faqs: [
      {
        question: "How does Next Revolution Tech's Manufacturing ERP reduce inventory wastage?",
        answer: "Our MRP engine tracks raw material consumption dynamically per batch, triggering automated reorder points and providing predictive waste telemetry."
      }
    ]
  },
  retail: {
    title: "Retail POS & Multi-Store E-Commerce Ecosystems",
    subtitle: "Unified Commerce, Real-Time POS Sync, and FBR Tax Integration",
    description: "Scale your retail brand across brick-and-mortar stores and online storefronts. We build high-performance POS systems, Shopify custom integrations, and centralized inventory management.",
    keyChallenges: [
      "Stock discrepancy between online stores and physical outlets",
      "Slow checkout speeds during peak retail traffic",
      "Manual sales tax reporting and compliance delays",
      "Disjointed customer loyalty and reward programs"
    ],
    nrtSolutions: [
      "Sub-second offline-first POS terminal software",
      "Bi-directional Shopify & WooCommerce stock sync",
      "Automated real-time tax API integration (FBR / Local Tax)",
      "Unified customer profile & loyalty points engine"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Shopify API", "PostgreSQL"],
    faqs: [
      {
        question: "Can the POS terminal work offline during internet outages?",
        answer: "Yes, our retail POS terminal features offline indexed storage that queues all transactions locally and syncs automatically with the central server once internet connection is restored."
      }
    ]
  },
  "retail-erp": {
    title: "Retail ERP & Multi-Store POS Systems",
    subtitle: "Unified Commerce, Real-Time POS Sync, and FBR Tax Integration",
    description: "Scale your retail brand across brick-and-mortar stores and online storefronts. We build high-performance POS systems, Shopify custom integrations, and centralized inventory management.",
    keyChallenges: [
      "Stock discrepancy between online stores and physical outlets",
      "Slow checkout speeds during peak retail traffic"
    ],
    nrtSolutions: [
      "Sub-second offline-first POS terminal software",
      "Bi-directional Shopify & WooCommerce stock sync"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Shopify API", "PostgreSQL"],
    faqs: [
      {
        question: "Can the POS terminal work offline during internet outages?",
        answer: "Yes, our retail POS terminal features offline indexed storage that queues all transactions locally."
      }
    ]
  },
  "e-commerce": {
    title: "E-Commerce Automation & Storefront Ecosystems",
    subtitle: "Unified Online Stores, Automated Order Fulfillment, and Multi-Carrier Logistics",
    description: "Build high-converting custom e-commerce applications, Shopify custom storefronts, payment gateways, and automated order fulfillment pipelines with Next Revolution Tech.",
    keyChallenges: [
      "Cart abandonment and slow checkout load times",
      "Manual inventory syncing across multiple marketplaces",
      "Complex international payment gateway integrations"
    ],
    nrtSolutions: [
      "Sub-second Next.js headless e-commerce frontend",
      "Automated multi-carrier shipping rate calculator & tracking",
      "Stripe, PayPal, and localized payment gateway integration"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Shopify API", "Stripe API", "PostgreSQL"],
    faqs: [
      {
        question: "Do you support headless e-commerce architectures?",
        answer: "Yes, we specialize in Next.js headless storefronts connected to Shopify Plus, MedusaJS, or custom Node.js backends for blazing fast page loads."
      }
    ]
  },
  logistics: {
    title: "Logistics & Warehouse Management Systems (WMS)",
    subtitle: "Fleet Telemetry, Dispatch Automation, and Real-Time Asset Tracking",
    description: "Optimize fleet routing, warehouse space utilization, and last-mile delivery. Next Revolution Tech engineers custom WMS platforms with GPS telemetry and automated dispatching.",
    keyChallenges: [
      "Sub-optimal warehouse bin placement leading to slow picking",
      "Lack of real-time vehicle GPS tracking and ETA predictions",
      "Manual proof-of-delivery paperwork"
    ],
    nrtSolutions: [
      "Smart 3D warehouse bin allocation algorithm",
      "Real-time driver mobile app with digital sign-off",
      "Automated route optimization using mapping APIs"
    ],
    technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Google Maps API"],
    faqs: [
      {
        question: "Does your WMS integrate with third-party courier APIs?",
        answer: "Yes, we integrate seamlessly with global and regional shipping providers via custom REST/GraphQL API webhooks."
      }
    ]
  },
  "logistics-erp": {
    title: "Logistics & Freight ERP Systems",
    subtitle: "Fleet Telemetry, Dispatch Automation, and Real-Time Asset Tracking",
    description: "Optimize fleet routing, warehouse space utilization, and last-mile delivery. Next Revolution Tech engineers custom WMS platforms with GPS telemetry and automated dispatching.",
    keyChallenges: [
      "Sub-optimal warehouse bin placement leading to slow picking",
      "Lack of real-time vehicle GPS tracking"
    ],
    nrtSolutions: [
      "Smart 3D warehouse bin allocation algorithm",
      "Real-time driver mobile app with digital sign-off"
    ],
    technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL"],
    faqs: []
  },
  education: {
    title: "School ERP & Learning Management Systems (LMS)",
    subtitle: "Student Information Systems, Automated Fee Portals, and Gradebooks",
    description: "Transform educational institution management with custom School ERP software, online fee collection, parent-teacher communication portals, and automated grading systems.",
    keyChallenges: [
      "Manual fee collection and manual reconciliation errors",
      "Fragmented parent communication",
      "Inefficient exam scheduling and grade calculation"
    ],
    nrtSolutions: [
      "Integrated online payment gateway fee portal",
      "Automated SMS/WhatsApp attendance alerts",
      "Custom LMS with digital assignment submission"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe API"],
    faqs: [
      {
        question: "Can parents pay school fees online securely?",
        answer: "Yes, we integrate localized and international payment gateways allowing instant fee payments via credit card, mobile wallet, or bank transfer."
      }
    ]
  },
  "school-erp": {
    title: "School ERP & Educational Management System",
    subtitle: "Student Information Systems, Automated Fee Portals, and Gradebooks",
    description: "Transform educational institution management with custom School ERP software, online fee collection, parent-teacher communication portals, and automated grading systems.",
    keyChallenges: [
      "Manual fee collection and manual reconciliation errors",
      "Fragmented parent communication",
      "Inefficient exam scheduling and grade calculation"
    ],
    nrtSolutions: [
      "Integrated online payment gateway fee portal",
      "Automated SMS/WhatsApp attendance alerts",
      "Custom LMS with digital assignment submission"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe API"],
    faqs: [
      {
        question: "Can parents pay school fees online securely?",
        answer: "Yes, we integrate localized and international payment gateways allowing instant fee payments via credit card, mobile wallet, or bank transfer."
      }
    ]
  },
  "real-estate": {
    title: "Real Estate Management & CRM Software",
    subtitle: "Property Portals, Lead Automation, and Lease Management Systems",
    description: "Streamline property listings, automated buyer lead capture, lease contract tracking, and tenant portal interactions with custom real estate software built by Next Revolution Tech.",
    keyChallenges: [
      "Lost buyer leads due to delayed agent response times",
      "Manual lease expiry tracking and rent collection",
      "Inconsistent property listing updates across platforms"
    ],
    nrtSolutions: [
      "AI Agent lead qualification responding in <30 seconds",
      "Automated tenant rent invoice & reminder scheduler",
      "Centralized multi-portal property listing engine"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Agentic AI"],
    faqs: [
      {
        question: "How does the AI Agent qualify real estate leads?",
        answer: "Our Agentic AI engages incoming leads on WhatsApp or website chat 24/7, asking budget, location preference, and timeline before assigning qualified leads directly to senior brokers."
      }
    ]
  },
  "construction-erp": {
    title: "Construction & Engineering ERP Software",
    subtitle: "Project Costing, Subcontractor Management, and Equipment Tracking",
    description: "Manage construction site budgets, raw material procurement, labor attendance, and subcontractor invoices with custom Construction ERP solutions.",
    keyChallenges: ["Budget overruns on raw materials", "Labor attendance & payroll tracking"],
    nrtSolutions: ["Real-time job costing calculator", "Biometric field labor attendance sync"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    faqs: []
  },
  "distribution-erp": {
    title: "Distribution & Wholesale ERP Systems",
    subtitle: "Multi-Location Inventory, Sales Rep Portals, and Route Accounting",
    description: "Centralize wholesale distribution operations, route delivery accounting, and inventory replenishment across regional warehouses.",
    keyChallenges: ["Stock disparity between warehouses", "Delayed sales order dispatch"],
    nrtSolutions: ["Automated cross-warehouse stock transfer", "Mobile sales rep order booking app"],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    faqs: []
  },
  "pharma-erp": {
    title: "Pharmaceutical ERP & Quality Compliance Software",
    subtitle: "Batch Traceability, Expiry Date Management, and Regulatory Audits",
    description: "Ensure 100% compliance with drug regulatory standards using automated batch tracking, formula management, and pharmacy distribution software.",
    keyChallenges: ["Manual batch expiry tracking", "Strict regulatory compliance reporting"],
    nrtSolutions: ["Automated batch recall & expiration alerts", "Digital quality control checkpoint log"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    faqs: []
  },
  "rice-mill-erp": {
    title: "Rice Mill & Grain Processing ERP",
    subtitle: "Paddy Intake Management, By-Product Tracking, and Weighbridge Sync",
    description: "Automate paddy intake weighbridges, moisture testing, processing yields, and bulk grain dispatch for rice mills and agro processing plants.",
    keyChallenges: ["Manual weighbridge entry errors", "Yield calculation discrepancies"],
    nrtSolutions: ["Direct weighbridge hardware API integration", "Automatic moisture & yield adjustment engine"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    faqs: []
  },
  "textile-erp": {
    title: "Textile Mill & Fabric Manufacturing ERP",
    subtitle: "Yarn Intake, Weaving/Dyeing Batch Management, and Garment POS",
    description: "Track fabric rolls, yarn consumption, dyeing vat batches, and finished goods inventory across textile mills and apparel manufacturing units.",
    keyChallenges: ["Fabric roll wastage & shade variation", "Complex multi-stage manufacturing tracking"],
    nrtSolutions: ["Barcode roll tracking from loom to warehouse", "Automated dye batch formula management"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    faqs: []
  }
};

export function generateStaticParams() {
  return Object.keys(industries).map(slug => ({ slug }));
}

const ALIAS_CANONICAL: Record<string, string> = {
  "hospital-erp": "healthcare",
  "manufacturing-erp": "manufacturing",
  "retail-erp": "retail",
  "logistics-erp": "logistics",
  "school-erp": "education",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) return { title: "Industry Solution Not Found | Next Revolution Tech" };

  const canonicalSlug = ALIAS_CANONICAL[slug] || slug;
  const canonicalUrl = `https://www.nextrevolutiontech.tech/industries/${canonicalSlug}`;

  return {
    title: `${industry.title} | Next Revolution Tech`,
    description: industry.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${industry.title} | Next Revolution Tech`,
      description: industry.description,
      url: `https://www.nextrevolutiontech.tech/industries/${slug}`,
      siteName: "Next Revolution Tech",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: industry.title }],
    }
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) notFound();

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": industry.title,
                "provider": {
                  "@id": "https://www.nextrevolutiontech.tech/#organization"
                },
                "description": industry.description
              },
              {
                "@type": "FAQPage",
                "mainEntity": industry.faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nextrevolutiontech.tech" },
                  { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.nextrevolutiontech.tech/services" },
                  { "@type": "ListItem", "position": 3, "name": industry.title, "item": `https://www.nextrevolutiontech.tech/industries/${slug}` }
                ]
              }
            ]
          })
        }}
      />

      <section className="pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 font-black text-slate-400 hover:text-orange-600 mb-4 transition-colors uppercase tracking-widest text-[10px]">
            <ArrowLeft className="w-4 h-4" /> Back to Services & Solutions
          </Link>
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-2">Industry Solutions</div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-3 text-slate-900">
            {industry.title.includes("&") ? (
              <>
                {industry.title.split("&")[0]} & <span className="text-[#FF5500]">{industry.title.split("&")[1]}</span>
              </>
            ) : (
              industry.title
            )}
          </h1>
          <p className="text-lg sm:text-xl font-bold text-[#FF5500] mb-4">{industry.subtitle}</p>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">{industry.description}</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#FF5500] hover:bg-orange-600 text-white px-8 py-3.5 rounded-2xl font-black text-base shadow-xl shadow-orange-600/20 hover:scale-105 transition-all">
            <span>Schedule Industry Consultation</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-8 text-slate-900 tracking-tight">Key Operational Bottlenecks We Solve</h2>
              <div className="space-y-4">
                {industry.keyChallenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 font-black flex items-center justify-center shrink-0">!</div>
                    <p className="font-bold text-slate-800">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black mb-8 text-slate-900 tracking-tight">Next Revolution Tech Solutions</h2>
              <div className="space-y-4">
                {industry.nrtSolutions.map((sol, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
                    <p className="font-bold text-slate-800">{sol}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-black mb-12 text-slate-900 tracking-tight">Technology Stack Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industry.technologies.map((tech, i) => (
              <span key={i} className="px-6 py-3 bg-slate-100 border border-slate-300 rounded-xl font-bold text-slate-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {industry.faqs.length > 0 && (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-3xl font-black mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {industry.faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
