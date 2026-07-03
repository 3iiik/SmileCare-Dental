"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-teal-600/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-teal-50 mb-10 max-w-2xl leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-700 font-bold rounded-xl shadow-lg hover:bg-teal-50 transition-all text-lg cursor-default"
            >
              {t("hero.cta1")}
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg"
            >
              {t("hero.cta2")}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
