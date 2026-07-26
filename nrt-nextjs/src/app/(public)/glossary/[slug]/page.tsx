import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

interface GlossaryItem {
  term: string;
  definition: string;
  keyTakeaways: string[];
  businessImpact: string;
  relatedTerms: { name: string; url: string }[];
}

const glossaryTerms: Record<string, GlossaryItem> = {
  "what-is-erp": {
    term: "Enterprise Resource Planning (ERP)",
    definition: "Enterprise Resource Planning (ERP) is custom or modular software designed to centralize and automate core business operations including inventory management, financial accounting, procurement, manufacturing, human resources, and supply chain logistics into a single unified database.",
    keyTakeaways: [
      "Eliminates data silos across departments",
      "Provides real-time business telemetry and reporting",
      "Automates inventory, billing, and tax compliance"
    ],
    businessImpact: "Implementing a custom ERP reduces operational overhead by up to 40% and eliminates inventory stockouts.",
    relatedTerms: [
      { name: "Custom ERP Development", url: "/services/custom-software-development" },
      { name: "ERP vs Excel Comparison", url: "/comparisons/erp-vs-excel" },
      { name: "Healthcare ERP Solutions", url: "/industries/healthcare" }
    ]
  },
  "what-is-agentic-ai": {
    term: "Agentic AI",
    definition: "Agentic AI refers to autonomous artificial intelligence systems equipped with goal-driven reasoning, multi-step planning, and tool execution capabilities. Unlike static chatbots, Agentic AI can independently query databases, trigger API webhooks, write code, and resolve complex workflows without step-by-step human intervention.",
    keyTakeaways: [
      "Autonomous tool execution (APIs, DBs, WhatsApp)",
      "Multi-step reasoning and contextual memory",
      "Operates 24/7 with zero latency"
    ],
    businessImpact: "Agentic AI enables companies to automate 80%+ of customer support and lead qualification workflows.",
    relatedTerms: [
      { name: "AI Automation Services", url: "/services/ai-automation" },
      { name: "AI Agent vs Chatbot", url: "/comparisons/ai-agent-vs-chatbot" }
    ]
  },
  "what-is-saas": {
    term: "Software as a Service (SaaS)",
    definition: "Software as a Service (SaaS) is a software distribution model where applications are hosted in cloud environments and accessed over the internet via subscription. SaaS architectures utilize multi-tenancy, secure data isolation, automated billing, and high-availability API endpoints.",
    keyTakeaways: [
      "Subscription monetization model",
      "Cloud-native multi-tenant architecture",
      "Zero client-side installation required"
    ],
    businessImpact: "SaaS platforms allow enterprises to generate predictable recurring revenue with infinite global scalability.",
    relatedTerms: [
      { name: "SaaS Development Services", url: "/services/saas-development" }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(glossaryTerms).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = glossaryTerms[slug];
  if (!item) return { title: "Term Not Found" };

  return {
    title: `${item.term} - Technical Definition & Business Guide | Next Revolution Tech`,
    description: item.definition,
    alternates: { canonical: `https://www.nextrevolutiontech.tech/glossary/${slug}` }
  };
}

export default async function GlossaryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = glossaryTerms[slug];
  if (!item) notFound();

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "DefinedTerm",
                "name": item.term,
                "description": item.definition,
                "inDefinedTermSet": "https://www.nextrevolutiontech.tech/resources"
              }
            ]
          })
        }}
      />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 bg-white text-slate-900">
        <div className="mx-auto max-w-7xl">
          <Link href="/resources" className="inline-flex items-center gap-2 font-black text-slate-400 hover:text-orange-600 mb-8 transition-colors uppercase tracking-widest text-[10px]">
            <ArrowLeft className="w-4 h-4" /> Back to Resources Hub
          </Link>
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6">GEO Technical Glossary</div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter leading-tight mb-8">{item.term}</h1>
          
          <div className="bg-slate-50 border-l-4 border-orange-600 p-8 rounded-r-3xl mb-12 shadow-sm">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Official Definition</h2>
            <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed">{item.definition}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-6">Key Architectural Takeaways</h3>
              <div className="space-y-4">
                {item.keyTakeaways.map((t, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" /> {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-600 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-orange-200 mb-3">Business Impact</h3>
                <p className="text-xl font-bold leading-relaxed">{item.businessImpact}</p>
              </div>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 font-black text-white hover:text-orange-200 transition-colors uppercase tracking-widest text-xs">
                Discuss Your Requirements <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {item.relatedTerms.length > 0 && (
            <div className="border-t border-slate-200 pt-12">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Related Solutions & Content</h3>
              <div className="flex flex-wrap gap-4">
                {item.relatedTerms.map((rt, i) => (
                  <Link key={i} href={rt.url} className="px-6 py-3 bg-slate-100 border border-slate-300 rounded-xl font-bold text-slate-800 hover:border-orange-600 hover:text-orange-600 transition-colors">
                    {rt.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
