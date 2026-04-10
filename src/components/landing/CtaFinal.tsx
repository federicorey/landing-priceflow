"use client";

import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

interface CtaFinalProps {
  onCtaClick: () => void;
}

export default function CtaFinal({ onCtaClick }: CtaFinalProps) {
  return (
    <section id="cta-final" className="section-spacing bg-secondary-dark relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="section-container text-center relative z-10">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-snug mb-5">
            Probalo con tus propios datos
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-base sm:text-lg text-white/65 leading-relaxed mb-8 max-w-md mx-auto">
            Solicitá acceso y empezá a trabajar con tus listas de precios de
            forma más eficiente.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <button
            id="cta-final-button"
            onClick={onCtaClick}
            className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
          >
            Solicitar acceso
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
