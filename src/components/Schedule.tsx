"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { Calendar, Clock, Flame, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";

const nepalMatches = [
  {
    date: "25 May 2026",
    time: "16:30 IST / 16:45 NPT",
    team1: { name: "Bhutan", flag: "🇧🇹" },
    team2: { name: "Nepal", flag: "🇳🇵" },
    label: "The Opening Clash",
    hype: "The nation's first look at the squad. Massive initial tune-in expected."
  },
  {
    date: "31 May 2026",
    time: "16:30 IST / 16:45 NPT",
    team1: { name: "Nepal", flag: "🇳🇵" },
    team2: { name: "Sri Lanka", flag: "🇱🇰" },
    label: "The Group Decider",
    hype: "High-stakes Friday fixture to secure the semi-final spot. Peak engagement guaranteed."
  }
];

const knockouts = [
  { 
    date: "3 June 2026", 
    stage: "Semi-Finals", 
    match: "Winner A vs Runner-up B / Winner B vs Runner-up A",
    hype: "High probability of an India vs Nepal or Bangladesh vs Nepal clash. Peak regional viewership."
  },
  { 
    date: "6 June 2026", 
    stage: "The Grand Finale", 
    match: "Winner SF 1 vs Winner SF 2",
    hype: "The ultimate showdown. The 2024 final drew record-breaking numbers across the subcontinent."
  }
];

export function Schedule() {
  return (
    <Section className="bg-zinc-950 border-t border-white/5 py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image src="/2.jpeg" alt="High Speed Action" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-dgo font-mono text-sm">08</span>
          <h2 className="text-sm uppercase tracking-widest text-white/50">Tournament Fixtures</h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Nepal's Road to <span className="text-gradient-dgo">Glory</span>
        </h3>
        <p className="text-white/60 max-w-2xl text-lg font-light">
          The tie sheet is set. Nepal's journey through the group stages presents a massive, concentrated viewership opportunity for the Nepali telecast.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-6xl mx-auto relative z-10">
        {/* Left Column: The Matches */}
        <div className="lg:col-span-7 space-y-8">
          <h4 className="text-xl font-bold text-white flex items-center gap-3">
            <Flame className="w-5 h-5 text-dgo-primary" /> 
            Key Nepali Fixtures
          </h4>
          
          <div className="space-y-6">
            {nepalMatches.map((match, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-black border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-dgo/50 transition-colors"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-dgo opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-dgo-primary mb-3">
                      {match.label}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-white/50 font-mono">
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {match.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {match.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-white/5 rounded-2xl p-4 md:p-6">
                  <div className="flex flex-col items-center gap-2 w-2/5">
                    <span className="text-4xl">{match.team1.flag}</span>
                    <span className="font-bold text-lg md:text-xl text-white">{match.team1.name}</span>
                  </div>
                  <div className="w-1/5 flex justify-center">
                    <span className="text-white/30 font-bold italic text-xl">VS</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-2/5">
                    <span className="text-4xl">{match.team2.flag}</span>
                    <span className="font-bold text-lg md:text-xl text-white">{match.team2.name}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-dgo-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 font-light">{match.hype}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <h4 className="text-xl font-bold text-white mb-6">The Knockout Stages</h4>
            <div className="grid grid-cols-1 gap-4">
              {knockouts.map((ko, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <div>
                      <p className="text-dgo-primary font-mono text-sm mb-1">{ko.date}</p>
                      <p className="text-white font-bold text-xl">{ko.stage}</p>
                    </div>
                    <span className="px-3 py-1 bg-black/50 rounded-full text-xs text-white/50 border border-white/5 whitespace-nowrap">
                      {ko.match}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-start gap-3">
                    <Flame className="w-4 h-4 text-dgo-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-white/80 font-medium">{ko.hype}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sponsorship Hype */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-30 mix-blend-screen">
                <Image src="/2.jpeg" alt="High Speed Action" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-dgo/20 rounded-2xl flex items-center justify-center mb-8 text-dgo-primary">
                  <Zap className="w-6 h-6" />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-6">
                  The Telecast Advantage
                </h4>
                
                <div className="space-y-8">
                  <div>
                    <h5 className="text-white font-bold mb-2">Prime Time Dominance</h5>
                    <p className="text-white/60 text-sm font-light leading-relaxed">
                      The 16:45 NPT kickoff for Nepal's matches perfectly aligns with the late-afternoon/early-evening beverage consumption window. It's the exact moment audiences gather after work or school.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-white font-bold mb-2">The "Nepal Multiplier"</h5>
                    <p className="text-white/60 text-sm font-light leading-relaxed">
                      Matches featuring the Nepali national team are expected to out-index neutral fixtures, especially if the bracket creates a Nepal vs India semi-final or final. The patriotic intensity translates directly to brand attention.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-white font-bold mb-2">Unmatched Brand Integration</h5>
                    <p className="text-white/60 text-sm font-light leading-relaxed">
                      From kickoff to the final whistle, the Title Sponsor commands the screen. With permanent logo placements, high-impact L-bands, and split-screen TVCs during critical match moments, Campa Cola receives <span className="text-white font-medium">maximum, uninterrupted exposure</span> during Nepal's most-watched fixtures.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
