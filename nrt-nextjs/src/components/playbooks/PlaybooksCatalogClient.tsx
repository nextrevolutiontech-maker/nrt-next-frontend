"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  Zap,
  Layers,
  Code2,
  Users,
  ShieldCheck,
  Sparkles,
  FileCheck,
  CheckCircle2
} from "lucide-react";

const playbooks = [
  {
    id: "ai-operations-2026",
    title: "AI Operations Playbook 2026",
    subtitle: "How Modern Operations Teams Reduce Manual Work and Scale Smarter",
    category: "AI Automation",
    badge: "Powered by Agentic AI",
    status: "Active & Available",
    isLive: true,
    pageCount: "14 Executive Pages",
    readTime: "15 Min Read",
    targetPersona: "COOs, Operations Directors & VP of Ops",
    link: "/playbooks/ai-operations-2026",
    icon: Zap,
    highlights: [
      "The NRT AI ROI Matrix™",
      "6 Operational Leak Audits",
      "5-Stage Rollout Roadmap",
      "Privacy-First Security Standards"
    ]
  },
  {
    id: "enterprise-erp-2026",
    title: "The Enterprise ERP Blueprint 2026",
    subtitle: "Custom ERP vs. Odoo vs. SAP — How to Scale Without Vendor Lock-In",
    category: "Enterprise ERP",
    badge: "Custom vs. Odoo vs. SAP",
    status: "Volume 02",
    isLive: true,
    pageCount: "16-18 Executive Pages",
    readTime: "18 Min Read",
    targetPersona: "CEOs, CFOs & Enterprise Business Owners",
    link: "/playbooks/ai-operations-2026",
    icon: Layers,
    highlights: [
      "ERP Cost & Feature Comparison Matrix",
      "Legacy Migration Risk Avoidance",
      "Zero Vendor Lock-In Architecture",
      "Multi-Module Integration Framework"
    ]
  },
  {
    id: "build-vs-buy-2026",
    title: "The CTO’s Build vs. Buy Software Matrix",
    subtitle: "Architecting Scalable SaaS & Enterprise Systems in 2026",
    category: "Software Architecture",
    badge: "SaaS Architecture Matrix",
    status: "Volume 03",
    isLive: true,
    pageCount: "12 Executive Pages",
    readTime: "12 Min Read",
    targetPersona: "CTOs, Product Owners & Tech Founders",
    link: "/playbooks/ai-operations-2026",
    icon: Code2,
    highlights: [
      "Build vs Buy Decision Flowchart",
      "Scalability & Customization Limits",
      "Technical Debt Risk Matrix",
      "Cloud Infrastructure Costs"
    ]
  },
  {
    id: "offshore-engineering-2026",
    title: "Offshore Engineering Redefined",
    subtitle: "How US & European Tech Companies Scale Teams at 50% Lower Cost",
    category: "Dedicated Teams",
    badge: "Staff Augmentation",
    status: "Volume 04",
    isLive: true,
    pageCount: "12 Executive Pages",
    readTime: "12 Min Read",
    targetPersona: "VP of Engineering & Software Agency Owners",
    link: "/playbooks/ai-operations-2026",
    icon: Users,
    highlights: [
      "US/UK Salary vs NRT Team Cost Matrix",
      "Timezone & Quality Alignment",
      "Senior Developer Vetting Process",
      "Agile Retainer Framework"
    ]
  }
];

export default function PlaybooksCatalogClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-4 sm:px-6 lg:px-12 xl:px-24 overflow-hidden relative">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10 -translate-x-1/3 translate-y-1/3" />

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto mb-20 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-6 bg-orange-100/80 px-4 py-2 rounded-full border border-orange-200">
          <BookOpen className="w-4 h-4" />
          <span>NRT Executive Playbook System</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1] text-slate-900 mb-6">
          Executive Playbooks & <br />
          <span className="text-orange-600">Strategy Blueprints.</span>
        </h1>

        <p className="text-lg sm:text-2xl font-medium text-slate-600 leading-relaxed max-w-3xl">
          High-authority B2B intellectual assets, frameworks, and decision matrices designed exclusively for C-Level executives, CTOs, and operations leaders.
        </p>
      </div>

      {/* PLAYBOOKS CATALOG GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-24">
        {playbooks.map((pb) => {
          const IconComp = pb.icon;
          return (
            <motion.div
              key={pb.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-slate-200 hover:border-orange-500/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-orange-600/10 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* HEADER META */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-lg border border-orange-200">
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{pb.category}</span>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400">
                    {pb.status}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors mb-3">
                  {pb.title}
                </h3>

                <p className="text-sm font-semibold text-slate-600 mb-6 leading-relaxed">
                  {pb.subtitle}
                </p>

                {/* TARGET PERSONA */}
                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl mb-6">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                    Designed Specifically For
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    🎯 {pb.targetPersona}
                  </span>
                </div>

                {/* HIGHLIGHTS */}
                <div className="space-y-2 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                    Key Frameworks & Blueprints Inside
                  </span>
                  {pb.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FOOTER ACTION */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <div className="text-xs font-mono text-slate-500 font-semibold">
                  {pb.pageCount} • {pb.readTime}
                </div>

                <Link
                  href={pb.link}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-orange-600 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md group-hover:scale-105"
                >
                  <span>Explore Playbook</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA FOOTER CARD */}
      <div className="max-w-7xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">
            Need Custom Technical Architecture?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Book an AI & Enterprise Architecture Audit
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 font-medium">
            Schedule a 30-minute technical session directly with Founder & Lead Architect Muhammad Ahsan Khan to calculate your custom business ROI and implementation roadmap.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105"
          >
            <span>Request Architecture Audit (No Obligation)</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
