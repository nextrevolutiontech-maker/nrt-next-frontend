"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { resourcesData, ResourceCategory, ResourceArticle } from "@/data/resources";

const categories: ResourceCategory[] = [
  "ERP Systems",
  "AI Automation",
  "Business Process Optimization",
  "Custom Software",
  "Business Operations",
  "Dedicated Teams",
  "Digital Transformation"
];

const painPoints = [
  "Manual Reporting",
  "Spreadsheet Dependency",
  "Operational Bottlenecks",
  "Disconnected Systems",
  "Workflow Delays",
  "Lack Of Visibility"
];

export default function ResourcesClient() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | "All">("All");

  const filteredResources = activeCategory === "All" 
    ? resourcesData 
    : resourcesData.filter(r => r.category === activeCategory);

  const pillarResources = resourcesData.filter(r => r.isPillar);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/* HERO SECTION */}
      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="mx-auto max-w-7xl relative z-10 text-center lg:text-left">
           <div className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-8 bg-orange-600/10 px-4 py-2 rounded-full border border-orange-600/20">
              GEO Authority Hub
           </div>
           <h1 className="text-4xl sm:text-[5rem] lg:text-[7rem] font-black tracking-tighter leading-[1] sm:leading-[0.9] mb-8">
              Knowledge For <br className="hidden lg:block" />
              <span className="text-orange-600">Smarter Operations.</span>
           </h1>
           <p className="text-lg sm:text-2xl font-medium text-slate-900/60 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Practical insights on ERP systems, AI automation, workflow optimization and business growth for decision makers.
           </p>
        </div>
      </section>

      {/* WHAT WE HELP BUSINESSES SOLVE (GEO SECTION) */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white border-b border-slate-300">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">What We Help Businesses Solve</h2>
              <p className="text-slate-900/60 mt-2 font-medium">Core operational challenges we engineer out of your business.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {painPoints.map((point, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-300 hover:border-orange-600/30 transition-colors flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                <span className="font-bold text-sm leading-tight text-slate-900">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLAR CONTENT / FEATURED */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-4">Featured Resources</h2>
            <p className="text-lg text-slate-900/60 font-medium">Essential guides on architecture, automation, and operational efficiency.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pillarResources.slice(0, 4).map((resource) => (
              <ResourceCard key={resource.id} resource={resource} featured />
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT CLUSTERS / ALL RESOURCES */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
             <h2 className="text-4xl font-black tracking-tighter text-slate-900">Knowledge Clusters</h2>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === "All" 
                ? "bg-white text-slate-900 shadow-md border border-slate-200" 
                : "bg-white text-slate-600 hover:bg-[#E2E8F0] border border-transparent"
              }`}
            >
              All Topics
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                  ? "bg-orange-600 text-white shadow-md shadow-[#3A5CCC]/20" 
                  : "bg-white text-slate-600 hover:bg-[#E2E8F0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
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
              Need Help Improving <span className="text-orange-600">Operations?</span>
            </h2>
            <p className="text-xl sm:text-2xl text-slate-900/70 font-medium mb-12">
              Let's identify inefficiencies, automate workflows and build systems that support long-term growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
              >
                 Book Strategy Call <ArrowRight className="w-6 h-6" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-black/20 hover:border-black/40 text-slate-900 px-10 py-5 rounded-full font-black text-lg hover:bg-black/5 transition-all duration-300 w-full sm:w-auto"
              >
                 Explore Services
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

function ResourceCard({ resource, featured = false }: { resource: ResourceArticle; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={`group relative border border-slate-300 hover:border-orange-600/50 rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-[#3A5CCC]/10 transition-all flex flex-col h-full overflow-hidden ${featured ? 'bg-gradient-to-b from-white to-[#F8FAFC]' : 'bg-white'}`}
    >
      {/* Meta */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
        <div className="inline-flex px-3 py-1 bg-orange-600/10 text-orange-600 text-xs font-black uppercase tracking-wider rounded-md">
          {resource.category}
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-900/50">
          <FileText className="w-4 h-4" />
          {resource.readingTime}
        </div>
      </div>

      {/* Title */}
      <h3 className={`font-black tracking-tight text-slate-900 mb-6 group-hover:text-orange-600 transition-colors relative z-10 ${featured ? 'text-3xl' : 'text-2xl'}`}>
        <Link href={resource.link} className="focus:outline-none">
          <span className="absolute inset-0 z-0" aria-hidden="true" />
          {resource.title}
        </Link>
      </h3>

      {/* Structural Problem/Outcome (Not a generic blog desc) */}
      <div className="flex-grow space-y-4 mb-8 relative z-10">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Business Problem</span>
          <p className="text-sm font-medium text-slate-900/80 leading-relaxed border-l-2 border-[#E2E8F0] pl-3">
            {resource.businessProblem}
          </p>
        </div>
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Expected Outcome</span>
          <p className="text-sm font-medium text-orange-600 leading-relaxed border-l-2 border-orange-600/30 pl-3">
            {resource.expectedOutcome}
          </p>
        </div>
      </div>

      {/* Internal Linking / Tags */}
      <div className="pt-6 border-t border-slate-300 mt-auto relative z-10">
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-3">Related Solutions</span>
        <div className="flex flex-wrap gap-2">
          {resource.relatedSolutions.map((sol, i) => (
            <span key={i} className="text-xs font-bold text-slate-900/60 bg-slate-50 px-2.5 py-1 rounded-md">
              {sol}
            </span>
          ))}
        </div>
      </div>
      
      {/* Action Indicator */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
         <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-900">
            <ArrowUpRight className="w-5 h-5" />
         </div>
      </div>
    </motion.div>
  );
}
