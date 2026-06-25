"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import fr from "@/messages/fr.json";
import en from "@/messages/en.json";

export type Locale = "fr" | "en";

const messages: Record<Locale, Record<string, unknown>> = { fr, en };

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  tm: (path: string) => Record<string, unknown>[];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

function getInitialLocale(): Locale {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("smilecare-locale") as Locale | null;
    if (saved === "fr" || saved === "en") return saved;
  }
  return "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("smilecare-locale", l);
  }, []);

  const t = useCallback(
    (path: string): string => {
      const value = getNestedValue(messages[locale], path);
      return typeof value === "string" ? value : path;
    },
    [locale]
  );

  const tm = useCallback(
    (path: string): Record<string, unknown>[] => {
      const value = getNestedValue(messages[locale], path);
      return Array.isArray(value) ? (value as Record<string, unknown>[]) : [];
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tm }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
