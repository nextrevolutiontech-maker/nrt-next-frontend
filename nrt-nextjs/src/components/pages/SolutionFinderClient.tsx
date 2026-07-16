"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Target,
  Briefcase,
  Users,
  LayoutDashboard,
  BrainCircuit,
  Loader2,
  X,
} from "lucide-react";
import mappingData from "@/data/problem-mapping.json";
import { toast } from "sonner";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const STEPS = [
  { id: 1, title: "Industry", icon: Briefcase },
  { id: 2, title: "Company Size", icon: Users },
  { id: 3, title: "Business Problems", icon: Target },
  { id: 4, title: "Current Tools", icon: LayoutDashboard },
  { id: 5, title: "Primary Goal", icon: BrainCircuit },
];

const INDUSTRIES = ["Manufacturing", "Retail", "Healthcare", "Logistics", "Construction", "Education"];
const SIZES = ["1-10", "11-50", "51-200", "201-1000", "1000+"];
const TOOLS = ["Excel / Spreadsheets", "QuickBooks", "Xero", "SAP", "Odoo", "Tally", "No System"];
const GOALS = [
  "Reduce Operational Costs",
  "Increase Productivity & Sales",
  "Automate Manual Tasks with AI",
  "Complete Digital Transformation",
];

export default function SolutionFinderClient() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: "",
    size: "",
    problems: [] as string[],
    tools: [] as string[],
    goal: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [leadData, setLeadData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLeadSubmit = async () => {
    if (!leadData.name || !leadData.email) return;
    setIsSubmitting(true);
    try {
      const results = calculateResults();
      const payload = {
        name: leadData.name,
        email: leadData.email,
        whatsapp: "Solution Finder",
        company: formData.size,
        phone: "",
        message: `SOLUTION FINDER LEAD:\nIndustry: ${formData.industry}\nCompany Size: ${formData.size}\nProblems: ${formData.problems.join(", ")}\nTools: ${formData.tools.join(", ")}\nPrimary Goal: ${formData.goal}\nScore: ${results.score}`,
      };
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Failed to send");
      setModalStep(2);
    } catch {
      toast.error("Transmission Error", { description: "Failed to save roadmap. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep((c) => c + 1);
    else setShowResults(true);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((c) => c - 1);
  };

  const toggleArrayItem = (field: "problems" | "tools", item: string) => {
    setFormData((prev) => {
      const array = prev[field];
      return {
        ...prev,
        [field]: array.includes(item) ? array.filter((i) => i !== item) : [...array, item],
      };
    });
  };

  const calculateResults = () => {
    let score = 75;
    const recommendedSolutions = new Set<string>();
    const recommendedArticles = new Set<string>();
    let timeline = "12 Weeks";
    formData.problems.forEach((probId) => {
      const mapping = mappingData.find((m) => m.id === probId);
      if (mapping) {
        score -= 5;
        mapping.solutions.forEach((s) => recommendedSolutions.add(s));
        mapping.relatedArticles.forEach((a) => recommendedArticles.add(a));
        if (mapping.estimatedTimeline.includes("12")) timeline = "14-16 Weeks";
      }
    });
    return {
      score: Math.max(20, score),
      solutions: Array.from(recommendedSolutions).slice(0, 4),
      articles: Array.from(recommendedArticles).slice(0, 3),
      timeline,
    };
  };

  /* ─── RESULTS VIEW ─── */
  if (showResults) {
    const results = calculateResults();
    const scoreColor =
      results.score >= 70 ? "text-emerald-600" : results.score >= 50 ? "text-amber-500" : "text-rose-500";
    const scoreLabel =
      results.score >= 70 ? "Strong" : results.score >= 50 ? "Developing" : "Needs Improvement";

    return (
      <div className="min-h-screen pt-28 pb-24 bg-white text-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-50 border border-orange-200 mb-6">
              <CheckCircle className="w-10 h-10 text-orange-600" />
            </div>
            <div className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-4">
              Your Custom AI Roadmap
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter mb-4">
              Roadmap is Ready
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Based on your inputs, we've generated a custom digital transformation strategy for{" "}
              <span className="font-bold text-slate-900">{formData.industry}</span>.
            </p>
          </motion.div>

          {/* Score + Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Maturity Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-lg"
            >
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">
                Digital Maturity Score
              </h3>
              <div className="flex items-end gap-2 mb-6">
                <span className={`text-7xl font-black ${scoreColor}`}>{results.score}</span>
                <span className="text-2xl text-slate-300 font-bold mb-2">/ 100</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold">Inventory & Operations</span>
                    <span className="font-bold text-rose-500">Needs Improvement</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-rose-500 w-[30%] h-full rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold">Finance & Automation</span>
                    <span className="font-bold text-amber-500">Average</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 w-[50%] h-full rounded-full" />
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Overall Status</span>
                  <span className={`font-black ${scoreColor}`}>{scoreLabel}</span>
                </div>
              </div>
            </motion.div>

            {/* Recommended Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-lg"
            >
              <h3 className="text-sm font-black uppercase tracking-widest text-white/40 mb-6">
                Recommended Solutions
              </h3>
              <ul className="space-y-4 flex-grow">
                {(results.solutions.length > 0
                  ? results.solutions
                  : ["Enterprise ERP Base System", "Process Automation", "BI Dashboard"]
                ).map((sol, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                    <span className="font-semibold">{sol}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white/40">Est. Timeline</span>
                  <span className="font-black text-orange-400">{results.timeline}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Implementation Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-orange-50 border border-orange-200 rounded-[2rem] p-8 mb-10"
          >
            <h3 className="text-lg font-black tracking-tight mb-6 text-slate-900">
              Suggested Implementation Plan
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { phase: "Phase 1 (Weeks 1-4)", title: "System Audit & Foundation Setup" },
                { phase: "Phase 2 (Weeks 5-8)", title: "Core Module Deployment & Automation" },
                { phase: "Phase 3 (Weeks 9-12)", title: "AI Training & Team Handoff" },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-orange-100 shadow-sm">
                  <span className="text-orange-600 font-black text-xs uppercase tracking-wider block mb-2">
                    {p.phase}
                  </span>
                  <p className="font-semibold text-sm text-slate-800">{p.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-center space-y-4"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl hover:shadow-orange-200 hover:-translate-y-1 transition-all inline-flex items-center gap-3"
            >
              Save Roadmap & Book Discovery Call <ArrowRight className="w-5 h-5" />
            </button>
            <div>
              <button
                onClick={() => { setShowResults(false); setCurrentStep(1); setFormData({ industry: "", size: "", problems: [], tools: [], goal: "" }); }}
                className="text-sm text-slate-400 hover:text-slate-600 font-semibold transition-colors"
              >
                Start Over
              </button>
            </div>
          </motion.div>
        </div>

        {/* Lead Capture Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl border border-slate-100 relative overflow-hidden"
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="p-8 sm:p-10">
                  {modalStep === 1 ? (
                    <>
                      <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 border border-orange-100">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h3 className="text-3xl font-black mb-2 tracking-tight">Save Your Roadmap</h3>
                      <p className="text-slate-500 mb-8 leading-relaxed">
                        Enter your details to receive a copy of this strategy and schedule your free discovery call.
                      </p>
                      <div className="space-y-4 mb-8">
                        <div>
                          <label className="block text-xs font-black mb-2 text-slate-500 uppercase tracking-widest">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={leadData.name}
                            onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                            placeholder="Muhammad Ahsan Khan"
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-medium focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-black mb-2 text-slate-500 uppercase tracking-widest">
                            Work Email
                          </label>
                          <input
                            type="email"
                            value={leadData.email}
                            onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                            placeholder="ahsan@company.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-medium focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all"
                          />
                        </div>
                      </div>
                      <button
                        onClick={handleLeadSubmit}
                        disabled={isSubmitting || !leadData.name || !leadData.email}
                        className={`w-full py-4 rounded-2xl font-black flex justify-center items-center gap-2 transition-all duration-300 ${
                          leadData.name && leadData.email && !isSubmitting
                            ? "bg-orange-600 text-white hover:bg-orange-700 hover:shadow-lg hover:-translate-y-0.5"
                            : "bg-slate-100 text-slate-400 cursor-not-allowed"
                        }`}
                      >
                        {isSubmitting ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Saving...</>
                        ) : (
                          <>Save & Continue <ArrowRight className="w-5 h-5" /></>
                        )}
                      </button>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-black mb-3 tracking-tight">Roadmap Sent!</h3>
                      <p className="text-slate-500 mb-10 leading-relaxed">
                        We've saved your preferences. Now, let's pick a time that works for you.
                      </p>
                      <Link
                        href="/contact"
                        className="block w-full bg-slate-900 text-white py-4 rounded-2xl font-black hover:shadow-xl hover:-translate-y-0.5 transition-all text-center"
                      >
                        Select Calendar Time <ArrowRight className="inline w-5 h-5 ml-1" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  /* ─── WIZARD VIEW ─── */
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Hero Banner */}
      <section className="pt-32 pb-16 px-4 sm:px-6 text-center bg-white border-b border-slate-100">
        <div className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-4">
          Business Diagnostic Tool
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tighter mb-4">
          Find Your Perfect Solution
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto">
          Answer 5 quick questions and we'll generate a custom AI & ERP transformation roadmap for your business — in under 2 minutes.
        </p>
      </section>

      {/* Wizard Container */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 flex flex-col">
        {/* Progress Tracker */}
        <div className="mb-12">
          <div className="flex justify-between mb-6">
            {STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = step.id === currentStep;
              const isPast = step.id < currentStep;
              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-center gap-2 transition-colors ${
                    isActive ? "text-orange-600" : isPast ? "text-slate-900" : "text-slate-300"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all shadow-sm ${
                      isActive
                        ? "border-orange-600 bg-orange-50 shadow-orange-100"
                        : isPast
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider hidden sm:block">
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-orange-600 rounded-full"
              initial={{ width: "20%" }}
              animate={{ width: `${(currentStep / 5) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs font-bold text-slate-400">
              Step {currentStep} of 5
            </span>
            <span className="text-xs font-bold text-orange-600">
              {Math.round((currentStep / 5) * 100)}% Complete
            </span>
          </div>
        </div>

        {/* Form Steps */}
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              {/* Step 1: Industry */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
                    What is your industry?
                  </h2>
                  <p className="text-slate-500 mb-8">Select your primary industry sector.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {INDUSTRIES.map((ind) => (
                      <button
                        key={ind}
                        type="button"
                        onClick={() => { setFormData({ ...formData, industry: ind }); setTimeout(handleNext, 250); }}
                        className={`p-6 text-left rounded-2xl border-2 transition-all font-bold hover:-translate-y-0.5 ${
                          formData.industry === ind
                            ? "border-orange-600 bg-orange-50 ring-2 ring-orange-500 ring-offset-2"
                            : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Company Size */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
                    How many employees do you have?
                  </h2>
                  <p className="text-slate-500 mb-8">This helps us recommend the right scale of solution.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => { setFormData({ ...formData, size }); setTimeout(handleNext, 250); }}
                        className={`p-6 text-left rounded-2xl border-2 transition-all font-bold hover:-translate-y-0.5 ${
                          formData.size === size
                            ? "border-orange-600 bg-orange-50 ring-2 ring-orange-500 ring-offset-2"
                            : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        <span className="text-2xl font-black">{size}</span>
                        <span className="block text-sm text-slate-500 font-medium mt-1">employees</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Business Problems */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
                    What are your main business problems?
                  </h2>
                  <p className="text-slate-500 mb-8">Select all that apply — we'll address each one.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {mappingData.map((mapping) => (
                      <button
                        key={mapping.id}
                        type="button"
                        onClick={() => toggleArrayItem("problems", mapping.id)}
                        className={`p-5 text-left rounded-2xl border-2 transition-all flex items-start gap-4 hover:-translate-y-0.5 ${
                          formData.problems.includes(mapping.id)
                            ? "border-orange-600 bg-orange-50 ring-2 ring-orange-500 ring-offset-2"
                            : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                            formData.problems.includes(mapping.id)
                              ? "border-orange-600 bg-orange-600"
                              : "border-slate-300"
                          }`}
                        >
                          {formData.problems.includes(mapping.id) && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div>
                          <span className="font-bold text-slate-900">{mapping.problem}</span>
                          <span className="block text-xs text-slate-400 mt-1 font-medium">
                            {mapping.category}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Current Tools */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
                    What tools are you currently using?
                  </h2>
                  <p className="text-slate-500 mb-8">Select all that apply — we'll plan for migration.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {TOOLS.map((tool) => (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => toggleArrayItem("tools", tool)}
                        className={`p-5 text-left rounded-2xl border-2 transition-all font-semibold hover:-translate-y-0.5 ${
                          formData.tools.includes(tool)
                            ? "border-orange-600 bg-orange-50 ring-2 ring-orange-500 ring-offset-2"
                            : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        {tool}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Primary Goal */}
              {currentStep === 5 && (
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
                    What is your primary goal?
                  </h2>
                  <p className="text-slate-500 mb-8">This will define the focus of your transformation roadmap.</p>
                  <div className="grid grid-cols-1 gap-4">
                    {GOALS.map((goal) => (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => { setFormData({ ...formData, goal }); setTimeout(handleNext, 250); }}
                        className={`p-6 text-left rounded-2xl border-2 transition-all font-bold text-lg hover:-translate-y-0.5 flex items-center gap-4 ${
                          formData.goal === goal
                            ? "border-orange-600 bg-orange-50 ring-2 ring-orange-500 ring-offset-2"
                            : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors ${
                            formData.goal === goal ? "border-orange-600 bg-orange-600" : "border-slate-300"
                          }`}
                        />
                        {goal}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
          <button
            onClick={handleBack}
            className={`font-bold inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors ${
              currentStep === 1 ? "opacity-0 pointer-events-none" : ""
            }`}
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>

          {/* For multi-select steps show Next button */}
          {(currentStep === 3 || currentStep === 4) && (
            <button
              onClick={handleNext}
              className="bg-slate-900 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-black inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1"
            >
              {currentStep === 4 ? "Last Step" : "Next Step"} <ArrowRight className="w-5 h-5" />
            </button>
          )}
          {currentStep === 5 && (
            <button
              onClick={handleNext}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-black inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1"
            >
              Generate Report <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
