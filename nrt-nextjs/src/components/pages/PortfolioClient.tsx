"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RefreshCw, ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { toast } from "sonner";
import { API_BASE_URL } from "@/config";

interface Project {
  id?: number;
  title: string;
  category: string; 
  industry_tag: string; 
  challenge: string;
  solution: string;
  outcome?: string;
  tech_stack?: string[]; 
  image_url: string;
  live_url: string;
}

const fallbackProjects: Project[] = [
  // ERP SYSTEMS (10 Projects)
  {
    title: "Multi-Store Retail POS & Inventory ERP",
    live_url: "https://enterprise-pos-inventory-system.vercel.app/",
    category: "ERP Systems",
    industry_tag: "Retail & POS",
    challenge: "Managing stock across multiple branches using manual spreadsheets led to severe inventory discrepancies and tax audit delays.",
    solution: "Sub-second offline POS software connected to a centralized cloud ERP database with real-time FBR tax compliance webhooks.",
    outcome: "Eliminated inventory leaks, automated 10,000+ monthly invoices, and reduced checkout waiting times by 65%.",
    tech_stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "FBR Tax API"],
    image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Pulse Healthcare & Hospital EMR ERP",
    live_url: "https://pulse-healthcare-erp.vercel.app/",
    category: "ERP Systems",
    industry_tag: "Healthcare",
    challenge: "Fragmented patient records across legacy software caused administrative delays and appointment scheduling errors.",
    solution: "HIPAA-compliant multi-tenant EMR & Hospital ERP platform with HL7/FHIR diagnostic device APIs and automated patient portals.",
    outcome: "Reduced administrative overhead by 40% and improved patient throughput across 5 clinical departments.",
    tech_stack: ["React", "Next.js", "Node.js", "PostgreSQL", "FHIR API"],
    image_url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Textile Mill Yarn & Fabric Batch ERP",
    live_url: "https://textile-mill-pos.vercel.app/",
    category: "ERP Systems",
    industry_tag: "Manufacturing",
    challenge: "Manual tracking of dyeing vat batches and fabric roll shading created material waste and inaccurate job costing.",
    solution: "Barcode roll intake scanners, dynamic Bill of Materials (BOM) calculation engine, and dyeing batch formula tracking.",
    outcome: "Saved 220+ hours monthly in raw material accounting and reduced fabric roll waste by 18%.",
    tech_stack: ["Next.js", "Node.js", "PostgreSQL", "Barcode hardware API"],
    image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Rice Mill Weighbridge & Paddy ERP",
    live_url: "https://ricemillerp.vercel.app/",
    category: "ERP Systems",
    industry_tag: "Agro Processing",
    challenge: "Manual weighbridge ticket entries and unmonitored paddy moisture levels caused frequent financial discrepancies during harvest season.",
    solution: "Direct weighbridge serial hardware API integration, automated moisture yield deduction algorithm, and bulk shipment dispatch.",
    outcome: "Zero weighbridge manipulation, 100% accurate yield calculation, and real-time byproduct tracking.",
    tech_stack: ["Next.js", "Node.js", "Serial Hardware API", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "School Management & Parent Portal ERP",
    live_url: "https://school-erp-system.vercel.app/",
    category: "ERP Systems",
    industry_tag: "Education",
    challenge: "Manual fee collection in cash and paper gradebooks created heavy administrative workload and parent friction.",
    solution: "Centralized Student Information System (SIS) with online fee gateway, automated WhatsApp attendance alerts, and digital gradebooks.",
    outcome: "95% online fee collection compliance and 80% reduction in parent inquiry phone calls.",
    tech_stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe API", "WhatsApp API"],
    image_url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Construction & Engineering Job Costing ERP",
    live_url: "https://construction-erp-pro.vercel.app/",
    category: "ERP Systems",
    industry_tag: "Construction",
    challenge: "Uncontrolled raw material cost overruns and manual field worker attendance led to budget slippage on site projects.",
    solution: "Real-time job costing calculator, subcontractor milestone billing, and mobile biometric labor attendance sync.",
    outcome: "Kept projects within 3% of estimated budgets and eliminated phantom contractor invoices.",
    tech_stack: ["Next.js", "React Native", "Node.js", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Wholesale Distribution & Route ERP",
    live_url: "https://distribution-erp.vercel.app/",
    category: "ERP Systems",
    industry_tag: "Distribution",
    challenge: "Stock disparities between regional warehouses delayed sales rep order dispatch and created customer stockouts.",
    solution: "Multi-warehouse stock replenishment engine with mobile sales rep booking app and automated van stock loading sheets.",
    outcome: "Reduced order fulfillment cycle from 48 hours to 6 hours across regional distribution hubs.",
    tech_stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Pharma Quality & Expiry Control ERP",
    live_url: "https://pharma-erp-compliance.vercel.app/",
    category: "ERP Systems",
    industry_tag: "Pharmaceuticals",
    challenge: "Manual drug batch expiry tracking created risk of regulatory fines and unsold expired medicine losses.",
    solution: "Automated batch quarantine and expiration alert system with digital quality control (QC) sign-off checkpoints.",
    outcome: "100% audit readiness for regulatory inspections and zero expired batch shipments.",
    tech_stack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    image_url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Logistics WMS & Fleet Telemetry ERP",
    live_url: "https://logistics-wms-platform.vercel.app/",
    category: "ERP Systems",
    industry_tag: "Logistics",
    challenge: "In-efficient warehouse bin placement and lack of driver route GPS tracking resulted in high fuel costs and late deliveries.",
    solution: "Smart 3D warehouse bin allocation algorithm with driver mobile proof-of-delivery (POD) and GPS telemetry.",
    outcome: "Improved warehouse picking speed by 35% and reduced fleet fuel consumption by 14%.",
    tech_stack: ["Next.js", "React Native", "Node.js", "Google Maps API"],
    image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Real Estate Portal & Tenant CRM ERP",
    live_url: "https://real-estate-crm-system.vercel.app/",
    category: "ERP Systems",
    industry_tag: "Real Estate",
    challenge: "Property brokers lost buyer leads due to delayed follow-ups and manual lease agreement renewals.",
    solution: "AI-assisted lead qualification engine connected to automated lease contract tracking and online tenant rent portals.",
    outcome: "Increased lead conversion rate by 28% and automated 90% of tenant rent invoice reminders.",
    tech_stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
  },

  // AI AUTOMATION (10 Projects)
  {
    title: "NeuraHub AI Creative Workflow Engine",
    live_url: "https://www.neurahub.app/",
    category: "AI Automation",
    industry_tag: "Marketing & AI",
    challenge: "Marketing agencies faced bottlenecked content generation due to fragmented LLM APIs and manual prompt handling.",
    solution: "Centralized AI model aggregator with custom prompt engineering workflows, team asset libraries, and automated generation.",
    outcome: "Boosted creative team content output by 300% while cutting monthly API token overhead.",
    tech_stack: ["Next.js", "OpenAI API", "Anthropic API", "Node.js", "Tailwind CSS"],
    image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Autonomous WhatsApp Lead Qualifier Agent",
    live_url: "https://ai-whatsapp-lead-qualifier.vercel.app/",
    category: "AI Automation",
    industry_tag: "Customer Support",
    challenge: "High inbound WhatsApp sales volume meant human reps responded 4-6 hours late, resulting in dropped leads.",
    solution: "24/7 Agentic AI WhatsApp bot equipped with multi-step reasoning, budget qualification, and CRM database function calling.",
    outcome: "Responded to 100% of leads in <15 seconds, qualifying 450+ sales leads monthly automatically.",
    tech_stack: ["Node.js", "WhatsApp Business API", "OpenAI Tool Calling", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AI Document OCR & PDF Invoicing Pipeline",
    live_url: "https://ai-document-ocr-pipeline.vercel.app/",
    category: "AI Automation",
    industry_tag: "Finance",
    challenge: "Accounting staff manually transcribed 2,000+ vendor PDF invoices per month, causing data errors and slow payouts.",
    solution: "Vision AI OCR pipeline that extracts line items, validates tax calculations, and posts directly to PostgreSQL ERP tables.",
    outcome: "Eliminated 98% of manual data entry work with 99.7% OCR extraction accuracy.",
    tech_stack: ["Python", "FastAPI", "Tesseract/Vision API", "Next.js", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Smart Procurement AI Reorder Engine",
    live_url: "https://smart-procurement-ai.vercel.app/",
    category: "AI Automation",
    industry_tag: "Supply Chain",
    challenge: "Unpredictable seasonal demand caused unexpected stockouts of fast-moving consumer goods (FMCG).",
    solution: "Predictive machine learning algorithm calculating lead times, buffer stock levels, and generating automated PO drafts.",
    outcome: "Reduced warehouse stockout incidents by 82% and optimized working capital allocation.",
    tech_stack: ["Python", "Scikit-Learn", "FastAPI", "Next.js", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Customer Sentiment & Voice Analysis Bot",
    live_url: "https://ai-sentiment-analyzer.vercel.app/",
    category: "AI Automation",
    industry_tag: "Telecommunications",
    challenge: "Call center managers couldn't manually review 50,000+ monthly support calls for compliance and customer churn signals.",
    solution: "Automated Whisper speech-to-text pipeline performing real-time sentiment scoring and flagging angry caller escalations.",
    outcome: "Identified customer churn risks 5x faster and boosted support quality assurance scores by 40%.",
    tech_stack: ["Whisper API", "Python", "Node.js", "React", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AI Legal Contract & NDA Parser",
    live_url: "https://ai-legal-contract-parser.vercel.app/",
    category: "AI Automation",
    industry_tag: "Legal Services",
    challenge: "Attorneys spent hours reviewing standard non-disclosure agreements and commercial vendor contracts for risky clauses.",
    solution: "Domain-trained LLM assistant highlighting non-standard indemnification clauses and suggesting redline amendments.",
    outcome: "Accelerated contract turnaround time from 3 days to 20 minutes for enterprise legal teams.",
    tech_stack: ["Next.js", "Python", "LangChain", "OpenAI API", "Tailwind CSS"],
    image_url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AI E-Commerce Personalization Engine",
    live_url: "https://ecommerce-ai-recommendations.vercel.app/",
    category: "AI Automation",
    industry_tag: "E-Commerce",
    challenge: "Generic product recommendations resulted in low average order values (AOV) and cart abandonment.",
    solution: "Real-time vector embeddings matching customer browsing behavior with complementary products dynamically.",
    outcome: "Boosted e-commerce conversion rates by 24% and increased average order value by $18.50.",
    tech_stack: ["Next.js", "Pinecone Vector DB", "Node.js", "Shopify API"],
    image_url: "https://images.unsplash.com/photo-1556742049-0a6754406240?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AI Fleet Predictive Maintenance Bot",
    live_url: "https://ai-fleet-maintenance.vercel.app/",
    category: "AI Automation",
    industry_tag: "Logistics",
    challenge: "Unscheduled truck breakdowns on highway delivery routes caused expensive towing fees and shipment delays.",
    solution: "IoT engine sensor telemetry processor forecasting brake pad and oil filter replacement dates before failures occur.",
    outcome: "Reduced unexpected vehicle breakdowns by 70% and lowered fleet maintenance costs by 22%.",
    tech_stack: ["Python", "MQTT", "TimescaleDB", "Next.js", "FastAPI"],
    image_url: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AI Recruitment Resume Ranker",
    live_url: "https://ai-resume-screener.vercel.app/",
    category: "AI Automation",
    industry_tag: "HR Tech",
    challenge: "HR recruiters received 1,000+ job applications per posting, making manual screening impossible.",
    solution: "Semantic vector matching engine parsing resume PDFs against job descriptions, ranking candidates on relevant technical skills.",
    outcome: "Shortlisted top 5% qualified candidates in seconds, saving 40+ recruiting hours per hire.",
    tech_stack: ["Next.js", "Python", "FastAPI", "OpenAI API", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AI Medical Image Diagnostics Assistant",
    live_url: "https://ai-medical-diagnostics.vercel.app/",
    category: "AI Automation",
    industry_tag: "Healthcare",
    challenge: "Radiologists faced diagnostic review backlogs during peak emergency hospital shifts.",
    solution: "Deep learning Convolutional Neural Network (CNN) highlighting anomalies in chest X-rays for urgent triage priority.",
    outcome: "Prioritized critical medical emergency cases, cutting initial radiologist review time by 50%.",
    tech_stack: ["Python", "PyTorch", "DICOM API", "FastAPI", "React"],
    image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
  },

  // BUSINESS PLATFORMS & ENTERPRISE DASHBOARDS (10 Projects)
  {
    title: "TrueHRIS Enterprise HR & Attendance Platform",
    live_url: "https://truehris.com/",
    category: "Business Platforms",
    industry_tag: "Human Resources",
    challenge: "Manual attendance logging and disconnected payroll calculation spreadsheets caused monthly payout errors.",
    solution: "Centralized cloud HRIS platform automating biometric attendance ledgers, tax withholding, and direct bank payroll deposits.",
    outcome: "Eliminated payroll calculation errors and automated monthly salary processing for 500+ staff.",
    tech_stack: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Advanced Sistima Industrial Pipeline Dashboard",
    live_url: "https://advancedsistima.com/",
    category: "Enterprise Dashboards",
    industry_tag: "Manufacturing",
    challenge: "Factory floor supervisors lacked real-time visibility into machine output, leading to reactive bottleneck fixes.",
    solution: "High-concurrency IoT telemetry dashboard visualizing real-time Overall Equipment Effectiveness (OEE) metrics.",
    outcome: "Provided sub-second shop floor visibility and improved machine utilization by 26%.",
    tech_stack: ["Next.js", "Node.js", "MQTT/IoT", "PostgreSQL", "Tailwind CSS"],
    image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "The Austrades Global Procurement Hub",
    live_url: "https://www.theaustrades.com/",
    category: "Business Platforms",
    industry_tag: "Logistics & Trade",
    challenge: "B2B commodity suppliers struggled with disconnected buyer tracking and slow international quotation turnaround.",
    solution: "Secure multi-vendor trade portal with instant freight rate calculator and automated RFQ invoice generation.",
    outcome: "Centralized international trade inquiries and reduced sales quote delivery times to <10 minutes.",
    tech_stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "BookMyTask On-Demand Contractor Dispatcher",
    live_url: "https://bookmytask.in/",
    category: "Mobile Apps",
    industry_tag: "Operations & Services",
    challenge: "Manual assignment of field service technicians created scheduling conflicts and delayed customer service.",
    solution: "Cross-platform mobile application connected to an automated geo-matching dispatch server.",
    outcome: "Automated 100% of field task dispatching and improved technician arrival punctuality by 45%.",
    tech_stack: ["React Native", "Next.js", "Node.js", "PostgreSQL", "Google Maps"],
    image_url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "IraqBid Government Tender Auction Portal",
    live_url: "https://iraqbid-auction-portal.vercel.app/",
    category: "Business Platforms",
    industry_tag: "Government & Bidding",
    challenge: "Legacy paper bidding for public tenders was prone to tampering and lacked audit transparency.",
    solution: "Encrypted digital auction portal featuring real-time WebSocket bid updates and audited bid security vaults.",
    outcome: "Processed 1,200+ secure municipal tenders with 100% cryptographic audit trail compliance.",
    tech_stack: ["Next.js", "Node.js", "WebSockets", "PostgreSQL", "Redis"],
    image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "BabyBloom D2C E-Commerce Experience",
    live_url: "https://babybloom-storefront.vercel.app/",
    category: "Websites",
    industry_tag: "Retail & D2C",
    challenge: "Slow checkout speeds and mobile layout issues caused high shopping cart abandonment on mobile devices.",
    solution: "Headless Next.js storefront integrated with Shopify Plus, sub-second page loads, and one-click checkout.",
    outcome: "Increased mobile conversion rate by 38% and reduced average page load speed to 0.4 seconds.",
    tech_stack: ["Next.js", "Shopify API", "TypeScript", "Tailwind CSS"],
    image_url: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "GharJaisa Food Delivery & Cloud Kitchen Hub",
    live_url: "https://gharjaisa-cloud-kitchen.vercel.app/",
    category: "Websites",
    industry_tag: "Food & Beverage",
    challenge: "Cloud kitchen branches struggled to manage orders across multiple third-party delivery apps simultaneously.",
    solution: "Unified Kitchen Display System (KDS) synchronizing incoming orders into a single live kitchen queue.",
    outcome: "Reduced order prep time by 8 minutes per meal and eliminated missed delivery orders.",
    tech_stack: ["Next.js", "React", "Node.js", "WebSockets", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "FinTech Digital Wallet & Peer Transfer Portal",
    live_url: "https://fintech-wallet-platform.vercel.app/",
    category: "Business Platforms",
    industry_tag: "Financial Services",
    challenge: "High transaction latencies and fraud security compliance during peak peer-to-peer payment hours.",
    solution: "Event-driven microservices backend with AES-256 encryption, instant ledger settlement, and anti-fraud webhooks.",
    outcome: "Processed 500,000+ daily transactions with sub-100ms latency and zero security breaches.",
    tech_stack: ["Node.js", "Next.js", "PostgreSQL", "Redis", "Docker"],
    image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Multi-Tenant SaaS Subscription Engine",
    live_url: "https://saas-subscription-engine.vercel.app/",
    category: "Business Platforms",
    industry_tag: "SaaS Tech",
    challenge: "Startup needed a multi-tenant cloud foundation with isolated customer schemas and recurring Stripe billing.",
    solution: "Scalable Next.js & PostgreSQL multi-tenant boilerplate with automated onboarding and usage-based metering.",
    outcome: "Allowed client to launch 3 SaaS sub-products in 4 weeks on a shared secure architecture.",
    tech_stack: ["Next.js", "TypeScript", "Node.js", "Stripe API", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "B2B Commercial Fleet Asset Tracker",
    live_url: "https://fleet-asset-tracker.vercel.app/",
    category: "Enterprise Dashboards",
    industry_tag: "Transportation",
    challenge: "Logistics managers lacked real-time visibility into vehicle location status, driver hours, and fuel efficiency.",
    solution: "GPS telemetry dashboard displaying live truck locations, geofence enter/exit alerts, and automated driver logs.",
    outcome: "Improved fleet asset utilization by 30% and eliminated unauthorized personal vehicle usage.",
    tech_stack: ["Next.js", "Node.js", "Google Maps API", "TimescaleDB"],
    image_url: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
  },

  // WEBSITES & MOBILE APPS (6 Projects)
  {
    title: "HK Fabric Luxury Home Textile Showcase",
    live_url: "https://hkfabric-textiles.vercel.app/",
    category: "Websites",
    industry_tag: "Textiles",
    challenge: "B2B textile exporter needed an interactive catalog showcasing fabric weaves to international buyers.",
    solution: "High-resolution Next.js product showcase with instant sample request forms and digital swatch books.",
    outcome: "Generated 120+ international B2B buyer inquiries within 60 days of launch.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image_url: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "PharmaCare Global Corporate Portal",
    live_url: "https://pharmacare-corporate.vercel.app/",
    category: "Websites",
    industry_tag: "Healthcare",
    challenge: "Pharmaceutical brand needed a regulatory-compliant portal detailing licensed products and clinical trial data.",
    solution: "Multilingual SEO-optimized corporate platform featuring searchable drug formulas and distributor locator.",
    outcome: "Increased organic Search impressions by 250% and streamlined distributor inquiries.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Schema.org JSON-LD"],
    image_url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "TradeFlow B2B Wholesaler Platform",
    live_url: "https://tradeflow-wholesale.vercel.app/",
    category: "Business Platforms",
    industry_tag: "Wholesale Trade",
    challenge: "Bulk wholesale buyers struggled to check real-time stock levels and place custom volume orders.",
    solution: "B2B buyer portal with tier-based pricing matrices, credit limit approvals, and automated PO generation.",
    outcome: "Accelerated B2B order processing speed by 75% and reduced order error disputes.",
    tech_stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "BuildMart Construction Supplier Network",
    live_url: "https://buildmart-suppliers.vercel.app/",
    category: "Business Platforms",
    industry_tag: "Construction",
    challenge: "Building contractors lost hours calling multiple cement and steel yards for daily pricing and availability.",
    solution: "Centralized construction material marketplace with live price ticker and instant truck delivery booking.",
    outcome: "Connected 80+ building suppliers with 300+ active contractor buyers across regional sites.",
    tech_stack: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API"],
    image_url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AgroX Smart Farming Telemetry App",
    live_url: "https://agrox-smart-farming.vercel.app/",
    category: "Mobile Apps",
    industry_tag: "Agriculture",
    challenge: "Commercial farm managers lacked localized soil moisture data and weather forecasting alerts.",
    solution: "React Native mobile application connecting to field IoT moisture sensors with automated irrigation schedules.",
    outcome: "Optimized crop water consumption by 25% and improved harvest yield predictability.",
    tech_stack: ["React Native", "Node.js", "IoT MQTT API", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Pulse Mobile Doctor & Patient App",
    live_url: "https://pulse-mobile-health.vercel.app/",
    category: "Mobile Apps",
    industry_tag: "Healthcare",
    challenge: "Patients needed convenient video consultation booking and prescription access on mobile devices.",
    solution: "iOS & Android mobile app with secure WebRTC video consultations, prescription downloads, and lab sync.",
    outcome: "Achieved 4.9-star App Store rating and facilitated 15,000+ remote telehealth consultations.",
    tech_stack: ["React Native", "WebRTC", "Node.js", "PostgreSQL"],
    image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
  }
];

const categories = ["All", "ERP Systems", "AI Automation", "Business Platforms", "Enterprise Dashboards", "Mobile Apps", "Websites"];

export function PortfolioClient() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const [refreshingUrls, setRefreshingUrls] = useState<Record<string, boolean>>({});

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/projects`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      
      if (data && data.length > 5) {
        const mappedData = data.map((p: any) => ({
           ...p,
           category: p.category || "ERP Systems",
           industry_tag: p.industry_tag || p.industry || "Technology",
           challenge: p.challenge || "Optimizing operations and digital footprint.",
           solution: p.solution || p.description || "Custom business software integration.",
           outcome: p.outcome || "Improved workflow efficiency."
        }));
        setProjects(mappedData); 
      } else {
        setProjects(fallbackProjects);
      }
    } catch (e) {
      setProjects(fallbackProjects);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleRefreshScreenshot = async (url: string, projectId?: number) => {
    setRefreshingUrls(prev => ({ ...prev, [url]: true }));
    toast.loading("Capturing fresh system screenshot...", { id: `refresh-${url}` });

    try {
      const res = await fetch(`${API_BASE_URL}/api/projects/refresh-screenshot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });

      if (!res.ok) throw new Error("Server failed to refresh");
      const data = await res.json();

      setProjects(prev => prev.map(p => {
        if (p.live_url === url) {
          return { ...p, image_url: data.project.image_url };
        }
        return p;
      }));

      toast.success("Screenshot refreshed successfully!", { 
        id: `refresh-${url}`,
      });
    } catch (err: any) {
      toast.error("Screenshot refresh failed", { 
        id: `refresh-${url}`,
      });
    } finally {
      setRefreshingUrls(prev => ({ ...prev, [url]: false }));
    }
  };

  const filteredProjects = projects.filter(project => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* HERO SECTION WITH TIGHT TOP SPACING (ZERO-SCROLL HEADLINE) */}
      <section className="pt-24 sm:pt-28 pb-14 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-900/50 hover:text-slate-900 mb-6 font-black uppercase text-xs tracking-widest transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="max-w-4xl">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-3">Live Client Portfolio</div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-5 text-slate-900">
              Live Software Systems <br />
              <span className="text-[#FF5500]">& Case Studies Showcase</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 font-medium max-w-3xl leading-relaxed mb-8">
              Explore 36+ live client systems, custom ERPs, Agentic AI automation engines, and enterprise platforms engineered by Next Revolution Tech.
            </p>
            
            <div className="flex flex-wrap gap-3 items-center">
               <span className="bg-slate-100 border border-slate-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800">ERP Systems ({projects.filter(p => p.category === "ERP Systems").length})</span>
               <span className="bg-slate-100 border border-slate-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800">AI Automation ({projects.filter(p => p.category === "AI Automation").length})</span>
               <span className="bg-slate-100 border border-slate-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800">Business Platforms ({projects.filter(p => p.category === "Business Platforms").length})</span>
               <span className="bg-slate-100 border border-slate-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800">Enterprise Dashboards ({projects.filter(p => p.category === "Enterprise Dashboards").length})</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter Bar */}
      <section className="py-6 border-y border-slate-200 px-4 sm:px-6 lg:px-12 xl:px-24 sticky top-[72px] bg-white/95 backdrop-blur-md z-30 shadow-sm">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat 
                    ? "bg-orange-600 text-white shadow-md shadow-orange-600/20"
                    : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat} {cat === "All" ? `(${projects.length})` : `(${projects.filter(p => p.category === cat).length})`}
              </button>
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 uppercase">Showing {filteredProjects.length} Verified Live Systems</span>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 relative z-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-24">
          {loading ? (
            <div className="py-32 flex flex-col items-center justify-center gap-4 text-slate-400 font-bold">
              <RefreshCw className="w-10 h-10 animate-spin text-orange-600" />
              <span>Loading 36+ Live Portfolio Systems...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => {
                  const isRefreshing = refreshingUrls[project.live_url] || false;

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      key={project.live_url}
                      className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col h-full hover:shadow-xl hover:border-orange-500/50 transition-all duration-300"
                    >
                      {/* Image Preview Container */}
                      <div className="relative aspect-video bg-slate-900 overflow-hidden">
                        <Image 
                          src={project.image_url || "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"}
                          alt={`${project.title} live screenshot`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                          width={1200} 
                          height={800} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />
                        
                        <div className="absolute top-4 left-4 flex gap-2">
                           <span className="bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg shadow-md">
                             {project.category}
                           </span>
                           <span className="bg-orange-600/90 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg shadow-md">
                             {project.industry_tag}
                           </span>
                        </div>

                        <button
                          onClick={() => handleRefreshScreenshot(project.live_url, project.id)}
                          disabled={isRefreshing}
                          title="Capture Fresh Screenshot"
                          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur-md text-white border border-slate-700 flex items-center justify-center hover:bg-orange-600 hover:border-transparent transition-all cursor-pointer disabled:opacity-50 opacity-0 group-hover:opacity-100"
                        >
                          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
                        </button>
                      </div>

                      {/* Content Card Body */}
                      <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                        <div className="space-y-3">
                          <h3 className="text-xl font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                            {project.title}
                          </h3>
                          
                          <div className="space-y-2 text-xs">
                             <div>
                               <strong className="text-slate-900 block mb-0.5 font-bold uppercase tracking-wider text-[10px] text-orange-600">Challenge Solved:</strong>
                               <span className="text-slate-600 leading-relaxed font-medium line-clamp-2">{project.challenge}</span>
                             </div>
                             <div>
                               <strong className="text-slate-900 block mb-0.5 font-bold uppercase tracking-wider text-[10px] text-emerald-600">NRT Solution Built:</strong>
                               <span className="text-slate-600 leading-relaxed font-medium line-clamp-2">{project.solution}</span>
                             </div>
                          </div>

                          {/* Tech Tags */}
                          {project.tech_stack && (
                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {project.tech_stack.slice(0, 3).map((t, idx) => (
                                <span key={idx} className="bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded text-[10px] font-bold">
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <a 
                            href={project.live_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full bg-slate-900 hover:bg-orange-600 text-white text-center py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                          >
                            <span>Inspect Live System</span>
                            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 text-center bg-white text-slate-900 border-t border-slate-200">
         <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-6">
               Need a Custom ERP or AI Solution?
            </h2>
            <p className="text-lg font-medium text-slate-600 max-w-2xl mx-auto mb-10">
               Let's identify your operational bottlenecks, eliminate manual spreadsheets, and build a high-performance system for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/contact" className="bg-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-black shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                  <span>Schedule Technical Audit</span>
                  <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
