import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

interface ComparisonData {
  title: string;
  subtitle: string;
  summary: string;
  verdict: string;
  optionA: { name: string; pros: string[]; cons: string[] };
  optionB: { name: string; pros: string[]; cons: string[] };
  faqs: { question: string; answer: string }[];
}

const comparisons: Record<string, ComparisonData> = {
  "custom-erp-vs-odoo": {
    title: "Custom ERP Development vs. Odoo ERP",
    subtitle: "In-Depth Architectural & Cost Comparison for Growing Enterprises",
    summary: "Deciding between building a bespoke Custom ERP with Next Revolution Tech vs deploying off-the-shelf Odoo depends on your workflow complexity, scaling needs, and vendor lock-in risk.",
    verdict: "Custom ERP built with Next Revolution Tech offers 100% code ownership, zero per-user licensing fees, and bespoke workflow alignment, making it superior for mid-market to enterprise companies with unique processes.",
    optionA: {
      name: "Custom ERP (Next Revolution Tech)",
      pros: ["Zero recurring per-user license fees", "100% source code ownership & control", "Tailored to exact operational workflows", "Unlimited database scaling & customization"],
      cons: ["Higher upfront initial investment", "Takes 4-8 weeks to build initial core MVP"]
    },
    optionB: {
      name: "Odoo ERP (Off-the-shelf)",
      pros: ["Faster basic setup out of the box", "Pre-built generic community apps"],
      cons: ["Expensive per-user monthly subscription fees", "Vendor lock-in and upgrade breaking changes", "Bloated UI with unnecessary generic features"]
    },
    faqs: [
      {
        question: "Is Custom ERP cheaper than Odoo in the long run?",
        answer: "Yes. Odoo's per-user monthly subscription costs escalate quickly as your team grows. A custom ERP from Next Revolution Tech requires no per-user licenses, reducing total cost of ownership by up to 60% over 3 years."
      }
    ]
  },
  "erp-vs-excel": {
    title: "Custom ERP System vs. Excel Spreadsheets",
    subtitle: "Why Spreadsheets Ruin Scaling Businesses and How ERP Fixes It",
    summary: "Relying on Excel spreadsheets for inventory, invoicing, and sales leads creates data silos, stockouts, and accidental human data deletion.",
    verdict: "Migrating from Excel to a custom ERP centralizes company data in real-time, automates audit trails, and eliminates manual data entry errors.",
    optionA: {
      name: "Custom ERP System",
      pros: ["Real-time multi-user concurrency without crashes", "Automated inventory & financial reporting", "Role-based access security", "Zero manual formula errors"],
      cons: ["Requires initial employee onboarding"]
    },
    optionB: {
      name: "Excel Spreadsheets",
      pros: ["Free and universally familiar"],
      cons: ["Frequent data corruption & manual formula errors", "No real-time inventory sync across locations", "Zero security or user permission controls"]
    },
    faqs: [
      {
        question: "Can Next Revolution Tech migrate our existing Excel files to a Custom ERP?",
        answer: "Yes, we write automated migration scripts to clean, structure, and import all your legacy Excel records into a secure PostgreSQL database."
      }
    ]
  },
  "ai-agent-vs-chatbot": {
    title: "Agentic AI Agents vs. Standard Rule-Based Chatbots",
    subtitle: "The Evolution from Static Scripts to Autonomous Task Execution",
    summary: "Standard chatbots follow rigid decision trees. Agentic AI agents perceive context, execute API tools, query databases, and resolve multi-step customer inquiries autonomously.",
    verdict: "Agentic AI Agents build true operational leverage by executing actions inside your CRM, ERP, and database automatically.",
    optionA: {
      name: "Agentic AI Agents",
      pros: ["Executes complex database actions autonomously", "Understands natural conversational context", "Continuous memory and multi-channel reasoning"],
      cons: ["Requires initial API tool setup"]
    },
    optionB: {
      name: "Standard Rule-Based Chatbots",
      pros: ["Simple menu navigation"],
      cons: ["Fails on out-of-script user questions", "Cannot execute backend database workflows", "Frustrates customers with repetitive fallback messages"]
    },
    faqs: [
      {
        question: "Can Agentic AI perform actual database updates?",
        answer: "Yes, Agentic AI uses function calling APIs to execute database updates, send automated WhatsApp confirmations, and generate PDF invoices."
      }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(comparisons).map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const comp = comparisons[params.slug];
  if (!comp) return { title: "Comparison Not Found" };

  return {
    title: `${comp.title} | Next Revolution Tech`,
    description: comp.summary,
    alternates: { canonical: `https://www.nextrevolutiontech.tech/comparisons/${params.slug}` }
  };
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const comp = comparisons[params.slug];
  if (!comp) notFound();

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": comp.title,
                "description": comp.summary,
                "publisher": {
                  "@id": "https://www.nextrevolutiontech.tech/#organization"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": comp.faqs.map(f => ({
                  "@type": "Question",
                  "name": f.question,
                  "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
              }
            ]
          })
        }}
      />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 bg-white text-slate-900">
        <div className="mx-auto max-w-7xl">
          <Link href="/resources" className="inline-flex items-center gap-2 font-black text-slate-400 hover:text-orange-600 mb-8 transition-colors uppercase tracking-widest text-[10px]">
            <ArrowLeft className="w-4 h-4" /> Back to Resources & Comparisons
          </Link>
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6">Technical Comparison</div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter leading-tight mb-6">{comp.title}</h1>
          <p className="text-xl font-bold text-orange-600 mb-8">{comp.subtitle}</p>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-10">{comp.summary}</p>
        </div>
      </section>

      <section className="py-16 bg-orange-50 border-y border-orange-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-orange-200 shadow-lg">
            <h2 className="text-sm font-black uppercase tracking-widest text-orange-600 mb-4">Architectural Verdict</h2>
            <p className="text-2xl font-black text-slate-900 leading-snug">{comp.verdict}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-6">{comp.optionA.name}</h2>
              <div className="space-y-4 mb-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-emerald-600">Advantages</h3>
                {comp.optionA.pros.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> {p}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-6">{comp.optionB.name}</h2>
              <div className="space-y-4 mb-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-red-600">Drawbacks</h3>
                {comp.optionB.cons.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-slate-800">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" /> {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
