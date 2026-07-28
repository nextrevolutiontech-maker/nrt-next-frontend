import Link from "next/link";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  ArrowUp,
  Globe,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { FOUNDER, COMPANY_SOCIAL, COMPANY_LOCATION, DIRECTORY_LISTINGS } from "@/config/brand";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { name: "eCommerce Tech", href: "/services" },
      { name: "API Integrations", href: "/services" },
      { name: "Automation & Systems", href: "/services" },
      { name: "Custom Solutions", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Our Process", href: "/process" },
      { name: "Success Stories", href: "/case-studies" },
      { name: "Live Portfolio", href: "/portfolio" },
      { name: "Resources Hub", href: "/resources" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "GDPR Compliance", href: "/gdpr-compliance" },
    ],
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: FOUNDER.linkedInUrl, label: "Founder LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: COMPANY_SOCIAL.instagram, label: "Instagram" },
    { icon: <Github className="w-5 h-5" />, href: COMPANY_SOCIAL.github, label: "GitHub" },
  ];

  return (
    <footer className="bg-white border-t border-slate-300 text-slate-900 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#3A5CCC]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <Link href="/" className="inline-block mb-8 group">
              <img
                src="/logo.png"
                alt="Next Revolution Tech Logo - Custom Software & AI Development Agency"
                className="h-20 sm:h-24 w-auto object-contain transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-90"
              />
            </Link>
            <p className="text-slate-900/60 text-base text-nrt-body leading-relaxed mb-8 max-w-sm font-medium">
              We solve real technical problems for growing businesses through custom ERPs, AI automation, and dedicated engineering partnerships.
            </p>
            <div className="mb-8 space-y-3">
              <div itemScope itemType="https://schema.org/PostalAddress">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 mb-1">HQ Address</div>
                <div className="text-slate-900 text-sm font-semibold flex items-start gap-2">
                  <Globe className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>
                    <span itemProp="streetAddress">{COMPANY_LOCATION.streetAddress}</span>,{" "}
                    <span itemProp="addressLocality">{COMPANY_LOCATION.city}</span>,{" "}
                    <span itemProp="addressRegion">{COMPANY_LOCATION.region}</span>{" "}
                    <span itemProp="postalCode">{COMPANY_LOCATION.postalCode}</span>,{" "}
                    <span itemProp="addressCountry">{COMPANY_LOCATION.country}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 mb-8">Solutions</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-900/70 hover:text-orange-600 text-base font-semibold transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-orange-600 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 mb-8">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-900/70 hover:text-orange-600 text-base font-semibold transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-orange-600 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 mb-8">Direct Contact</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${COMPANY_LOCATION.email}`}
                className="group block p-4 rounded-2xl bg-white border border-slate-300 hover:border-orange-600/50 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Mail className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-bold text-slate-500">Email Architecture Team</span>
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors break-all">
                  {COMPANY_LOCATION.email}
                </div>
              </a>
              <a
                href={`https://wa.me/923442013217`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 rounded-2xl bg-white border border-slate-300 hover:border-orange-600/50 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3 mb-1">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-500">WhatsApp / Call</span>
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {COMPANY_LOCATION.phone}
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-nrt-label text-slate-600 font-medium">
            © {currentYear} Next Revolution Tech. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-nrt-label text-slate-600 font-medium">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-orange-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-900 hover:bg-orange-600 hover:text-slate-900 transition-all shadow-xl group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
