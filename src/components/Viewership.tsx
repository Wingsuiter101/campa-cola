"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

const metrics = [
  { value: "15M+", label: "Projected Digital Impressions", context: "Across DGO & Social Channels" },
  { value: "3.2M+", label: "Peak Match Views", context: "Based on historical SAFF viewership" },
  { value: "250K+", label: "DGO Monthly Active Users", context: "Verified platform metric" },
  { value: "85%", label: "Mobile Viewership Share", context: "Highly engaged digital-first audience" },
];

export function Viewership() {
  return (
    <Section className="bg-black border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-dgo font-mono text-sm">09</span>
          <h2 className="text-sm uppercase tracking-widest text-white/50">Viewership & Reach</h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold">Digital Audience Data</h3>
        <p className="mt-6 text-white/60 max-w-3xl text-lg font-light">
          The SAFF Women's Championship commands massive digital attention. With South Asian football viewership shifting rapidly to digital platforms, live coverage reaches millions across Nepal, India, Bangladesh, and the diaspora.
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
          <h4 className="text-2xl font-bold text-white mb-4">DGO Live Coverage · 2026 Championship</h4>
          <p className="text-white/70 text-lg font-light max-w-4xl">
            DGO will deliver full live coverage of the 2026 SAFF Women's Championship. As the exclusive digital broadcaster, every live match guarantees premium, uninterrupted brand visibility for the Title Sponsor, reaching DGO's verified 250,000+ monthly active users directly on their screens through high-impact inventory like L-bands, Aston graphics, and split-screen TVCs.
          </p>
        </div>
      </div>
    </Section>
  );
}
