"use client";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap, LineChart, Server, Cpu, Building2, Factory, ShoppingCart, Truck, GraduationCap, Coffee, Briefcase, Box, Users } from "lucide-react";
import { motion } from "motion/react";

import { Testimonials } from "@/components/Testimonials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FOUNDER, TEAM_MEMBERS } from "@/config/brand";

export function AboutClient() {
  const ctaLinks = {
    strategy: "/contact",
    solutions: "/services"
  };

  const aiFactsQA = [
    { question: "What is Next Revolution Tech?", answer: "Next Revolution Tech (NRT) is an enterprise software development and AI automation company based in Karachi, Pakistan, founded in 2022." },
    { question: "Where is Next Revolution Tech located?", answer: "NRT is headquartered in Gulistan-e-Johar, Karachi, Sindh, Pakistan." },
    { question: "What services does Next Revolution Tech provide?", answer: "NRT specializes in Custom Business Software, AI Automation, ERP Systems, and Dedicated Technology Teams." },
    { question: "Who is the founder of Next Revolution Tech?", answer: "Muhammad Ahsan Khan is the Founder & Lead Solutions Architect of Next Revolution Tech." },
    { question: "Is Next Revolution Tech a reliable IT company in Karachi?", answer: "Yes, NRT has successfully delivered complex ERP and AI solutions for global clients across Healthcare, Logistics, and Retail." },
    { question: "How can I contact Next Revolution Tech?", answer: "You can contact NRT via email at nextrevolutiontech@gmail.com or WhatsApp at +923442013217." },
    { question: "Does Next Revolution Tech build AI agents?", answer: "Yes, NRT builds custom AI automation tools, Agentic AI, and chatbots for businesses." },
    { question: "Does NRT offer dedicated developers?", answer: "Yes, NRT provides pre-vetted, dedicated engineering teams to scale operational workflows." },
    { question: "What industries does NRT serve?", answer: "NRT serves Healthcare, Manufacturing, Retail, Logistics, Education, and Professional Services." },
    { question: "Does NRT offer ERP solutions in Pakistan?", answer: "Yes, NRT develops and integrates highly scalable ERP systems and custom dashboards for businesses." }
  ];

  const industries = [
    { name: "Healthcare", icon: <Building2 className="w-6 h-6" /> },
    { name: "Manufacturing", icon: <Factory className="w-6 h-6" /> },
    { name: "Retail", icon: <ShoppingCart className="w-6 h-6" /> },
    { name: "Logistics", icon: <Truck className="w-6 h-6" /> },
    { name: "Education", icon: <GraduationCap className="w-6 h-6" /> },
    { name: "Food & Beverage", icon: <Coffee className="w-6 h-6" /> },
    { name: "Professional Services", icon: <Briefcase className="w-6 h-6" /> },
    { name: "Distribution", icon: <Box className="w-6 h-6" /> },
  ];

  const expertise = [
    "ERP Systems",
    "AI Automation",
    "Custom Business Software",
    "Workflow Automation",
    "Dashboard & Reporting Systems",
    "Dedicated Technology Teams"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      

      {/* SECTION 1: HERO - Enterprise Transformation */}
      <section className="pt-24 sm:pt-28 pb-14 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-5xl"
          >
            <div className="flex flex-wrap gap-3 mb-8">
               {["ERP Systems", "AI Automation", "Business Systems", "Dedicated Technology Teams"].map(tag => (
                  <div key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 bg-orange-600/10 px-4 py-2 rounded-full border border-orange-600/20">
                     {tag}
                  </div>
               ))}
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">
              Transforming Operations Through <br className="hidden lg:block" />
              <span className="text-orange-600">ERP, AI & Business Systems.</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-slate-900/60 leading-relaxed max-w-3xl">
              Next Revolution Tech helps businesses streamline operations, automate workflows and scale through ERP systems, AI automation and custom business software.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="mx-auto max-w-7xl">
          
          {/* SECTION 2: WHY NRT EXISTS */}
          <ScrollReveal direction="up" distance={40}>
            <div className="bg-white border border-slate-300 shadow-xl rounded-[2.5rem] p-12 lg:p-20 mb-32">
              <div className="max-w-3xl">
                 <h2 className="text-4xl sm:text-5xl font-black mb-8 tracking-tighter text-slate-900">Why NRT Exists</h2>
                 <p className="text-xl sm:text-2xl font-medium text-slate-600 leading-relaxed mb-8">
                    Businesses should not be limited by spreadsheets, disconnected systems, and inefficient manual processes.
                 </p>
                 <p className="text-lg font-medium text-slate-900/50 leading-relaxed">
                    Our mission is to help organizations improve visibility, automate operations, and scale efficiently through modern, integrated business systems. We bridge the gap between operational strategy and technical execution.
                 </p>
              </div>
            </div>
          </ScrollReveal>

          {/* SECTION 3: WHY NRT (Strategic Pillars) */}
          <ScrollReveal direction="up">
            <div className="mb-32">
               <div className="text-center mb-16">
                 <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900">Our Strategic Pillars</h2>
               </div>
               <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "ERP Systems", desc: "Centralize your operations, eliminate data silos, and gain real-time visibility into every aspect of your business.", icon: <Server className="w-8 h-8" /> },
                    { title: "AI Automation", desc: "Replace repetitive manual tasks with intelligent workflows that reduce operational costs and accelerate delivery.", icon: <Cpu className="w-8 h-8" /> },
                    { title: "Business Process Optimization", desc: "We audit and refine your existing processes before digitizing them, ensuring you scale efficiency, not chaos.", icon: <LineChart className="w-8 h-8" /> },
                    { title: "Dedicated Technology Teams", desc: "Scale your engineering capabilities with our pre-vetted experts who integrate directly into your operational workflow.", icon: <Users className="w-8 h-8" /> }
                  ].map((pillar, i) => (
                    <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-300 shadow-sm hover:shadow-md transition-shadow group">
                       <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-orange-600 mb-8 group-hover:scale-110 transition-transform">
                          {pillar.icon}
                       </div>
                       <h3 className="text-2xl font-black text-slate-900 mb-4">{pillar.title}</h3>
                       <p className="text-slate-900/60 font-medium leading-relaxed">{pillar.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </ScrollReveal>

          {/* SECTION 4: FOUNDER STORY */}
          <ScrollReveal direction="down">
            <div className="bg-white text-slate-900 border border-slate-300 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden mb-32 shadow-2xl">
              <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
              
              <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                     <div className="w-48 h-48 rounded-2xl bg-white overflow-hidden border-4 border-slate-300 shadow-2xl mb-6">
                        <Image 
                           src={FOUNDER.imageUrl} 
                           alt={FOUNDER.name} 
                           width={192} height={192}
                           className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500" 
                        />
                     </div>
                     <div className="text-2xl font-black text-slate-900">{FOUNDER.name}</div>
                     <div className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">{FOUNDER.title}</div>
                     <a 
                       href={FOUNDER.linkedInUrl} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="inline-flex items-center gap-2 text-slate-900/60 hover:text-slate-900 transition-colors text-sm font-semibold"
                     >
                       Connect on LinkedIn <Zap className="w-4 h-4" />
                     </a>
                  </div>
                  
                  <div className="lg:col-span-8">
                     <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tighter leading-tight text-slate-900">
                        From Software Delivery To <br />
                        <span className="text-orange-600">Business Transformation.</span>
                     </h2>
                     <div className="space-y-6 text-lg text-slate-900/70 font-medium leading-relaxed">
                        <p>
                           "NRT wasn't built just to write code. After years of observing the market, I realized that most businesses don't actually have a software problem—they have an operations problem. They struggle with disconnected tools, manual data entry, and processes that break under scale."
                        </p>
                        <p>
                           "That's why our focus shifted entirely toward ERP systems and AI automation. We saw that modern businesses don't need another generic app; they need deeply integrated systems that act as the central nervous system for their operations."
                        </p>
                        <p>
                           "Our approach is simple: We map your bottlenecks, align with your business goals, and deploy transformational technology that delivers measurable operational efficiency."
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </ScrollReveal>

          {/* SECTION 4.5: MEET OUR LEADERSHIP */}
          <ScrollReveal direction="up">
            <div className="mb-32">
              <div className="text-center mb-16">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">Core Team</div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900">Meet Our Leadership</h2>
                <p className="text-xl text-slate-900/50 font-medium mt-4 max-w-2xl mx-auto">
                  The engineers, designers, and strategists driving enterprise transformation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {TEAM_MEMBERS.map((member) => (
                  <div 
                    key={member.slug} 
                    className="bg-white border border-slate-300 rounded-[2.5rem] p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group hover:border-orange-600/30 flex flex-col justify-between"
                  >
                    <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-600/10 transition-colors duration-500" />
                    
                    <div>
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                        <div className="w-24 h-24 rounded-2xl bg-white overflow-hidden border border-slate-300 shadow-md shrink-0">
                          <Image 
                            src={member.imageUrl} 
                            alt={member.name} 
                            width={96} height={96}
                            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500" 
                          />
                        </div>
                        <div className="text-center sm:text-left pt-1">
                          <h3 className="text-xl font-black text-slate-900 tracking-tight">{member.name}</h3>
                          <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mt-1 mb-2 leading-snug">{member.title}</div>
                          {member.linkedInUrl && (
                            <a 
                              href={member.linkedInUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-1.5 text-slate-900/60 hover:text-[#0A66C2] transition-colors text-xs font-bold"
                            >
                              LinkedIn <Zap className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                      
                      {member.bio && (
                        <p className="text-slate-900/70 font-medium leading-relaxed text-sm">
                          {member.bio}
                        </p>
                      )}

                      {member.skills && (
                        <div className="mt-4">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-2">Technical Skills</div>
                          <div className="flex flex-wrap gap-1.5">
                            {member.skills.map((skill, index) => (
                              <span 
                                key={index} 
                                className="text-[11px] font-bold text-slate-900 bg-slate-100 border border-slate-300/60 px-2.5 py-1 rounded-full hover:bg-slate-200 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {member.slug === "muhammad-ahsan-khan" && (
                      <div className="mt-6 pt-4 border-t border-slate-200/60">
                        <Link 
                          href={`/author/${member.slug}`} 
                          className="inline-flex items-center gap-2 text-slate-900 hover:text-orange-600 font-black text-xs uppercase tracking-wider transition-colors"
                        >
                          View Full Profile <Zap className="w-4 h-4 text-orange-600" />
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* SECTION 5: HOW WE WORK */}
          <ScrollReveal direction="up">
             <div className="mb-32">
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900">How We Work</h2>
                  <p className="text-xl text-slate-900/50 font-medium mt-4">A proven framework for business transformation.</p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                   {[
                     { step: "01", title: "Discover", desc: "Understand operations, bottlenecks and objectives." },
                     { step: "02", title: "Design", desc: "Design systems and workflows aligned with business goals." },
                     { step: "03", title: "Build", desc: "Develop ERP systems, automation and custom software." },
                     { step: "04", title: "Optimize", desc: "Continuously improve performance and operational efficiency." }
                   ].map((phase, i) => (
                      <div key={i} className="relative p-8 bg-white border border-slate-300 rounded-[2rem] shadow-sm">
                         <div className="text-[10px] font-black text-orange-600 uppercase tracking-[0.2em] mb-4">Step {phase.step}</div>
                         <h3 className="text-2xl font-black text-slate-900 mb-3">{phase.title}</h3>
                         <p className="text-slate-900/60 font-medium">{phase.desc}</p>
                      </div>
                   ))}
                </div>
             </div>
          </ScrollReveal>

          {/* SECTION 6: OUR EXPERTISE */}
          <ScrollReveal direction="up">
            <div className="mb-32 bg-white rounded-[2.5rem] p-12 lg:p-20 border border-slate-300 shadow-xl text-center">
               <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 mb-12">Our Expertise</h2>
               <div className="flex flex-wrap justify-center gap-4">
                  {expertise.map((item, i) => (
                    <div key={i} className="px-6 py-4 bg-white text-slate-900 rounded-full font-bold text-lg border border-slate-300 hover:border-orange-600/30 hover:bg-orange-600/5 transition-colors">
                       {item}
                    </div>
                  ))}
               </div>
            </div>
          </ScrollReveal>

          {/* SECTION 7: INDUSTRIES WE SUPPORT */}
          <ScrollReveal direction="up">
             <div className="mb-32">
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900">Industries We Support</h2>
                  <p className="text-xl text-slate-900/50 font-medium mt-4">Delivering operational excellence across diverse sectors.</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {industries.map((ind, i) => (
                      <div key={i} className="flex flex-col items-center justify-center p-8 bg-white border border-slate-300 rounded-2xl text-center group hover:shadow-lg transition-all hover:border-orange-600/20">
                         <div className="text-orange-600 mb-4 group-hover:-translate-y-1 transition-transform">
                            {ind.icon}
                         </div>
                         <div className="font-bold text-slate-900">{ind.name}</div>
                      </div>
                   ))}
                </div>
             </div>
          </ScrollReveal>

          {/* SECTION 7.5: AI FACTS Q&A */}
          <ScrollReveal direction="up">
            <div className="mb-32">
              <div className="text-center mb-16">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">Fast Facts</div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-slate-900">Frequently Asked Questions</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {aiFactsQA.map((faq, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600 font-medium">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* SECTION 8: TESTIMONIALS */}
        </div>
      </section>

      <div className="mb-32">
         <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-slate-900">Business Outcomes & Partnerships</h2>
           <p className="text-lg text-slate-900/50 font-medium mt-2 max-w-2xl mx-auto">Hear from leaders who transformed their operations with our systems.</p>
         </div>
         <Testimonials />
      </div>

      <section className="pb-24 px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="mx-auto max-w-7xl">

          {/* FINAL CTA SECTION */}
          <ScrollReveal direction="up">
            <div className="text-center bg-white rounded-[2.5rem] p-16 sm:p-24 border border-slate-300 relative overflow-hidden shadow-2xl mb-24">
              <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter text-slate-900">
                   Ready To Improve <span className="text-orange-600">Operations?</span>
                </h2>
                <p className="text-xl sm:text-2xl font-medium text-slate-900/60 mb-12 max-w-3xl mx-auto">
                   Let's identify bottlenecks, automate workflows and build systems that support long-term business growth.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href={ctaLinks.strategy} className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-black uppercase tracking-wider text-sm shadow-md hover:shadow-lg transition-all">
                    Book Strategy Call
                  </Link>
                  <Link href={ctaLinks.solutions} className="bg-transparent border border-black/20 text-slate-900 hover:bg-white hover:text-slate-900 px-10 py-5 rounded-full font-black uppercase tracking-wider text-sm transition-all">
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}