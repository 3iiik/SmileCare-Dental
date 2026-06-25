"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const { t, tm } = useLanguage();
  const items = tm("faq.items");
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">{t("faq.title")}</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("faq.subtitle")}</p>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base font-semibold text-slate-800 pr-4">{item.q as string}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {item.a as string}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
