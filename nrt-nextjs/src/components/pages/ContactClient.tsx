"use client";
import Image from "next/image";
import { useState } from "react";
import { Mail, Send, ShieldCheck, Clock, ArrowRight, MessageSquare, Globe } from "lucide-react";

import { toast } from "sonner";
import { motion } from "motion/react";
import { API_BASE_URL } from "@/config";
import { InteractiveHero3D } from "@/components/ui/InteractiveHero3D";

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-Side Security & Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid Email Address", { description: "Please enter a valid work email (e.g. name@company.com)." });
      return;
    }

    if (formData.whatsapp && formData.whatsapp.replace(/\D/g, '').length < 7) {
      toast.error("Invalid Phone Number", { description: "Please enter a valid WhatsApp/Phone number (minimum 7 digits)." });
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();
      if (!response.ok || resData.success === false) {
        throw new Error(resData.message || 'Failed to send');
      }

      setStatus('success');
      toast.success("Message Sent Successfully!", { 
        description: "Our strategy team will review and respond within 24 hours.",
        style: { background: '#0F172A', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }
      });
      setFormData({ name: "", email: "", whatsapp: "", company: "", phone: "", message: "" });
    } catch (error: any) {
      setStatus('error');
      toast.error("Submission Error", { description: error.message || "Please check your details or connect via WhatsApp directly." });
    } finally {
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* SECTION 1: HERO - ZERO-SCROLL TOP PADDING */}
      <section className="pt-24 sm:pt-28 pb-14 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4">Strategy Session</div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
               Ready To Improve <br />
               <span className="text-orange-600">Operations?</span>
            </h1>
            <p className="text-base sm:text-xl font-bold text-slate-900/60 leading-relaxed max-w-2xl">
              Let's identify bottlenecks, automate workflows, and build systems that support long-term business growth. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-24 py-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 relative overflow-hidden group"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600 font-bold transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Work Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600 font-bold transition-all"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Company Name</label>
                  <input
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600 font-bold transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">WhatsApp Number</label>
                  <input
                    name="whatsapp"
                    type="text"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600 font-bold transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-600 font-bold transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl text-lg font-black shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending Request...' : 'Request Strategy Call'} 
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 border border-slate-800">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">Headquarters</div>
              <h2 className="text-2xl font-black">Next Revolution Tech</h2>
              <p className="text-slate-300 text-sm font-medium">Karachi, Pakistan. Serving enterprise clients globally.</p>

              <div className="pt-6 border-t border-slate-800 space-y-4 text-sm font-medium">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <a href="mailto:nextrevolutiontech@gmail.com" className="hover:text-orange-400 font-bold">nextrevolutiontech@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <a href="https://wa.me/923442013217" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-bold">+92 344 2013217</a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>Karachi, Sindh, Pakistan</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-black text-slate-900">Secure & Confidential</h3>
              </div>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                We sign NDAs by default for all enterprise engagements. Your operational data, trade secrets, and system architectures are strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}