"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => setLocale("fr")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "fr"
            ? "bg-teal-600 text-white"
            : "text-slate-600 hover:text-teal-600"
        }`}
      >
        FR
      </button>
      <span className="text-slate-300">|</span>
      <button
        onClick={() => setLocale("en")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "bg-teal-600 text-white"
            : "text-slate-600 hover:text-teal-600"
        }`}
      >
        EN
      </button>
    </div>
  );
}
