"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/lib/basePath";

export function Investment() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black">

      {/* Full-bleed football background */}
      <div className="absolute inset-0">
        <Image src={assetPath("/1.png")} alt="Stadium" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#c026d3]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-[#ea580c]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

        {/* LEFT — The Typography Statement */}
        <div className="flex flex-col justify-center">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="text-dgo font-mono text-sm">05</span>
            <div className="h-px flex-1 max-w-[60px] bg-dgo opacity-60" />
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/40">Partnership Overview</h2>
          </motion.div>

          {/* Campa logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-10"
          >
            <Image src={assetPath("/campa-cola-logo-hd.webp")} alt="Campa Cola" width={200} height={80} className="object-contain" />
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-white/50 uppercase tracking-[0.25em] text-sm font-medium mb-3">Presents</p>
            <h3 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-[0.95] mb-10 text-white">
              SAFF Women's<br />
              <span className="text-gradient-dgo">Championship</span><br />
              2026
            </h3>
          </motion.div>

          {/* Descriptor pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {["Full Tournament Coverage", "6 Deliverables", "May 25 – June 5, 2026", "Exclusive Category"].map((t) => (
              <span key={t} className="text-xs px-4 py-2 rounded-full border border-white/10 text-white/50 bg-white/5 uppercase tracking-wider">
                {t}
              </span>
            ))}
          </motion.div>

          {/* Strategic copy */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/50 text-base font-light leading-relaxed max-w-lg border-l-2 border-dgo pl-6"
          >
            Nepal's most engaged digital sports audience, delivered to Campa Cola through every single live match. This is the moment to own the conversation.
          </motion.p>
        </div>

        {/* RIGHT — The Price Statement */}
        <div className="flex flex-col items-center lg:items-end justify-center pt-16 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-6 font-medium">Total Investment</p>

            {/* The number */}
            <div className="relative">
              {/* glow behind the number */}
              <div className="absolute inset-0 blur-[80px] bg-gradient-dgo opacity-30 rounded-full scale-150 pointer-events-none" />
              <p className="relative text-[120px] sm:text-[160px] lg:text-[200px] xl:text-[240px] font-black text-white leading-none tracking-tighter drop-shadow-[0_0_60px_rgba(192,38,211,0.5)]">
                40
              </p>
            </div>

            <div className="-mt-4 lg:-mt-8">
              <p className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-gradient-dgo tracking-tighter uppercase leading-tight">
                Lakhs
              </p>
              <p className="text-2xl sm:text-3xl text-white/30 font-bold tracking-wider mt-2 uppercase">
                Nepalese Rupees
              </p>
            </div>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-px bg-gradient-dgo my-10 origin-right w-full"
            />

            {/* DGO Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <Image src={assetPath("/dgo-logo-new.png")} alt="DGO" width={100} height={40} className="object-contain opacity-60" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
