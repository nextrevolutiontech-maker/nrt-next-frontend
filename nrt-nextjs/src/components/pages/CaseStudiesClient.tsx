"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ArrowUpRight
} from "lucide-react";
import { InteractiveHero3D } from "@/components/ui/InteractiveHero3D";


export function CaseStudiesClient() {
  const studies = [
    // 1. ERP System
    {
      slug: "enterprise-hr-payroll-platform",
      title: "Enterprise HR & Payroll Platform",
      category: "ERP Systems",
      industry: "Human Resources",
      challenge: "The organization experienced severe delays and errors due to manual attendance tracking and disconnected payroll processing systems.",
      solution: "A centralized ERP platform automating attendance ledgers, compliance tracking, and payroll calculations into a single source of truth.",
      outcome: "Reduced manual processes, eliminated calculation errors, and improved overall operational efficiency.",
      services: ["ERP Development", "Dashboard Systems", "Workflow Automation", "Custom Business Software"],
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1780131913/nrt-portfolio/l3p70ji5u8nqtowrc1ou.png",
      color: "from-[#0057FF] to-[#00A3FF]"
    },
    // 2. Enterprise Dashboards
    {
      slug: "industrial-pipeline-monitoring",
      title: "Industrial Pipeline Monitoring Dashboard",
      category: "Enterprise Dashboards",
      industry: "Manufacturing",
      challenge: "Factory floor managers lacked real-time visibility into industrial engineering pipelines, leading to reactive maintenance and workflow delays.",
      solution: "A centralized enterprise dashboard system that integrates directly with industrial hardware to provide real-time monitoring and proactive control.",
      outcome: "Faster reporting, improved operational visibility, and streamlined decision-making for facility managers.",
      services: ["Dashboard Systems", "Business Process Automation", "API Integrations", "Custom Software Development"],
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1780132578/nrt-portfolio/ilcav3yh5impklgxtw2x.png",
      color: "from-[#11998E] to-[#38EF7D]"
    },
    // 3. Business Platforms / Logistics
    {
      slug: "global-supply-chain-system",
      title: "Global Supply Chain Coordination System",
      category: "Business Platforms",
      industry: "Logistics",
      challenge: "B2B material suppliers were struggling with disconnected logistics tracking and manual order dispatching, causing severe operational bottlenecks.",
      solution: "A custom business software hub connecting suppliers and global shippers securely, automating the entire procurement and tracking lifecycle.",
      outcome: "Centralized operations, improved workflow efficiency, and robust supply chain visibility.",
      services: ["Custom Business Software", "API Integrations", "Workflow Automation"],
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1780131762/nrt-portfolio/uy9vqcoqzju32nj3ehfw.png",
      color: "bg-white border-2 border-slate-900"
    },
    // 4. AI Automation
    {
      slug: "ai-creative-workflow-engine",
      title: "AI-Powered Creative Workflow Engine",
      category: "AI Automation",
      industry: "SaaS",
      challenge: "Marketing teams faced significant bottlenecks due to manual content creation processes and fragmented workflows.",
      solution: "An automated AI model aggregator that streamlines generative workflows and centralizes creative asset generation into a cohesive business system.",
      outcome: "Automated manual processes, centralized operations, and significantly improved workflow efficiency for creative teams.",
      services: ["AI Automation", "Workflow Automation", "API Integrations", "Dedicated Technology Teams"],
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1780132121/nrt-portfolio/brlrlaeh7hqxelynzzui.png",
      color: "from-[#8E2DE2] to-[#4A00E0]"
    },
    // 5. FinTech / SaaS
    {
      slug: "financial-compliance-auditing",
      title: "Financial Compliance & Auditing Platform",
      category: "Business Platforms",
      industry: "Finance",
      challenge: "Manual ledger auditing and receipt logging created severe compliance risks and slowed down financial reporting cycles.",
      solution: "A highly secure FinTech platform featuring double-entry compliance ledger checks, a tax logs filing calculation engine, and automated receipt OCR.",
      outcome: "Automated reporting, strict regulatory compliance, and completely centralized financial operations.",
      services: ["Custom Software Development", "Business Process Automation", "Dashboard Systems", "API Integrations"],
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1780132726/nrt-portfolio/efgkxryieqn1jqnifbca.png",
      color: "from-[#4D00FF] to-[#9900FF]"
    },
    // 6. Enterprise / Aviation
    {
      slug: "aviation-compliance-portal",
      title: "Aviation Compliance & Manufacturing Portal",
      category: "Operations Systems",
      industry: "Aviation",
      challenge: "Aviation component manufacturers struggled to track ISO safety certificates and technical drawings through manual filing systems.",
      solution: "A bespoke enterprise directory featuring an interactive technical drawings display, safety certificate registry, and automated supply chain RFQs.",
      outcome: "Improved visibility of compliance metrics, faster decision making, and highly secure operational documentation.",
      services: ["Business Systems", "Workflow Automation", "API Integrations", "Dedicated Technology Teams"],
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1780132594/nrt-portfolio/xhpwpry08piewqayqdyl.png",
      color: "from-[#27324A] to-[#27324A]"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      

      {/* SECTION 1: INTRO - Dark Hero */}
      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
           <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-12">Case Studies</div>
           <h1 className="text-5xl sm:text-[6rem] lg:text-[7rem] font-black tracking-tighter leading-[1] sm:leading-[0.9] mb-12">
              Business Transformation <br className="hidden sm:block" />
              <span className="text-orange-600">In Action</span>
           </h1>
           <p className="text-xl sm:text-2xl font-bold text-slate-900/60 leading-tight max-w-4xl mb-12">
              See how businesses improve operational efficiency, automate workflows and scale through ERP systems, AI automation and custom business software delivered by Next Revolution Tech.
           </p>
           
           <div className="flex flex-wrap gap-4 items-center">
               <span className="bg-white/5 border border-slate-300 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 hover:bg-white/10 transition-colors">ERP Systems</span>
               <span className="bg-white/5 border border-slate-300 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 hover:bg-white/10 transition-colors">AI Automation</span>
               <span className="bg-white/5 border border-slate-300 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 hover:bg-white/10 transition-colors">Business Process Optimization</span>
               <span className="bg-white/5 border border-slate-300 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 hover:bg-white/10 transition-colors">Custom Business Software</span>
               <span className="bg-white/5 border border-slate-300 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 hover:bg-white/10 transition-colors">Dedicated Technology Teams</span>
           </div>
        </div>
      </section>

      {/* Project Stack - ALTERNATING ENTERPRISE LAYOUT */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
         <div className="mx-auto max-w-7xl space-y-40">
            {studies.map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                 {/* Content - 40% */}
                 <div className="w-full lg:w-[40%] flex flex-col gap-8 text-left">
                    <div>
                      <span className="inline-block px-4 py-1.5 rounded-md bg-white border border-slate-300 text-slate-900 text-[10px] font-black uppercase tracking-widest mb-6">
                        {study.industry}
                      </span>
                      {/* Reduced title size by 35% (from 4xl/7xl to 3xl/4xl) */}
                      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                        {study.title}
                      </h2>
                      
                      {/* GEO: Entity-First AI Answer Block */}
                      <div className="bg-slate-50 border-l-4 border-orange-600 p-4 rounded-r-xl mb-6">
                         <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">TL;DR Summary</h3>
                         <p className="text-sm font-medium text-slate-800 leading-relaxed">
                            {study.title} for the {study.industry} sector. {study.solution} resulting in {study.outcome.toLowerCase()}
                         </p>
                      </div>

                      <div className="space-y-8">
                         <div>
                            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900/50 mb-3">Challenge</h3>
                            <p className="text-base text-slate-900/80 font-medium leading-relaxed border-l-2 border-orange-600 pl-4">
                              {study.challenge}
                            </p>
                         </div>
                         <div>
                            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900/50 mb-3">Solution</h3>
                            <p className="text-base text-slate-900/80 font-medium leading-relaxed border-l-2 border-slate-300 pl-4">
                              {study.solution}
                            </p>
                         </div>
                         <div>
                            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900/50 mb-3">Outcome</h3>
                            <p className="text-base text-slate-900 font-bold leading-relaxed border-l-2 border-[#0F172A] pl-4">
                              {study.outcome}
                            </p>
                         </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-300">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">Services Used:</span>
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="bg-white text-slate-600 text-[11px] font-bold px-3 py-1.5 rounded-md border border-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                       <Link 
                         href={`/contact`}
                         className="inline-flex items-center justify-center gap-4 bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-black hover:bg-orange-600 transition-all group/btn w-full sm:w-fit shadow-xl"
                       >
                         Discuss Similar Build
                         <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                       </Link>
                    </div>
                 </div>

                 {/* Visual - 60% */}
                 <div className="w-full lg:w-[60%]">
                    <motion.div 
                       whileHover={{ scale: 1.02 }}
                       className={`relative aspect-[16/10] rounded-3xl sm:rounded-[3rem] bg-gradient-to-br ${study.color} shadow-[0_40px_80px_-20px_rgba(11,27,53,0.15)] p-8 sm:p-16 flex items-center justify-center overflow-hidden group`}
                    >
                       <div className="absolute inset-0 opacity-20 bg-[url('/noise.svg')]" />
                       <Image 
                         src={study.image} 
                         alt={study.title} 
                         className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-1000 shadow-2xl relative z-10" 
                        width={1200} height={800} />
                    </motion.div>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Transformation Outcomes Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white border-y border-slate-300 text-center">
        <div className="mx-auto max-w-5xl">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4">The NRT Impact</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-tight mb-16">
            Transformation Outcomes
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
             {[
               "Reduced Manual Work", 
               "Improved Visibility", 
               "Automated Reporting", 
               "Operational Efficiency", 
               "Faster Decision Making", 
               "Process Optimization",
               "Business Scalability",
               "Workflow Automation"
             ].map((outcome, i) => (
               <div key={i} className="bg-white border border-slate-300 px-8 py-5 rounded-2xl text-lg font-bold text-slate-900 shadow-sm hover:border-slate-400 hover:shadow-md transition-all flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-900" />
                  {outcome}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Industries We Support Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-center">
        <div className="mx-auto max-w-5xl">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10">Industries We Support</div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
             {[
               "Healthcare", 
               "Manufacturing", 
               "Retail", 
               "Logistics", 
               "Education", 
               "Food & Beverage",
               "Professional Services",
               "E-Commerce"
             ].map((industry, i) => (
               <div key={i} className="text-lg font-bold text-slate-600">
                  {industry}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Massive Final CTA - Operations Focused */}
      <section className="py-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white relative overflow-hidden">
         <InteractiveHero3D />
         <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
         <div className="mx-auto max-w-7xl xl:max-w-[1400px] relative z-10">
            <div className="bg-white/[0.02] backdrop-blur-3xl rounded-3xl sm:rounded-[6rem] p-12 sm:p-24 lg:p-32 text-center border border-slate-300 shadow-2xl overflow-hidden relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
               <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 leading-[1] sm:leading-[0.9] mb-8 relative z-10 tracking-tight">
                  Ready To Improve <br /><span className="text-orange-600">Operations?</span>
               </h2>
               <p className="text-xl sm:text-2xl font-medium text-slate-500 max-w-3xl mx-auto mb-16 relative z-10">
                  Let's identify bottlenecks, automate workflows and build systems that support long-term business growth.
               </p>
               <div className="flex flex-wrap justify-center gap-6 relative z-10">
                  <Link href="/contact" className="bg-orange-600 text-white px-10 py-5 sm:px-12 sm:py-6 rounded-2xl sm:rounded-2xl text-xl font-black shadow-[0_30px_60px_rgba(58,92,204,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-4 group w-full sm:w-fit">
                     Book Strategy Call <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link href="/services" className="bg-white/5 border border-slate-300 text-slate-900 px-10 py-5 sm:px-12 sm:py-6 rounded-2xl text-xl font-black hover:bg-white/10 transition-all flex items-center justify-center w-full sm:w-fit">
                     Explore Solutions
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
