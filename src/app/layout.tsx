import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmileCare Dental - Votre Sourire, Notre Priorité",
  description:
    "Soins dentaires professionnels à Alger — nettoyage, blanchiment, implants, orthodontie et plus. Cabinet moderne et abordable.",
  keywords: [
    "dentiste Alger",
    "clinique dentaire Alger",
    "blanchiment dentaire",
    "implants dentaires",
    "orthodontie",
    "soins dentaires",
    "SmileCare Dental",
  ],
  authors: [{ name: "SmileCare Dental" }],
  openGraph: {
    title: "SmileCare Dental - Votre Sourire, Notre Priorité",
    description: "Soins dentaires professionnels à Alger — modernes, abordables et pour toute la famille.",
    url: "https://smilecare-dental.com",
    siteName: "SmileCare Dental",
    locale: "fr_DZ",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCare Dental - Votre Sourire, Notre Priorité",
    description: "Soins dentaires professionnels à Alger.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      fr: "https://smilecare-dental.com",
      en: "https://smilecare-dental.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="alternate" hrefLang="fr" href="https://smilecare-dental.com" />
        <link rel="alternate" hrefLang="en" href="https://smilecare-dental.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://smilecare-dental.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <StructuredData />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
