"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  CheckCircle2,
  Lock,
  ArrowRight,
  User,
  Mail,
  Phone,
  Layers,
  Sparkles,
  Zap,
  Clock,
  CheckSquare
} from "lucide-react";

export default function PlaybookViewer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    companySize: "11-50",
    jobTitle: "COO / Operations Director"
  });

  const totalPages = 14;

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-4 sm:px-6 lg:px-12 xl:px-24 relative overflow-hidden">
      {/* AMBIENT BACKGROUND GLOW ACCENTS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10 -translate-x-1/3 translate-y-1/3" />

      {/* TOP SYSTEM NAV BAR */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center font-black text-white text-xs shadow-md">
            NRT
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                NRT Executive Playbook System
              </span>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono border border-slate-700">
                v1.1 Gold Master
              </span>
            </div>
            <h2 className="text-sm sm:text-base font-black text-white tracking-tight">
              AI Operations Playbook 2026
            </h2>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl p-1">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="p-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
              title="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="px-3 text-xs font-mono font-bold text-slate-200">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="p-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
              title="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-orange-600/20 hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* PLAYBOOK CANVAS CONTAINER (LIGHT THEME) */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden min-h-[720px] flex flex-col justify-between">
          
          {/* TOP WATERMARK & AUTOMATION SCORE TRACKER */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-3.5 py-1.5 rounded-lg text-xs font-mono shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-300">NRT AI Readiness Score™:</span>
                <span className="text-emerald-400 font-bold">
                  {currentPage === 1 ? "Baseline 22/100" : currentPage === 2 ? "22/100" : "32/100"} ➔ Target 87/100
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                PUBLISHED BY NEXT REVOLUTION TECH
              </span>
            </div>
          </div>

          {/* DYNAMIC PAGE RENDERER */}
          <div className="my-auto">
            {currentPage === 1 && <Page1LightView onExploreNext={handleNext} />}
            {currentPage === 2 && <Page2LightView />}
            {currentPage === 3 && <Page3LightView />}
            {currentPage > 3 && (
              <div className="text-center py-20 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center mx-auto text-orange-600">
                  <Layers className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Page {currentPage} Interactive Preview
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm font-medium">
                  You are viewing the interactive online preview of the NRT AI Operations Playbook 2026. Download the complete 14-page PDF to access full ROI matrices and execution blueprints.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-orange-600/20"
                >
                  <Lock className="w-4 h-4" />
                  <span>Unlock Full 14-Page Playbook</span>
                </button>
              </div>
            )}
          </div>

          {/* PAGE FOOTER BAR */}
          <div className="pt-8 border-t border-slate-200 mt-10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <p className="text-slate-500 text-[11px] max-w-xl font-medium">
              Illustrative examples and ROI estimates should be validated using your organization's operational data and business context.
            </p>

            <Link
              href="/contact"
              className="text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1.5 transition-colors group"
            >
              <span>Request a Free AI Architecture Audit & Opportunity Report (No Obligation)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* GATED DOWNLOAD MODAL (LIGHT THEME) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 text-xl font-bold"
              >
                ✕
              </button>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Access Granted!</h3>
                  <p className="text-slate-600 text-sm font-medium">
                    Thank you, {formData.fullName}. Your PDF download link and Executive Opportunity Report have been dispatched to <span className="text-orange-600 font-bold">{formData.workEmail}</span>.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Gated Executive Access
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      Download AI Operations Playbook 2026
                    </h3>
                    <p className="text-slate-500 text-xs mt-1 font-medium">
                      Complete the 5-point executive profile to receive the complete 14-page playbook PDF and ROI matrix.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:border-orange-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Work Email * (name@company.com)
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="sarah@enterprise.com"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:border-orange-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:border-orange-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company Size *
                        </label>
                        <select
                          value={formData.companySize}
                          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-sm text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                        >
                          <option value="1-10">1–10 Employees</option>
                          <option value="11-50">11–50 Employees</option>
                          <option value="51-200">51–200 Employees</option>
                          <option value="200+">200+ Employees</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Job Title / Role *
                        </label>
                        <select
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-sm text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                        >
                          <option value="CEO / Founder">CEO / Founder</option>
                          <option value="COO / Operations Director">COO / Operations Director</option>
                          <option value="CTO / Tech Lead">CTO / Tech Lead</option>
                          <option value="Other">Other Executive</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 mt-4"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Playbook PDF Now</span>
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

{/* PAGE 1 LIGHT VIEW */}
function Page1LightView({ onExploreNext }: { onExploreNext: () => void }) {
  return (
    <div className="space-y-8">
      {/* BADGE & COMMITMENT */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-orange-700">
          <Zap className="w-3.5 h-3.5 text-orange-600" />
          <span>Powered by Agentic AI</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-600 font-semibold">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> ⏱ 15 Minutes</span>
          <span>📄 14 Executive Pages</span>
          <span className="text-orange-600">🎯 Designed for COOs</span>
        </div>
      </div>

      {/* HEADLINE */}
      <div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
          AI Operations Playbook 2026
        </h1>
        <p className="text-lg sm:text-xl font-bold text-slate-600">
          How Modern Operations Teams Reduce Manual Work and Scale Smarter
        </p>
      </div>

      {/* ONE BIG PROMISE BOX */}
      <div className="bg-orange-50/70 border-l-4 border-orange-600 p-6 rounded-r-2xl border-y border-r border-orange-200/80">
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-2">
          🎯 Executive Mission Statement
        </span>
        <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed italic">
          "In the next 15 minutes, you will discover the exact 6 operational bottlenecks where AI Agents eliminate repetitive manual work—so your business can scale without increasing operational complexity."
        </p>
      </div>

      {/* BUSINESS COPY */}
      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed font-medium">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-slate-900 mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600" /> The Core Operational Friction
          </h4>
          <p>
            Most operations teams don't have a people problem—they have a workflow problem. Skilled employees spend hours every week moving information between disconnected systems instead of creating business value.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-slate-900 mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" /> The NRT Tech-Agnostic Promise
          </h4>
          <p>
            Traditional automation relies on rigid scripts that break easily. NRT Agentic AI introduces autonomous reasoning into your workflow layer, integrating directly with your existing technology stack.
          </p>
        </div>
      </div>

      {/* ASK YOURSELF REFLECTION */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          ❓ Pre-Read Executive Reflection
        </h4>
        <div className="space-y-3 text-sm text-slate-200 font-medium">
          <div className="flex items-start gap-3">
            <CheckSquare className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <span><strong>Friction Audit:</strong> How many hours does your team spend copying data between software systems every week?</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckSquare className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <span><strong>Approval Bottleneck:</strong> Which approval process creates the biggest operational delay in your company right now?</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckSquare className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <span><strong>Vulnerability Audit:</strong> If one key employee left tomorrow, which manual process would break first?</span>
          </div>
        </div>
      </div>

      {/* INSIDE THIS PLAYBOOK STRIP */}
      <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-700">
        <span className="font-black text-orange-600 uppercase tracking-wider">Inside This Playbook:</span>
        <span>▫ 6 Operational Leaks</span>
        <span>▫ NRT AI ROI Matrix™</span>
        <span>▫ NRT AI Readiness Score™</span>
        <span>▫ 5-Stage Rollout Plan</span>
        <span>▫ Executive Decision Framework</span>
        <button
          onClick={onExploreNext}
          className="text-orange-600 hover:text-orange-700 font-black flex items-center gap-1 transition-colors"
        >
          <span>Turn to Page 2</span> <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

{/* PAGE 2 LIGHT VIEW */}
function Page2LightView() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 1: Operational Awareness
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          The Agentic Shift — Why Legacy Automation Breaks
        </h2>
        <p className="text-base text-slate-600 font-medium">
          Why Rigid Rule-Based Scripts Fail in Modern Enterprise Operations and How Autonomous Reasoning Restores Workflow Stability
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700 font-medium">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-slate-800 mb-2">The Legacy Business Impact</h4>
          <p>
            Traditional workflow tools rely on rigid <code className="text-slate-800 bg-slate-200 px-1 py-0.5 rounded">If/Then</code> rules. When a vendor updates a PDF layout or schema changes, traditional automation fails silently. Operations teams spend 15+ hours weekly manually troubleshooting broken webhooks and re-entering data.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-cyan-700 mb-2">The NRT Agentic Solution</h4>
          <p>
            Agentic AI introduces autonomous reasoning. Instead of executing static code, NRT AI Agents evaluate context, resolve data anomalies, and adapt to format changes without human intervention—enabling your team to focus on strategic work.
          </p>
        </div>
      </div>

      {/* 5-SECOND EXECUTIVE COMPARISON TABLE */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <h4 className="font-black text-sm">5-Second Executive Comparison Table</h4>
          <span className="text-xs text-emerald-400 font-mono font-bold">NRT Agentic Mesh Standard</span>
        </div>
        <div className="p-6">
          <table className="w-full text-left text-xs text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900 font-black">
                <th className="pb-3">Operational Dimension</th>
                <th className="pb-3 text-slate-500">Legacy Rule-Based Automation</th>
                <th className="pb-3 text-emerald-600 font-black">Agentic AI Architecture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 font-bold text-slate-900">Logic Model</td>
                <td className="py-3.5 text-slate-500">Fixed Rules (If/Then)</td>
                <td className="py-3.5 font-black text-emerald-600">Context-Aware Reasoning</td>
              </tr>
              <tr>
                <td className="py-3.5 font-bold text-slate-900">Data Flexibility</td>
                <td className="py-3.5 text-slate-500">Breaks on Layout/Schema Change</td>
                <td className="py-3.5 font-black text-emerald-600">Adapts to Format Changes</td>
              </tr>
              <tr>
                <td className="py-3.5 font-bold text-slate-900">Exception Handling</td>
                <td className="py-3.5 text-slate-500">Manual Engineering Recovery</td>
                <td className="py-3.5 font-black text-emerald-600">Automated & Assisted Recovery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* INSIGHT BAR */}
      <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl text-center text-xs text-slate-800 font-medium">
        💡 <strong className="text-orange-600 font-bold">Executive Takeaway:</strong> The objective is not to replace people—it is to remove repetitive operational work.
      </div>
    </div>
  );
}

{/* PAGE 3 LIGHT VIEW */}
function Page3LightView() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 2: Operational Leak Audit (Leak #1)
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          Your Finance Team Is Copy-Pasting Thousands of Invoices Every Month
        </h2>
        <p className="text-base text-slate-600 font-medium">
          How Manual Accounts Payable Extraction Drains High-Salaried Accounting Talent and Delays Vendor Payment Cycles
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700 font-medium">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-orange-600 mb-2">The AP Bottleneck</h4>
          <p>
            Finance personnel spend 12 to 15 minutes processing a single vendor invoice—opening email attachments, extracting line items, PO matching, and manually typing data into ERP systems.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-emerald-600 mb-2">NRT Document AI Outcome</h4>
          <p>
            NRT Document Intelligence AI reads multi-page PDFs, matches line items, and auto-posts to your ERP (SAP, Odoo, QuickBooks) in <strong className="text-emerald-600 font-black">&lt; 4 seconds per invoice (95% speed boost)</strong>.
          </p>
        </div>
      </div>

      {/* COMPARISON METRIC BOX */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center shadow-md">
        <div className="p-3 bg-slate-50 rounded-xl">
          <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Manual Speed</span>
          <span className="text-lg font-bold text-slate-600">12–15 mins</span>
        </div>
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
          <span className="text-[10px] text-emerald-700 uppercase font-bold block mb-1">NRT AI Speed</span>
          <span className="text-xl font-black text-emerald-600">&lt; 4 seconds</span>
        </div>
        <div className="p-3 bg-slate-50 rounded-xl">
          <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Manual Error Risk</span>
          <span className="text-lg font-bold text-slate-600">3% – 5%</span>
        </div>
        <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-xl">
          <span className="text-[10px] text-cyan-700 uppercase font-bold block mb-1">AI Verified Rate</span>
          <span className="text-xl font-black text-cyan-600">&gt; 99.9%</span>
        </div>
      </div>
    </div>
  );
}
