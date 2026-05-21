"use client";

import { Section } from "./ui/Section";
import { Play, Tv, Smartphone } from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/basePath";

export function About() {
  return (
    <Section className="bg-zinc-950 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-dgo font-mono text-sm">01</span>
            <h2 className="text-sm uppercase tracking-widest text-white/50">About DGO</h2>
          </div>
          
          <div className="mb-8">
            <Image src={assetPath("/dgo-logo-new.png")} alt="DGO Logo" width={120} height={48} className="object-contain" />
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Nepal's Premier <br />
            <span className="text-gradient-dgo">Digital Sports Platform</span>
          </h3>
          
          <div className="space-y-6 text-lg text-white/70 font-light">
            <p>
              DGO is Nepal's leading digital sports streaming platform. As an OTT service built for South Asian sports audiences, DGO delivers live and on-demand content across mobile, smart television, and web.
            </p>
            <p>
              Brands that partner with DGO do not merely purchase airtime — they become integrated into Nepal's sporting conversation.
            </p>
          </div>

          <blockquote className="mt-10 border-l-2 border-dgo pl-6 py-2">
            <p className="text-xl font-medium text-white/90 italic">
              "DGO is not simply a streaming application — it is a complete sports media ecosystem."
            </p>
          </blockquote>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { 
              icon: Smartphone, 
              title: "Mobile App", 
              desc: "iOS & Android native apps",
              link: "https://apps.apple.com/us/app/dgo/id1491775721",
              linkText: "Download App"
            },
            { 
              icon: Tv, 
              title: "Smart TV", 
              desc: "Living room experience",
              link: null
            },
            { 
              icon: Play, 
              title: "Web Platform", 
              desc: "Accessible everywhere",
              link: "https://watchdgo.com",
              linkText: "watchdgo.com"
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="p-[1px] rounded-2xl bg-gradient-dgo hover:scale-[1.02] transition-transform"
            >
              <div className="bg-zinc-950 w-full h-full p-8 rounded-2xl flex flex-col items-start gap-4">
              <div className="p-3 bg-dgo/20 rounded-xl text-dgo">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h4 className="text-white font-medium">{item.title}</h4>
                <p className="text-sm text-white/50 mt-1 mb-3">{item.desc}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-medium text-dgo-primary hover:text-white transition-colors border border-dgo-primary/30 hover:border-white/30 rounded-full px-3 py-1"
                  >
                    {item.linkText}
                  </a>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
