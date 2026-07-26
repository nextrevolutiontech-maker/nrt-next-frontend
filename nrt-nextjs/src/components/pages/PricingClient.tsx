"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, MessageSquare, Minus, Plus, Zap, ArrowRight, ShieldCheck, Cog } from "lucide-react";
import { useState } from "react";
import { InteractiveHero3D } from "@/components/ui/InteractiveHero3D";


export function PricingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("teams");

  const pricingCategories = [
    {
      id: "teams",
      name: "Dedicated Teams",
      packages: [
        {
          name: "Weekly Sprint Dev",
          subtitle: "Dedicated Senior Engineer for Quick Sprints & Features",
          price: "PKR 95,000",
          period: "/ Week ($350)",
          color: "from-blue-600 to-indigo-800",
          highlight: false,
          features: [
            "1 Dedicated Senior Developer (React, Next.js, Node, Python)",
            "40 Hours / Week Allocation",
            "Direct Integration into Slack & Jira",
            "Daily Standups & Code Commits",
            "100% IP & Code Ownership",
            "Zero Long-Term Contract Required"
          ],
          cta: "Hire Weekly Dev on WhatsApp",
          message: "Hi NRT, I want to hire a Weekly Dedicated Developer (PKR 95k/week)."
        },
        {
          name: "Monthly Dedicated Dev",
          subtitle: "Full-Time Senior Engineer Embedded in Your Squad",
          price: "PKR 380,000",
          period: "/ Month ($1,400)",
          color: "from-emerald-500 to-green-700",
          highlight: true,
          features: [
            "1 Dedicated Full-Time Senior Engineer (160 Hours/Month)",
            "Timezone Aligned Working Hours",
            "Direct GitHub / GitLab Commits & Daily Standups",
            "Full-Stack Capabilities (Next.js, Node, PostgreSQL, AI)",
            "Tech Lead & QA Supervision Included",
            "14-Day Risk-Free Trial & Replacement Guarantee"
          ],
          cta: "Hire Monthly Dev on WhatsApp",
          message: "Hi NRT, I want to hire a Monthly Dedicated Developer (PKR 380k/month)."
        },
        {
          name: "Full Engineering Pod",
          subtitle: "Complete Tech Lead + Senior Devs + QA Squad",
          price: "PKR 1,050,000",
          period: "/ Month ($3,800)",
          color: "from-orange-500 to-red-600",
          highlight: false,
          features: [
            "1 Solutions Architect / Tech Lead",
            "2 Senior Full-Stack Developers (Frontend + Backend)",
            "1 AI Automation Specialist / QA Engineer",
            "Full Sprint Planning, CI/CD & Architecture Oversight",
            "Unlimited Feature Velocity & Priority SLA Support",
            "Dedicated Account Director & Weekly Executive Sync"
          ],
          cta: "Book Engineering Pod Call",
          message: "Hi NRT, I want to hire a Full Engineering Pod (PKR 1.05M/month)."
        }
      ]
    },
    {
      id: "pos",
      name: "POS & Inventory",
      packages: [
        {
          name: "Basic Plan",
          subtitle: "Perfect for Small Shops",
          price: "PKR 45,000",
          period: "One-Time",
          color: "from-blue-600 to-indigo-800",
          highlight: false,
          features: [
            "POS Billing",
            "Thermal Printer Integration",
            "Product Management",
            "Stock Management",
            "Customer Management",
            "Daily Sales Report",
            "Installation & Training"
          ],
          cta: "Buy Now on WhatsApp",
          message: "Hi NRT, I want the Basic POS Plan (PKR 45k)."
        },
        {
          name: "Standard Plan",
          subtitle: "For Growing Businesses",
          price: "PKR 75,000",
          period: "One-Time",
          color: "from-emerald-500 to-green-700",
          highlight: true,
          features: [
            "All Basic Plan Features",
            "Supplier Management",
            "Purchase Management",
            "Expense Tracking",
            "Barcode Support",
            "Low Stock Alerts",
            "Backup System"
          ],
          cta: "Buy Now on WhatsApp",
          message: "Hi NRT, I want the Standard POS Plan (PKR 75k)."
        },
        {
          name: "Premium Plan",
          subtitle: "Complete Business Solution",
          price: "PKR 110,000",
          period: "One-Time",
          color: "from-orange-500 to-red-600",
          highlight: false,
          features: [
            "All Standard Plan Features",
            "Multi User Access",
            "Advanced Dashboard",
            "Profit & Loss Reports",
            "Customer & Supplier Ledger",
            "Cloud Backup (Optional)",
            "Priority Support"
          ],
          cta: "Buy Now on WhatsApp",
          message: "Hi NRT, I want the Premium POS Plan (PKR 110k)."
        }
      ]
    },
    {
      id: "website",
      name: "Business Website",
      packages: [
        {
          name: "Starter",
          subtitle: "For Small Businesses",
          price: "PKR 35,000",
          period: "One-Time",
          color: "from-blue-600 to-indigo-800",
          highlight: false,
          features: [
            "Up to 5 Pages",
            "Responsive Design",
            "Contact Form",
            "Google Map",
            "Basic SEO"
          ],
          cta: "Buy Now on WhatsApp",
          message: "Hi NRT, I want the Starter Website Plan (PKR 35k)."
        },
        {
          name: "Business",
          subtitle: "For More Visibility",
          price: "PKR 60,000",
          period: "One-Time",
          color: "from-emerald-500 to-green-700",
          highlight: true,
          features: [
            "Up to 10-15 Pages",
            "Admin Panel",
            "Blog Section",
            "Advanced SEO",
            "WhatsApp Integration"
          ],
          cta: "Buy Now on WhatsApp",
          message: "Hi NRT, I want the Business Website Plan (PKR 60k)."
        },
        {
          name: "Enterprise",
          subtitle: "Advanced Features & Brands",
          price: "PKR 90,000+",
          period: "Custom",
          color: "from-orange-500 to-red-600",
          highlight: false,
          features: [
            "Custom Design",
            "CMS / Easy to Manage",
            "Booking / Inquiry System",
            "Dashboard",
            "API Integration"
          ],
          cta: "Get a Quote",
          message: "Hi NRT, I need a quote for an Enterprise Website."
        }
      ]
    },
    {
      id: "ecommerce",
      name: "E-Commerce Store",
      packages: [
        {
          name: "Basic",
          subtitle: "For Small Online Stores",
          price: "PKR 55,000",
          period: "One-Time",
          color: "from-blue-600 to-indigo-800",
          highlight: false,
          features: [
            "Up to 50 Products",
            "Shopping Cart",
            "Secure Checkout",
            "WhatsApp Orders",
            "Payment Integration"
          ],
          cta: "Buy Now on WhatsApp",
          message: "Hi NRT, I want the Basic E-Commerce Plan (PKR 55k)."
        },
        {
          name: "Standard",
          subtitle: "For Growing Businesses",
          price: "PKR 85,000",
          period: "One-Time",
          color: "from-emerald-500 to-green-700",
          highlight: true,
          features: [
            "Unlimited Products",
            "Inventory Management",
            "Coupon System",
            "Order Tracking",
            "Customer Accounts"
          ],
          cta: "Buy Now on WhatsApp",
          message: "Hi NRT, I want the Standard E-Commerce Plan (PKR 85k)."
        },
        {
          name: "Premium",
          subtitle: "Large Stores & Multi-vendor",
          price: "PKR 140,000",
          period: "One-Time",
          color: "from-orange-500 to-red-600",
          highlight: false,
          features: [
            "Multi Vendor (Optional)",
            "Advanced Reports",
            "Mobile Optimized",
            "Marketing Tools",
            "Complete Admin Dashboard"
          ],
          cta: "Buy Now on WhatsApp",
          message: "Hi NRT, I want the Premium E-Commerce Plan (PKR 140k)."
        }
      ]
    },
    {
      id: "support",
      name: "Maintenance & Support",
      packages: [
        {
          name: "Basic Support",
          subtitle: "For Basic Support Needs",
          price: "PKR 3,000",
          period: "/Month",
          color: "from-blue-600 to-indigo-800",
          highlight: false,
          features: [
            "Bug Fixes",
            "System Backup",
            "Basic Technical Support"
          ],
          cta: "Subscribe Now",
          message: "Hi NRT, I want the Basic Support Plan (PKR 3k/mo)."
        },
        {
          name: "Standard Support",
          subtitle: "Better Performance",
          price: "PKR 6,000",
          period: "/Month",
          color: "from-emerald-500 to-green-700",
          highlight: true,
          features: [
            "Software Updates",
            "Feature Improvements",
            "Priority Support",
            "Database Maintenance"
          ],
          cta: "Subscribe Now",
          message: "Hi NRT, I want the Standard Support Plan (PKR 6k/mo)."
        },
        {
          name: "Premium Support",
          subtitle: "Peace of Mind",
          price: "PKR 10,000",
          period: "/Month",
          color: "from-orange-500 to-red-600",
          highlight: false,
          features: [
            "Unlimited Support",
            "Performance Optimization",
            "Security Monitoring",
            "Monthly Business Report",
            "Emergency Assistance"
          ],
          cta: "Subscribe Now",
          message: "Hi NRT, I want the Premium Support Plan (PKR 10k/mo)."
        }
      ]
    }
  ];

  const addons = [
    { name: "Thermal Printer Setup", price: "Included" },
    { name: "Barcode Scanner Setup", price: "PKR 3,000" },
    { name: "Product Data Import", price: "PKR 5,000" },
    { name: "Extra User Setup", price: "PKR 2,000 / User" },
    { name: "On-site Training", price: "PKR 5,000" },
  ];

  const faqs = [
    {
      q: "Is there any hidden cost?",
      a: "No, all our pricing is transparent. You only pay what you see in the selected plan. Additional features outside the scope will be quoted separately."
    },
    {
      q: "Can I upgrade my plan later?",
      a: "Absolutely! You can start with a Basic or Starter plan and upgrade to Standard or Premium as your business grows."
    },
    {
      q: "How does the maintenance plan work?",
      a: "Our maintenance plans are subscription-based (monthly) to ensure your system stays secure, updated, and runs smoothly without interruptions."
    },
    {
      q: "How can I make the payment?",
      a: "We accept bank transfers, EasyPaisa, JazzCash, and direct deposits. Details will be provided over WhatsApp or Email once you finalize your plan."
    }
  ];

  const activePackages = pricingCategories.find(c => c.id === activeTab)?.packages || [];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      

      {/* Hero */}
      <section className="pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10 text-center">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-8">Investment Plans</div>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-10">
            Complete Digital <br /><span className="text-orange-600">Solutions</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-slate-900/50 max-w-2xl mx-auto leading-relaxed">
            Smart solutions for smarter businesses. Choose the perfect plan to digitize and grow your business today.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-0 z-40 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3">
          {pricingCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === cat.id 
                ? "bg-[#FF5500] text-white shadow-lg shadow-orange-600/30 scale-105" 
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 xl:px-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-6 lg:gap-8"
            >
              {activePackages.map((pkg, i) => (
                <div
                  key={i}
                  className={`relative rounded-[2.5rem] p-8 flex flex-col shadow-xl bg-gradient-to-br ${pkg.color} ${pkg.highlight ? 'scale-105 z-10 border-4 border-white shadow-2xl' : 'border border-slate-200 mt-0 md:mt-6 mb-0 md:mb-6'}`}
                >
                  <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none rounded-[2.5rem]" />
                  <div className="relative z-10 flex flex-col h-full text-white">
                    {pkg.highlight && (
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-orange-500 text-white rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-xl whitespace-nowrap">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="mb-8">
                       <h3 className={`text-2xl font-black mb-2 uppercase tracking-tighter`}>{pkg.name}</h3>
                       <p className="text-[12px] font-bold text-white/80 leading-tight">{pkg.subtitle}</p>
                    </div>

                    <div className="flex items-baseline gap-2 mb-8 bg-black/20 p-4 rounded-2xl border border-white/10">
                      <span className="text-3xl lg:text-4xl font-black tracking-tighter">{pkg.price}</span>
                      <span className="text-xs font-bold text-white/60">{pkg.period}</span>
                    </div>

                    <ul className="space-y-4 mb-10 flex-grow">
                      {pkg.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-3 text-white/90">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white/80" />
                          <span className="text-sm font-bold leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/923442013217?text=${encodeURIComponent(pkg.message)}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`block w-full py-4 rounded-xl text-center font-black text-sm uppercase tracking-widest transition-all shadow-xl hover:scale-105 ${pkg.highlight ? 'bg-white text-green-700' : 'bg-white text-slate-900'}`}
                    >
                      {pkg.cta}
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Add-ons Section for Specific Tabs */}
          {(activeTab === 'pos' || activeTab === 'ecommerce') && (
             <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
               className="mt-20 max-w-3xl mx-auto bg-white rounded-[2rem] border border-slate-300 p-8 shadow-sm"
             >
                <div className="flex items-center gap-3 mb-6">
                   <Cog className="w-6 h-6 text-orange-600" />
                   <h3 className="text-2xl font-black tracking-tighter text-slate-900">Add-ons (One Time)</h3>
                </div>
                <div className="space-y-3">
                   {addons.map((addon, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                         <span className="font-bold text-slate-700">{addon.name}</span>
                         <span className="font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg text-sm">{addon.price}</span>
                      </div>
                   ))}
                </div>
             </motion.div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white px-4 sm:px-6 lg:px-8 xl:px-24 border-t border-slate-300">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4">Common Questions</div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-slate-900">Everything you <br /><span className="text-orange-600">need</span> to know</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
                >
                  <span className="text-xl font-black tracking-tight text-slate-900">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-slate-300 transition-transform ${openFaq === i ? 'rotate-180 bg-white text-slate-900' : ''}`}>
                    {openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-lg font-bold text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-white rounded-[3.5rem] text-center text-slate-900 relative overflow-hidden shadow-2xl border border-slate-300">
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
            <h3 className="text-3xl font-black mb-6 tracking-tighter relative z-10">Still have questions?</h3>
            <p className="text-slate-900/50 text-xl font-bold mb-10 relative z-10">We're here to help. Reach out to us via WhatsApp or Email.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <a href="https://wa.me/923442013217" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl text-lg font-black shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"><MessageSquare className="w-5 h-5" /> WhatsApp Us</a>
              <Link href="/contact" className="bg-slate-100 border border-slate-300 text-slate-900 px-10 py-5 rounded-2xl text-lg font-black shadow-xl hover:bg-white hover:text-slate-900 transition-all">Contact Form</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
