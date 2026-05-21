"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

const metrics = [
  { value: "250K–400K", label: "Projected Nepal Digital Reach", context: "Live broadcast, clips, reminders, and matchday posts" },
  { value: "35K–75K", label: "Projected Peak Live Audience", context: "Nepal fixtures, with upside in knockouts" },
  { value: "2M–3.5M", label: "Projected Sponsor Impressions", context: "Logo, L-band, Aston, TVC, and app placements" },
  { value: "1M+", label: "2024 Market Demand Signal", context: "Public benchmark for Nepal's SAFF final interest" },
];

export function Viewership() {
  return (
    <Section className="bg-black border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-dgo font-mono text-sm">09</span>
          <h2 className="text-sm uppercase tracking-widest text-white/50">Viewership & Reach</h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold">2026 Nepal Broadcast Forecast</h3>
        <p className="mt-6 text-white/60 max-w-3xl text-lg font-light">
          A Nepal-only broadcast gives Campa Cola a focused ownership moment with the country's most passionate football audience. Nepal's group fixtures, knockout potential, and live sponsor inventory create repeated high-attention touchpoints across the tournament window.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="p-[1px] rounded-3xl bg-gradient-dgo opacity-90 hover:opacity-100 transition-opacity duration-300"
          >
            <div className="bg-zinc-950 rounded-3xl p-8 h-full">
              <h4 className="text-4xl font-bold text-white mb-2">{metric.value}</h4>
              <p className="text-sm font-medium text-white/80 mb-4">{metric.label}</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">{metric.context}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-[1px] rounded-3xl bg-gradient-dgo">
        <div className="bg-black rounded-3xl p-8 md:p-12 h-full">
          <h4 className="text-2xl font-bold text-white mb-4">Forecast Model · Nepal-Only Digital Broadcast</h4>
          <p className="text-white/70 text-lg font-light max-w-4xl">
            Campa Cola receives visibility across every live match touchpoint: stream entry, in-app placements, match reminders, highlight cuts, and social distribution. The biggest sponsorship upside comes from Nepal's group-stage matches and the prospect of a Nepal vs India semi-final or final.
          </p>
        </div>
      </div>
    </Section>
  );
}
