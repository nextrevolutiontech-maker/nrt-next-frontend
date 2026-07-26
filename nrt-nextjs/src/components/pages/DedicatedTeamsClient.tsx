"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Zap,
  ShieldCheck,
  ArrowRight,
  Code2,
  Database,
  Layout,
  Server,
  Cpu,
  CheckCircle2,
  Calendar,
  Star,
} from "lucide-react";

const roles = [
  { title: "Frontend Engineers", desc: "React, Next.js, Vue, Tailwind CSS", icon: Layout },
  { title: "Backend Developers", desc: "Node.js, Express, Python, Go", icon: Server },
  { title: "Full-Stack Architects", desc: "End-to-end system design & scaling", icon: Code2 },
  { title: "Database & Cloud", desc: "PostgreSQL, MongoDB, AWS, Docker", icon: Database },
  { title: "AI / LLM Specialists", desc: "Agent integration, RAG, OpenAI API", icon: Cpu },
  { title: "DevOps & QA", desc: "CI/CD pipelines, automated testing", icon: ShieldCheck },
];

const benefits = [
  {
    title: "Zero Retention Overhead",
    desc: "Skip the hiring delays, HR benefits, and retention struggles. We handle the entire lifecycle.",
    icon: Users,
  },
  {
    title: "Scale On Demand",
    desc: "Quickly ramp up or downsize your engineering capabilities based on project demands.",
    icon: Zap,
  },
  {
    title: "Pre-Vetted Seniority",
    desc: "Every engineer has a proven track record of shipping production-grade enterprise software.",
    icon: ShieldCheck,
  },
];

const steps = [
  {
    step: "01",
    title: "Scope The Need",
    desc: "We analyze your tech stack, product roadmap, and specific skill gaps to identify the perfect engineering profile.",
  },
  {
    step: "02",
    title: "Select & Interview",
    desc: "Review profiles of our pre-vetted engineers. Interview them directly to ensure technical and cultural fit.",
  },
  {
    step: "03",
    title: "Onboard & Ship",
    desc: "Engineers integrate into your Slack, Jira, and GitHub. They adapt to your timezone and begin contributing immediately.",
  },
];

const guarantees = [
  "Dedicated Slack channel for seamless communication",
  "Weekly progress reports and sprint reviews",
  "Daily standups synced to your timezone",
  "Full IP ownership and NDA protection",
  "14-day risk-free trial period",
  "Direct access to NRT tech leads for escalation",
];

export default function DedicatedTeamsClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="pt-32 pb-28 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4" />

        <div className="mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 bg-orange-50 px-4 py-2 rounded-full border border-orange-200">
                Staff Augmentation
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1] mb-6">
                Extend Your{" "}
                <span className="text-orange-600">Engineering</span>{" "}
                Capabilities.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-900/60 leading-relaxed max-w-xl mb-10">
                Hire pre-vetted React, Node, and AI engineers without the HR overhead. We embed
                directly into your workflows and ship code from day one.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-black uppercase tracking-wider text-sm shadow-lg hover:shadow-orange-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  Book Hiring Strategy <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solution-finder"
                  className="border border-slate-300 text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-full font-black uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2"
                >
                  Find My Solution
                </Link>
              </div>

              {/* Trust signal */}
              <div className="flex items-center gap-2 mt-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                ))}
                <span className="text-sm font-bold text-slate-500 ml-1">
                  Trusted by 50+ global engineering teams
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right — animated engineer cards */}
          <div className="hidden lg:flex flex-col gap-4">
            {[
              { name: "Senior React Engineer", stack: "React · Next.js · TypeScript", status: "Available" },
              { name: "AI/LLM Automation Dev", stack: "Python · LangChain · OpenAI", status: "Available" },
              { name: "Full-Stack Architect", stack: "Node.js · PostgreSQL · AWS", status: "In Project" },
            ].map((eng, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <div className="font-black text-slate-900">{eng.name}</div>
                  <div className="text-sm text-slate-400 font-medium">{eng.stack}</div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shrink-0 ${
                    eng.status === "Available"
                      ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                      : "bg-slate-100 text-slate-500 border border-slate-200"
                  }`}
                >
                  {eng.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-4">
              Why NRT Dedicated Teams
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              Bypass the Expensive Hiring Funnel
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Traditional hiring takes 3-6 months and costs $30k+ in recruitment fees. We eliminate that entirely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:shadow-xl hover:border-orange-200 transition-all group"
                >
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-colors">
                    <Icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ROLES GRID ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-4">
                Engineering Talent
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-6">
                Talent You Can Hire
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-xl mb-10">
                We maintain a tight roster of specialized engineers ready to integrate into your existing squads.
              </p>

              {/* Guarantees */}
              <div className="space-y-3">
                {guarantees.map((g, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                    <span className="font-semibold text-slate-700">{g}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {roles.map((role, i) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-orange-400 hover:shadow-lg transition-all flex items-start gap-4"
                  >
                    <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl border border-orange-100 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-1">{role.title}</h4>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed">{role.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-orange-400 mb-4">
              The Process
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
              How It Works
            </h2>
            <p className="text-white/50 text-lg">From first call to first commit in under 7 days.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-colors"
              >
                <div className="text-5xl font-black text-orange-600/40 mb-6 leading-none">
                  {item.step}
                </div>
                <h4 className="text-xl font-black text-white mb-3">{item.title}</h4>
                <p className="text-white/50 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING PACKAGES (WEEKLY & MONTHLY) ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-4">
              Transparent Staff Augmentation Plans
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
              Weekly & Monthly <span className="text-orange-600">Engagement Packages</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Flexibility to scale up or down. Pay weekly for short-term sprints or lock in dedicated monthly engineers with zero recruitment overhead.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WEEKLY PLAN */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg flex flex-col justify-between hover:border-orange-400 transition-all">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-wider mb-4 border border-blue-200">
                  Weekly Sprint
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Weekly Sprint Dev</h3>
                <p className="text-xs font-bold text-slate-500 mb-6">Dedicated Senior Engineer for Emergency Features & Bug Fixes</p>
                <div className="flex items-baseline gap-2 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-3xl font-black text-slate-900">PKR 95,000</span>
                  <span className="text-xs font-bold text-slate-500">/ Week ($350)</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm font-bold text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>1 Dedicated Senior Dev (React, Node, Python)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>40 Hours / Week Dedicated Capacity</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Slack, Jira & GitHub Daily Commits</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Daily Standups & Timezone Sync</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>100% Code Ownership & Zero Lock-in</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/923442013217?text=Hi%20NRT%2C%20I%20want%20to%20hire%20a%20Weekly%20Dedicated%20Developer%20(PKR%2095k/week)."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-slate-900 hover:bg-orange-600 text-white py-4 rounded-xl text-center font-black text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Hire Weekly Dev
              </a>
            </div>

            {/* MONTHLY PLAN (POPULAR) */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border-2 border-orange-500 shadow-2xl flex flex-col justify-between relative transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest shadow-md">
                Most Popular
              </div>
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-wider mb-4 border border-orange-500/30">
                  Monthly Full-Time
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Monthly Dedicated Dev</h3>
                <p className="text-xs font-bold text-slate-300 mb-6">Full-Time Senior Engineer Embedded Directly in Your Squad</p>
                <div className="flex items-baseline gap-2 mb-6 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <span className="text-3xl font-black text-emerald-400">PKR 380,000</span>
                  <span className="text-xs font-bold text-slate-400">/ Month ($1,400)</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm font-bold text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>1 Full-Time Senior Engineer (160 Hrs/Mo)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Timezone Aligned Direct Integration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full-Stack (Next.js, Node, PostgreSQL, AI)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tech Lead Oversight & QA Included</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>14-Day Replacement Guarantee</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/923442013217?text=Hi%20NRT%2C%20I%20want%20to%20hire%20a%20Monthly%20Dedicated%20Developer%20(PKR%20380k/month)."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-xl text-center font-black text-xs uppercase tracking-wider transition-colors shadow-lg shadow-orange-600/30"
              >
                Hire Monthly Dev
              </a>
            </div>

            {/* FULL SQUAD PLAN */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg flex flex-col justify-between hover:border-orange-400 transition-all">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-black uppercase tracking-wider mb-4 border border-purple-200">
                  Full Product Squad
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Full Engineering Pod</h3>
                <p className="text-xs font-bold text-slate-500 mb-6">Complete Tech Lead + Senior Developers + QA Pod</p>
                <div className="flex items-baseline gap-2 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-3xl font-black text-slate-900">PKR 1,050,000</span>
                  <span className="text-xs font-bold text-slate-500">/ Month ($3,800)</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm font-bold text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>1 Solutions Architect / Tech Lead</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>2 Senior Full-Stack Engineers</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>1 AI Automation & QA Specialist</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Full CI/CD & Architecture Oversight</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Priority Emergency SLA & Weekly Review</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/923442013217?text=Hi%20NRT%2C%20I%20want%20to%20hire%20a%20Full%20Engineering%20Pod%20(PKR%201.05M/month)."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-slate-900 hover:bg-orange-600 text-white py-4 rounded-xl text-center font-black text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Book Engineering Pod
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] -z-10" />

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-6">
            Get Started Today
          </div>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6">
            Ready to scale your{" "}
            <span className="text-orange-600">Engineering</span>?
          </h2>
          <p className="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
            Get immediate access to top-tier developers. No recruitment fees. No retention hassle. Start shipping faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl hover:shadow-orange-200 hover:-translate-y-1 transition-all inline-flex items-center gap-3"
            >
              Hire Your Team Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="border border-slate-300 text-slate-900 hover:bg-slate-50 px-10 py-5 rounded-full font-black text-lg transition-all inline-flex items-center gap-3"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
