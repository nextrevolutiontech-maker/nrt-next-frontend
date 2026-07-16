"use client";
import dynamic from "next/dynamic";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials), { ssr: false });
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { API_BASE_URL } from "@/config";
import { FOUNDER } from "@/config/brand";
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
  Stethoscope
} from "lucide-react";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
const InteractiveHero3D = dynamic(() => import("@/components/ui/InteractiveHero3D").then(mod => mod.InteractiveHero3D), { ssr: false });
import { Magnetic } from "@/components/ui/Magnetic";
import { TiltCard } from "@/components/ui/TiltCard";
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
            
            // Easing out cubic: 1 - Math.pow(1 - x, 3)
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
    <span ref={elementRef} className="font-mono">
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

  // Live pipeline task queue state
  const [pipelineTasks, setPipelineTasks] = useState([
    { name: "Deploy Vercel Edge Cache", status: "Active" as const, val: 88, color: "bg-orange-600" },
    { name: "Optimize PostgreSQL queries", status: "Review" as const, val: 100, color: "bg-emerald-500" },
    { name: "Integrate Stripe billing flow", status: "Testing" as const, val: 65, color: "bg-purple-500" }
  ]);

  // Dashboard 3D Tilt state
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    transformStyle: "preserve-3d"
  });
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isDashboardHovered, setIsDashboardHovered] = useState(false);

  // Simulate active work progress on pipeline tasks
  useEffect(() => {
    const interval = setInterval(() => {
      setPipelineTasks(prevTasks =>
        prevTasks.map(task => {
          if (task.status === "Active") {
            const nextVal = task.val >= 99 ? 60 : task.val + 1;
            return { ...task, val: nextVal };
          }
          if (task.status === "Testing") {
            const nextVal = task.val >= 95 ? 40 : task.val + 2;
            const nextStatus = nextVal > 85 ? ("Review" as const) : ("Testing" as const);
            return { ...task, val: nextVal, status: nextStatus };
          }
          if (task.status === "Review") {
            if (task.val < 100) return { ...task, val: 100 };
            if (Math.random() > 0.8) {
              return { ...task, status: "Active" as const, val: 50 };
            }
          }
          return task;
        })
      );
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const handleDashboardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = dashboardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized position from -0.5 to 0.5
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    const maxRotate = 10; // Subtle but noticeable 3D tilt
    const rotateX = -yPct * maxRotate;
    const rotateY = xPct * maxRotate;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
      transformStyle: "preserve-3d"
    });

    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleDashboardMouseEnter = () => {
    setIsDashboardHovered(true);
  };

  const handleDashboardMouseLeave = () => {
    setIsDashboardHovered(false);
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
          message: `[LEAD MAGNET: FREE SOFTWARE AUDIT] ${leadForm.message}`
        }),
      });
      if (!response.ok) throw new Error('Failed to send');
      setLeadStatus('success');
      toast.success("Audit Session Requested!", { 
        description: "Ahsan Khan or an NRT architect will reach out within 24 hours to schedule your session.",
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
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });

      tl.from(headlineRef.current, {
        y: 100,
        opacity: 0,
        skewY: 7,
        stagger: 0.2,
        delay: 0.5
      })
      .from(subtextRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2
      }, "-=1")
      .from(ctaRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2
      }, "-=1");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const ctaLinks = {
    test: "/contact?type=test",
    started: "/contact?type=full"
  };

  const services = [
    "JavaScript", "Frontend Development", "PHP", "Node.js", "Backend Development", 
    "API Development", "API Integration", "React.js", "Web Development", 
    "Payment Gateway Integration", "Next.js", "Tailwind CSS", "Web Design", 
    "Python", ".NET", "Graphic Design", "Mobile App Development", "Android", 
    "WordPress", "CSS", "User Interface / IA", "eCommerce", "ERP", "MySQL", 
    "HTML5", "HTML", "Shopify", "Software Development", "Laravel", 
    "Full Stack Development", "React Native", "Flutter", "React.js Framework", 
    "Shopify Development", "Figma", "Chatbot", "WordPress Design", "MERN Stack", 
    "NLP", "SaaS", "REST API", "Website Development", "AI Agents", "Agentic AI"
  ];

  const teamRoles = [
    { role: "Frontend Developer", icon: <Code2 className="w-6 h-6" /> },
    { role: "Backend Developer", icon: <Terminal className="w-6 h-6" /> },
    { role: "UI/UX Designer", icon: <Palette className="w-6 h-6" /> },
    { role: "DevOps Engineer", icon: <Cloud className="w-6 h-6" /> },
    { role: "Quality Engineer", icon: <ShieldCheck className="w-6 h-6" /> },
    { role: "Product Manager", icon: <Target className="w-6 h-6" /> }
  ];

  const featuredProjects = [
    {
      title: "Pulse Healthcare ERP",
      category: "Enterprise / SaaS",
      impact: "Reduced overhead by 40%",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422316/nrt-portfolio/ev6sddad59sg3uij5e89.png",
      color: "bg-orange-600"
    },
    {
      title: "BabyBloom Marketplace",
      category: "eCommerce / Web",
      impact: "45% More Conversions",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422324/nrt-portfolio/fxrl8jxwne52fpd0vq1t.png",
      color: "bg-orange-600"
    },
    {
      title: "IraqBid: Auction App",
      category: "Mobile / Real-time",
      impact: "Zero-latency bidding",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422323/nrt-portfolio/ynlxrffuhffwgf0zl60v.png",
      color: "bg-white"
    }
  ];

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'weekly'>('monthly');

  const plans = [
    { name: "Starter", price: billingCycle === 'monthly' ? "$1,000" : "$299", period: billingCycle === 'monthly' ? "/mo" : "/wk", color: "from-[#6366f1] to-[#a855f7]", features: ["Unlimited Small Tasks", "Basic API Integrations", "Dedicated Project Manager", "48h Turnaround Time"] },
    { name: "Performance Pro", price: billingCycle === 'monthly' ? "$1,500" : "$449", period: billingCycle === 'monthly' ? "/mo" : "/wk", color: "from-[#11998E] to-[#38EF7D]", features: ["Core Web Vitals Boost", "Security & Firewall Audit", "24/7 Uptime Monitoring", "Database Optimization"] },
    { name: "Growth", price: billingCycle === 'monthly' ? "$2,000" : "$599", period: billingCycle === 'monthly' ? "/mo" : "/wk", color: "from-[#3A5CCC] to-[#27324A]", featured: true, features: ["Full Stack Development", "Custom API & Webhooks", "Weekly Strategy Calls", "Priority Support Queue"] },
    { name: "AI Automation", price: billingCycle === 'monthly' ? "$2,500" : "$749", period: billingCycle === 'monthly' ? "/mo" : "/wk", color: "from-[#8E2DE2] to-[#4A00E0]", features: ["Custom AI Agent Build", "Workflow Automation", "LLM Integration (GPT/Claude)", "AI-Driven Insights"] },
    { name: "Scale", price: billingCycle === 'monthly' ? "$3,500" : "$999", period: billingCycle === 'monthly' ? "/mo" : "/wk", color: "from-[#0ea5e9] to-[#2563eb]", features: ["Entire Technical Team", "Unlimited Complex Tasks", "Architectural Consulting", "Fastest 24h Turnaround"] },
    { name: "Custom Project", price: "Custom", period: "", color: "bg-white border-2 border-slate-900", features: ["Fixed Scope Execution", "Zero-to-One MVP Build", "Legacy Code Migration", "Dedicated Sprint Team"] }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden text-[#0f172a]">
      

      {/* Hero Section - Restored Dark */}
      <section ref={heroRef} className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 xl:px-24 overflow-hidden bg-white">
        <InteractiveHero3D />
        
        {/* Ambient Overlay - Neutralized */}
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
               <h1 ref={headlineRef} className="text-4xl sm:text-6xl xl:text-[5.5rem] font-black leading-[1.05] tracking-tighter mb-8 sm:mb-10 text-[#0f172a]">
                 Scale Faster With <br className="hidden sm:block" />
                 <span className="text-orange-600">ERP Systems, AI Automation</span> <br className="hidden sm:block" />
                 & Dedicated Teams
               </h1>
              <p ref={subtextRef} className="text-lg sm:text-xl xl:text-2xl text-slate-700 text-nrt-body mb-10 sm:mb-14 max-w-[800px] leading-relaxed font-medium">
                We help growing businesses eliminate operational bottlenecks, automate workflows, centralize business processes and accelerate growth through ERP systems, AI automation and custom software solutions.
              </p>
               <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 sm:mb-20 justify-center">
                 <Magnetic>
                   <button 
                     onClick={() => setIsAuditModalOpen(true)}
                     className="btn-primary-nrt px-10 py-5 text-lg cursor-pointer flex items-center justify-center text-white shadow-[0_10px_40px_rgba(20,184,166,0.3)] hover:scale-105 transition-all"
                   >
                     Book Strategy Call
                     <ArrowRight className="w-5 h-5 ml-3 animate-pulse" />
                   </button>
                 </Magnetic>
                 <Magnetic>
                    <Link href="/case-studies" className="btn-secondary-nrt px-10 py-5 text-lg shadow-xl backdrop-blur-md">
                      View Enterprise Case Studies
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </Link>
                  </Magnetic>
               </div>
               
               <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 border-t border-slate-300 pt-10 sm:pt-12 w-full max-w-3xl mx-auto">
                  <div className="flex -space-x-3 sm:-space-x-4">
                     {[
                       'https://randomuser.me/api/portraits/men/32.jpg',
                       'https://randomuser.me/api/portraits/women/44.jpg',
                       'https://randomuser.me/api/portraits/men/46.jpg',
                       'https://randomuser.me/api/portraits/women/68.jpg',
                       'https://randomuser.me/api/portraits/men/90.jpg'
                     ].map((imgUrl, i) => (
                       <img 
                         key={i} 
                         src={imgUrl}
                         alt={`Trusted client ${i + 1}`}
                         className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-white shadow-md object-cover hover:-translate-y-1 hover:z-10 relative transition-all duration-300"
                       />
                     ))}
                  </div>
                   <div className="space-y-1 text-left">
                      <div className="text-base sm:text-lg font-medium text-slate-700 italic">&ldquo;The most reliable technical partner we&apos;ve integrated.&rdquo;</div>
                      <div className="flex items-center gap-2 text-slate-600 text-nrt-label mt-2">
                         <span className="text-slate-800">Global Delivery</span>
                         <span>|</span>
                         <span>Trusted by 50+ Enterprises</span>
                      </div>
                   </div>      
                </div>
          </div>
        </div>
      </section>

      {/* Floating Solution Finder CTA - Integrated below Hero */}
      <div className="relative z-20 -mt-8 sm:-mt-12 mb-16 sm:mb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-700/50 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 group">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 opacity-20 bg-[url('/noise.svg')] pointer-events-none mix-blend-overlay" />
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/30 transition-colors duration-700" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-orange-600/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
                <Bot className="w-4 h-4 text-primary" /> AI Digital Strategist
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white mb-4">
                Not sure which solution your business needs?
              </h2>
              <p className="text-lg text-slate-300 font-medium leading-relaxed">
                Answer 5 quick questions about your operations and receive a custom digital roadmap, suggested team structure, and exact timeline.
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full lg:w-auto flex justify-center">
              <Link 
                href="/solution-finder" 
                className="w-full lg:w-auto inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-50 px-8 py-5 rounded-2xl text-xl font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:-translate-y-1 transition-all duration-300 gap-3"
              >
                Find My Solution <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>



      {/* Special Offer Section */}
      <ScrollReveal>
        <section id="website-offer" className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
           <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.svg')]" />
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
           
           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                 <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-sm uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(234,88,12,0.1)]">
                       <span className="animate-pulse">🔥</span> Limited Time Offer
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                       Complete Business Website for just <span className="text-orange-500">$200</span>
                    </h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-xl">
                       Get your business online in just days! Our all-inclusive package comes with a premium custom design, 1-year domain name, and blazing fast secure hosting.
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                       {[
                         "Free 1-Year .com Domain & Premium Hosting",
                         "Mobile-Responsive Premium Design (5-7 Pages)",
                         "SEO Optimized & Fast Loading Speed",
                         "WhatsApp Integration & Lead Capture Forms"
                       ].map((feature, i) => (
                         <li key={i} className="flex items-center gap-3 text-slate-200">
                            <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                            <span className="font-medium">{feature}</span>
                         </li>
                       ))}
                    </ul>
                    
                    <a 
                      href="https://wa.me/923442013217?text=Hi NRT, I want to claim the $200 Complete Website Offer for my business." 
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:scale-105 transition-all"
                    >
                       Claim Offer on WhatsApp
                       <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                 </div>
                 
                 <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Business / Corporate", icon: <Briefcase className="w-6 h-6 text-blue-400" /> },
                      { title: "E-Commerce Store", icon: <ShoppingCart className="w-6 h-6 text-green-400" /> },
                      { title: "Restaurant / Cafe", icon: <UtensilsCrossed className="w-6 h-6 text-orange-400" /> },
                      { title: "Real Estate Listings", icon: <Building2 className="w-6 h-6 text-indigo-400" /> },
                      { title: "Clinic / Healthcare", icon: <Stethoscope className="w-6 h-6 text-teal-400" /> }
                    ].map((type, i) => (
                      <div key={i} className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col gap-3 group">
                         <div className="w-12 h-12 rounded-full bg-slate-900/80 flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform">
                            {type.icon}
                         </div>
                         <h3 className="text-lg font-bold text-white">{type.title}</h3>
                         <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Included in Package</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      </ScrollReveal>

      {/* Trust Stats Bar - Redesigned Dark & Premium */}
      <ScrollReveal>
        <section className="py-8 sm:py-10 bg-white border-y border-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.25)]">
           <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center gap-12 sm:gap-24">
              {[
                { end: 150, decimals: 0, suffix: "+", label: "Projects Delivered" },
                { end: 45, decimals: 0, suffix: "", label: "Active Systems" },
                { end: 1.2, decimals: 1, suffix: "M+", label: "Automations Running" },
                { end: 99.9, decimals: 1, suffix: "%", label: "Client Satisfaction" }
              ].map((stat, i) => (
                <div key={i} className="text-center min-w-[140px]">
                   <div className="text-3xl sm:text-4xl font-black tracking-tighter text-orange-600 mb-2">
                     <CountUp end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
                   </div>
                   <div className="text-[11px] font-black uppercase tracking-widest text-slate-600">{stat.label}</div>
                </div>
              ))}
           </div>
        </section>
      </ScrollReveal>

      {/* Interactive Services Showcase */}
      <ServicesShowcase />

      {/* How We Help Businesses Grow Section */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-white relative border-b border-slate-300 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 text-center max-w-3xl mx-auto">
               <div className="text-nrt-eyebrow text-[#0f172a] mb-6">Value Drivers</div>
               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0f172a] leading-tight">
                 How We Help Businesses <span className="text-orange-600">Grow</span>
               </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-nrt flex flex-col group">
                <div className="card-icon-nrt">
                   <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-[#0f172a]">Optimize Operations</h3>
                <p className="text-slate-600 text-nrt-body">
                  Implement ERP systems that centralize data, streamline workflows and improve visibility.
                </p>
              </div>
              <div className="card-nrt flex flex-col group">
                <div className="card-icon-nrt">
                   <ZapIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-[#0f172a]">Automate Workflows</h3>
                <p className="text-slate-600 text-nrt-body">
                  Reduce repetitive tasks using AI automation and intelligent business processes.
                </p>
              </div>
              <div className="card-nrt flex flex-col group">
                <div className="card-icon-nrt">
                   <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-[#0f172a]">Extend Your Team</h3>
                <p className="text-slate-600 text-nrt-body">
                  Scale development capacity with dedicated engineers, designers and technical specialists.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Logo Marquee - Compact & Spaced */}
      <ScrollReveal>
        <section className="py-6 sm:py-8 overflow-hidden bg-white relative border-b border-slate-300">
          <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
          <div className="text-nrt-eyebrow text-slate-600 text-center mb-5 relative z-10">
             Platforms we integrate
          </div>
          <div className="relative flex overflow-hidden z-10 w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div 
              className="flex w-max items-center gap-16 px-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              {[
                { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
                { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" },
                { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
                { name: "PayPal", logo: "https://cdn.worldvectorlogo.com/logos/paypal-3.svg" },
                { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" },
                { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
                { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" },
                { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
                { name: "PayPal", logo: "https://cdn.worldvectorlogo.com/logos/paypal-3.svg" },
                { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" },
                { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
                { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" },
                { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
                { name: "PayPal", logo: "https://cdn.worldvectorlogo.com/logos/paypal-3.svg" },
                { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" }
              ].map((brand, i) => (
                <div key={i} className="flex items-center gap-3.5 group shrink-0">
                  <img src={brand.logo} alt={brand.name} loading="lazy" className="h-6 sm:h-7 w-auto transition-transform duration-500 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0" />
                  <span className="text-sm font-semibold tracking-tighter text-slate-500 group-hover:text-[#0f172a] transition-colors uppercase">{brand.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 sm:py-24 relative overflow-hidden bg-white border-b border-slate-300">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="mx-auto max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
               <div className="text-nrt-eyebrow text-orange-600 mb-6">Business Growth Solutions</div>
               <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0f172a] leading-[1.08] mb-8">
                 Built for <span className="text-orange-600">Outcomes</span>, <br />Not Just Output.
               </h2>
               <p className="text-lg sm:text-xl text-nrt-body text-slate-700 max-w-2xl leading-relaxed">
                 We don't just write code. We implement systems that reduce manual work, increase visibility, and scale operations across your entire organization.
               </p>
            </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: ERP & Business Automation - Large Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-300 text-slate-900 p-8 sm:p-10 border border-slate-300 shadow-2xl flex flex-col justify-between group col-span-1 md:col-span-2 lg:col-span-2 min-h-[400px] hover:-translate-y-1.5 hover:border-orange-600/50 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Coded Visual Mockup */}
                 <div className="flex flex-col sm:flex-row gap-6 items-center w-full max-w-[550px] mx-auto mb-8 sm:mb-0">
                    {/* Invoice Panel */}
                    <div className="w-full sm:w-1/2 bg-slate-100/80 border border-slate-300 rounded-2xl p-5 font-mono text-[10px] space-y-4">
                       <div className="flex justify-between border-b border-slate-300 pb-3">
                          <span className="text-slate-500">Invoice #NRT-8842</span>
                          <span className="text-orange-500 font-bold">PAID</span>
                       </div>
                       <div className="space-y-2">
                          <div className="flex justify-between">
                             <span className="text-slate-700">Premium Development</span>
                             <span className="text-[#0f172a]">$1,500.00</span>
                          </div>
                          <div className="flex justify-between text-slate-500 text-[9px]">
                             <span>Sprint Capacity (1 wk)</span>
                             <span>Included</span>
                          </div>
                       </div>
                       <div className="border-t border-slate-300 pt-3 flex justify-between font-bold text-xs text-[#0f172a]">
                          <span>Total</span>
                          <span>$1,500.00</span>
                       </div>
                    </div>
                    {/* Sleek Credit Card */}
                    <div className="w-full sm:w-1/2 bg-gradient-to-tr from-[#3A5CCC] to-[#1d2d63] border border-black/15 rounded-2xl p-5 flex flex-col justify-between aspect-[1.58/1] shadow-2xl text-[#0f172a]">
                       <div className="flex justify-between items-start">
                          <ShoppingCart className="w-6 h-6 text-[#0f172a]" />
                          <span className="text-[8px] font-black tracking-widest uppercase opacity-80">Corporate</span>
                       </div>
                       <div className="space-y-2">
                          <div className="text-sm font-bold tracking-widest">•••• •••• •••• 8842</div>
                          <div className="flex justify-between text-[8px] uppercase tracking-widest opacity-80">
                             <span>Next Rev Tech</span>
                             <span>08/29</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="relative z-10 text-slate-900 mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">ERP & Business Automation</h3>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-xl">Eliminate manual spreadsheets and inventory leaks. We build customized ERPs, POS systems, and portal software that sync operations in real-time.</p>
                 </div>
              </div>
  
              {/* Card 2: Enterprise Integrations - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-300 text-slate-900 p-8 border border-slate-300 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 hover:border-orange-600/50 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Coded Syntax Editor & Webhook Console */}
                 <div className="flex flex-col gap-3">
                    {/* IDE Editor Mockup */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl font-mono text-[10px] leading-relaxed select-none overflow-hidden">
                       {/* Tab Bar */}
                       <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-slate-300">
                          <div className="flex items-center gap-1.5">
                             <div className="w-2 h-2 rounded-full bg-red-500/50" />
                             <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                             <div className="w-2 h-2 rounded-full bg-green-500/50" />
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.04] rounded-lg border border-slate-300 text-[9px] font-semibold text-slate-600">
                             <span className="text-blue-400 text-[8px] font-bold">TS</span>
                             webhook.ts
                          </div>
                          <div className="w-12" />
                       </div>
                       {/* Code area */}
                       <div className="p-4 space-y-1 font-mono text-[9.5px]">
                          <div className="flex gap-3">
                             <span className="text-[#0f172a]/20 select-none text-right w-3">1</span>
                             <span><span className="text-purple-400">const</span> <span className="text-blue-400">webhook</span> = <span className="text-purple-400">async</span> (req, res) =&gt; &#123;</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-[#0f172a]/20 select-none text-right w-3">2</span>
                             <span className="pl-4"><span className="text-purple-400">const</span> sig = req.headers[<span className="text-orange-500">'sig'</span>];</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-[#0f172a]/20 select-none text-right w-3">3</span>
                             <span className="pl-4"><span className="text-purple-400">const</span> event = stripe.construct(req.body, sig);</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-[#0f172a]/20 select-none text-right w-3">4</span>
                             <span className="pl-4"><span className="text-purple-400">if</span> (event.type === <span className="text-orange-500">'charge.success'</span>) &#123;</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-[#0f172a]/20 select-none text-right w-3">5</span>
                             <span className="pl-8 text-yellow-300">await <span className="text-blue-300">db</span>.activateSprint();</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-[#0f172a]/20 select-none text-right w-3">6</span>
                             <span className="pl-4">&#125;</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-[#0f172a]/20 select-none text-right w-3">7</span>
                             <span>&#125;;</span>
                          </div>
                       </div>
                    </div>
                    {/* Mini Terminal / Console log */}
                    <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 font-mono text-[9px] flex items-center justify-between shadow-lg">
                       <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-orange-500 border border-emerald-500/20 font-black">200 OK</span>
                          <span className="text-slate-600">POST /api/webhooks</span>
                       </div>
                       <span className="text-slate-500 font-semibold">12ms</span>
                    </div>
                 </div>

                 <div className="relative z-10 text-slate-900 mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">Enterprise Integrations</h3>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">Secure payment gateways, local FBR tax APIs, CRMs, and legacy database connections with reliable queue management.</p>
                 </div>
              </div>
     
              {/* Card 3: AI Workflow Automation - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-300 text-slate-900 p-8 border border-slate-300 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 hover:border-orange-600/50 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Visual Node Agent Canvas */}
                 <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xl relative min-h-[160px] overflow-hidden flex flex-col justify-between">
                    <div className="absolute inset-0 opacity-[0.01] bg-[url('/noise.svg')]" />
                    
                    <div className="relative z-10 flex flex-col gap-3">
                       {/* Node 1: Input */}
                       <div className="flex items-center justify-between bg-white/[0.02] border border-slate-300 rounded-xl p-3">
                          <div className="flex items-center gap-2 text-[9px] font-bold text-slate-700">
                             <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                             User Request Node
                          </div>
                          <span className="text-[8px] text-slate-500 font-mono">active</span>
                       </div>

                       {/* Connection Line */}
                       <div className="h-4 flex justify-center items-center">
                          <div className="w-0.5 h-full bg-gradient-to-b from-[#3A5CCC] to-purple-500" />
                       </div>

                       {/* Node 2: Agent LLM */}
                       <div className="flex items-center justify-between bg-orange-600/10 border border-orange-600/25 rounded-xl p-3">
                          <div className="flex items-center gap-2 text-[9px] font-bold text-[#0f172a]">
                             <Bot className="w-3.5 h-3.5 text-orange-600" />
                             Agentic LLM router
                          </div>
                          <span className="text-[8px] text-orange-500 font-bold uppercase tracking-wider">processing</span>
                       </div>
                    </div>
                 </div>

                 <div className="relative z-10 text-slate-900 mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">AI Workflow Automation</h3>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">Automate manual customer support, lead qualification, email follow-ups, and automated CRM pipelines using agentic LLMs.</p>
                 </div>
              </div>
  
              {/* Card 4: Custom SaaS Development - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-300 text-slate-900 p-8 border border-slate-300 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 hover:border-orange-600/50 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Coded Phone Mockup */}
                 <div className="mx-auto w-40 aspect-[9/16] bg-white border border-black/15 rounded-[1.8rem] p-3 flex flex-col justify-between shadow-2xl relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
                    </div>
                    <div className="flex justify-between items-center text-[6px] text-slate-500 font-mono pt-2 pb-1.5 border-b border-slate-300">
                       <span>09:41</span>
                       <div className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-white/40 rounded-full" />
                          <span className="w-1 h-1 bg-white/40 rounded-full" />
                          <span className="w-1.5 h-1 bg-white/40 rounded-sm" />
                       </div>
                    </div>
                    <div className="space-y-2 py-2 flex-1 flex flex-col justify-center">
                       <div className="bg-orange-600/10 border border-orange-600/25 rounded-xl p-2.5 space-y-1">
                          <div className="text-[5px] text-slate-500 uppercase font-black tracking-wider">Project Phase</div>
                          <div className="text-xs font-black text-[#0f172a] flex items-center justify-between">
                             <span>Build v1.2</span>
                             <span className="text-orange-600 text-[6px] bg-orange-600/10 px-1 py-0.5 rounded font-mono font-bold">94%</span>
                          </div>
                       </div>
                       {/* SVG Mini Chart Mockup */}
                       <div className="bg-white/[0.02] border border-slate-300 rounded-xl p-2 h-12 flex flex-col justify-between">
                          <div className="text-[5.5px] text-slate-500 uppercase font-black tracking-widest">Velocity</div>
                          <svg viewBox="0 0 100 30" className="w-full h-8 overflow-visible">
                             <path d="M0,25 Q15,5 30,15 T60,5 T90,20" fill="none" stroke="#3A5CCC" strokeWidth="1.5" />
                             <circle cx="90" cy="20" r="2" fill="#3A5CCC" />
                          </svg>
                       </div>
                    </div>
                    <div className="h-1 w-12 bg-white/20 rounded-full mx-auto mt-1" />
                 </div>

                 <div className="relative z-10 text-slate-900 mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">Custom SaaS Development</h3>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">From database architecture to responsive dashboards, we build scalable software products designed to sell.</p>
                 </div>
              </div>
  
              {/* Card 5: Cloud & DevOps - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-300 text-slate-900 p-8 sm:p-10 border border-slate-300 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 hover:border-orange-600/50 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Visual Cluster Panel */}
                 <div className="flex flex-col gap-3.5 w-full max-w-[500px] mx-auto font-mono text-[9px] select-none text-slate-500 mb-8 sm:mb-0">
                    {[
                      { node: "neon-db-prod-cluster", lat: "9ms", status: "Active", col: "text-orange-500 border-emerald-500/20" },
                      { node: "vercel-edge-middleware", lat: "4ms", status: "Active", col: "text-orange-500 border-emerald-500/20" },
                      { node: "aws-s3-static-bucket", lat: "15ms", status: "Syncing", col: "text-amber-400 border-amber-500/20" }
                    ].map((srv, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center bg-slate-100/60 border border-slate-300 rounded-2xl p-4">
                         <div className="flex items-center gap-2.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${srv.status === "Active" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                            <span className="text-slate-700 font-bold">{srv.node}</span>
                         </div>
                         <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                            <span>Latency: {srv.lat}</span>
                            <span className={`px-2 py-0.5 border rounded-full text-[8px] uppercase tracking-wider ${srv.col}`}>{srv.status}</span>
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="relative z-10 text-slate-900 mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">Cloud & DevOps</h3>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-xl">Infrastructure as code, automated pipelines (CI/CD), security firewalls, and reliable edge scaling.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Business Outcomes Section */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-white relative border-b border-slate-300 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-900/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 text-center max-w-3xl mx-auto">
               <div className="text-nrt-eyebrow text-orange-600 mb-6">Real Results</div>
               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0f172a] leading-tight">
                 Business Outcomes We <span className="text-orange-600">Deliver</span>
               </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Reduce Manual Work",
                "Increase Operational Visibility",
                "Automate Repetitive Processes",
                "Improve Team Productivity",
                "Centralize Business Data",
                "Scale Without Operational Chaos"
              ].map((outcome, i) => (
                <div key={i} className="bg-slate-100/60 border border-slate-300 rounded-2xl p-6 flex items-center gap-4 group hover:border-slate-400/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-900/10 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#0f172a]" />
                  </div>
                  <span className="text-lg font-bold text-slate-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Engagement Model Section */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-white relative border-b border-slate-300 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 text-center max-w-3xl mx-auto">
               <div className="text-nrt-eyebrow text-[#0f172a] mb-6">Engagement Models</div>
               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0f172a] leading-tight">
                 Choose The Model That <span className="text-orange-600">Fits Your Business</span>
               </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-nrt flex flex-col group text-center items-center">
                <div className="card-icon-nrt">
                   <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-[#0f172a]">ERP & AI Automation</h3>
                <p className="text-slate-600 text-nrt-body max-w-sm">
                  For companies looking to improve operations and business efficiency.
                </p>
              </div>
              <div className="card-nrt flex flex-col group text-center items-center">
                <div className="card-icon-nrt">
                   <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-[#0f172a]">Dedicated Technology Teams</h3>
                <p className="text-slate-600 text-nrt-body max-w-sm">
                  For companies needing long-term technical execution and development support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Projects Section */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-white border-t border-slate-300 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-slate-900/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-orange-600 mb-4">Portfolio Highlights</div>
                <h2 className="text-4xl sm:text-5xl lg:text-8xl font-black tracking-tight text-[#0f172a] leading-[1.05]">
                  Featured <br />
                  <span className="text-orange-600">Client Showcase</span>
                </h2>
              </div>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white bg-slate-900 border border-black/15 hover:bg-orange-600 hover:border-transparent px-8 py-4 rounded-xl transition-all"
              >
                View Full Portfolio <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {featuredProjects.map((project, idx) => (
                <div key={idx} className="group bg-white rounded-[2rem] border border-slate-300 overflow-hidden hover:border-slate-400/40 hover:border-slate-400 hover:shadow-[0_20px_45px_rgba(20,184,166,0.08)] transition-all duration-300 flex flex-col h-full shadow-2xl">
                  <div className="relative aspect-video overflow-hidden bg-slate-100 border-b border-slate-300">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <span className="absolute bottom-4 left-4 bg-orange-600/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-lg">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#0f172a] transition-colors">{project.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">{project.impact}</p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-300">
                      <Link href="/case-studies" className="text-xs font-black uppercase tracking-wider text-orange-600 hover:text-[#0f172a] transition-colors inline-flex items-center gap-1.5">
                        Inspect System <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Testimonials limit={6} theme="dark" />

      {/* Simple Process - Redesigned Premium Layout */}
      <ScrollReveal direction="down">
        <section className="py-20 sm:py-24 bg-white border-t border-slate-300">
          <div className="mx-auto max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center sm:text-left">
               <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-orange-600 mb-4">How it works</div>
               <h2 className="text-4xl sm:text-5xl lg:text-8xl font-black tracking-tight text-[#0f172a] leading-[1.05]">Simple Process. <br /><span className="text-orange-600">Reliable</span> Results.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { step: "01", name: "Subscribe", desc: "Choose a customizable plan or start with a test task to begin your dedicated partnership." },
                { step: "02", name: "Submit Tasks", desc: "Add design, backend, frontend or DevOps tasks to your board. One backlog, pure efficiency." },
                { step: "03", name: "Fast Iterations", desc: "Watch active sprints advance daily. Track progress inside our dedicated Slack and Jira." },
                { step: "04", name: "Receive", desc: "Get production-grade deliverables in just 2-3 business days on average." },
                { step: "05", name: "Optimize", desc: "We continuously refine, test, and profile your application for speed and stability." },
                { step: "06", name: "Scale", desc: "Seamlessly expand your technical squad and system integrations as your operations grow." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-300 shadow-xl flex flex-col justify-between min-h-[260px] hover:border-slate-500/50 hover:border-slate-400 transition-all duration-300">
                   <div className="text-5xl font-black text-orange-600 font-mono mb-6">{item.step}</div>
                   <div>
                      <h3 className="text-xl font-bold tracking-tight text-[#0f172a] mb-3 uppercase">{item.name}</h3>
                      <p className="text-sm font-medium text-slate-600 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing Section - Restored Dark */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-white border-y border-slate-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-600 mb-6">Service Models</div>
               <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-[#0f172a] leading-[1.05] mb-8">Engineering for <br /><span className="text-orange-600">Every Stage</span>.</h2>
               <p className="text-xl font-medium text-slate-600 max-w-2xl mx-auto mb-16">
                  Select a predictable engagement model that scales with your technical requirements.
               </p>

               <div className="bg-white p-1.5 rounded-2xl inline-flex items-center border border-slate-200 shadow-sm">
                 <button
                   onClick={() => setBillingCycle('monthly')}
                   className={`px-10 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                     billingCycle === 'monthly' 
                     ? "bg-orange-600 text-white shadow-md" 
                     : "text-slate-500 hover:text-white"
                   }`}
                 >
                   Monthly
                 </button>
                 <button
                   onClick={() => setBillingCycle('weekly')}
                   className={`px-10 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                     billingCycle === 'weekly' 
                     ? "bg-orange-600 text-white shadow-md" 
                     : "text-slate-500 hover:text-white"
                   }`}
                 >
                   Weekly
                 </button>
               </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -6 }} 
                  className={`relative overflow-hidden rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between shadow-2xl border transition-all duration-300 ${
                    plan.featured 
                    ? 'bg-white border border-slate-300/60 shadow-[0_25px_60px_rgba(58,92,204,0.15)]' 
                    : 'bg-white border-slate-200 hover:border-slate-400'
                  }`}
                >
                   <div className="absolute inset-0 opacity-[0.01] bg-[url('/noise.svg')]" />
                   <div className="relative z-10">
                      <div className="flex justify-between items-center mb-3">
                         <h3 className="text-xs font-black uppercase tracking-wider text-[#0f172a]">{plan.name}</h3>
                         {plan.featured && (
                            <span className="text-[8px] font-bold uppercase tracking-widest text-orange-600 bg-orange-600/10 border border-orange-600/25 px-2.5 py-1 rounded-full">
                               Recommended
                            </span>
                         )}
                      </div>
                      <div className="text-3xl font-black mb-8 text-[#0f172a]">
                         {plan.price}
                         <span className="text-xs font-semibold ml-2 uppercase tracking-widest text-slate-500">{plan.period}</span>
                      </div>
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((f, j) => (
                          <li key={j} className={`flex items-center gap-3 text-sm font-semibold text-slate-600`}>
                             <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" /> {f}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <Link href="/contact" className={`block w-full py-4 rounded-2xl text-center font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                     plan.featured 
                     ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:scale-[1.02]' 
                     : 'bg-white/5 text-[#0f172a] border border-slate-300 hover:bg-white/10 hover:border-slate-500'
                   }`}>
                      {plan.featured ? 'Get Started' : 'Select Plan'}
                   </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Team Section - Premium Upgrade */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 relative overflow-hidden bg-white border-t border-slate-300">
            {/* Floating Background Blobs - Optimized */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/4 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[60px] pointer-events-none" />

           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-[4rem] p-12 sm:p-24 relative overflow-hidden border border-slate-300 shadow-2xl">
                 {/* Noise & Grid Overlay */}
                 <div className="absolute inset-0 opacity-[0.01] bg-[url('/noise.svg')] pointer-events-none" />
                 <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                 <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                       <div className="inline-flex items-center gap-3 bg-white/5 border border-slate-300 rounded-full px-5 py-2 mb-10 backdrop-blur-md">
                          <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f172a]/80">Team as a Service</span>
                       </div>
                       
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0f172a] tracking-tight leading-[1.05] mb-10">
                          Need a Dedicated <br />
                          <span className="text-orange-600">Technology Team?</span>
                       </h2>
                       
                       <p className="text-xl font-bold text-slate-600 mb-12 leading-relaxed max-w-lg">
                          Access experienced developers, designers and engineers without the overhead of building an in-house team.
                       </p>

                       <div className="flex flex-col sm:flex-row items-center gap-6">
                          <Link href="/contact" className="w-full sm:w-auto bg-orange-600 text-white px-12 py-6 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-4 group">
                             Assemble My Team <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                          </Link>
                          <div className="flex -space-x-3">
                             {[1, 2, 3, 4].map((i) => (
                               <img key={i} src={`https://i.pravatar.cc/100?img=${i+40}`} alt="Expert" loading="lazy" className="w-12 h-12 rounded-full border-4 border-[#0F172A] shadow-xl" />
                             ))}
                             <div className="w-12 h-12 rounded-full bg-white/5 border-4 border-[#0F172A] flex items-center justify-center text-[10px] font-black text-[#0f172a]/40">+50</div>
                          </div>
                       </div>
                    </motion.div>

                    <div className="space-y-4">
                       {[
                         { label: "UI/UX Design", icon: <Palette className="w-5 h-5" />, desc: "High-end product design" },
                         { label: "Frontend Dev", icon: <Code2 className="w-5 h-5" />, desc: "React, Next.js, Vue" },
                         { label: "Backend Dev", icon: <Terminal className="w-5 h-5" />, desc: "Node, PHP, Python, Go" },
                         { label: "Cloud & DevOps", icon: <Cloud className="w-5 h-5" />, desc: "AWS, Azure, Docker" },
                         { label: "QA & Testing", icon: <ShieldCheck className="w-5 h-5" />, desc: "Manual & Automated" }
                       ].map((item, i) => (
                         <motion.div 
                           key={i} 
                           initial={{ opacity: 0, x: 30 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1 }}
                           whileHover={{ scale: 1.02, x: 10 }}
                           className="flex items-center justify-between p-6 bg-white rounded-[2rem] border border-slate-300 group hover:border-orange-600/50 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] transition-all cursor-default backdrop-blur-sm shadow-xl"
                         >
                            <div className="flex items-center gap-5">
                               <div className="w-12 h-12 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-lg">
                                  {item.icon}
                               </div>
                               <div className="flex flex-col">
                                  <span className="text-[#0f172a] text-lg font-bold tracking-tight uppercase leading-none mb-1">{item.label}</span>
                                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.desc}</span>
                               </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-[#0f172a]/20 group-hover:text-[#0f172a] group-hover:border-orange-600 group-hover:bg-orange-600 transition-all">
                               <CheckCircle className="w-4 h-4" />
                            </div>
                         </motion.div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section - High-End Dark Redesign */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-t border-slate-300">
         {/* Background Decorative Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

         <div className="mx-auto max-w-5xl px-4 relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-slate-300 mb-8 backdrop-blur-md"
               >
                  <MessageSquare className="w-4 h-4 text-orange-600" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]/60">Help Center</span>
               </motion.div>
               <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-[#0f172a] leading-[1.05] mb-8">
                  Frequently Asked <br />
                  <span className="text-orange-600">Questions.</span>
               </h2>
               <p className="text-xl font-bold text-slate-600 max-w-2xl leading-relaxed">
                  Everything you need to know about our partnership process and technical capabilities.
               </p>
            </div>

            <div className="grid gap-6">
               {[
                 { q: "What is your approach to implementing ERP Systems?", a: "We don't just install software; we align the ERP with your core business processes. From centralized databases to custom portal interfaces, we ensure that the system eliminates manual bottlenecks and provides real-time operational visibility.", img: "/faq-icons/erp.png" },
                 { q: "How can AI Automation help my business?", a: "AI Automation replaces repetitive, manual tasks with intelligent workflows. This includes automating customer support, qualifying leads, and streamlining data entry, allowing your team to focus on high-value growth initiatives.", img: "/faq-icons/ai.png" },
                 { q: "Do you build custom software from scratch?", a: "Yes. Whether you need a specialized SaaS platform, an internal management dashboard, or a complex integration with legacy systems, our engineering team builds secure, scalable, and tailored software solutions.", img: "/faq-icons/software.png" },
                 { q: "How does the Dedicated Technology Team model work?", a: "You get immediate access to a full stack of elite engineers, designers, and project managers without the recruitment overhead. They integrate directly with your operations to provide continuous technical execution for your long-term roadmap.", img: "/faq-icons/team.png" },
                 { q: "How is NRT different from a typical development agency?", a: "We are an outcome-driven business transformation partner. We focus on delivering operational efficiency, scalability, and business growth through technology, rather than just writing code.", img: "/faq-icons/nrt.png" }
               ].map((faq, i) => (
                  <FAQItem key={i} faq={faq} index={i} />
               ))}
            </div>
         </div>
      </section>

      {/* Founder Section */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 relative overflow-hidden bg-white border-t border-slate-300">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[4rem] border border-slate-300 shadow-2xl p-12 sm:p-24 overflow-hidden relative">
              <div className="absolute inset-0 opacity-[0.01] bg-[url('/noise.svg')] pointer-events-none" />
              <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-orange-600 shadow-2xl mb-8 bg-white">
                    <img 
                      src={FOUNDER.imageUrl} 
                      alt={FOUNDER.name} 
                      loading="lazy"
                      className="w-full h-full object-cover object-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B11]/50 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="text-3xl font-black text-[#0f172a] mb-2">{FOUNDER.name}</h3>
                  <p className="text-nrt-label text-orange-600 mb-4">{FOUNDER.title}</p>
                  <a 
                    href={FOUNDER.linkedInUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-nrt-label text-[#0f172a] bg-white/5 border border-slate-300 hover:bg-orange-600 hover:border-transparent px-6 py-3 rounded-xl transition-all"
                  >
                    Connect on LinkedIn <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="space-y-8">
                  <div className="text-nrt-eyebrow text-teal-300">Founder&apos;s Note</div>
                  <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] leading-tight tracking-tight">
                    &ldquo;I built NRT to end the cycle of vanishing freelancers.&rdquo;
                  </h2>
                  <p className="text-lg text-nrt-body text-slate-700 leading-relaxed">
                    Having worked as an engineer for years, I saw first-hand how businesses get stuck. Freelancers disappear, and traditional agencies charge enterprise prices for junior work.
                  </p>
                  <p className="text-lg text-nrt-body text-slate-700 leading-relaxed">
                    At Next Revolution Tech, we act as your dedicated engineering partner. We take ownership of your custom SaaS, ERP integrations, and AI workflow automations, providing 24/7 reliability and clear communication. No excuses, just clean code that grows your business.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-300">
                    <div>
                      <div className="text-3xl font-black text-orange-600">Daily</div>
                      <div className="text-nrt-label text-slate-600">LinkedIn Insights</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-orange-600">100%</div>
                      <div className="text-nrt-label text-slate-600">Ownership & Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Inline Lead Magnet Section */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-t border-slate-300">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[4rem] p-12 sm:p-24 border border-slate-300 shadow-[0_20px_0_0_rgba(15,23,42,1)] relative">
              <div className="absolute inset-0 opacity-[0.01] bg-[url('/noise.svg')] pointer-events-none" />
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-slate-300 mb-8 backdrop-blur-md">
                     <Sparkles className="w-4 h-4 text-[#0f172a]" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]/60">Free Consultation</span>
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0f172a] mb-8">
                    Get a Free <br />
                    <span className="text-orange-600">ERP & Software Audit</span>
                  </h2>
                  <p className="text-lg font-semibold text-slate-600 leading-relaxed mb-6">
                    Stop guessing. Let our technical team audit your current inventory Excel sheets, custom POS, or business processes and build a concrete automation plan.
                  </p>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#0f172a]" /> Identification of system bottlenecks & data leaks
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#0f172a]" /> Actionable migration blueprint from manual to custom ERP
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#0f172a]" /> 30-minute architect consultation (worth $250)
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-300 rounded-3xl p-8 sm:p-10 shadow-xl backdrop-blur-xl">
                  <h3 className="text-xl font-bold uppercase tracking-wider text-[#0f172a] mb-6 text-left">Claim Your Free Audit</h3>
                  <form onSubmit={handleLeadSubmit} className="space-y-6 text-left">
                    <div className="space-y-2">
                      <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full bg-white border border-slate-300 text-slate-900 focus:border-orange-600 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Work Email</label>
                        <input 
                          type="email" 
                          required
                          value={leadForm.email}
                          onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                          className="w-full bg-white border border-slate-300 text-slate-900 focus:border-orange-600 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">WhatsApp Number</label>
                        <input 
                          type="text" 
                          required
                          value={leadForm.whatsapp}
                          onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.value })}
                          className="w-full bg-white border border-slate-300 text-slate-900 focus:border-orange-600 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Company Name</label>
                      <input 
                        type="text"
                        value={leadForm.company}
                        onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                        className="w-full bg-white border border-slate-300 text-slate-900 focus:border-orange-600 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">What is your biggest manual/tech bottleneck?</label>
                      <textarea 
                        rows={3}
                        value={leadForm.message}
                        onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                        className="w-full bg-white border border-slate-300 text-slate-900 focus:border-orange-600 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all resize-none"
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={leadStatus === 'loading'}
                      className="w-full bg-orange-600 text-white py-5 rounded-2xl text-md font-black shadow-lg shadow-orange-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
                    >
                      {leadStatus === 'loading' ? 'Submitting Request...' : 'Get Free Session Now'}
                      <ArrowRight className="w-4 h-4 animate-none" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Lead Magnet Modal / Dialog */}
      <Dialog open={isAuditModalOpen} onOpenChange={setIsAuditModalOpen}>
        <DialogContent className="bg-white border-black/15 text-[#0f172a] max-w-lg p-8 sm:p-10 rounded-3xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black uppercase tracking-tight text-[#0f172a] text-left">Free ERP Planning Session</DialogTitle>
            <DialogDescription className="text-slate-500 text-sm font-semibold text-left">
              Fill out the details below to claim your 30-minute system architecture audit with Ahsan Khan.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLeadSubmit} className="space-y-6 mt-6 text-left">
            <div className="space-y-1">
              <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Full Name</label>
              <input 
                type="text" 
                required
                value={leadForm.name}
                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                className="w-full bg-white border border-slate-300 text-slate-900 focus:border-orange-600 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Work Email</label>
                <input 
                  type="email" 
                  required
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                  className="w-full bg-white border border-slate-300 text-slate-900 focus:border-orange-600 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">WhatsApp</label>
                <input 
                  type="text" 
                  required
                  value={leadForm.whatsapp}
                  onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.value })}
                  className="w-full bg-white border border-slate-300 text-slate-900 focus:border-orange-600 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Company Name</label>
              <input 
                type="text"
                value={leadForm.company}
                onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                className="w-full bg-white border border-slate-300 text-slate-900 focus:border-orange-600 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Primary Bottleneck / Message</label>
              <textarea 
                rows={3}
                value={leadForm.message}
                onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                className="w-full bg-white border border-slate-300 text-slate-900 focus:border-orange-600 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all resize-none"
              />
            </div>
            <button 
              type="submit" 
              disabled={leadStatus === 'loading'}
              className="w-full bg-orange-600 text-white py-4 rounded-2xl text-sm font-black shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {leadStatus === 'loading' ? 'Submitting Request...' : 'Book Free Audit Now'}
              <ArrowRight className="w-4 h-4 animate-none" />
            </button>
          </form>
        </DialogContent>
      </Dialog>

      <PreFooterCTA onBookSession={() => setIsAuditModalOpen(true)} />
    </div>
  );
}

function FAQItem({ faq, index }: { faq: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className={`rounded-[2.5rem] border transition-all duration-700 overflow-hidden relative ${
        isOpen 
        ? 'bg-white border-orange-600/30 shadow-[0_30px_80px_-15px_rgba(234,88,12,0.2)] scale-[1.03] z-50' 
        : 'bg-white border-slate-200 hover:border-orange-600/30 hover:-translate-y-1 hover:shadow-xl z-10'
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 sm:p-12 flex items-start justify-between text-left group relative"
      >
        {/* Floating Hover Image */}
        {faq.img && (
          <div className="absolute right-28 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-700 pointer-events-none z-20 hidden xl:flex items-center justify-center pointer-events-none mix-blend-multiply" style={{ maskImage: 'radial-gradient(circle, black 50%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 70%)' }}>
            <img src={faq.img} alt="" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
          </div>
        )}

        <div className="flex gap-8 sm:gap-12 relative z-10 w-full xl:w-2/3 pr-8">
           <div className="relative">
              <span className={`text-4xl sm:text-5xl font-bold tracking-tighter transition-all duration-700 ${isOpen ? 'text-orange-600' : 'text-slate-400 group-hover:text-slate-900'}`}>
                 {(index + 1).toString().padStart(2, '0')}
              </span>
              {isOpen && (
                <motion.div 
                  layoutId="glow"
                  className="absolute inset-0 bg-orange-600 blur-2xl opacity-20"
                />
              )}
           </div>
           <h3 className={`text-xl sm:text-3xl font-bold tracking-tight uppercase leading-tight mt-2 sm:mt-3 transition-colors duration-700 ${isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-orange-600'}`}>
              {faq.q}
           </h3>
        </div>
        <div className={`mt-3 sm:mt-4 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-700 ${isOpen ? 'bg-orange-600 border-transparent rotate-180 shadow-lg shadow-orange-600/20' : 'bg-white border-slate-200 group-hover:border-slate-400'}`}>
           {isOpen ? <Minus className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6 text-slate-900" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-8 sm:px-12 pb-12 ml-20 sm:ml-32">
               <p className="text-xl font-bold text-slate-600 leading-relaxed max-w-3xl border-l-4 border-orange-600 pl-8">
                  {faq.a}
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}