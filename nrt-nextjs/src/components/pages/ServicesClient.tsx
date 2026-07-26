"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Package, Boxes, CreditCard, Coins, GraduationCap, Stethoscope, Building2,
  HeartHandshake, Filter, Warehouse, Factory, LayoutDashboard, LineChart,
  ClipboardCheck, Bot, Cpu, Headset, Receipt, Network, Briefcase,
  ShoppingCart, 
  Zap, 
  Workflow, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Clock,
  Users,
  ShieldCheck,
  Smartphone,
  Layers,
  Settings,
  Globe,
  Palette,
  Server
} from "lucide-react";
import { motion } from "motion/react";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InteractiveHero3D } from "@/components/ui/InteractiveHero3D";

export function ServicesClient() {
  const services = [
    {
      slug: "erp-development",
      icon: <Settings className="w-8 h-8" />,
      title: "ERP Systems",
      desc: "Centralize operations, eliminate spreadsheet chaos, improve reporting and gain complete visibility across your business.",
      outcomes: ["Real-time visibility", "Faster decisions", "Improved operational control"],
      image: "/assets/services/erp-dashboard.png",
      color: "from-[#27324A] to-[#27324A]",
      accent: "bg-white/10"
    },
    {
      slug: "ai-automation",
      icon: <Zap className="w-8 h-8" />,
      title: "AI Automation",
      desc: "Automate repetitive work, approvals, reporting and workflows using AI-powered systems.",
      outcomes: ["Reduced manual work", "Higher productivity", "Faster execution"],
      image: "/agentic_ai_dashboard.png",
      color: "from-[#0057FF] to-[#9900FF]",
      accent: "bg-white/10"
    },
    {
      slug: "custom-software-development",
      icon: <Workflow className="w-8 h-8" />,
      title: "Custom Business Software",
      desc: "Build software around your business processes instead of forcing your team to adapt to generic tools.",
      outcomes: ["Better efficiency", "Scalable operations", "Process optimization"],
      image: "/pulse-admin.png",
      color: "from-[#11998E] to-[#38EF7D]",
      accent: "bg-white/10"
    },
    {
      slug: "shopify-development",
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Shopify E-Commerce",
      desc: "Custom liquid themes, headless Next.js storefronts, and private app extensions for maximum conversion.",
      outcomes: ["Sub-second load speed", "ERP & POS integration", "High conversion rates"],
      image: "/babybloom-home.png",
      color: "from-[#3A5CCC] to-[#27324A]",
      accent: "bg-white/10"
    }
  ];

  const specializedSystems = [
    { slug: "inventory-management", title: "Inventory Management System", category: "Operations", image: "/assets/services/erp-dashboard.png", gradient: "from-blue-500 to-blue-700", icon: <Package className="w-8 h-8" />, desc: "Track stock levels, orders, sales and deliveries in real-time." },
    { slug: "inventory-management", title: "Stock Management System", category: "Operations", image: "/assets/services/lims-lab.png", gradient: "from-cyan-500 to-cyan-700", icon: <Boxes className="w-8 h-8" />, desc: "Optimize your storage, prevent stockouts, and manage inventory seamlessly." },
    { slug: "pos-system", title: "POS System", category: "Retail", image: "/textile-pos.png", gradient: "from-teal-500 to-teal-700", icon: <CreditCard className="w-8 h-8" />, desc: "Fast and reliable Point of Sale software for retail and restaurants." },
    { slug: "custom-software-development", title: "HR Management System", category: "HR & Payroll", image: "/pulse-admin.png", gradient: "from-emerald-500 to-emerald-700", icon: <Users className="w-8 h-8" />, desc: "Streamline employee records, attendance, performance, and onboarding." },
    { slug: "erp-development", title: "Payroll System", category: "HR & Payroll", image: "/pulse-client.png", gradient: "from-green-500 to-green-700", icon: <Coins className="w-8 h-8" />, desc: "Automate salary calculations, tax deductions, and pay slip generation." },
    { slug: "custom-software-development", title: "School Management System", category: "Education", image: "/assets/services/lms-platform.png", gradient: "from-lime-500 to-lime-700", icon: <GraduationCap className="w-8 h-8" />, desc: "Manage students, teachers, fees, and academics all in one place." },
    { slug: "custom-software-development", title: "Clinic Management System", category: "Healthcare", image: "/pulse-reception.png", gradient: "from-yellow-400 to-yellow-600", icon: <Stethoscope className="w-8 h-8" />, desc: "Handle patient records, appointments, and prescriptions efficiently." },
    { slug: "erp-development", title: "Hospital Management System", category: "Healthcare", image: "/pulse-provider.png", gradient: "from-amber-400 to-amber-600", icon: <Building2 className="w-8 h-8" />, desc: "Comprehensive solution for wards, labs, pharmacy, and hospital operations." },
    { slug: "crm-development", title: "CRM System", category: "Sales & CRM", image: "/pulse-portal.png", gradient: "from-orange-500 to-orange-700", icon: <HeartHandshake className="w-8 h-8" />, desc: "Build stronger customer relationships and boost your sales pipeline." },
    { slug: "crm-development", title: "Lead Management System", category: "Sales & CRM", image: "/iraqbid-1.png", gradient: "from-red-500 to-red-700", icon: <Filter className="w-8 h-8" />, desc: "Capture, track, and convert leads into paying customers effortlessly." },
    { slug: "inventory-management", title: "Warehouse Management System", category: "Operations", image: "/iraqbid-2.png", gradient: "from-rose-500 to-rose-700", icon: <Warehouse className="w-8 h-8" />, desc: "Control warehouse operations from inbound receipts to outbound shipping." },
    { slug: "erp-development", title: "Manufacturing Management System", category: "Enterprise", image: "/iraqbid-3.png", gradient: "from-pink-500 to-pink-700", icon: <Factory className="w-8 h-8" />, desc: "Plan production, track raw materials, and ensure quality control." },
    { slug: "ai-automation", title: "AI Chatbot", category: "AI & Automation", image: "/agentic_ai_dashboard.png", gradient: "from-blue-400 to-cyan-500", icon: <Bot className="w-8 h-8" />, desc: "Engage customers 24/7 with intelligent, conversational AI assistants." },
    { slug: "ai-automation", title: "AI Agent", category: "AI & Automation", image: "/assets/services/pos-system.png", gradient: "from-emerald-400 to-teal-500", icon: <Cpu className="w-8 h-8" />, desc: "Deploy autonomous AI agents to perform complex, multi-step tasks." },
    { slug: "ai-automation", title: "Customer Support Automation", category: "AI & Automation", image: "/babybloom-shop.png", gradient: "from-orange-400 to-rose-500", icon: <Headset className="w-8 h-8" />, desc: "Resolve tickets faster with AI-driven automated support solutions." }
  ];

  const whyChooseUs = [
    { icon: <Target className="w-6 h-6" />, text: "Operational Efficiency", color: "from-[#0057FF] to-[#00A3FF]" },
    { icon: <Zap className="w-6 h-6" />, text: "Business Automation", color: "from-[#3A5CCC] to-[#27324A]" },
    { icon: <Settings className="w-6 h-6" />, text: "ERP Expertise", color: "from-[#6366f1] to-[#a855f7]" },
    { icon: <Users className="w-6 h-6" />, text: "Dedicated Teams", color: "from-[#11998E] to-[#38EF7D]" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      

      {/* SECTION 1: INTRO - Dark Hero */}
      <section className="pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-[#0f172a] relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-8">Solutions</div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
               Business Systems That <br />
               <span className="text-orange-600">Drive Growth</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-900/50 leading-tight max-w-2xl mb-10">
              From ERP systems and AI automation to dedicated technology teams, we help businesses streamline operations, improve visibility and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
               <Link href="/contact" className="btn-primary-nrt px-10 py-4 text-lg">
                  Book Strategy Call <ArrowRight className="w-5 h-5 ml-3" />
               </Link>
               <Link href="/portfolio" className="btn-secondary-nrt px-10 py-4 text-lg text-slate-900">
                  View Case Studies <ArrowRight className="w-5 h-5 ml-3" />
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SERVICES CARDS - VIBRANT & COMPACT */}
      <ScrollReveal direction="up">
        <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 relative z-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, scale: 1.01 }}
                  className={`relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br ${service.color} p-5 sm:p-8 shadow-xl border border-slate-300 group flex flex-col justify-between`}
                >
                  <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="mb-6 overflow-hidden rounded-2xl border border-black/15 bg-black/20 shadow-2xl [transform:rotateX(4deg)] hidden sm:block">
                      <Image src={service.image} alt={service.title} width={800} height={343} className="aspect-[21/9] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105" />
                    </div>
                    <div className={`w-12 h-12 ${service.accent} backdrop-blur-md rounded-xl flex items-center justify-center text-slate-900 mb-5 border border-black/20`}>
                      {service.icon}
                    </div>
                    <h2 className="text-xl sm:text-3xl font-black mb-3 tracking-tighter leading-tight text-slate-900">{service.title}</h2>
                    <p className="text-slate-900/70 text-sm font-bold mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.outcomes.map((outcome, fi) => (
                        <li key={fi} className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-widest text-slate-900/90">
                          <CheckCircle2 className="w-4 h-4 text-slate-900" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-10 flex flex-col sm:flex-row gap-3">
                    <Link href={`/services/${service.slug}`} className="flex-1 inline-flex items-center justify-center bg-white text-slate-900 py-3.5 rounded-xl text-sm font-black hover:scale-105 transition-all group">
                      Explore Solution <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3.5 rounded-xl text-sm font-bold hover:bg-orange-600 transition-colors">
                      Book Audit
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 2.5: SPECIALIZED SYSTEMS */}
      <ScrollReveal direction="up">
        <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-slate-50 relative z-10 border-t border-slate-300">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4">Comprehensive Solutions</div>
               <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
                  Specialized Business Systems
               </h2>
               <p className="text-slate-900/60 mt-4 max-w-2xl mx-auto text-lg font-medium">
                  We build, customize, and deploy a wide range of specialized software systems tailored to your exact industry requirements.
               </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {specializedSystems.map((sys, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-[2rem] border border-slate-200 shadow-lg hover:shadow-2xl transition-all group flex flex-col overflow-hidden text-left relative"
                >
                  <div className="h-40 sm:h-48 w-full bg-slate-900 relative flex items-center justify-center overflow-hidden">
                     <Image src={sys.image} alt={sys.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
                     <div className={`absolute inset-0 bg-gradient-to-br ${sys.gradient} opacity-40 mix-blend-multiply`} />
                     <div className={`w-16 h-16 bg-gradient-to-br ${sys.gradient} rounded-2xl shadow-xl flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform duration-500 z-10`}>
                        {sys.icon}
                     </div>
                  </div>
                  <div className="p-6 sm:p-8 flex-grow flex flex-col items-start bg-white z-10">
                    <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3">{sys.category}</div>
                    <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight">{sys.title}</h3>
                    <p className="text-sm font-semibold text-slate-900/60 leading-relaxed mb-8 flex-grow">
                      {sys.desc}
                    </p>
                    <Link 
                      href={`/services/${sys.slug}`}
                      className="w-full py-4 rounded-xl bg-slate-50 text-slate-900 font-black text-sm uppercase tracking-widest text-center border border-slate-200 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all shadow-sm block"
                    >
                       View Solution Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SUPPORTING CAPABILITIES */}
      <ScrollReveal direction="up">
        <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white relative z-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4">Under the Hood</div>
               <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
                  Supporting Capabilities
               </h2>
               <p className="text-slate-900/60 mt-4 max-w-2xl text-lg font-medium">
                  The technical foundation that powers our business solutions. We maintain deep expertise in core development domains to deliver comprehensive results.
               </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Web Development", icon: <Globe className="w-6 h-6 text-orange-600" /> },
                { title: "Mobile Apps", icon: <Smartphone className="w-6 h-6 text-slate-900" /> },
                { title: "UI/UX Design", icon: <Palette className="w-6 h-6 text-[#9900FF]" /> },
                { title: "DevOps & Cloud", icon: <Server className="w-6 h-6 text-[#11998E]" /> }
              ].map((cap, i) => (
                <div key={i} className="flex flex-col items-center p-8 rounded-3xl bg-white border border-slate-300 hover:shadow-xl transition-all text-center group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {cap.icon}
                  </div>
                  <h3 className="font-bold text-slate-900">{cap.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* INDUSTRIES WE SERVE */}
      <ScrollReveal direction="up">
        <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-slate-900/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
          
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="mb-16 text-center">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 mb-4">Global Reach</div>
               <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
                  Industries We Transform
               </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                "Healthcare", "E-Commerce", "Real Estate", "Logistics", "SaaS / Tech"
              ].map((industry, i) => (
                <div key={i} className="py-6 px-4 rounded-2xl border border-slate-300 bg-white/5 backdrop-blur-md text-center font-bold text-slate-600 hover:text-slate-900 hover:bg-white/10 transition-colors">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: WHY BUSINESSES CHOOSE US - Light */}
      <ScrollReveal direction="down">
        <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white border-y border-slate-300">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6">Values</div>
               <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 leading-tight">Why clients keep <br />coming back</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`flex flex-col gap-6 p-8 rounded-[2.5rem] bg-gradient-to-br ${item.color} shadow-lg group transition-all border border-slate-300 overflow-hidden relative`}
                >
                  <div className="absolute inset-0 opacity-5 bg-[url('/noise.svg')] pointer-events-none" />
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-900 shadow-sm relative z-10">
                    {item.icon}
                  </div>
                  <span className="text-xl font-black tracking-tight text-slate-900 relative z-10 leading-tight">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: CTA (STRATEGY) - Light / Clean */}
      <ScrollReveal direction="up">
        <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 text-center bg-transparent relative overflow-hidden border-t border-slate-300">
           <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
           <div className="mx-auto max-w-4xl relative z-10">
              <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 leading-tight mb-8">
                 Ready to transform <br />your operations?
              </h2>
              <p className="text-xl font-medium text-slate-900/60 max-w-2xl mx-auto mb-16">
                 Let's discuss how ERP systems, AI automation, or a dedicated technology team can accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Link href="/contact" className="bg-orange-600 text-white px-12 py-5 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                    Book Strategy Call <ArrowRight className="w-5 h-5" />
                 </Link>
              </div>
           </div>
        </section>
      </ScrollReveal>

      <PreFooterCTA 
        headline="Scale without the operational chaos."
        subtext="Join the businesses that rely on Next Revolution Tech for their core enterprise systems and automation."
      />
    </div>
  );
}
