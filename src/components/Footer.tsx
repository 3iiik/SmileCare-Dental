"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-lg font-bold text-white">SmileCare Dental</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://facebook.com/3iik.dev" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://m.me/3iik.dev" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.16.063.213.09.213.157 0 .166-.018.665-.028 1.306-.004.143-.076.297-.288.185C3.632 20.594 0 16.656 0 12 0 5.373 5.373 0 12 0zm6.84 18.706c-3.305 3.984-8.74 5.148-13.33 3.69 1.36-.663 3.647-1.645 4.282-1.976.636-.33 1.235-.026 1.235-.026C19.374 21.876 24 16.03 24 12c0-3.243-2.105-6-6-6-6.627 0-12 5.373-12 12 0 1.622.32 3.165.9 4.577.143.348.036.764-.213 1.036l-1.56 1.7c-.77.84-.635 1.766.096 2.035C8.93 27.3 14.83 23.74 16 21c.185-.424.788-.617 1.25-.326C19.354 21.868 21.5 19.5 21.5 17c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 1.78.978 3.308 2.34 3.706z"/></svg>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>{t("footer.rights")}</p>
          <p className="text-slate-500">{t("footer.builtBy")}</p>
        </div>
      </div>
    </footer>
  );
}
