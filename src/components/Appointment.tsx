"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Appointment() {
  const { t } = useLanguage();

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("appointment.title")}</h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">{t("appointment.subtitle")}</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-xl space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">{t("appointment.nameLabel")}</label>
              <input
                name="name"
                required
                placeholder={t("appointment.namePlaceholder") as string}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-slate-800"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">{t("appointment.emailLabel")}</label>
              <input
                name="email"
                type="email"
                required
                placeholder={t("appointment.emailPlaceholder") as string}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-slate-800"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">{t("appointment.dateLabel")}</label>
            <input
              name="date"
              type="date"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-slate-800"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">{t("appointment.messageLabel")}</label>
            <textarea
              name="message"
              rows={4}
              placeholder={t("appointment.messagePlaceholder") as string}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-slate-800 resize-none"
            />
          </div>
          <a
            href="https://instagram.com/3iik.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-all text-lg text-center"
          >
            {t("appointment.submit")}
          </a>
        </div>
      </div>
    </section>
  );
}
