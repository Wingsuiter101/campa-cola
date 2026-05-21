import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Stats } from "@/components/Stats";
import { Deliverables } from "@/components/Deliverables";
import { Investment } from "@/components/Investment";
import { Tournament } from "@/components/Tournament";
import { Schedule } from "@/components/Schedule";
import { Viewership } from "@/components/Viewership";
import Image from "next/image";
import { assetPath } from "@/lib/basePath";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-black">
      <Hero />
      <About />
      <Experience />
      <Stats />
      <Deliverables />
      <Investment />
      <Tournament />
      <Schedule />
      <Viewership />
      
      <footer className="bg-black border-t border-white/10 py-12 flex flex-col items-center text-center">
        <div className="mb-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
          <Image src={assetPath("/dgo-logo-new.png")} alt="DGO Logo" width={80} height={32} className="object-contain" />
        </div>
        <p className="text-white/40 text-sm mb-2">
          This document is strictly confidential and intended solely for the addressee.
        </p>
        <p className="text-white/30 text-xs">
          © 2026 DGO. All figures are current as of May 2026.
        </p>
      </footer>
    </main>
  );
}
