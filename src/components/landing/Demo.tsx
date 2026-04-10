"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { Play } from "lucide-react";

export default function Demo() {
  return (
    <section id="demo" className="section-spacing bg-white">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            label="Demo"
            title="Mirá cómo funciona en menos de 1 minuto"
            description="Upload de Excel → Mapping de columnas → Búsqueda de producto"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-secondary-dark shadow-xl aspect-video group cursor-pointer">
              {/* Video placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark flex items-center justify-center">
                {/* Decorative grid lines */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }} />
                </div>

                {/* Play button */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5" fill="white" />
                  </div>
                  <span className="text-white/60 text-sm font-medium tracking-wide">
                    Ver demo
                  </span>
                </div>
              </div>

              {/* Uncomment and replace src to embed your actual video:
              <video
                className="w-full h-full object-cover"
                poster="/demo-poster.jpg"
                controls
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video>
              */}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
