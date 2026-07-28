"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { API_BASE_URL } from "@/config";
import { FOUNDER } from "@/config/brand";
import { HOME_FAQS } from "@/data/faqs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShoppingCart,
  Workflow,
  Play,
  Clock,
  ShieldCheck,
  Award,
  Target,
  Settings,
  TrendingUp,
  Code2,
  Cpu,
  Layers,
  Globe,
  Terminal,
  Palette,
  Server,
  Cloud,
  CheckCircle,
  ExternalLink,
  Bot,
  Smartphone,
  Gavel,
  Baby,
  UtensilsCrossed,
  Sparkles,
  ZapIcon,
  Plus,
  Minus,
  MessageSquare,
  Users,
  Briefcase,
  Building2,
  Stethoscope,
  Star,
  Shield,
  Activity,
  DollarSign,
  Database,
  BarChart2,
  Calendar
} from "lucide-react";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { TiltCard } from "@/components/ui/TiltCard";

const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials), { ssr: false });
const ServicesShowcase = dynamic(() => import("@/components/ui/ServicesShowcase").then(mod => mod.ServicesShowcase), { ssr: false });

interface CountUpProps {
  end: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function CountUp({ end, decimals = 0, suffix = "", prefix = "", duration = 1.5 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / 1000;
            const percentage = Math.min(progress / duration, 1);
            
            const easeProgress = 1 - Math.pow(1 - percentage, 3);
            const currentCount = easeProgress * end;
            setCount(currentCount);
            
            if (percentage < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={elementRef} className="font-mono font-bold">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function HomeClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dashboard 3D Tilt state
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    transformStyle: "preserve-3d"
  });

  const handleDashboardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = dashboardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    const maxRotate = 8;
    const rotateX = -yPct * maxRotate;
    const rotateY = xPct * maxRotate;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
      transformStyle: "preserve-3d"
    });
  };

  const handleDashboardMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
      transformStyle: "preserve-3d"
    });
  };

  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    message: ""
  });
  const [leadStatus, setLeadStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadStatus('loading');
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadForm.name,
          email: leadForm.email,
          whatsapp: leadForm.whatsapp,
          company: leadForm.company,
          message: `[LEAD MAGNET: FREE TECHNICAL AUDIT] ${leadForm.message}`
        }),
      });
      if (!response.ok) throw new Error('Failed to send');
      setLeadStatus('success');
      toast.success("Audit Session Requested!", { 
        description: "Muhammad Ahsan Khan or an NRT lead architect will reach out within 24 hours.",
        style: { background: '#0F172A', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }
      });
      setLeadForm({ name: "", email: "", whatsapp: "", company: "", message: "" });
      setIsAuditModalOpen(false);
    } catch (error) {
      setLeadStatus('error');
      toast.error("Transmission Error", { description: "Please try again or connect via WhatsApp directly." });
    } finally {
      setLeadStatus('idle');
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });

      tl.from(headlineRef.current, {
        y: 50,
        opacity: 0,
        delay: 0.3
      })
      .from(subtextRef.current, {
        y: 25,
        opacity: 0,
        duration: 1
      }, "-=0.8")
      .from(ctaRef.current, {
        y: 25,
        opacity: 0,
        duration: 1
      }, "-=0.8");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const clientLogos = [
    { name: "HK FABRIC", category: "HOME TEXTILE", icon: "HK" },
    { name: "PHARMA CARE", category: "HEALTHCARE", icon: "➕" },
    { name: "TradeFlow", category: "DISTRIBUTION", icon: "❖" },
    { name: "BuildMart", category: "CONSTRUCTION", icon: "📦" },
    { name: "AgroX", category: "AGRICULTURE", icon: "🌱" }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden text-slate-900 font-sans selection:bg-orange-600 selection:text-white">
      
      {/* HERO SECTION - LIGHT THEME WITH BALANCED TOP SPACING & HUMAN-DESIGNED SHOWCASE */}
      <section ref={heroRef} className="relative pt-36 sm:pt-40 lg:pt-36 pb-14 px-4 sm:px-6 lg:px-12 xl:px-24 overflow-hidden bg-white">
        {/* LIGHT AMBIENT GLOW ACCENTS (CONTAINED) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
          
          {/* ORBITAL BACKGROUND LINES */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block opacity-20">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              <ellipse cx="250" cy="250" rx="220" ry="140" fill="none" stroke="#FF5500" strokeWidth="1.5" strokeDasharray="6 6" />
              <ellipse cx="250" cy="250" rx="200" ry="220" fill="none" stroke="#0284C7" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <div className="mx-auto max-w-5xl relative z-10 text-center">
          <div className="space-y-8">
            
            {/* TOP TRUSTED BADGE */}
            <div className="inline-flex items-center gap-2.5 bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold px-5 py-2 rounded-full shadow-sm">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Trusted by Growing Businesses Worldwide</span>
            </div>

            {/* HEADLINE */}
            <h1 ref={headlineRef} className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-slate-900 mx-auto max-w-4xl">
              Scale Faster With <br />
              <span className="text-[#FF5500] font-black">ERP Systems, AI Automation</span> <br />
              & Dedicated Teams
            </h1>

            {/* SUBTITLE */}
            <p ref={subtextRef} className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              We build intelligent ERP solutions, AI-powered automation, and high-performing development teams that drive efficiency, reduce costs, and accelerate growth.
            </p>

            {/* ACTION BUTTONS */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <button 
                onClick={() => setIsAuditModalOpen(true)}
                className="bg-[#FF5500] hover:bg-orange-600 text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-orange-600/25 flex items-center justify-center gap-3 transition-all hover:scale-[1.03] cursor-pointer group w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5" />
                <span>BOOK A FREE TECHNICAL AUDIT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a 
                href="https://wa.me/923442013217?text=Hi NRT, I want to talk to an AI & ERP expert." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-slate-200/80 border border-slate-300 text-slate-900 font-bold text-base px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all cursor-pointer group w-full sm:w-auto"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>TALK TO AN EXPERT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* 4 FEATURE BADGES GRID */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2.5 bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold text-slate-800 shadow-sm">
                <Shield className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold text-slate-800 shadow-sm">
                <Zap className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>AI Automation</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold text-slate-800 shadow-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Scalable Systems</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-bold text-slate-800 shadow-sm">
                <Users className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Dedicated Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS BAR ("TRUSTED BY BUSINESSES ACROSS INDUSTRIES" - LIGHT THEME) */}
      <section className="bg-slate-50 border-y border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest text-center md:text-left shrink-0">
            TRUSTED BY BUSINESSES ACROSS INDUSTRIES
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {clientLogos.map((brand, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700 group cursor-default">
                <span className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center font-black text-xs text-orange-600 group-hover:scale-110 transition-transform">
                  {brand.icon}
                </span>
                <div>
                  <span className="text-sm font-black text-slate-900 block leading-none">{brand.name}</span>
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block mt-0.5">{brand.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS COUNTER BAR (TRUTHFUL & CREDIBLE NRT METRICS) */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 sm:grid-cols-5 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-[#FF5500]">
              <CountUp end={50} suffix="+" />
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Enterprise Systems Built</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-slate-900">
              <CountUp end={100} suffix="%" />
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Code Ownership</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-[#FF5500]">
              <CountUp end={99.8} decimals={1} suffix="%" />
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">System Telemetry & Uptime</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-cyan-600">
              24/7
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Expert Support</div>
          </div>

          <div className="col-span-2 sm:col-span-1 space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">
              $0
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Recurring License Fees</div>
          </div>
        </div>
      </section>

      {/* SOLUTION FINDER CARD */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 group">
            <div className="relative z-10 max-w-2xl text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 border border-orange-600/30 text-orange-400 font-bold text-xs uppercase tracking-widest">
                <Bot className="w-4 h-4 text-orange-500" /> AI Digital Strategist
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Not sure which solution your business needs?
              </h2>
              <p className="text-base text-slate-300 font-medium leading-relaxed">
                Answer 5 quick questions about your operational friction to receive a custom digital roadmap and suggested architecture.
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full lg:w-auto flex justify-center">
              <Link 
                href="/solution-finder" 
                className="inline-flex items-center gap-2 bg-[#FF5500] hover:bg-orange-600 text-white font-black px-8 py-4 rounded-2xl text-base shadow-xl shadow-orange-600/30 transition-all hover:scale-105"
              >
                <span>Find My Solution</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* SPECIAL OFFER SECTION ($200 WEBSITE - LIGHT THEME CONTAINER) */}
      <ScrollReveal>
        <section id="website-offer" className="py-20 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                 <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-sm uppercase tracking-wider">
                       <span>🔥</span> Limited Time Executive Offer
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1]">
                       Complete Business Website for just <span className="text-[#FF5500]">$200</span>
                    </h2>
                    <p className="text-base text-slate-300 max-w-xl">
                       Get your business online in just days! Our all-inclusive package comes with a premium custom design, 1-year domain name, and blazing fast secure hosting.
                    </p>
                    
                    <ul className="space-y-3 pt-2">
                       {[
                         "Free 1-Year .com Domain & Premium Hosting",
                         "Mobile-Responsive Premium Design (5-7 Pages)",
                         "SEO Optimized & Fast Loading Speed",
                         "WhatsApp Integration & Lead Capture Forms"
                       ].map((feature, i) => (
                         <li key={i} className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                            <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                            <span>{feature}</span>
                         </li>
                       ))}
                    </ul>
                    
                    <div className="pt-4">
                      <a 
                        href="https://wa.me/923442013217?text=Hi NRT, I want to claim the $200 Complete Website Offer for my business." 
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[#FF5500] hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-xl shadow-orange-600/30 hover:scale-105 transition-all gap-2"
                      >
                         <span>Claim Offer on WhatsApp</span>
                         <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                 </div>
                 
                 <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Business / Corporate", icon: <Briefcase className="w-6 h-6 text-blue-400" /> },
                      { title: "E-Commerce Store", icon: <ShoppingCart className="w-6 h-6 text-emerald-400" /> },
                      { title: "Restaurant / Cafe", icon: <UtensilsCrossed className="w-6 h-6 text-orange-400" /> },
                      { title: "Real Estate Listings", icon: <Building2 className="w-6 h-6 text-purple-400" /> },
                      { title: "Clinic / Healthcare", icon: <Stethoscope className="w-6 h-6 text-cyan-400" /> }
                    ].map((type, i) => (
                      <div key={i} className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl flex flex-col gap-3 group">
                         <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform">
                            {type.icon}
                         </div>
                         <h3 className="text-base font-bold text-white">{type.title}</h3>
                         <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Included in Package</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      </ScrollReveal>

      {/* SERVICES SHOWCASE */}
      <ServicesShowcase />

      {/* VALUE DRIVERS ("HOW WE HELP BUSINESSES GROW" - LIGHT THEME) */}
      <ScrollReveal>
        <section className="py-20 bg-slate-50 relative border-b border-slate-200 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
               <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600">Value Drivers</div>
               <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                 How We Help Businesses <span className="text-[#FF5500]">Grow</span>
               </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-4 shadow-lg hover:border-orange-500/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600">
                   <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Optimize Operations</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Implement ERP systems that centralize data, streamline workflows and improve operational visibility.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-4 shadow-lg hover:border-orange-500/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-600">
                   <ZapIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Automate Workflows</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Reduce repetitive manual tasks using AI automation and intelligent autonomous agents.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-4 shadow-lg hover:border-orange-500/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-600">
                   <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Extend Your Team</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Scale engineering capacity with dedicated developers, architects and technical specialists.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PRICING & ENGAGEMENT PACKAGES PREVIEW (LIGHT THEME) */}
      <ScrollReveal>
        <section className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600 mb-3">Transparent Pricing & Plans</div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                  Flexible <span className="text-[#FF5500]">Engagement Packages</span>
                </h2>
                <p className="text-slate-600 text-sm max-w-2xl mt-2 font-medium">
                  Tailored software development, AI automation, and dedicated team options with 100% IP ownership and zero hidden license fees.
                </p>
              </div>
              <Link 
                href="/pricing" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#FF5500] hover:bg-orange-600 px-6 py-3.5 rounded-2xl transition-all shadow-lg shadow-orange-600/25 hover:scale-105 shrink-0"
              >
                <span>EXPLORE ALL PRICING & PACKAGES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* PACK 1: CUSTOM ERP & SOFTWARE */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-orange-500/50 transition-all space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    Bespoke Enterprise
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">Custom ERP & Core Software</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Full-cycle custom ERP, MRP II, CRM, or POS development built specifically for your business processes.
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-slate-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>100% Source Code & IP Ownership</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Zero Recurring License Fees</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>FBR Tax Sync & Multi-Branch POS</span>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/pricing" 
                  className="w-full bg-slate-900 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>View Package Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* PACK 2: AGENTIC AI & WORKFLOWS */}
              <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden space-y-6">
                <div className="absolute top-4 right-4 bg-orange-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
                    Autonomous Automation
                  </span>
                  <h3 className="text-2xl font-black text-white">Agentic AI & Workflows</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Deploy intelligent AI agents for WhatsApp lead qualification, automated invoicing, and database triggers.
                  </p>
                  <div className="pt-2 border-t border-slate-800 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-slate-200 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>24/7 Autonomous Lead & Support Bot</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Automated Document OCR Parsing</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Zero-Data Retention Security</span>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/pricing" 
                  className="w-full bg-[#FF5500] hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-600/30"
                >
                  <span>View AI Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* PACK 3: DEDICATED TEAMS */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-orange-500/50 transition-all space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                    Staff Augmentation
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">Dedicated Developer Teams</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Hire pre-vetted Next.js, Node.js, Python, or Mobile engineers integrated directly into your workflow.
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-slate-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>48-Hour Rapid Onboarding</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>Full Time (160 Hrs/Mo) or Part Time</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>Direct Slack & Jira Management</span>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/dedicated-teams" 
                  className="w-full bg-slate-900 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Hire Dedicated Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* INDUSTRY SOLUTIONS SHOWCASE (LIGHT THEME) */}
      <ScrollReveal>
        <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600 mb-3">Vertical Industry Platforms</div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                  Pre-Built Industry <span className="text-[#FF5500]">ERP Engines</span>
                </h2>
                <p className="text-slate-600 text-sm max-w-2xl mt-2 font-medium">
                  Field-tested enterprise software modules tailored to school management, hospitals, manufacturing, retail, and logistics.
                </p>
              </div>
              <Link 
                href="/solution-finder" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 px-6 py-3.5 rounded-2xl transition-all shadow-sm shrink-0"
              >
                <span>EXPLORE SOLUTION FINDER</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "School ERP & LMS", desc: "Automated fee collection, student portal, attendance, and exam management.", link: "/industries/school-erp", icon: <Building2 className="w-6 h-6 text-orange-600" /> },
                { title: "Healthcare & Hospital ERP", desc: "EMR patient records, lab test workflow, pharmacy stock, and bed allocation.", link: "/industries/hospital-erp", icon: <Stethoscope className="w-6 h-6 text-cyan-600" /> },
                { title: "Manufacturing & MRP II", desc: "BOM production planning, raw material tracking, and yield cost analysis.", link: "/industries/manufacturing-erp", icon: <Cpu className="w-6 h-6 text-indigo-600" /> },
                { title: "Retail & Multi-Store POS", desc: "Real-time barcode inventory, FBR POS integration, and branch sync.", link: "/industries/retail-erp", icon: <ShoppingCart className="w-6 h-6 text-emerald-600" /> },
                { title: "Logistics & WMS", desc: "Fleet tracking, automated bill of lading, and warehouse stock management.", link: "/industries/logistics-erp", icon: <Globe className="w-6 h-6 text-blue-600" /> },
                { title: "Custom SaaS & Web Portals", desc: "Scalable multi-tenant cloud software with subscription billing & analytics.", link: "/services/saas-development", icon: <Cloud className="w-6 h-6 text-purple-600" /> }
              ].map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.link} 
                  className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-4 hover:border-orange-500/50 hover:bg-white transition-all shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-orange-600 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-600" />
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FEATURED PROJECTS (LIGHT THEME) */}
      <ScrollReveal>
        <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600 mb-3">Portfolio Highlights</div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
                  Featured <span className="text-[#FF5500]">Client Showcase</span>
                </h2>
              </div>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-orange-600 px-6 py-3.5 rounded-xl transition-all shadow-md"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Pulse Healthcare ERP",
                  category: "Enterprise / SaaS",
                  impact: "Reduced overhead by 40%",
                  image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422316/nrt-portfolio/ev6sddad59sg3uij5e89.png"
                },
                {
                  title: "BabyBloom Marketplace",
                  category: "eCommerce / Web",
                  impact: "45% More Conversions",
                  image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422324/nrt-portfolio/fxrl8jxwne52fpd0vq1t.png"
                },
                {
                  title: "IraqBid: Auction App",
                  category: "Mobile / Real-time",
                  impact: "Zero-latency bidding engine",
                  image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422323/nrt-portfolio/ynlxrffuhffwgf0zl60v.png"
                }
              ].map((project, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-orange-500/50 transition-colors">
                  <div className="relative aspect-video overflow-hidden bg-slate-100 border-b border-slate-200">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      width={800} height={600} 
                    />
                    <span className="absolute bottom-3 left-3 bg-orange-600 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                    <p className="text-xs text-slate-600 font-medium">{project.impact}</p>
                    <Link href="/case-studies" className="text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-slate-900 transition-colors inline-flex items-center gap-1.5 pt-2">
                      <span>Inspect System</span> <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* HOME FREQUENTLY ASKED QUESTIONS */}
      <ScrollReveal>
        <section className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 text-center space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600">Got Questions?</div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                Frequently Asked <span className="text-[#FF5500]">Questions</span>
              </h2>
              <p className="text-slate-600 text-sm font-medium">
                Everything you need to know about working with Next Revolution Tech.
              </p>
            </div>

            <div className="space-y-4">
              {HOME_FAQS.slice(0, 6).map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx} 
                    itemScope 
                    itemType="https://schema.org/Question"
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left font-black text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span itemProp="name">{faq.q}</span>
                      <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-sm shrink-0">
                        {isOpen ? <Minus className="w-4 h-4 text-orange-600" /> : <Plus className="w-4 h-4 text-slate-600" />}
                      </span>
                    </button>
                    <div 
                      itemScope 
                      itemProp="acceptedAnswer" 
                      itemType="https://schema.org/Answer"
                      className={`px-6 pb-6 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-medium ${isOpen ? "block" : "hidden"}`}
                    >
                      <div itemProp="text">{faq.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <Testimonials limit={6} theme="light" />

      {/* PRE-FOOTER CTA */}
      <PreFooterCTA />

      {/* AUDIT REQUEST MODAL */}
      <Dialog open={isAuditModalOpen} onOpenChange={setIsAuditModalOpen}>
        <DialogContent className="bg-white border border-slate-200 text-slate-900 sm:max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto z-[100]">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-600" />
              <span>Book Strategy Call</span>
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-600 font-medium">
              Schedule a 30-minute technical session directly with Founder Muhammad Ahsan Khan.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleLeadSubmit} className="space-y-4 pt-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={leadForm.name}
                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
              <input
                type="email"
                required
                value={leadForm.email}
                onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                placeholder="john@enterprise.com"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone *</label>
              <input
                type="tel"
                required
                value={leadForm.whatsapp}
                onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Company / Project Summary</label>
              <textarea
                rows={3}
                value={leadForm.message}
                onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                placeholder="Describe your operational friction or project requirements..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
              />
            </div>

            <button
              type="submit"
              disabled={leadStatus === 'loading'}
              className="w-full bg-[#FF5500] hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 text-sm transition-all disabled:opacity-50"
            >
              {leadStatus === 'loading' ? 'Submitting...' : 'Request Free Audit Session'}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}