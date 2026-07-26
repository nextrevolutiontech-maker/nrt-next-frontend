import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Search, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "GEO Technical Glossary & Enterprise Frameworks | Next Revolution Tech",
  description: "Comprehensive definitions and architectural blueprints for ERP development, Agentic AI, SaaS, WMS, and business process automation.",
  alternates: { canonical: "https://www.nextrevolutiontech.tech/glossary" }
};

const glossaryTerms = [
  {
    slug: "what-is-erp",
    term: "Enterprise Resource Planning (ERP)",
    category: "Enterprise Systems",
    summary: "Centralized software designed to integrate inventory, financial accounting, procurement, HR, and supply chain logistics into a single database.",
    impact: "Reduces operational overhead by up to 40%."
  },
  {
    slug: "what-is-agentic-ai",
    term: "Agentic AI",
    category: "Artificial Intelligence",
    summary: "Autonomous AI systems with goal-driven reasoning and tool execution capabilities (APIs, databases, WhatsApp) operating without step-by-step human intervention.",
    impact: "Automates 80%+ of repetitive support and qualification."
  },
  {
    slug: "what-is-saas",
    term: "Software as a Service (SaaS)",
    category: "Cloud Architecture",
    summary: "Cloud-native application distribution model utilizing multi-tenancy, secure data isolation, subscription billing, and API scale.",
    impact: "Provides high recurring revenue with infinite global scalability."
  }
];

export default function GlossaryHubPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden pt-32 pb-24 px-4 sm:px-6 lg:px-12 xl:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* HERO SECTION */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold mb-6">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <span>GEO Technical Glossary & Frameworks</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6">
            Enterprise Technology <br />
            <span className="text-orange-600">Definitions & Frameworks.</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-3xl leading-relaxed">
            Search authoritative technical definitions, architectural blueprints, and financial impact metrics for ERP development, Agentic AI, SaaS, and workflow automation.
          </p>
        </div>

        {/* GLOSSARY CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {glossaryTerms.map((item) => (
            <div key={item.slug} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:border-orange-500/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-lg mb-4">
                  {item.category}
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors mb-3">
                  {item.term}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                  {item.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600">
                  {item.impact}
                </span>
                <Link
                  href={`/glossary/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-orange-600 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA CARD */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">Need Custom System Architecture?</span>
            <h2 className="text-3xl font-black tracking-tight text-white mb-2">Book a 30-Minute Technical Audit</h2>
            <p className="text-slate-300 text-sm font-medium">Consult directly with Founder & Lead Architect Muhammad Ahsan Khan to define your enterprise software specs.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 shrink-0">
            <span>Schedule Audit Session</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
