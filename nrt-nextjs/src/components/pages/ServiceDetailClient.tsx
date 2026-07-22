"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { API_BASE_URL } from "@/config";
import { motion } from "motion/react";

const enhancedContent: Record<string, any> = {
    "custom-software-development": {
        title: "Custom Software Development",
        subtitle: "Tailored Solutions for Complex Challenges",
        tldr: "Custom software development builds bespoke applications designed specifically for your unique operational needs, ensuring perfect integration and absolute ownership.",
        targetAudience: "Enterprise companies outgrowing off-the-shelf software and needing proprietary workflows.",
        pricingFactors: "Complexity, Integrations, UI/UX demands, and Platform support.",
        longDescription: "Off-the-shelf software often fails to meet unique business needs. Our custom software development service provides you with a perfectly fitted solution.",
        benefits: ["Full ownership of code", "Seamless integration", "Scalable architecture", "Automated workflows"],
        process: ["Discovery", "Development", "Testing", "Support"]
    },
    "erp-development": {
        title: "Enterprise ERP Software Development",
        subtitle: "Centralized Business Operations & Inventory Intelligence",
        tldr: "Bespoke ERP development replaces fragmented spreadsheets with unified real-time inventory, financial accounting, procurement, and HR analytics.",
        targetAudience: "Growing manufacturing, retail, healthcare, and logistics enterprises.",
        pricingFactors: "Module count, Database complexity, Legacy migration, and Custom integrations.",
        longDescription: "Eliminate manual data entry errors and inventory stockouts with a customized ERP system engineered specifically for your business operations.",
        benefits: ["Zero per-user licensing fees", "Real-time multi-location sync", "Automated financial reconciliation", "Role-based security"],
        process: ["Operational Audit", "System Architecture", "Module Sprints", "Deployment"]
    },
    "saas-development": {
        title: "SaaS Platform Development",
        subtitle: "From Concept to Market Leader",
        tldr: "End-to-end SaaS application development providing secure, scalable, multi-tenant architectures ready for subscription monetization.",
        targetAudience: "Startups and enterprises launching new digital products or migrating legacy tools to the cloud.",
        pricingFactors: "Multi-tenancy depth, Data security requirements, Third-party APIs, and AI integrations.",
        longDescription: "Building a SaaS product requires strategy. We help you build multi-tenant, secure, and scalable platforms.",
        benefits: ["Multi-tenant architecture", "Subscription billing", "High availability", "Secure isolation"],
        process: ["MVP Strategy", "UX Design", "Build", "Scale"]
    },
    "ai-automation": {
        title: "AI & Workflow Automation",
        subtitle: "Leverage Autonomous Agentic Artificial Intelligence",
        tldr: "Integrate Agentic AI and machine learning models to automate repetitive tasks, analyze data, and create intelligent customer support systems.",
        targetAudience: "Businesses handling high-volume repetitive tasks, customer inquiries, or massive datasets.",
        pricingFactors: "Custom model training, API tokens usage, Data sanitation, and Workflow complexity.",
        longDescription: "Automate repetitive tasks and gain predictive insights with our custom AI solutions.",
        benefits: ["24/7 AI Support", "Data-driven decisions", "Reduced operational costs", "Predictive models"],
        process: ["Assessment", "Training", "Integration", "Monitoring"]
    },
    "shopify-development": {
        title: "Shopify E-Commerce Development",
        subtitle: "High-Converting Custom Stores & App Extensions",
        tldr: "Custom Shopify Liquid themes, headless Next.js storefronts, and private Shopify app extensions designed for maximum speed and conversion.",
        targetAudience: "D2C brands and enterprise retailers aiming to scale online revenue.",
        pricingFactors: "Custom design depth, ERP/POS synchronization, and checkout customizations.",
        longDescription: "Scale your e-commerce revenue with fast, responsive, and conversion-optimized custom Shopify themes and headless integrations.",
        benefits: ["Sub-second page loading speed", "Custom POS & ERP sync", "Headless Next.js storefronts", "Conversion rate optimization"],
        process: ["UI/UX Design", "Liquid/Next.js Build", "ERP Integration", "Launch"]
    },
    "mobile-app-development": {
        title: "Mobile App Development (iOS & Android)",
        subtitle: "Native Performance with Cross-Platform Speed",
        tldr: "High-performance React Native and Flutter mobile applications for iOS and Android with offline-first database synchronization.",
        targetAudience: "Businesses expanding customer engagement or field worker mobile productivity.",
        pricingFactors: "Platform support (iOS/Android), Offline sync depth, and API complexity.",
        longDescription: "Build mobile applications that deliver native fluid performance, real-time push notifications, and offline data sync.",
        benefits: ["Cross-platform iOS & Android code", "Offline-first local database", "Real-time telemetry", "App Store approval guarantee"],
        process: ["UI Wireframing", "React Native Sprint", "API Connection", "App Store Publish"]
    },
    "cloud-devops": {
        title: "Cloud & DevOps Engineering",
        subtitle: "Automated CI/CD Pipelines & High-Availability Infrastructure",
        tldr: "Kubernetes, Docker, AWS, and Vercel infrastructure setup with zero-downtime automated deployments and continuous uptime monitoring.",
        targetAudience: "SaaS products and enterprise applications handling high traffic loads.",
        pricingFactors: "Cloud architecture scale, Traffic concurrency, and Monitoring compliance.",
        longDescription: "Maintain 99.99% system availability with automated cloud scaling, database replication, and continuous CI/CD pipelines.",
        benefits: ["Zero-downtime deployments", "Automated database backups", "Sub-second global latency", "24/7 server monitoring"],
        process: ["Infrastructure Audit", "Containerization", "CI/CD Pipeline", "24/7 SLA"]
    },
    "pos-system": {
        title: "Point of Sale (POS) Systems",
        subtitle: "Offline-First Retail & Multi-Branch Terminals",
        tldr: "Fast, reliable retail POS software with offline terminal synchronization, barcode scanning, and automated tax authority integration.",
        targetAudience: "Multi-branch retail outlets, restaurants, and wholesale distributors.",
        pricingFactors: "Terminal license count, Hardware integrations, and Tax API webhooks.",
        longDescription: "Process customer transactions in milliseconds with offline-first POS software that syncs automatically with central inventory.",
        benefits: ["Offline transaction queue", "FBR / Local tax API sync", "Multi-terminal management", "Instant inventory deduction"],
        process: ["Hardware Setup", "POS Software Build", "Tax API Hook", "Staff Training"]
    },
    "crm-development": {
        title: "Custom CRM Software Development",
        subtitle: "Intelligent Lead Tracking & Automated Pipeline Management",
        tldr: "Custom Customer Relationship Management software tailored to your sales process, featuring WhatsApp integration and automated follow-ups.",
        targetAudience: "B2B service providers, real estate firms, and enterprise sales teams.",
        pricingFactors: "Pipeline complexity, Multi-channel messaging, and Reporting analytics.",
        longDescription: "Never lose another lead. Track customer interactions, automate follow-up emails/WhatsApp messages, and analyze sales conversion funnels.",
        benefits: ["Automated WhatsApp lead capture", "Custom deal pipelines", "Team performance analytics", "Seamless ERP integration"],
        process: ["Pipeline Design", "CRM Development", "API Integrations", "Rollout"]
    },
    "inventory-management": {
        title: "Inventory & Warehouse Management Systems",
        subtitle: "Real-Time Stock Telemetry & Automated Reordering",
        tldr: "Advanced inventory control software featuring barcode intake, batch tracking, multi-warehouse transfer management, and automated stockout alerts.",
        targetAudience: "E-commerce brands, distributors, and manufacturing plants.",
        pricingFactors: "Warehouse locations, Barcode hardware integration, and Stock SKU volume.",
        longDescription: "Eliminate stockouts and overstock costs with real-time barcode tracking across multiple warehouse locations.",
        benefits: ["Real-time barcode inventory intake", "Automated stockout alerts", "Multi-warehouse stock transfer", "Batch & Expiry tracking"],
        process: ["Warehouse Mapping", "Inventory Engine Build", "Hardware Integration", "Go-Live"]
    }
};

export function ServiceDetailClient({ slug: propSlug }: { slug?: string }) {
    const params = useParams();
    const slug = propSlug || (params?.slug as string);
    const [service, setService] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) {
            setLoading(false);
            return;
        }
        fetch(`${API_BASE_URL}/api/services`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const found = data.find((s: any) => s.title.toLowerCase().replace(/\s+/g, '-') === slug);
                    setService(found || null);
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [slug]);

    if (loading) return <div className="pt-32 text-center font-bold">Loading...</div>;
    if (!service) return (
        <div className="pt-32 text-center min-h-screen bg-[#F2F2F2]">
            <h1 className="text-4xl font-black mb-8">Service Not Found</h1>
            <Link href="/services" className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold">Back to Services</Link>
        </div>
    );

    const extra = enhancedContent[slug || ""] || {
        subtitle: "Premium Technology Services",
        longDescription: service?.description || "",
        benefits: Array.isArray(service?.features) ? service.features : [],
        process: ["Consultation", "Strategy", "Execution", "Delivery"]
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
            {/* SECTION 1: INTRO - Dark Hero */}
            <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
              <div className="mx-auto max-w-7xl relative z-10">
                <Link href="/services" className="inline-flex items-center gap-2 font-black text-slate-900/40 hover:text-orange-600 mb-12 transition-colors uppercase tracking-widest text-[10px]">
                    <ArrowLeft className="w-4 h-4" /> Back to Services
                </Link>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-8">Service Details</div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9]">{service?.title}</h1>
                        <p className="text-2xl font-bold mb-8 text-orange-600">{extra.subtitle}</p>
                        
                        {/* GEO Optimization: Answer-first AI Block */}
                        {extra.tldr && (
                        <div className="bg-slate-50 border-l-4 border-orange-600 p-6 rounded-r-2xl mb-8">
                           <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Executive Summary (TL;DR)</h2>
                           <p className="text-lg font-medium text-slate-800 leading-relaxed">{extra.tldr}</p>
                        </div>
                        )}
                        
                        <p className="text-xl font-bold text-slate-900/50 leading-relaxed mb-8 max-w-xl">{extra.longDescription}</p>
                        
                        {/* GEO: Target Audience & Pricing */}
                        {extra.targetAudience && (
                        <div className="flex flex-col gap-4 mb-12">
                           <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                              <div>
                                 <strong className="block text-slate-900 font-bold mb-1">Who is this for?</strong>
                                 <span className="text-slate-600 text-sm font-medium">{extra.targetAudience}</span>
                              </div>
                           </div>
                           <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                              <div>
                                 <strong className="block text-slate-900 font-bold mb-1">Pricing Factors</strong>
                                 <span className="text-slate-600 text-sm font-medium">{extra.pricingFactors}</span>
                              </div>
                           </div>
                        </div>
                        )}

                        <Link href="/contact" className="bg-orange-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all inline-block">
                            Get Started
                        </Link>
                    </div>
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-300 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-40 z-10" />
                        {service?.image_url && <Image width={1200} height={800} src={service.image_url} alt={service.title} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000" />}
                    </div>
                </div>
              </div>
            </section>

            {/* Benefits - Light */}
            <div className="py-40 text-center container mx-auto px-4">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6">Efficiency</div>
                <h2 className="text-5xl sm:text-7xl font-black mb-24 tracking-tighter text-slate-900">Key Benefits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {extra.benefits.map((benefit: string, index: number) => (
                        <motion.div 
                          key={index} 
                          whileHover={{ y: -10 }}
                          className="bg-white p-10 rounded-[2.5rem] border border-slate-300 shadow-xl text-left"
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-orange-600 mb-8 border border-slate-300">
                               <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <p className="text-xl font-black tracking-tighter text-slate-900 leading-tight">{benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Related Success Stories */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16">
                        <div>
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4">Proof of Concept</div>
                            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900">Related Success Stories</h2>
                        </div>
                        <Link href="/case-studies" className="mt-6 sm:mt-0 inline-flex items-center gap-2 font-black text-slate-900 hover:text-orange-600 uppercase tracking-widest text-xs transition-colors">
                            View All Cases <ArrowLeft className="w-4 h-4 rotate-135" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {slug === 'custom-software-development' && (
                            <Link href="/case-studies/pulse-healthcare-erp" className="group block bg-white rounded-[2rem] p-8 border border-slate-300 hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-orange-600/10 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black mb-3">Pulse Healthcare ERP</h3>
                                <p className="text-slate-900/60 font-medium mb-6">Multi-tenant ERP system reducing overhead by 40%.</p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 group-hover:text-slate-900 transition-colors">
                                    Read Case Study <ArrowLeft className="w-4 h-4 rotate-135" />
                                </span>
                            </Link>
                        )}
                        {slug === 'ai-automation' && (
                            <Link href="/case-studies/autonomous-ai-agent" className="group block bg-white rounded-[2rem] p-8 border border-slate-300 hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-slate-900/10 text-slate-900 rounded-xl flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black mb-3">Autonomous AI Agent</h3>
                                <p className="text-slate-900/60 font-medium mb-6">300% boost in lead qualification across global time zones.</p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-slate-900 transition-colors">
                                    Read Case Study <ArrowLeft className="w-4 h-4 rotate-135" />
                                </span>
                            </Link>
                        )}
                        {slug === 'custom-software-development' && (
                            <Link href="/case-studies/textile-mill-pos" className="group block bg-white rounded-[2rem] p-8 border border-slate-300 hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-[#FF9900]/10 text-[#FF9900] rounded-xl flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black mb-3">Textile Mill POS</h3>
                                <p className="text-slate-900/60 font-medium mb-6">Automated 10k+ invoices/month with FBR API sync.</p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#FF9900] group-hover:text-slate-900 transition-colors">
                                    Read Case Study <ArrowLeft className="w-4 h-4 rotate-135" />
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* CTA - Dark */}
            <section className="px-4 py-20 bg-transparent">
                <div className="bg-white rounded-[4rem] p-16 lg:p-32 text-center relative overflow-hidden shadow-2xl border border-slate-300">
                     <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
                     <div className="relative z-10">
                       <h2 className="text-5xl sm:text-7xl font-black mb-10 tracking-tighter text-slate-900 leading-tight">Ready to <span className="text-orange-600">scale</span>?</h2>
                       <p className="text-xl sm:text-2xl font-bold text-slate-900/50 mb-16 max-w-xl mx-auto leading-relaxed">
                          Let's discuss how {service.title} can transform your business operations.
                       </p>
                       <div className="flex flex-wrap justify-center gap-8">
                          <Link href="/contact" className="bg-orange-600 text-white px-12 py-6 rounded-2xl text-xl font-black shadow-[0_30px_60px_rgba(58,92,204,0.4)] hover:scale-105 transition-all">Get Started Now</Link>
                          <Link href="/pricing" className="bg-white/5 border-2 border-black/20 text-slate-900 px-12 py-6 rounded-2xl text-xl font-black hover:bg-white hover:text-slate-900 transition-all">View Pricing</Link>
                       </div>
                     </div>
                </div>
            </section>
        </div>
    );
}
