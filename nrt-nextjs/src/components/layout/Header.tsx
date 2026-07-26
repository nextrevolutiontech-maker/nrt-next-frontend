"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Magnetic } from "../ui/Magnetic";

const logoImage = "/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        setScrolled((current) => {
          const next = window.scrollY > 20;
          return current === next ? current : next;
        });
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { 
      name: "SERVICES", 
      href: "/services",
      dropdown: [
        { name: "ERP & Business Automation", href: "/services/erp-development" },
        { name: "AI & Workflow Automation", href: "/services/ai-automation" },
        { name: "Custom Software Development", href: "/services/custom-software-development" },
        { name: "Custom SaaS Development", href: "/services/saas-development" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" },
        { name: "Cloud & DevOps Infrastructure", href: "/services/cloud-devops" },
        { name: "Dedicated Engineering Teams", href: "/dedicated-teams" }
      ]
    },
    { 
      name: "SOLUTIONS", 
      href: "/solution-finder",
      dropdown: [
        { name: "Solution Finder Tool", href: "/solution-finder" },
        { name: "School ERP & LMS System", href: "/industries/school-erp" },
        { name: "Healthcare & Hospital ERP", href: "/industries/hospital-erp" },
        { name: "Manufacturing & MRP II", href: "/industries/manufacturing-erp" },
        { name: "Retail & Multi-Store POS", href: "/industries/retail-erp" },
        { name: "Logistics & WMS Automation", href: "/industries/logistics-erp" },
        { name: "Real Estate Portal & CRM", href: "/industries/real-estate" }
      ]
    },
    { name: "PRICING", href: "/pricing" },
    { name: "CASE STUDIES", href: "/case-studies" },
    { 
      name: "RESOURCES", 
      href: "/resources",
      dropdown: [
        { name: "Executive Playbooks", href: "/playbooks" },
        { name: "Knowledge Hub & Insights", href: "/resources" },
        { name: "Glossary & Frameworks", href: "/glossary" }
      ]
    },
    { 
      name: "COMPANY", 
      href: "/about",
      dropdown: [
        { name: "About Us", href: "/about" },
        { name: "Our Process", href: "/process" },
        { name: "Live Portfolio Showcase", href: "/portfolio" },
        { name: "Founder Profile", href: "/author/muhammad-ahsan-khan" },
        { name: "Contact Us", href: "/contact" }
      ]
    },
  ];

  const scrollToOffer = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("website-offer");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] flex flex-col w-full font-sans">
      {/* TOP ANNOUNCEMENT BANNER */}
      <div className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white text-xs sm:text-sm py-2 px-3 sm:px-4 text-center font-bold flex flex-wrap items-center justify-center gap-2 shadow-md shrink-0 border-b border-orange-400/20">
        <span className="inline-flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          <span>Special Offer: Complete Business Website (Includes Domain & Hosting) for just <b className="text-white text-sm sm:text-base">$200</b>!</span>
        </span>
        <Link 
          href="/#website-offer" 
          onClick={scrollToOffer} 
          className="bg-white text-orange-600 hover:bg-slate-100 font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow transition-all duration-200 inline-flex items-center gap-1 cursor-pointer hover:scale-105"
        >
          <span>CLAIM OFFER NOW</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* NAVBAR CONTAINER (LIGHT THEME) */}
      <header 
        className={`w-full transition-all duration-300 ease-in-out ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md py-3 border-b border-slate-200 shadow-lg" 
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100"
        }`}
      >
        <motion.nav 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between">
            
            {/* BRAND LOGO */}
            <Link href="/" className="flex items-center gap-3 py-1 z-50 group">
              <Image
                src={logoImage}
                alt="Next Revolution Tech"
                width={180}
                height={64}
                priority
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* NAV LINKS (LIGHT THEME) */}
            <div className="hidden xl:flex items-center gap-1 font-bold">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-[12px] uppercase tracking-wider px-3.5 py-2 rounded-xl text-slate-700 hover:text-orange-600 hover:bg-orange-50/60 transition-all flex items-center gap-1.5 whitespace-nowrap"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />}
                  </Link>

                  {item.dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 min-w-[240px] flex flex-col gap-1 backdrop-blur-xl">
                        {item.dropdown.map((subItem) => (
                          <Link 
                            key={subItem.name}
                            href={subItem.href}
                            className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT BUTTONS (LIGHT THEME) */}
            <div className="hidden xl:flex items-center gap-3 font-bold">
              <Magnetic>
                <Link 
                  href="/dedicated-teams" 
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 border border-slate-300 hover:bg-slate-200 transition-all shadow-sm whitespace-nowrap"
                >
                  <Calendar className="w-3.5 h-3.5 text-orange-600" />
                  <span>HIRE DEDICATED TEAM</span>
                </Link>
              </Magnetic>

              <Magnetic>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg shadow-orange-600/20 hover:scale-105 transition-all whitespace-nowrap"
                >
                  <span>BOOK TECHNICAL AUDIT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Magnetic>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="xl:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-orange-600 transition-colors z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* MOBILE DROPDOWN */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="xl:hidden mt-4 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl backdrop-blur-xl"
              >
                <div className="p-6 space-y-6">
                  {navigation.map((item) => (
                    <div key={item.name} className="space-y-3">
                      <Link
                        href={item.href}
                        className="block text-lg font-black tracking-tight text-slate-900 hover:text-orange-600 transition-colors uppercase"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="pl-4 space-y-2 border-l border-slate-200">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-xs font-semibold text-slate-600 hover:text-slate-900 uppercase tracking-wider transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="pt-6 border-t border-slate-200 space-y-3">
                    <Link 
                      href="/dedicated-teams" 
                      className="block w-full border border-slate-300 bg-slate-100 text-slate-800 text-center py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      HIRE DEDICATED TEAM
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block w-full bg-orange-600 text-white text-center py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-orange-600/30 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      BOOK TECHNICAL AUDIT
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
    </div>
  );
}
