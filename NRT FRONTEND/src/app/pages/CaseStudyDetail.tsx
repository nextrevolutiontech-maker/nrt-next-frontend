import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Server, Layout, Clock, TrendingUp } from "lucide-react";
import { SEO } from "../components/SEO";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

const caseStudiesData: Record<string, any> = {
  "pulse-healthcare-erp": {
    title: "Pulse Healthcare ERP",
    category: "Enterprise ERP",
    client: "Healthcare Provider • USA",
    heroImage: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422316/nrt-portfolio/ev6sddad59sg3uij5e89.png",
    metaDesc: "How we built a HIPAA-compliant multi-tenant ERP system for a US healthcare provider, reducing overhead by 40%.",
    problem: "The US healthcare provider was using manual spreadsheets across 3 clinical locations. This resulted in frequent patient booking collisions, desynchronized medical records, and severe data safety compliance risks under HIPAA regulations. Scaling to a 4th location was impossible with their current manual stack.",
    solution: "We designed and engineered a multi-tenant, cloud-hosted ERP system from the ground up. It features HIPAA-compliant encrypted patient profiles, automatic scheduler collision checks, and direct billing integrations.",
    architecture: "The system utilizes a microservices architecture hosted on AWS. We isolated patient data in secure PostgreSQL shards and implemented Redis caching for instant schedule retrieval across all 3 clinic locations.",
    stack: ["React.js", "Node.js (NestJS)", "PostgreSQL", "Redis", "AWS EC2 & S3"],
    results: [
      "Zero record desynchronization across 3 locations.",
      "Achieved 100% HIPAA compliance audit pass.",
      "Patient check-in wait times reduced by 40%."
    ],
    timeline: "12 Weeks",
    impact: "Reduced administrative overhead by 40%, saving the clinic an estimated $120,000 annually in lost operational hours.",
    color: "from-[#0057FF] to-[#00A3FF]"
  },
  "autonomous-ai-agent": {
    title: "Autonomous AI Router",
    category: "Agentic AI",
    client: "SaaS Startup • Global",
    heroImage: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422319/nrt-portfolio/gz4oq5ldtbqnas3dfpsn.jpg",
    metaDesc: "Deploying an autonomous AI agent for a SaaS startup to qualify leads 24/7, resulting in a 300% booking boost.",
    problem: "The SaaS client was spending over 100 manual hours per week qualifying raw web leads and trying to book intro calls. They were losing hot leads due to slow human response times across different global time zones.",
    solution: "We deployed an autonomous agentic AI router. This system integrates OpenAI models connected directly to their customer support email, website forms, and Google Calendar to qualify and book calls without human intervention.",
    architecture: "Built on a serverless architecture using Vercel Edge Functions to ensure sub-second response times globally. The AI orchestration layer uses LangChain to evaluate lead intent before pushing data to a vector database for context retrieval.",
    stack: ["Next.js Edge", "Python FastAPI", "OpenAI GPT-4", "LangChain", "Pinecone Vector DB"],
    results: [
      "Lead response time dropped from 4 hours to under 1 minute.",
      "24/7 lead qualification automated across all time zones.",
      "Manual SDR hours reduced by 90%."
    ],
    timeline: "6 Weeks",
    impact: "Achieved a 300% boost in qualified sales calls booked within the first month of deployment.",
    color: "from-[#8E2DE2] to-[#4A00E0]"
  },
  "textile-mill-pos": {
    title: "Textile Mill Web POS",
    category: "Industrial FinTech",
    client: "Textile Manufacturer • Pakistan",
    heroImage: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422328/nrt-portfolio/gun48fjit8uqvh2phurv.png",
    metaDesc: "Building a central Web POS connected with live FBR tax API integrations for a large textile manufacturer.",
    problem: "A large local textile manufacturer was managing sales reports, tax invoices, and multi-location warehouses on an outdated, offline desktop software. This caused manual tracking delays, inventory leaks, and critical tax non-compliance risks during audits.",
    solution: "We built a custom central Web POS connected with live local tax authority (FBR) API integrations. The system features automatic inventory log deductions and role-based operator dashboards for different warehouse managers.",
    architecture: "Deployed on a highly available cloud VPS with automated daily database backups. The POS frontend is a lightweight React SPA that interacts with a Node.js backend, ensuring that even if the FBR API experiences downtime, invoices are queued and synced later.",
    stack: ["React.js", "Node.js (Express)", "MongoDB", "FBR API Integration", "Docker"],
    results: [
      "Over 10,000 invoices automated and successfully synced per month.",
      "FBR tax audits fully automated instantly at the point of sale.",
      "Warehouse logistics workload reduced by 50%."
    ],
    timeline: "10 Weeks",
    impact: "Eliminated tax compliance penalties and saved the finance team 45 hours of manual reconciliation per week.",
    color: "from-[#11998E] to-[#38EF7D]"
  }
};

export function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudiesData[slug || ""];

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 p-6">
        <h1 className="text-4xl font-black mb-4">Case Study Not Found</h1>
        <Link to="/case-studies" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold">Back to Case Studies</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SEO
        title={`${study.title} | Case Study`}
        description={study.metaDesc}
        schemaType="CaseStudy"
        schemaData={{ 
          title: study.title, 
          description: study.metaDesc,
          image: study.heroImage,
          author: "Muhammad Ahsan Khan"
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br ${study.color} opacity-20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2`} />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <Link to="/case-studies" className="inline-flex items-center gap-2 font-black text-slate-900/40 hover:text-slate-900 mb-12 transition-colors uppercase tracking-widest text-[10px]">
             <ArrowLeft className="w-4 h-4" /> All Case Studies
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6">{study.category}</div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-tight">{study.title}</h1>
                <div className="inline-block px-4 py-2 bg-white/5 border border-slate-300 rounded-lg text-sm font-bold text-slate-900/80 mb-10">
                   {study.client}
                </div>
                
                <div className="flex gap-8 border-t border-slate-300 pt-8 mt-4">
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-900/40 mb-2">Timeline</div>
                      <div className="flex items-center gap-2 text-lg font-bold"><Clock className="w-5 h-5 text-slate-900" /> {study.timeline}</div>
                   </div>
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-900/40 mb-2">Impact</div>
                      <div className="flex items-center gap-2 text-lg font-bold"><TrendingUp className="w-5 h-5 text-slate-900" /> Proven ROI</div>
                   </div>
                </div>
             </div>
             
             <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-300 p-8 sm:p-12 bg-white/5 backdrop-blur-md flex items-center justify-center">
                <img src={study.heroImage} alt={study.title} className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-700" />
             </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24">
         <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-20">
               
               <div className="space-y-6">
                  <h2 className="text-3xl font-black tracking-tight border-b-2 border-slate-300 pb-4">The Challenge</h2>
                  <p className="text-lg font-semibold text-slate-600 leading-relaxed">
                     {study.problem}
                  </p>
               </div>

               <div className="space-y-6">
                  <h2 className="text-3xl font-black tracking-tight border-b-2 border-slate-300 pb-4">The Solution</h2>
                  <p className="text-lg font-semibold text-slate-600 leading-relaxed">
                     {study.solution}
                  </p>
               </div>

               <div className="space-y-6">
                  <h2 className="text-3xl font-black tracking-tight border-b-2 border-slate-300 pb-4 flex items-center gap-3">
                     <Server className="w-8 h-8 text-orange-600" /> Architecture
                  </h2>
                  <p className="text-lg font-semibold text-slate-600 leading-relaxed">
                     {study.architecture}
                  </p>
               </div>

               <div className="space-y-6">
                  <h2 className="text-3xl font-black tracking-tight border-b-2 border-slate-300 pb-4 flex items-center gap-3">
                     <TrendingUp className="w-8 h-8 text-slate-900" /> Final Results & Business Impact
                  </h2>
                  <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-300 shadow-lg">
                     <ul className="space-y-5 mb-8">
                        {study.results.map((res: string, i: number) => (
                          <li key={i} className="flex items-start gap-4">
                             <CheckCircle2 className="w-6 h-6 text-slate-900 shrink-0 mt-0.5" />
                             <span className="text-lg font-bold text-slate-900/80">{res}</span>
                          </li>
                        ))}
                     </ul>
                     <div className="p-6 bg-white text-slate-900 rounded-xl">
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-900/50 mb-2">Bottom Line Impact</div>
                        <div className="text-xl font-bold">{study.impact}</div>
                     </div>
                  </div>
               </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
               <div className="bg-white p-8 rounded-[2rem] border border-slate-300 shadow-xl">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900/50 mb-6 flex items-center gap-2">
                     <Layout className="w-4 h-4" /> Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                     {study.stack.map((tech: string, i: number) => (
                       <span key={i} className="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-bold border border-slate-300">
                          {tech}
                       </span>
                     ))}
                  </div>
               </div>

               <div className="bg-gradient-to-br bg-white border-2 border-slate-900 p-10 rounded-[2rem] text-slate-900 shadow-2xl relative overflow-hidden border border-slate-300">
                  <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.svg')]" />
                  <div className="relative z-10 text-center">
                     <h3 className="text-2xl font-black tracking-tight mb-4">Need a similar solution?</h3>
                     <p className="text-sm font-bold text-slate-900/60 mb-8">Book a technical audit with our engineering team today.</p>
                     <Link to="/contact" className="block w-full bg-orange-600 text-white py-4 rounded-xl font-black shadow-lg hover:bg-[#4F7FFF] transition-colors mb-6">
                        Book Consultation
                     </Link>
                  </div>
               </div>

               {/* Related Services Links */}
               <div className="bg-white p-8 rounded-[2rem] border border-slate-300 shadow-xl">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900/50 mb-6">Related Services</h3>
                  <div className="flex flex-col gap-3">
                     {slug === 'pulse-healthcare-erp' && (
                        <Link to="/services/custom-software-development" className="text-lg font-bold text-orange-600 hover:text-slate-900 transition-colors flex items-center justify-between group">
                           Custom ERP Development
                           <ArrowLeft className="w-5 h-5 rotate-135 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                     )}
                     {slug === 'autonomous-ai-agent' && (
                        <Link to="/services/ai-automation" className="text-lg font-bold text-orange-600 hover:text-slate-900 transition-colors flex items-center justify-between group">
                           AI Workflow Automation
                           <ArrowLeft className="w-5 h-5 rotate-135 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                     )}
                     {slug === 'textile-mill-pos' && (
                        <Link to="/services/custom-software-development" className="text-lg font-bold text-orange-600 hover:text-slate-900 transition-colors flex items-center justify-between group">
                           Enterprise Software Development
                           <ArrowLeft className="w-5 h-5 rotate-135 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                     )}
                  </div>
               </div>

               {/* Author Byline */}
               <div className="bg-white p-8 rounded-[2rem] border border-slate-300 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-600/20">
                        <img src="https://res.cloudinary.com/de4oqb7rz/image/upload/v1740927508/nrt-portfolio/dp2_k9oov6.png" alt="Muhammad Ahsan Khan" className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Written By</div>
                        <Link to="/author/muhammad-ahsan-khan" className="text-lg font-black text-slate-900 hover:text-orange-600 transition-colors block">
                           Muhammad Ahsan Khan
                        </Link>
                        <div className="text-sm font-bold text-orange-600">Founder & Lead Architect</div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>
    </div>
  );
}
