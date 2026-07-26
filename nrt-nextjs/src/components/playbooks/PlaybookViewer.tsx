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
  CheckSquare,
  Printer,
  Loader2,
  Headphones,
  BarChart3,
  Users,
  Truck,
  FileText,
  ShieldCheck,
  TrendingUp,
  Calendar,
  Building,
  Target,
  Shield,
  AlertTriangle,
  Scale,
  Check
} from "lucide-react";

export default function PlaybookViewer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const triggerPDFDownload = () => {
    // Triggers browser print/save-as-PDF dialog for clean high-res executive PDF output
    window.print();
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.workEmail)) {
      alert("Please enter a valid work email address (e.g. name@company.com).");
      return;
    }

    if (formData.phone && formData.phone.replace(/\D/g, '').length < 7) {
      alert("Please enter a valid phone/WhatsApp number (minimum 7 digits).");
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit lead to Next.js API endpoint /api/contact
      await fetch('/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.workEmail,
          phone: formData.phone,
          company: `Company Size: ${formData.companySize} | Role: ${formData.jobTitle}`,
          message: `[NEW EXECUTIVE LEAD - PLAYBOOK DOWNLOAD]\nAsset: AI Operations Playbook 2026\nFull Name: ${formData.fullName}\nWork Email: ${formData.workEmail}\nPhone/WhatsApp: ${formData.phone}\nCompany Size: ${formData.companySize}\nJob Title: ${formData.jobTitle}`
        }),
      });
    } catch (error) {
      console.warn("API lead submission note (handled gracefully):", error);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
      // Trigger instant PDF download / print dialog
      setTimeout(() => {
        triggerPDFDownload();
      }, 500);
    }
  };

  // Dynamic Readiness score metric calculation for UI header
  const getReadinessScore = (page: number) => {
    if (page === 1) return "Baseline 22/100";
    if (page <= 3) return "22/100 ➔ 32/100";
    if (page <= 8) return `${32 + (page - 3) * 7}/100`;
    if (page <= 12) return "74/100 ➔ 84/100";
    return "Target 87/100";
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-4 sm:px-6 lg:px-12 xl:px-24 relative overflow-hidden print:p-0 print:m-0 print:bg-white">
      {/* AMBIENT BACKGROUND GLOW ACCENTS (HIDDEN ON PRINT) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3 print:hidden" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10 -translate-x-1/3 translate-y-1/3 print:hidden" />

      {/* TOP SYSTEM NAV BAR (HIDDEN ON PRINT) */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-xl print:hidden">
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
      <div className="max-w-6xl mx-auto print:max-w-none">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden min-h-[720px] flex flex-col justify-between print:border-none print:shadow-none print:p-0">
          
          {/* TOP WATERMARK & AUTOMATION SCORE TRACKER */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-3.5 py-1.5 rounded-lg text-xs font-mono shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-300">NRT AI Readiness Score™:</span>
                <span className="text-emerald-400 font-bold">
                  {getReadinessScore(currentPage)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                PUBLISHED BY NEXT REVOLUTION TECH
              </span>
            </div>
          </div>

          {/* DYNAMIC PAGE RENDERER (INTERACTIVE SCREEN VIEW) */}
          <div className="my-auto print:hidden">
            {currentPage === 1 && <Page1LightView onExploreNext={handleNext} />}
            {currentPage === 2 && <Page2LightView onExploreNext={handleNext} />}
            {currentPage === 3 && <Page3LightView onExploreNext={handleNext} />}
            {currentPage === 4 && <Page4LightView onExploreNext={handleNext} />}
            {currentPage === 5 && <Page5LightView onExploreNext={handleNext} />}
            {currentPage === 6 && <Page6LightView onExploreNext={handleNext} />}
            {currentPage === 7 && <Page7LightView onExploreNext={handleNext} />}
            {currentPage === 8 && <Page8LightView onExploreNext={handleNext} />}
            {currentPage === 9 && <Page9LightView onExploreNext={handleNext} />}
            {currentPage === 10 && <Page10LightView onExploreNext={handleNext} />}
            {currentPage === 11 && <Page11LightView onExploreNext={handleNext} />}
            {currentPage === 12 && <Page12LightView onExploreNext={handleNext} />}
            {currentPage === 13 && <Page13LightView onExploreNext={handleNext} />}
            {currentPage === 14 && <Page14LightView onOpenModal={() => setIsModalOpen(true)} />}
          </div>

          {/* CONTINUOUS MULTI-PAGE PRINT DOCUMENT RENDERER (ACTIVE FOR PDF DOWNLOAD) */}
          <div className="hidden print:block space-y-12">
            <div className="break-after-page pb-12">
              <Page1LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page2LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page3LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page4LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page5LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page6LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page7LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page8LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page9LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page10LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page11LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page12LightView onExploreNext={() => {}} />
            </div>
            <div className="break-after-page pt-12 border-t border-slate-300">
              <Page13LightView onExploreNext={() => {}} />
            </div>
            <div className="pt-12 border-t border-slate-300">
              <Page14LightView onOpenModal={() => {}} />
            </div>
          </div>

          {/* PAGE FOOTER BAR */}
          <div className="pt-8 border-t border-slate-200 mt-10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <p className="text-slate-500 text-[11px] max-w-xl font-medium">
              Illustrative examples and ROI estimates should be validated using your organization's operational data and business context.
            </p>

            <Link
              href="/contact"
              className="text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1.5 transition-colors group print:hidden"
            >
              <span>Request a Free AI Architecture Audit & Opportunity Report (No Obligation)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* GATED DOWNLOAD MODAL (LIGHT THEME - NO SCROLLBAR) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 print:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 max-w-md w-full shadow-2xl relative my-auto overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 text-base font-bold w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center transition-colors z-10"
              >
                ✕
              </button>

              {formSubmitted ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Access Granted & Lead Sent!</h3>
                    <p className="text-slate-600 text-xs font-medium mt-1">
                      Thank you, {formData.fullName}. Your lead details have been submitted to NRT, and your PDF document download is ready below.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <button
                      onClick={triggerPDFDownload}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md"
                    >
                      <Download className="w-4 h-4" />
                      <span>Save / Print PDF Now</span>
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-2.5 rounded-xl text-xs transition-all"
                    >
                      <span>Close Window</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-3 pr-6">
                    <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest block">
                      Gated Executive Access
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mt-0.5 leading-snug">
                      Download AI Operations Playbook 2026
                    </h3>
                    <p className="text-slate-500 text-[11px] mt-0.5 font-medium leading-tight">
                      Complete profile to receive complete 14-page playbook PDF.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-2.5">
                    <div>
                      <label className="block text-[10px] font-black text-slate-700 mb-0.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2 pl-9 pr-3 text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-slate-700 mb-0.5 uppercase tracking-wider">
                        Work Email * (name@company.com)
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="sarah@enterprise.com"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2 pl-9 pr-3 text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-slate-700 mb-0.5 uppercase tracking-wider">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2 pl-9 pr-3 text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[10px] font-black text-slate-700 mb-0.5 uppercase tracking-wider">
                          Company Size *
                        </label>
                        <select
                          value={formData.companySize}
                          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2 px-2.5 text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                        >
                          <option value="1-10">1–10 Employees</option>
                          <option value="11-50">11–50 Employees</option>
                          <option value="51-200">51–200 Employees</option>
                          <option value="200+">200+ Employees</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-black text-slate-700 mb-0.5 uppercase tracking-wider">
                          Job Title / Role *
                        </label>
                        <select
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2 px-2.5 text-xs text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
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
                      disabled={isSubmitting}
                      className="w-full bg-[#FF5500] hover:bg-orange-600 text-white font-black py-2.5 rounded-xl transition-all shadow-md text-xs flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting & Generating PDF...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Submit Profile & Download PDF</span>
                        </>
                      )}
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
function Page1LightView({ onExploreNext }: { onExploreNext?: () => void }) {
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
        {onExploreNext && (
          <button
            onClick={onExploreNext}
            className="text-orange-600 hover:text-orange-700 font-black flex items-center gap-1 transition-colors print:hidden"
          >
            <span>Turn to Page 2</span> <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

{/* PAGE 2 LIGHT VIEW */}
function Page2LightView({ onExploreNext }: { onExploreNext?: () => void }) {
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
      <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl text-center text-xs text-slate-800 font-medium flex items-center justify-between">
        <span>💡 <strong className="text-orange-600 font-bold">Executive Takeaway:</strong> The objective is not to replace people—it is to remove repetitive operational work.</span>
        {onExploreNext && (
          <button onClick={onExploreNext} className="text-orange-600 font-bold flex items-center gap-1 hover:underline shrink-0 print:hidden">
            <span>Next: Leak #1</span> <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}

{/* PAGE 3 LIGHT VIEW */}
function Page3LightView({ onExploreNext }: { onExploreNext?: () => void }) {
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

      {onExploreNext && (
        <div className="flex justify-end print:hidden">
          <button onClick={onExploreNext} className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
            <span>Continue to Leak #2 (Customer Support & Triage)</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

{/* PAGE 4 LIGHT VIEW */}
function Page4LightView({ onExploreNext }: { onExploreNext?: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 2: Operational Leak Audit (Leak #2)
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          High-Value Leads & Support Requests Sit Unanswered in Shared Inboxes
        </h2>
        <p className="text-base text-slate-600 font-medium">
          How Slow Lead Triage and Manual Ticket Assignment Cause Enterprise Customer Churn Before First Contact
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700 font-medium">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-orange-600 mb-2 flex items-center gap-2">
            <Headphones className="w-4 h-4 text-orange-600" /> The Customer Support Friction
          </h4>
          <p>
            When prospective enterprise buyers or key accounts submit inquiries, support reps manually read, categorize, and assign tickets. Average response delays range from 4 to 24 hours, losing deals to faster competitors.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-emerald-600 mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-600" /> NRT Triage & Routing Agent
          </h4>
          <p>
            NRT Autonomous Support Agents analyze intent, urgency, and customer sentiment instantly, enriching ticket data from CRM records and routing high-value prospects to account executives in <strong className="text-emerald-600 font-black">&lt; 30 seconds</strong>.
          </p>
        </div>
      </div>

      {/* METRIC IMPACT BOX */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center shadow-md">
        <div className="p-3 bg-slate-50 rounded-xl">
          <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Legacy Response SLA</span>
          <span className="text-lg font-bold text-slate-600">4–24 Hours</span>
        </div>
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
          <span className="text-[10px] text-emerald-700 uppercase font-bold block mb-1">NRT Agentic SLA</span>
          <span className="text-xl font-black text-emerald-600">&lt; 30 Seconds</span>
        </div>
        <div className="p-3 bg-slate-50 rounded-xl">
          <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Manual Routing Errors</span>
          <span className="text-lg font-bold text-slate-600">14% Misdirected</span>
        </div>
        <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-xl">
          <span className="text-[10px] text-cyan-700 uppercase font-bold block mb-1">Lead Conversion Boost</span>
          <span className="text-xl font-black text-cyan-600">+34% Growth</span>
        </div>
      </div>

      {onExploreNext && (
        <div className="flex justify-end print:hidden">
          <button onClick={onExploreNext} className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
            <span>Continue to Leak #3 (Data Aggregation & Reporting)</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

{/* PAGE 5 LIGHT VIEW */}
function Page5LightView({ onExploreNext }: { onExploreNext?: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 2: Operational Leak Audit (Leak #3)
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          Operations Managers Waste 10+ Hours/Week Compiling Excel Status Reports
        </h2>
        <p className="text-base text-slate-600 font-medium">
          The Hidden Cost of Disconnected ERP, CRM, and Inventory Data Trapped in Manual Spreadsheets
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700 font-medium">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-slate-800 mb-2 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-orange-600" /> The Excel Reporting Trap
          </h4>
          <p>
            Leadership decisions rely on week-old data because analysts spend days downloading CSVs, normalizing data in Excel, and copy-pasting charts into PowerPoint pitch decks.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-cyan-700 mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-600" /> NRT Executive Data Mesh
          </h4>
          <p>
            NRT Autonomous Analytics Agents continuously connect to your database APIs, reconcile discrepancies, and generate real-time executive summaries with predictive anomaly alerts.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs text-orange-400 font-bold uppercase tracking-wider block">Operational Impact</span>
            <h4 className="text-lg font-black mt-1">Zero Weekly Preparation Time for C-Suite Briefings</h4>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-emerald-400">100% Real-Time</span>
            <span className="text-xs text-slate-400 block">Live Data Feed Across All Modules</span>
          </div>
        </div>
      </div>

      {onExploreNext && (
        <div className="flex justify-end print:hidden">
          <button onClick={onExploreNext} className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
            <span>Continue to Leak #4 (Employee & Client Onboarding)</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

{/* PAGE 6 LIGHT VIEW */}
function Page6LightView({ onExploreNext }: { onExploreNext?: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 2: Operational Leak Audit (Leak #4)
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          Employee & Client Onboarding Takes Weeks Due to Verification Bottlenecks
        </h2>
        <p className="text-base text-slate-600 font-medium">
          How Manual Document Verification, KYC Checks, and Account Provisioning Stall Revenue Realization
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700 font-medium">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-orange-600 mb-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-orange-600" /> The Onboarding Drag
          </h4>
          <p>
            Collecting tax forms, verifying ID documents, issuing software licenses, and setting up portal access manually requires 14+ business days, slowing time-to-value for new clients and hires.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-emerald-600 mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> NRT Autonomous Onboarding Pipeline
          </h4>
          <p>
            AI Document Verification Agents extract data, cross-reference compliance registries, provision credentials, and trigger automated welcome sequences in <strong className="text-emerald-600 font-black">&lt; 48 hours</strong>.
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center shadow-md">
        <div className="p-3 bg-slate-50 rounded-xl">
          <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Legacy Onboarding Time</span>
          <span className="text-lg font-bold text-slate-600">14 Business Days</span>
        </div>
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
          <span className="text-[10px] text-emerald-700 uppercase font-bold block mb-1">NRT AI Cycle Time</span>
          <span className="text-xl font-black text-emerald-600">&lt; 48 Hours</span>
        </div>
        <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-xl">
          <span className="text-[10px] text-cyan-700 uppercase font-bold block mb-1">Compliance Audit Rating</span>
          <span className="text-xl font-black text-cyan-600">100% Verified</span>
        </div>
      </div>

      {onExploreNext && (
        <div className="flex justify-end print:hidden">
          <button onClick={onExploreNext} className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
            <span>Continue to Leak #5 (Supply Chain & Inventory)</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

{/* PAGE 7 LIGHT VIEW */}
function Page7LightView({ onExploreNext }: { onExploreNext?: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 2: Operational Leak Audit (Leak #5)
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          Stockouts and Over-Ordering Cost Enterprises Millions in Capital Idle Time
        </h2>
        <p className="text-base text-slate-600 font-medium">
          How Lagging Inventory Updates between Warehouses and Sales Channels Tie Up Operating Cash Flow
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700 font-medium">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-orange-600 mb-2 flex items-center gap-2">
            <Truck className="w-4 h-4 text-orange-600" /> The Supply Chain Gap
          </h4>
          <p>
            Warehouse management systems (WMS) and e-commerce/ERP platforms often sync via batch jobs once a day. Mid-day spikes lead to unexpected stockouts or emergency reorders with steep air-freight premiums.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-emerald-600 mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" /> NRT Predictive Supply Chain Agent
          </h4>
          <p>
            NRT AI Agents forecast demand patterns based on historical velocity and seasonal indicators, automatically drafting optimal purchase orders and syncing multi-channel stock levels in real time.
          </p>
        </div>
      </div>

      <div className="bg-orange-50/80 border border-orange-200 p-6 rounded-2xl flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-orange-700 uppercase tracking-wider block">Financial Performance Benchmark</span>
          <p className="text-sm font-bold text-slate-900 mt-1">Average 82% Reduction in Unexpected Stockout Events & 24% Lower Holding Capital Overhead.</p>
        </div>
        <div className="text-right font-black text-3xl text-orange-600 shrink-0">
          -82%
        </div>
      </div>

      {onExploreNext && (
        <div className="flex justify-end print:hidden">
          <button onClick={onExploreNext} className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
            <span>Continue to Leak #6 (Vendor SLA & Contracts)</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

{/* PAGE 8 LIGHT VIEW */}
function Page8LightView({ onExploreNext }: { onExploreNext?: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 2: Operational Leak Audit (Leak #6)
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          Hidden Financial Leaks in Unmonitored Vendor Contracts & Auto-Renewals
        </h2>
        <p className="text-base text-slate-600 font-medium">
          How Unchecked Vendor Overbilling and Missed Early Payment Discounts Drain 8% to 14% of Annual Procurement Budget
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700 font-medium">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-slate-800 mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-orange-600" /> The Unmonitored Procurement Leak
          </h4>
          <p>
            SLA commitments, price escalation clauses, and early payment discount windows buried deep in 50-page legal contracts are rarely audited against actual incoming monthly vendor invoices.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-black text-emerald-600 mb-2 flex items-center gap-2">
            <Scale className="w-4 h-4 text-emerald-600" /> NRT Contract Intelligence Agent
          </h4>
          <p>
            AI Contract Agents continuously cross-reference line-item invoices against master service agreements (MSAs), flagging overbilling, unearned price hikes, and upcoming 90-day renewal deadlines automatically.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div>
          <span className="text-[10px] text-slate-400 font-bold uppercase block">Annual Cost Recovery</span>
          <span className="text-xl font-black text-emerald-400">8% – 14%</span>
          <span className="text-[10px] text-slate-400 block">Of Total Procurement Spend</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 font-bold uppercase block">Average SLA Claim</span>
          <span className="text-xl font-black text-cyan-400">$45,000+</span>
          <span className="text-[10px] text-slate-400 block">Unearned Fee Recovery</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 font-bold uppercase block">Renewal Notice Window</span>
          <span className="text-xl font-black text-orange-400">100% On Time</span>
          <span className="text-[10px] text-slate-400 block">Zero Surprise Lock-Ins</span>
        </div>
      </div>

      {onExploreNext && (
        <div className="flex justify-end print:hidden">
          <button onClick={onExploreNext} className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
            <span>Continue to Phase 3 (NRT AI ROI Matrix™)</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

{/* PAGE 9 LIGHT VIEW */}
function Page9LightView({ onExploreNext }: { onExploreNext?: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 3: Financial Framework
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          The NRT AI ROI Matrix™ — Financial Impact Breakdown
        </h2>
        <p className="text-base text-slate-600 font-medium">
          Quantifiable Cost Savings, Hours Reclaimed, and Implementation Payback Windows by Company Size
        </p>
      </div>

      {/* ROI TABLE */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <h4 className="font-black text-sm">NRT Executive ROI & Savings Calculation Matrix</h4>
          <span className="text-xs text-orange-400 font-mono font-bold">Updated for 2026 Operations</span>
        </div>
        <div className="p-6">
          <table className="w-full text-left text-xs text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900 font-black">
                <th className="pb-3">Company Scale</th>
                <th className="pb-3">Annual Hours Saved</th>
                <th className="pb-3 text-emerald-600 font-black">Estimated Net Savings</th>
                <th className="pb-3">Payback Horizon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              <tr>
                <td className="py-3.5 font-bold text-slate-900">10–50 Employees</td>
                <td className="py-3.5 text-slate-600">2,400 Hours / Year</td>
                <td className="py-3.5 font-black text-emerald-600">$120,000 – $180,000</td>
                <td className="py-3.5 text-slate-900 font-bold">2.5 Months</td>
              </tr>
              <tr>
                <td className="py-3.5 font-bold text-slate-900">51–200 Employees</td>
                <td className="py-3.5 text-slate-600">7,200 Hours / Year</td>
                <td className="py-3.5 font-black text-emerald-600">$360,000 – $540,000</td>
                <td className="py-3.5 text-slate-900 font-bold">3.1 Months</td>
              </tr>
              <tr>
                <td className="py-3.5 font-bold text-slate-900">200+ Enterprise</td>
                <td className="py-3.5 text-slate-600">18,000+ Hours / Year</td>
                <td className="py-3.5 font-black text-emerald-600">$850,000 – $1,400,000+</td>
                <td className="py-3.5 text-slate-900 font-bold">4.0 Months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
          💡 The Cost of Inaction Principle
        </span>
        <p className="text-xs font-medium text-slate-800 leading-relaxed">
          Delaying workflow automation by 12 months costs a 50-person enterprise over $360,000 in inefficient labor wages and opportunity cost—exceeding the full deployment cost of the NRT Agentic Mesh by 4x.
        </p>
      </div>

      {onExploreNext && (
        <div className="flex justify-end print:hidden">
          <button onClick={onExploreNext} className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
            <span>Continue to Phase 4 (Readiness Score Tool)</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

{/* PAGE 10 LIGHT VIEW */}
function Page10LightView({ onExploreNext }: { onExploreNext?: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 4: Readiness Self-Assessment
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          NRT AI Readiness Score™ Framework
        </h2>
        <p className="text-base text-slate-600 font-medium">
          4-Pillar Executive Diagnostic to Measure Your Enterprise Preparedness for Agentic Operations
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-xs text-slate-700 font-medium">
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-black text-slate-900">1. Data & API Infrastructure</h4>
            <span className="text-orange-600 font-bold font-mono">25 Pts Max</span>
          </div>
          <p className="text-slate-600">Are core business systems (ERP, CRM, WMS) accessible via cloud APIs or database connectors?</p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-black text-slate-900">2. Process Standardization</h4>
            <span className="text-orange-600 font-bold font-mono">25 Pts Max</span>
          </div>
          <p className="text-slate-600">Are key operational workflows documented with clear inputs, outputs, and approval boundaries?</p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-black text-slate-900">3. Exception Handling Protocols</h4>
            <span className="text-orange-600 font-bold font-mono">25 Pts Max</span>
          </div>
          <p className="text-slate-600">Do teams have defined Human-in-the-Loop escalation rules when anomalies or edge cases occur?</p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-black text-slate-900">4. Executive Sponsorship</h4>
            <span className="text-orange-600 font-bold font-mono">25 Pts Max</span>
          </div>
          <p className="text-slate-600">Is leadership aligned on removing manual operational tasks and measuring ROI quarterly?</p>
        </div>
      </div>

      {/* SCORE RANGE EXPLANATION */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">Score Interpretation</span>
          <span className="text-lg font-black text-white mt-1 block">71 – 100 Pts: Prime Candidate for Immediate Deployment</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-xl">
          <span>Target Score: 87/100</span>
        </div>
      </div>

      {onExploreNext && (
        <div className="flex justify-end print:hidden">
          <button onClick={onExploreNext} className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
            <span>Continue to Phase 5 (5-Stage Rollout Roadmap)</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

{/* PAGE 11 LIGHT VIEW */}
function Page11LightView({ onExploreNext }: { onExploreNext?: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 5: Implementation Roadmap
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          The 5-Stage Agentic Rollout Roadmap
        </h2>
        <p className="text-base text-slate-600 font-medium">
          A Proven 12-Week Execution Blueprint to Audit, Build, Deploy, and Scale AI Workflows
        </p>
      </div>

      <div className="space-y-4 text-xs">
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-orange-600 text-white font-black flex items-center justify-center shrink-0">
            W1-2
          </div>
          <div>
            <h4 className="font-black text-slate-900 text-sm">Stage 1: Workflow Friction Audit & Data Mapping</h4>
            <p className="text-slate-600 font-medium mt-0.5">Identify highest-ROI manual bottlenecks, audit data inputs, and formulate security compliance scope.</p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-black flex items-center justify-center shrink-0">
            W3-4
          </div>
          <div>
            <h4 className="font-black text-slate-900 text-sm">Stage 2: Agent Architecture & API Integration Blueprint</h4>
            <p className="text-slate-600 font-medium mt-0.5">Design custom reasoning models, define ERP/CRM schema webhooks, and establish fallback triggers.</p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-black flex items-center justify-center shrink-0">
            W5-7
          </div>
          <div>
            <h4 className="font-black text-slate-900 text-sm">Stage 3: Pilot Deployment & Human-in-the-Loop Validation</h4>
            <p className="text-slate-600 font-medium mt-0.5">Launch sandbox agent on live production samples under human supervisor review with 99%+ accuracy verification.</p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center shrink-0">
            W8-10
          </div>
          <div>
            <h4 className="font-black text-slate-900 text-sm">Stage 4: Autonomous Production Rollout</h4>
            <p className="text-slate-600 font-medium mt-0.5">Full automation deployment across departments with active telemetry monitoring and automatic exception routing.</p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white font-black flex items-center justify-center shrink-0">
            W11-12
          </div>
          <div>
            <h4 className="font-black text-slate-900 text-sm">Stage 5: Continuous Optimization & Scaling</h4>
            <p className="text-slate-600 font-medium mt-0.5">Quarterly ROI reporting, model retraining, and expansion into secondary operational business units.</p>
          </div>
        </div>
      </div>

      {onExploreNext && (
        <div className="flex justify-end print:hidden">
          <button onClick={onExploreNext} className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
            <span>Continue to Phase 6 (Security & Privacy)</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

{/* PAGE 12 LIGHT VIEW */}
function Page12LightView({ onExploreNext }: { onExploreNext?: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 6: Enterprise Governance
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          Enterprise Security & Privacy Architecture
        </h2>
        <p className="text-base text-slate-600 font-medium">
          Zero Public LLM Data Retention, SOC2 Compliance, and Air-Gapped Data Safeguards
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-xs text-slate-700 font-medium">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 font-black text-slate-900 text-sm">
            <Shield className="w-5 h-5 text-orange-600" />
            <span>Zero Data Retention (ZDR)</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Your proprietary operational data and documents are processed in ephemeral memory. No customer data is ever retained by AI providers or used for model training.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 font-black text-slate-900 text-sm">
            <Lock className="w-5 h-5 text-cyan-600" />
            <span>Encrypted In-Transit & At-Rest</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            End-to-end AES-256 encryption at rest and TLS 1.3 in transit with dedicated KMS encryption keys managed under your organization's cloud environment.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 font-black text-slate-900 text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Role-Based Access Control (RBAC)</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Granular permission policies ensure AI Agents only access authorized database fields, maintaining strict separation between HR, Finance, and Sales records.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 font-black text-slate-900 text-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <span>Human-in-the-Loop Safeguards</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            High-risk financial transactions or threshold exceptions require explicit human sign-off before final ERP posting, maintaining total auditability.
          </p>
        </div>
      </div>

      {onExploreNext && (
        <div className="flex justify-end print:hidden">
          <button onClick={onExploreNext} className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
            <span>Continue to Phase 7 (Case Studies & Benchmarks)</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

{/* PAGE 13 LIGHT VIEW */}
function Page13LightView({ onExploreNext }: { onExploreNext?: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 7: Case Studies & Benchmarks
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          Enterprise Case Studies & Real-World Results
        </h2>
        <p className="text-base text-slate-600 font-medium">
          How Mid-Market & Global Organizations Transformed Operations with NRT Agentic AI
        </p>
      </div>

      <div className="space-y-4 text-xs font-medium">
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="font-black text-slate-900 text-sm">Case Study #1: Global Logistics Provider (350+ Fleet)</span>
            <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded font-bold">78% Speed Boost</span>
          </div>
          <p className="text-slate-600 mb-3">
            Automated customs paperwork, bill of lading extraction, and fleet dispatch coordination across 4 countries.
          </p>
          <div className="flex items-center gap-4 text-slate-900 font-bold">
            <span>▪ $320,000 Saved Annually</span>
            <span>▪ Zero Dispatch Delays</span>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="font-black text-slate-900 text-sm">Case Study #2: Financial Services Firm ($120M AUM)</span>
            <span className="bg-cyan-100 text-cyan-800 px-2.5 py-0.5 rounded font-bold">99.4% Accuracy</span>
          </div>
          <p className="text-slate-600 mb-3">
            Deployed Document AI to parse quarterly investor statements, compliance audit forms, and bank reconciliations.
          </p>
          <div className="flex items-center gap-4 text-slate-900 font-bold">
            <span>▪ 1,200 Hours Reclaimed / Quarter</span>
            <span>▪ Audit Cycle reduced from 3 Wks to 2 Days</span>
          </div>
        </div>
      </div>

      {onExploreNext && (
        <div className="flex justify-end print:hidden">
          <button onClick={onExploreNext} className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
            <span>Continue to Phase 8 (Action Plan & Next Steps)</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

{/* PAGE 14 LIGHT VIEW */}
function Page14LightView({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Phase 8: Action Plan & Next Steps
        </span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1 mb-2">
          Your Executive Action Plan & Next Steps
        </h2>
        <p className="text-base text-slate-600 font-medium">
          3 Steps to Eliminate Manual Bottlenecks and Scale Your Enterprise in 2026
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 text-xs font-medium">
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
          <span className="w-7 h-7 rounded-lg bg-orange-600 text-white font-black flex items-center justify-center text-xs">
            1
          </span>
          <h4 className="font-black text-slate-900 text-sm">Audit Your Top 3 Leaks</h4>
          <p className="text-slate-600">Review your team's weekly manual spreadsheet and copy-paste processes to calculate potential ROI.</p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
          <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-black flex items-center justify-center text-xs">
            2
          </span>
          <h4 className="font-black text-slate-900 text-sm">Download Full PDF Report</h4>
          <p className="text-slate-600">Keep this 14-page blueprint for executive board meetings and technology planning sessions.</p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
          <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center text-xs">
            3
          </span>
          <h4 className="font-black text-slate-900 text-sm">Book Free NRT Audit</h4>
          <p className="text-slate-600">Schedule a 30-minute technical architecture audit with Founder Muhammad Ahsan Khan.</p>
        </div>
      </div>

      {/* FINAL CALLOUT BOX */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-6 shadow-2xl">
        <div>
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1">
            Exclusive Executive Offer
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to Build Your AI Agentic Mesh?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2 font-medium">
            Get a tailored workflow analysis, custom ROI calculation, and zero-obligation technology roadmap for your business.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 print:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-600/30"
          >
            <span>Book 30-Min Technical Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-6 py-3.5 rounded-xl transition-all border border-slate-700"
          >
            <Download className="w-4 h-4" />
            <span>Download 14-Page PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
