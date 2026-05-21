"use client";

import { Section } from "./ui/Section";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/basePath";

const facts = [
  { icon: Trophy, label: "Edition", value: "8th SAFF Women's Championship" },
  { icon: MapPin, label: "Host Venue", value: "Fatorda Stadium, Goa — India" },
  { icon: Calendar, label: "Dates", value: "May 25 – June 5, 2026" },
  { icon: Users, label: "Competing Nations", value: "6 National Teams" },
];

export function Tournament() {
  return (
    <Section className="bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image src={assetPath("/3.jpg")} alt="Player Boots" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        {/* Left: Why SAFF */}
        <div className="flex flex-col relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-dgo font-mono text-sm">06</span>
            <h2 className="text-sm uppercase tracking-widest text-white/50">The Opportunity</h2>
          </div>
          
          <div className="mb-8">
            <Image src={assetPath("/saff-png.png")} alt="SAFF Logo" width={160} height={160} className="object-contain" />
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Why SAFF Women's <br />
            <span className="text-gradient-dgo">Championship?</span>
          </h3>
          <div className="space-y-6 text-lg text-white/70 font-light mb-10">
            <p>
              The SAFF Women's Championship is South Asia's flagship women's football tournament. Now in its 8th edition, the tournament has evolved into a major cultural event commanding the full attention of South Asia's football audience.
            </p>
            <p>
              For Nepal specifically, this tournament carries exceptional emotional significance. Nepal has finished as runners-up on five separate occasions and reached the 2024 final on home soil.
            </p>
            <p>
              Women's football is the fastest-growing segment of the sport globally. Audience demographics skew young, urban, and digitally active — precisely the consumer profile most valuable to a modern beverage brand like Campa Cola.
            </p>
          </div>
        </div>

        {/* Right: At a Glance */}
        <div className="p-[1px] rounded-3xl bg-gradient-dgo relative z-10">
          <div className="bg-black rounded-3xl p-8 md:p-12 h-full">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-dgo font-mono text-sm">07</span>
            <h2 className="text-sm uppercase tracking-widest text-white/50">At a Glance</h2>
          </div>
          
          <div className="space-y-8">
            {facts.map((fact, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-2xl text-white/80">
                  <fact.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/40 mb-1">{fact.label}</p>
                  <p className="text-xl font-medium text-white/90">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
