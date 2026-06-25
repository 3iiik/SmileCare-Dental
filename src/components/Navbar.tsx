"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const sections = [
  { key: "services", href: "#services" },
  { key: "whyUs", href: "#why-us" },
  { key: "team", href: "#team" },
  { key: "reviews", href: "#reviews" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-xl font-bold text-slate-800">SmileCare</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <a key={s.key} href={s.href} className="text-sm text-slate-600 hover:text-teal-600 transition-colors font-medium">
                {t(`nav.${s.key}`)}
              </a>
            ))}
            <LanguageSwitcher />
            <a href="#appointment" className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors">
              {t("nav.appointment")}
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-600" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {sections.map((s) => (
              <a key={s.key} href={s.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-teal-600 font-medium">
                {t(`nav.${s.key}`)}
              </a>
            ))}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
            <a href="#appointment" onClick={() => setOpen(false)} className="block mx-3 mt-2 bg-teal-600 text-white text-center px-4 py-2 rounded-lg text-sm font-semibold">
              {t("nav.appointment")}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
