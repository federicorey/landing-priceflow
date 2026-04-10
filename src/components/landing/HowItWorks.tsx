"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { Upload, Sparkles, Workflow, ArrowDownToLine } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Subís el archivo del proveedor",
    description: "Cargá el Excel tal cual lo recibís de tu proveedor, sin hacerle modificaciones previas.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "La IA analiza y normaliza",
    description: "El sistema interpreta la estructura, detecta los encabezados y estandariza los precios automáticamente.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Guardás un esquema (Opcional)",
    description: "Definí una regla para el proveedor de forma que sus futuras listas se mapeen sin intervención humana.",
  },
  {
    number: "04",
    icon: ArrowDownToLine,
    title: "Disponés de los datos",
    description: "Toda la información queda lista para buscar al instante, exportar, o ingerir por API en tu sistema.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-spacing bg-surface">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            label="Cómo funciona"
            title="De Excel desordenado a datos listos para usar en minutos"
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={0.1 + index * 0.1}>
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 group h-full flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-xs flex-shrink-0">
                    {step.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-secondary-dark leading-snug">
                    {step.title}
                  </h3>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light transition-colors duration-300">
                    <step.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <p className="text-sm text-muted leading-relaxed pt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
