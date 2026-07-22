import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Users, Zap, ShieldCheck, ArrowRight, Code2, 
  Database, Layout, Server, Cpu, CheckCircle2 
} from "lucide-react";
import { SEO } from "../components/SEO";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

const roles = [
  { title: "Frontend Engineers", desc: "React, Next.js, Vue, Tailwind CSS", icon: <Layout className="w-6 h-6" /> },
  { title: "Backend Developers", desc: "Node.js, Express, Python, Go", icon: <Server className="w-6 h-6" /> },
  { title: "Full-Stack Architects", desc: "End-to-end system design & scaling", icon: <Code2 className="w-6 h-6" /> },
  { title: "Database & Cloud", desc: "PostgreSQL, MongoDB, AWS, Docker", icon: <Database className="w-6 h-6" /> },
  { title: "AI/LLM Specialists", desc: "Agent integration, RAG, OpenAI API", icon: <Cpu className="w-6 h-6" /> },
  { title: "DevOps & QA", desc: "CI/CD pipelines, automated testing", icon: <ShieldCheck className="w-6 h-6" /> }
];

const benefits = [
  {
    title: "Zero Retention Overhead",
    desc: "Skip the hiring delays, HR benefits, and retention struggles. We handle the entire lifecycle.",
    icon: <Users className="w-8 h-8 text-orange-600" />
  },
  {
    title: "Scale On Demand",
    desc: "Quickly ramp up or downsize your engineering capabilities based on project demands.",
    icon: <Zap className="w-8 h-8 text-orange-600" />
  },
  {
    title: "Pre-Vetted Seniority",
    desc: "Every engineer has a proven track record of shipping production-grade enterprise software.",
    icon: <ShieldCheck className="w-8 h-8 text-orange-600" />
  }
];

export function DedicatedTeamsLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <SEO
        title="Hire Dedicated Engineering Teams | Next Revolution Tech"
        description="Extend your engineering capabilities with pre-vetted React, Node, and AI engineers without the overhead."
        schemaType="Service"
        schemaData={{
          name: "Dedicated Engineering Teams & Staff Augmentation",
          description: "Extend your engineering capabilities with pre-vetted React, Node, and AI engineers without the overhead.",
          serviceType: "Staff Augmentation & Dedicated Engineering"
        }}
      />

      {/* HERO SECTION */}
      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="mx-auto max-w-7xl relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
           <div className="flex-1">
             <div className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-8 bg-orange-600/10 px-4 py-2 rounded-full border border-orange-600/20">
                Staff Augmentation
             </div>
             <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1] mb-8">
                Extend Your <br className="hidden lg:block" />
                <span className="text-orange-600">Engineering</span> Capabilities.
             </h1>
             <p className="text-lg sm:text-xl font-medium text-slate-900/60 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                Hire pre-vetted React, Node, and AI engineers without the HR overhead. We embed directly into your workflows and ship code from day one.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link 
                  to="/contact" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-black uppercase tracking-wider text-sm shadow-md hover:shadow-lg transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2"
                >
                  Book Hiring Strategy <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
           </div>
           
           <div className="flex-1 hidden lg:block relative">
              <div className="bg-white/5 border border-slate-300 rounded-[3rem] p-8 backdrop-blur-sm relative z-10">
                 <div className="flex flex-col gap-6">
                    {[1, 2, 3].map((_, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                        className="bg-white/5 border border-slate-300 rounded-2xl p-4 flex items-center gap-4"
                      >
                         <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-600">
                            <Code2 className="w-5 h-5" />
                         </div>
                         <div>
                            <div className="h-3 w-32 bg-white/20 rounded-full mb-2"></div>
                            <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                         </div>
                         <div className="ml-auto">
                            <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider">Active</div>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-slate-900 mb-6">Why Choose NRT Dedicated Teams?</h2>
            <p className="text-lg text-slate-900/60 font-medium">Bypass the expensive and slow traditional hiring funnel.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-300 rounded-[2rem] p-8 hover:shadow-xl hover:border-orange-600/20 transition-all"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-900/60 font-medium leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white border-y border-slate-300">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-slate-900 mb-6">Talent You Can Hire</h2>
            <p className="text-lg text-slate-900/60 font-medium max-w-2xl">We maintain a tight roster of specialized engineers ready to integrate into your existing squads.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {roles.map((role, i) => (
               <div key={i} className="bg-white border border-slate-300 rounded-2xl p-6 hover:border-orange-600/40 transition-colors flex items-start gap-4">
                  <div className="p-3 bg-orange-600/10 text-orange-600 rounded-xl shrink-0">
                     {role.icon}
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-1">{role.title}</h4>
                     <p className="text-sm text-slate-900/60 font-medium">{role.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-slate-900 mb-6">How It Works</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black/10 before:to-transparent">
             {[
               { step: "01", title: "Scope The Need", desc: "We analyze your tech stack, product roadmap, and specific skill gaps to identify the perfect engineering profile." },
               { step: "02", title: "Select & Interview", desc: "Review profiles of our pre-vetted engineers. Interview them directly to ensure technical and cultural fit." },
               { step: "03", title: "Onboard & Ship", desc: "Engineers integrate into your Slack, Jira, and GitHub. They adapt to your timezone and begin contributing immediately." }
             ].map((item, i) => (
               <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-200 bg-orange-600 text-white font-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                     {item.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white border border-slate-300 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                     <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                     <p className="text-slate-900/60 font-medium">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/noise.svg')]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[120px] -z-10" />
         
         <div className="mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8">
              Ready to scale your <span className="text-orange-600">Engineering</span>?
            </h2>
            <p className="text-xl sm:text-2xl text-slate-900/70 font-medium mb-12">
              Get immediate access to top-tier developers. No recruitment fees. No retention hassle.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform duration-300"
            >
               Hire Your Team Now <ArrowRight className="w-6 h-6" />
            </Link>
         </div>
      </section>
    </div>
  );
}
