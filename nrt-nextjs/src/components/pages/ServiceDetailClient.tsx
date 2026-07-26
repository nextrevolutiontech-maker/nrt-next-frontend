"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { API_BASE_URL } from "@/config";
import { motion } from "motion/react";

const enhancedContent: Record<string, any> = {
    "custom-software-development": {
        title: "Custom Software Development",
        subtitle: "Bespoke Enterprise Solutions Built for Your Workflows",
        tldr: "Custom software development builds proprietary applications designed specifically for your unique operational needs, ensuring 100% code ownership and zero vendor lock-in.",
        targetAudience: "Enterprise companies outgrowing off-the-shelf software and needing proprietary workflows.",
        pricingFactors: "Complexity, Integrations, UI/UX demands, and Platform support.",
        longDescription: "Off-the-shelf software often fails to meet unique business needs. Our custom software development service provides you with a perfectly fitted solution.",
        benefits: ["Full ownership of code", "Seamless integration", "Scalable architecture", "Automated workflows"],
        process: ["Discovery", "Development", "Testing", "Support"],
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    },
    "erp-development": {
        title: "Enterprise ERP Software Development",
        subtitle: "Centralized Business Operations & Inventory Intelligence",
        tldr: "Bespoke ERP development replaces fragmented spreadsheets with unified real-time inventory, financial accounting, FBR tax compliance, and HR analytics.",
        targetAudience: "Growing manufacturing, retail, healthcare, and logistics enterprises.",
        pricingFactors: "Module count, Database complexity, Legacy migration, and Custom integrations.",
        longDescription: "Eliminate manual data entry errors and inventory stockouts with a customized ERP system engineered specifically for your business operations.",
        benefits: ["Zero per-user licensing fees", "Real-time multi-location sync", "Automated financial reconciliation", "Role-based security"],
        process: ["Operational Audit", "System Architecture", "Module Sprints", "Deployment"],
        image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    },
    "saas-development": {
        title: "SaaS Platform Development",
        subtitle: "Multi-Tenant Cloud Product Architecture",
        tldr: "End-to-end SaaS application development providing secure, scalable, multi-tenant architectures ready for subscription monetization.",
        targetAudience: "Startups and enterprises launching new digital products or migrating legacy tools to the cloud.",
        pricingFactors: "Multi-tenancy depth, Data security requirements, Third-party APIs, and AI integrations.",
        longDescription: "Building a SaaS product requires strategy. We help you build multi-tenant, secure, and scalable platforms.",
        benefits: ["Multi-tenant architecture", "Subscription billing", "High availability", "Secure isolation"],
        process: ["MVP Strategy", "UX Design", "Build", "Scale"],
        image_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
    },
    "ai-automation": {
        title: "AI & Workflow Automation",
        subtitle: "Autonomous Agentic Artificial Intelligence Engines",
        tldr: "Integrate Agentic AI and machine learning models to automate repetitive tasks, query databases, and create intelligent customer support systems.",
        targetAudience: "Businesses handling high-volume repetitive tasks, customer inquiries, or massive datasets.",
        pricingFactors: "Custom model training, API tokens usage, Data sanitation, and Workflow complexity.",
        longDescription: "Automate repetitive tasks and gain predictive insights with our custom AI solutions.",
        benefits: ["24/7 AI Support", "Data-driven decisions", "Reduced operational costs", "Predictive models"],
        process: ["Assessment", "Training", "Integration", "Monitoring"],
        image_url: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80"
    },
    "shopify-development": {
        title: "Shopify E-Commerce Development",
        subtitle: "High-Converting Custom Stores & App Extensions",
        tldr: "Custom Shopify Liquid themes, headless Next.js storefronts, and private Shopify app extensions designed for maximum speed and conversion.",
        targetAudience: "D2C brands and enterprise retailers aiming to scale online revenue.",
        pricingFactors: "Custom design depth, ERP/POS synchronization, and checkout customizations.",
        longDescription: "Scale your e-commerce revenue with fast, responsive, and conversion-optimized custom Shopify themes and headless integrations.",
        benefits: ["Sub-second page loading speed", "Custom POS & ERP sync", "Headless Next.js storefronts", "Conversion rate optimization"],
        process: ["UI/UX Design", "Liquid/Next.js Build", "ERP Integration", "Launch"],
        image_url: "https://images.unsplash.com/photo-1556742049-0a6754406240?auto=format&fit=crop&w=1200&q=80"
    },
    "mobile-app-development": {
        title: "Mobile App Development",
        subtitle: "Native iOS & Android Performance with React Native Speed",
        tldr: "High-performance React Native and Flutter mobile applications for iOS and Android with offline-first database synchronization.",
        targetAudience: "Businesses expanding customer engagement or field worker mobile productivity.",
        pricingFactors: "Platform support (iOS/Android), Offline sync depth, and API complexity.",
        longDescription: "Build mobile applications that deliver native fluid performance, real-time push notifications, and offline data sync.",
        benefits: ["Cross-platform iOS & Android code", "Offline-first local database", "Real-time telemetry", "App Store approval guarantee"],
        process: ["UI Wireframing", "React Native Sprint", "API Connection", "App Store Publish"],
        image_url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
    },
    "cloud-devops": {
        title: "Cloud & DevOps Engineering",
        subtitle: "Automated CI/CD Pipelines & High-Availability Infrastructure",
        tldr: "Kubernetes, Docker, AWS, and Vercel infrastructure setup with zero-downtime automated deployments and continuous uptime monitoring.",
        targetAudience: "SaaS products and enterprise applications handling high traffic loads.",
        pricingFactors: "Cloud architecture scale, Traffic concurrency, and Monitoring compliance.",
        longDescription: "Maintain 99.99% system availability with automated cloud scaling, database replication, and continuous CI/CD pipelines.",
        benefits: ["Zero-downtime deployments", "Automated database backups", "Sub-second global latency", "24/7 server monitoring"],
        process: ["Infrastructure Audit", "Containerization", "CI/CD Pipeline", "24/7 SLA"],
        image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    },
    "pos-system": {
        title: "Point of Sale (POS) Systems",
        subtitle: "Offline-First Retail & Multi-Branch Terminals",
        tldr: "Fast, reliable retail POS software with offline terminal synchronization, barcode scanning, and automated FBR tax integration.",
        targetAudience: "Multi-branch retail outlets, restaurants, and wholesale distributors.",
        pricingFactors: "Terminal license count, Hardware integrations, and Tax API webhooks.",
        longDescription: "Process customer transactions in milliseconds with offline-first POS software that syncs automatically with central inventory.",
        benefits: ["Offline transaction queue", "FBR / Local tax API sync", "Multi-terminal management", "Instant inventory deduction"],
        process: ["Hardware Setup", "POS Software Build", "Tax API Hook", "Staff Training"],
        image_url: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80"
    },
    "crm-development": {
        title: "Custom CRM Software Development",
        subtitle: "Intelligent Lead Tracking & Automated Pipeline Management",
        tldr: "Custom Customer Relationship Management software tailored to your sales process, featuring WhatsApp integration and automated follow-ups.",
        targetAudience: "B2B service providers, real estate firms, and enterprise sales teams.",
        pricingFactors: "Pipeline complexity, Multi-channel messaging, and Reporting analytics.",
        longDescription: "Never lose another lead. Track customer interactions, automate follow-up emails/WhatsApp messages, and analyze sales conversion funnels.",
        benefits: ["Automated WhatsApp lead capture", "Custom deal pipelines", "Team performance analytics", "Seamless ERP integration"],
        process: ["Pipeline Design", "CRM Development", "API Integrations", "Rollout"],
        image_url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    },
    "inventory-management": {
        title: "Inventory & Warehouse Systems",
        subtitle: "Real-Time Stock Telemetry & Automated Reordering",
        tldr: "Advanced inventory control software featuring barcode intake, batch tracking, multi-warehouse transfer management, and automated stockout alerts.",
        targetAudience: "E-commerce brands, distributors, and manufacturing plants.",
        pricingFactors: "Warehouse locations, Barcode hardware integration, and Stock SKU volume.",
        longDescription: "Eliminate stockouts and overstock costs with real-time barcode tracking across multiple warehouse locations.",
        benefits: ["Real-time barcode inventory intake", "Automated stockout alerts", "Multi-warehouse stock transfer", "Batch & Expiry tracking"],
        process: ["Warehouse Mapping", "Inventory Engine Build", "Hardware Integration", "Go-Live"],
        image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
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
                    const found = data.find((s: any) => 
                        s.slug === slug || 
                        s.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
                    );
                    if (found) setService(found);
                }
            })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, [slug]);

    const extra = enhancedContent[slug || ""];
    const activeService = extra ? {
        title: extra.title || service?.title || "Service Detail",
        description: extra.longDescription || service?.description,
        image_url: extra.image_url || service?.image_url || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        features: extra.benefits || service?.features || []
    } : service;

    if (loading && !extra) return <div className="pt-36 text-center font-bold">Loading Service Details...</div>;
    if (!activeService) return (
        <div className="pt-36 text-center min-h-screen bg-[#F2F2F2]">
            <h1 className="text-4xl font-black mb-8">Service Not Found</h1>
            <Link href="/services" className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold">Back to Services</Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
            {/* SECTION 1: HERO - ZERO-SCROLL HEADLINE & COMPACT FIT */}
            <section className="pt-36 sm:pt-40 lg:pt-36 pb-12 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
              
              <div className="mx-auto max-w-7xl relative z-10">
                <Link href="/services" className="inline-flex items-center gap-2 font-black text-slate-400 hover:text-orange-600 mb-4 transition-colors uppercase tracking-widest text-[10px]">
                    <ArrowLeft className="w-4 h-4" /> Back to Services
                </Link>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                    <div className="lg:col-span-7">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-2">Service Details</div>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-3 tracking-tight leading-[1.08] text-slate-900">
                          {activeService.title.includes("&") ? (
                            <>
                              {activeService.title.split("&")[0]} & <span className="text-[#FF5500]">{activeService.title.split("&")[1]}</span>
                            </>
                          ) : (
                            activeService.title
                          )}
                        </h1>
                        {extra?.subtitle && <p className="text-lg sm:text-xl font-bold mb-5 text-[#FF5500]">{extra.subtitle}</p>}
                        
                        {/* Executive Summary */}
                        {extra?.tldr && (
                        <div className="bg-slate-50 border-l-4 border-orange-600 p-4 sm:p-5 rounded-r-2xl mb-5 shadow-sm">
                           <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Executive Summary (TL;DR)</h2>
                           <p className="text-sm font-medium text-slate-800 leading-relaxed">{extra.tldr}</p>
                        </div>
                        )}
                        
                        <p className="text-sm sm:text-base font-medium text-slate-600 leading-relaxed mb-5 max-w-xl">{extra?.longDescription || activeService.description}</p>
                        
                        {/* Target Audience & Pricing */}
                        {extra?.targetAudience && (
                        <div className="flex flex-col gap-2.5 mb-6">
                           <div className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                              <div className="text-xs sm:text-sm">
                                 <strong className="text-slate-900 font-bold">Target Audience: </strong>
                                 <span className="text-slate-600 font-medium">{extra.targetAudience}</span>
                              </div>
                           </div>
                           {extra.pricingFactors && (
                           <div className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                              <div className="text-xs sm:text-sm">
                                 <strong className="text-slate-900 font-bold">Pricing Factors: </strong>
                                 <span className="text-slate-600 font-medium">{extra.pricingFactors}</span>
                              </div>
                           </div>
                           )}
                        </div>
                        )}

                        <div className="flex flex-wrap gap-4">
                          <Link href="/contact" className="bg-[#FF5500] hover:bg-orange-600 text-white px-8 py-3.5 rounded-2xl text-sm font-black shadow-lg shadow-orange-600/20 hover:scale-105 transition-all inline-flex items-center gap-2">
                              <span>Get Started Now</span>
                              <ArrowRight className="w-4 h-4" />
                          </Link>
                          <Link href="/pricing" className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 px-8 py-3.5 rounded-2xl text-sm font-bold transition-all">
                              View Pricing
                          </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-900 min-h-[320px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-40 z-10 pointer-events-none" />
                        {activeService?.image_url ? (
                          <Image 
                            width={1200} 
                            height={800} 
                            src={activeService.image_url} 
                            alt={activeService.title} 
                            unoptimized
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 relative z-0" 
                          />
                        ) : (
                          <div className="p-8 text-center space-y-4 relative z-20">
                             <div className="w-16 h-16 rounded-2xl bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center mx-auto text-2xl font-black">
                                NRT
                             </div>
                             <h3 className="text-white font-black text-xl">{activeService?.title}</h3>
                             <span className="text-xs text-orange-400 font-mono font-bold block uppercase tracking-wider">Enterprise Systems Architecture</span>
                          </div>
                        )}
                    </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            {extra?.benefits && extra.benefits.length > 0 && (
            <div className="py-20 text-center container mx-auto px-4 bg-slate-50 border-y border-slate-200">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-3">Efficiency</div>
                <h2 className="text-3xl sm:text-5xl font-black mb-12 tracking-tight text-slate-900">Key Architectural Benefits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {extra.benefits.map((benefit: string, index: number) => (
                        <motion.div 
                          key={index} 
                          whileHover={{ y: -5 }}
                          className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md text-left"
                        >
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 border border-orange-200">
                               <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <p className="text-lg font-black tracking-tight text-slate-900 leading-snug">{benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            )}

            {/* Related Success Stories */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
                        <div>
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-3">Proof of Concept</div>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Related Success Stories</h2>
                        </div>
                        <Link href="/case-studies" className="mt-4 sm:mt-0 inline-flex items-center gap-2 font-black text-slate-900 hover:text-orange-600 uppercase tracking-widest text-xs transition-colors">
                            View All Cases <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link href="/case-studies/pulse-healthcare-erp" className="group block bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:border-orange-500/50 transition-all">
                            <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 font-bold">
                                ERP
                            </div>
                            <h3 className="text-xl font-black mb-2 text-slate-900 group-hover:text-orange-600 transition-colors">Pulse Healthcare ERP</h3>
                            <p className="text-slate-600 font-medium text-xs mb-6 leading-relaxed">Multi-tenant EMR & Hospital ERP system reducing operational overhead by 40%.</p>
                            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-orange-600 group-hover:translate-x-1 transition-transform">
                                Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                        </Link>

                        <Link href="/case-studies/textile-mill-pos" className="group block bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:border-orange-500/50 transition-all">
                            <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 font-bold">
                                POS
                            </div>
                            <h3 className="text-xl font-black mb-2 text-slate-900 group-hover:text-orange-600 transition-colors">Textile Mill ERP & POS</h3>
                            <p className="text-slate-600 font-medium text-xs mb-6 leading-relaxed">Automated 10,000+ invoices/month with real-time FBR tax compliance webhooks.</p>
                            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-orange-600 group-hover:translate-x-1 transition-transform">
                                Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                        </Link>

                        <Link href="/portfolio" className="group block bg-slate-900 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
                            <div>
                              <div className="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center mb-6 font-bold">
                                  36+
                              </div>
                              <h3 className="text-xl font-black mb-2 text-white">36+ Live Portfolio Systems</h3>
                              <p className="text-slate-300 text-xs font-medium leading-relaxed mb-6">Explore our full verified catalog of custom enterprise platforms, POS, and AI engines.</p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-orange-400 group-hover:translate-x-1 transition-transform">
                                View Full Portfolio <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto text-center">
                   <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight text-slate-900">Ready to <span className="text-orange-600">Scale Operations</span>?</h2>
                   <p className="text-base sm:text-lg font-medium text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
                      Schedule a 30-minute technical audit with our lead architects to optimize your system.
                   </p>
                   <div className="flex flex-wrap justify-center gap-4">
                      <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl text-base font-black shadow-lg hover:scale-105 transition-all">Schedule Audit Session</Link>
                      <Link href="/pricing" className="bg-white border border-slate-300 text-slate-900 px-8 py-4 rounded-2xl text-base font-bold hover:bg-slate-100 transition-all">View Pricing</Link>
                   </div>
                </div>
            </section>
        </div>
    );
}
