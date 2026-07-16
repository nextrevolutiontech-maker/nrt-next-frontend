"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Award, Code2, Rocket, BrainCircuit, CheckCircle2, LineChart } from "lucide-react";
import { AUTHORS } from "@/data/authors";

const IconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-5 h-5 text-[#0057FF]" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-slate-900" />,
  LineChart: <LineChart className="w-5 h-5 text-[#E11D48]" />,
  Code2: <Code2 className="w-5 h-5 text-[#8E2DE2]" />,
  Rocket: <Rocket className="w-5 h-5 text-[#FF9900]" />
};

export default function AuthorProfileClient({ slug }: { slug: string }) {
  const author = AUTHORS[slug];

  if (!author) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 p-6">
        <h1 className="text-4xl font-black mb-4">Author Not Found</h1>
        <Link href="/resources" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold border border-slate-300 shadow-sm hover:shadow transition-shadow">Back to Resources</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        
        <div className="mx-auto max-w-7xl relative z-10 grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-8">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6">Author Profile</div>
              <h1 className="text-5xl sm:text-7xl font-black mb-4 tracking-tighter leading-tight">{author.name}</h1>
              <div className="text-xl sm:text-2xl font-bold text-slate-900/50 mb-8 text-orange-600">{author.role}</div>
              <p className="text-lg font-semibold text-slate-900/80 leading-relaxed max-w-2xl mb-10">
                 {author.bio}
              </p>
              <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#0A66C2] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#084e96] transition-colors">
                 Connect on LinkedIn <ExternalLink className="w-5 h-5" />
              </a>
           </div>

           <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-slate-300 shadow-2xl overflow-hidden p-2 bg-slate-900/5 backdrop-blur-md">
                 <img src={author.image} alt={author.name} className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24">
         <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-16">
               <div className="bg-white p-10 sm:p-12 rounded-[2rem] border border-slate-300 shadow-xl">
                  <h2 className="text-3xl font-black tracking-tighter mb-8">Specializations</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                     {author.specializations.map((spec, i) => (
                       <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-300">
                          <div className="w-10 h-10 rounded-lg bg-slate-50 shadow-sm flex items-center justify-center shrink-0 border border-slate-200">
                             {IconMap[spec.icon]}
                          </div>
                          <span className="font-bold text-slate-900">{spec.name}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="bg-white text-slate-900 p-10 sm:p-12 rounded-[2rem] border border-slate-300 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.01] bg-[url('/noise.svg')]" />
                  <div className="relative z-10">
                     <h2 className="text-3xl font-black tracking-tighter mb-8">{author.whyFounded.title}</h2>
                     <div className="space-y-6 text-lg font-medium text-slate-900/80 leading-relaxed">
                        {author.whyFounded.content.map((paragraph, i) => (
                           <p key={i}>{paragraph}</p>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="bg-white p-10 sm:p-12 rounded-[2rem] border border-slate-300 shadow-xl">
                  <h2 className="text-3xl font-black tracking-tighter mb-8">Track Record & Business Value</h2>
                  <ul className="space-y-6">
                     {author.experience.map((exp, i) => (
                       <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-slate-900 shrink-0 mt-0.5" />
                          <span className="text-lg font-semibold text-slate-900/80 leading-relaxed">{exp}</span>
                       </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
               <div className="bg-gradient-to-br bg-white border-2 border-slate-900 text-slate-900 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.svg')]" />
                  <div className="relative z-10">
                     <h3 className="text-2xl font-black mb-6 tracking-tighter">Enterprise Case Studies</h3>
                     <div className="space-y-4">
                        {author.caseStudies.map((cs, i) => (
                          <Link key={i} href={cs.link} className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors group">
                             <span className="font-bold">{cs.title}</span>
                             <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors shrink-0 ml-4" />
                          </Link>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-300 mt-8">
                  <h3 className="text-2xl font-black mb-6 tracking-tighter">Related Services</h3>
                  <div className="flex flex-col gap-3">
                     <Link href="/services/custom-software-development" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors flex items-center justify-between p-3 border border-slate-300 rounded-lg">
                        ERP Systems Development
                        <ExternalLink className="w-4 h-4 text-black/30" />
                     </Link>
                     <Link href="/services/ai-automation" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors flex items-center justify-between p-3 border border-slate-300 rounded-lg">
                        AI Workflow Automation
                        <ExternalLink className="w-4 h-4 text-black/30" />
                     </Link>
                     <Link href="/services/custom-software-development" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors flex items-center justify-between p-3 border border-slate-300 rounded-lg">
                        Custom Business Software
                        <ExternalLink className="w-4 h-4 text-black/30" />
                     </Link>
                  </div>
               </div>

            </div>

         </div>
      </section>
    </div>
  );
}
