"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Appointment() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      date: form.get("date"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/3iikStudio@proton.me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("appointment.title")}</h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">{t("appointment.subtitle")}</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl space-y-5">
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
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">{t("appointment.phoneLabel")}</label>
              <input
                name="phone"
                type="tel"
                required
                placeholder={t("appointment.phonePlaceholder") as string}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-slate-800"
              />
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
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 disabled:opacity-60 transition-all text-lg"
          >
            {status === "sending" ? t("appointment.sending") : t("appointment.submit")}
          </button>
          {status === "success" && (
            <p className="text-green-600 bg-green-50 p-3 rounded-lg text-sm font-medium">{t("appointment.success")}</p>
          )}
          {status === "error" && (
            <p className="text-red-600 bg-red-50 p-3 rounded-lg text-sm font-medium">{t("appointment.error")}</p>
          )}
        </form>
      </div>
    </section>
  );
}
