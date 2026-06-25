"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const images = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop&crop=face&q=80",
];

export default function Team() {
  const { t, tm } = useLanguage();
  const members = tm("team.members");

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">{t("team.title")}</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("team.subtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md ring-2 ring-slate-100">
                <Image
                  src={images[i]}
                  alt={member.name as string}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 192px, 192px"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name as string}</h3>
              <p className="text-teal-600 font-medium text-sm mb-2">{member.role as string}</p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{member.bio as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
