"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

const stats = [
  { value: "500K+", label: "Total App Downloads" },
  { value: "250K+", label: "Monthly Active Users" },
  { value: "20K+", label: "Daily Active Users" },
];

export function Stats() {
  return (
    <Section className="bg-black border-t border-white/5 py-32">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-dgo font-mono text-sm">03</span>
          <h2 className="text-sm uppercase tracking-widest text-white/50">Platform Scale</h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold">DGO in Numbers</h3>
        <p className="mt-6 text-white/60 max-w-2xl text-lg font-light">
          DGO has established itself as the most significant digital sports destination in Nepal. The following figures represent verified platform metrics as of 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="relative group rounded-3xl p-[1px] bg-gradient-dgo text-center"
          >
            <div className="bg-zinc-950 w-full h-full p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dgo/0 to-dgo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h4 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
              {stat.value}
            </h4>
            <p className="text-sm uppercase tracking-widest text-white/50 font-medium">
              {stat.label}
            </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
