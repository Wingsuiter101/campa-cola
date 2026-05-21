"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { Trophy, Tv, Activity, Globe, Medal } from "lucide-react";

const experiences = [
  {
    title: "FIFA World Cup 2026™",
    role: "Exclusive OTT Streaming",
    icon: Globe,
    desc: "Secured exclusive digital broadcasting rights for all 104 matches of the biggest sporting event on the planet."
  },
  {
    title: "Nepal Premier League (NPL)",
    role: "Digital Broadcaster",
    icon: Trophy,
    desc: "The digital home for Nepal's premier franchise T20 cricket tournament, delivering massive concurrent viewership."
  },
  {
    title: "PM Cup NVA",
    role: "Official Broadcaster",
    icon: Medal,
    desc: "Comprehensive live coverage of Nepal's premier NVA volleyball tournament."
  },
  {
    title: "CAVA Volleyball",
    role: "Streaming Partner",
    icon: Activity,
    desc: "Exclusive digital coverage of the Central Asian Volleyball Association championships, driving record engagement."
  },
  {
    title: "GORKHA Boxing",
    role: "Live Broadcaster",
    icon: Tv,
    desc: "Bringing high-octane combat sports to Nepali screens with premium multi-camera production."
  }
];

export function Experience() {
  return (
    <Section className="bg-black border-t border-white/5 py-32">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-dgo font-mono text-sm">02</span>
          <h2 className="text-sm uppercase tracking-widest text-white/50">Proven Track Record</h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          A Legacy of <span className="text-gradient-dgo">Premium Sports</span>
        </h3>
        <p className="text-white/60 max-w-2xl text-lg font-light">
          DGO doesn't just stream matches; we build digital sporting ecosystems. Our infrastructure and audience have been stress-tested by the biggest properties in South Asian sports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`p-[1px] rounded-3xl bg-gradient-dgo group hover:scale-[1.02] transition-transform ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
            <div className="bg-zinc-950 w-full h-full p-8 md:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-dgo/5 rounded-full blur-[80px] group-hover:bg-dgo/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-dgo/10 rounded-2xl flex items-center justify-center mb-6 text-dgo-primary">
                  <exp.icon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{exp.title}</h4>
                <p className="text-dgo-primary font-mono text-sm mb-4">{exp.role}</p>
                <p className="text-white/60 font-light leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
