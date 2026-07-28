"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Magnetic } from "./ui/Magnetic";

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
    { name: "SERVICES", href: "/services" },
    { name: "PRICING", href: "/pricing" },
    { name: "CASE STUDIES", href: "/case-studies" },
    { name: "RESOURCES", href: "/resources" },
    { name: "PLAYBOOKS", href: "/playbooks" },
    { 
      name: "COMPANY", 
      href: "/about",
      dropdown: [
        { name: "About", href: "/about" },
        { name: "Process", href: "/process" },
        { name: "Live Portfolio", href: "/portfolio" },
        { name: "Founder", href: "/author/muhammad-ahsan-khan" },
        { name: "Contact", href: "/contact" }
      ]
    },
  ];


  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.href = "/#website-offer";
    } else {
      const element = document.getElementById("website-offer");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] flex flex-col w-full">
      <div className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white text-xs sm:text-sm py-2 px-3 sm:px-4 text-center font-semibold flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 shadow-md shrink-0">
         <span className="animate-pulse">🔥</span> 
         <span>Special Offer: Complete Business Website <span className="hidden sm:inline">(Includes Domain & Hosting)</span> for just <b className="text-sm sm:text-lg">$200</b>!</span>
         <a href="/#website-offer" onClick={scrollToOffer} className="underline font-black hover:text-orange-200 ml-1 sm:ml-2 transition-colors cursor-pointer">Claim Now</a>
      </div>
      <header 
        className={`w-full transition-all duration-300 ease-in-out ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md py-2.5 border-b border-slate-300 shadow-lg" 
            : "bg-transparent py-3 sm:py-5"
        }`}
      >
      <motion.nav 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between">
          
          {/* Logo Brand area */}
          <a href="/" className="flex items-center py-1.5 z-50">
            <img
              src={logoImage}
              alt="Next Revolution Tech Logo - Custom ERP & AI Automation Agency"
              className="h-14 sm:h-16 w-auto object-contain transition-all duration-500 ease-out hover:scale-105 hover:opacity-90"
            />
          </a>

          {/* Center Navigation Links - Balanced spacing */}
          <div className="hidden xl:flex items-center gap-2 xl:gap-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-nrt-nav px-3 py-2 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    scrolled 
                      ? "text-slate-600 hover:text-slate-900 hover:bg-white/5" 
                      : "text-slate-900/70 hover:text-slate-900 hover:bg-white/10"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-300 p-3 min-w-[200px] flex flex-col gap-1">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          href={subItem.href}
                          className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-orange-600 hover:bg-white rounded-xl transition-colors"
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

          {/* Right CTA Area - Clear Hierarchy */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Secondary CTA */}
            <Magnetic>
              <Link 
                href="/dedicated-teams" 
                className={`px-4 py-2.5 rounded-full text-nrt-nav font-semibold uppercase tracking-wider text-[13px] whitespace-nowrap transition-all border ${
                  scrolled 
                    ? "border-slate-300 text-slate-900 hover:bg-white/5" 
                    : "border-black/20 text-slate-900 hover:bg-white/10"
                }`}
              >
                Hire Dedicated Team
              </Link>
            </Magnetic>
            {/* Primary CTA */}
            <Magnetic>
              <Link 
                href="/contact" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full text-nrt-nav shadow-md hover:shadow-lg transition-all font-semibold uppercase tracking-wider text-[13px] whitespace-nowrap"
              >
                Book Technical Audit
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle navigation menu"
            className={`xl:hidden p-2 rounded-xl transition-colors z-50 ${
              scrolled ? "text-slate-900 hover:bg-white/5" : "text-slate-900 hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden mt-4 bg-white rounded-3xl overflow-hidden border border-slate-300 shadow-2xl backdrop-blur-lg"
            >
              <div className="p-8 space-y-6">
                {navigation.map((item) => (
                  <div key={item.name} className="space-y-4">
                    <Link
                      href={item.href}
                      className="block text-xl font-bold tracking-tight text-slate-900 hover:text-orange-600 transition-colors uppercase"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4 space-y-3 border-l-2 border-slate-300">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm font-bold text-slate-900/60 hover:text-slate-900 uppercase tracking-wider transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-6 border-t border-slate-300 space-y-3">
                  <Link 
                    href="/dedicated-teams" 
                    className="block w-full border border-black/20 text-slate-900 hover:bg-white/10 text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hire Dedicated Team
                  </Link>
                  {/* Primary CTA */}
                  <Link 
                    href="/contact" 
                    className="block w-full bg-orange-600 hover:bg-orange-600/90 text-white text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Technical Audit
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
