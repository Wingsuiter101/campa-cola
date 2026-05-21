"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

const deliverables = [
  {
    id: "01",
    title: "Title Naming Rights",
    desc: "Campa Cola's name precedes the tournament title across all live broadcast mentions, on-screen graphics, social posts, and promotional materials.",
    tags: ["Broadcast", "On-Screen Graphics", "Social Media"]
  },
  {
    id: "02",
    title: "Permanent Top-Left Logo",
    desc: "The Campa Cola logo will be permanently positioned in the top-left corner of the broadcast frame for the entire duration of all live match telecasts — the highest-value real estate in live sports broadcasting.",
    tags: ["Live Broadcast", "Full Match Duration"]
  },
  {
    id: "03",
    title: "50% Commercial Inventory",
    desc: "Exclusive access to 50% of all commercial inventory: Aston lower-third graphics, L-Shape banners, and full TVC spots in all commercial breaks.",
    tags: ["TVC Spots", "Aston Placement", "L-Shape Banner"]
  },
  {
    id: "04",
    title: "Split-Screen TVC",
    desc: "During match interruptions (VAR, injuries, halftime), Campa Cola's TVC runs split-screen alongside live footage. Exclusively reserved for the Title Sponsor.",
    tags: ["Split-Screen TVC", "Title Sponsor Exclusive"]
  },
  {
    id: "05",
    title: "In-App Platform Advertising",
    desc: "Featured across three distinct placements within the DGO application, reaching over 250,000 monthly active users directly on their devices.",
    tags: ["DGO App", "3 Placement Spots", "250K+ Users"]
  },
  {
    id: "06",
    title: "Co-Branded Social Media",
    desc: "Co-branded social media content featuring Campa Cola's branding throughout the tournament — match previews, live score updates, goal highlights.",
    tags: ["Instagram", "Facebook", "YouTube", "TikTok"]
  }
];

export function Deliverables() {
  return (
    <Section className="bg-black border-t border-white/5 py-32 relative">
      <div className="flex flex-col lg:flex-row gap-20 items-start w-full max-w-7xl mx-auto">
        
        {/* Sticky Left Column */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-dgo font-mono text-sm">04</span>
            <h2 className="text-sm uppercase tracking-widest text-white/50">Sponsorship Package</h2>
          </div>
          <h3 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter leading-tight">
            Title Sponsor <br />
            <span className="text-gradient-dgo">Deliverables</span>
          </h3>
          <p className="text-white/60 text-lg font-light mb-8">
            As the exclusive Title Sponsor of DGO's SAFF Women's Championship 2026 broadcast, Campa Cola receives the most comprehensive brand integration available.
          </p>
          <div className="hidden lg:flex items-center gap-3 text-sm text-white/40 uppercase tracking-widest">
            <motion.div 
              animate={{ y: [0, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-px h-8 bg-gradient-dgo"
            />
            Scroll to explore
          </div>
        </div>

        {/* Scrolling Right Column */}
        <div className="lg:w-2/3 flex flex-col gap-32 pt-10 lg:pt-0">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Massive Background Number */}
              <div className="absolute -left-4 md:-left-12 -top-12 md:-top-20 text-[120px] md:text-[180px] font-bold text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-700 select-none pointer-events-none tracking-tighter">
                {item.id}
              </div>
              
              {/* Content */}
              <div className="relative z-10 pl-6 md:pl-10 border-l-2 border-white/10 group-hover:border-dgo transition-colors duration-500 py-2">
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xl md:text-2xl text-white/70 font-light mb-8 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="text-sm px-5 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </Section>
  );
}
