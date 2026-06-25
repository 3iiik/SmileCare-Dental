"use client";

import { useLanguage } from "@/context/LanguageContext";

const contacts = [
  {
    key: "messenger",
    href: "https://m.me/3iik.dev",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.16.063.213.09.213.157 0 .166-.018.665-.028 1.306-.004.143-.076.297-.288.185C3.632 20.594 0 16.656 0 12 0 5.373 5.373 0 12 0zm6.84 18.706c-3.305 3.984-8.74 5.148-13.33 3.69 1.36-.663 3.647-1.645 4.282-1.976.636-.33 1.235-.026 1.235-.026C19.374 21.876 24 16.03 24 12c0-3.243-2.105-6-6-6-6.627 0-12 5.373-12 12 0 1.622.32 3.165.9 4.577.143.348.036.764-.213 1.036l-1.56 1.7c-.77.84-.635 1.766.096 2.035C8.93 27.3 14.83 23.74 16 21c.185-.424.788-.617 1.25-.326C19.354 21.868 21.5 19.5 21.5 17c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 1.78.978 3.308 2.34 3.706z" />
      </svg>
    ),
  },
  {
    key: "email",
    href: "mailto:3iikStudio@proton.me",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    key: "location",
    href: "https://maps.google.com/?q=Algiers+Algeria",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {contacts.map((c) => (
            <a
              key={c.key}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all group"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                {c.icon}
              </div>
              <span className="text-lg font-semibold text-slate-800">{t(`contact.${c.key}`)}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
