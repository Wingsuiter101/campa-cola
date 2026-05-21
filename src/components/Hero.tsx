"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/basePath";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black px-6">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <Image src={assetPath("/1.png")} alt="Stadium Atmosphere" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      </div>

      {/* Background abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c026d3]/30 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#ea580c]/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="z-10 flex flex-col items-center text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-white/70">
            Confidential Sponsorship Proposal
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 flex items-center justify-center gap-6"
        >
          <Image src={assetPath("/saff-png.png")} alt="SAFF Logo" width={220} height={220} className="object-contain drop-shadow-2xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8"
        >
          <span className="block text-white">SAFF Women's</span>
          <span className="block text-gradient-dgo">Championship 2026</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-2xl flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <span>Presented exclusively to</span>
          <Image src={assetPath("/campa-cola-logo-hd.webp")} alt="Campa Cola" width={120} height={48} className="object-contain" />
          <span>by</span>
          <Image src={assetPath("/dgo-logo-new.png")} alt="DGO" width={80} height={32} className="object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-xs uppercase tracking-widest text-white/40">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
