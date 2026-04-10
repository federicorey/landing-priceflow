"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Upload,
  Sparkles,
  Workflow,
  Database,
  Webhook,
  Mail,
} from "lucide-react";

const features = [
  {
    icon: Upload,
    text: "Subir listas de precios en cualquier formato Excel original",
  },
  {
    icon: Sparkles,
    text: "Analizar y normalizar archivos automáticamente con Inteligencia Artificial",
  },
  {
    icon: Workflow,
    text: "Definir esquemas recurrentes por proveedor para facilitar el mapeo",
  },
  {
    icon: Database,
    text: "Centralizar todos los catálogos en una sola base de datos unificada",
  },
  {
    icon: Webhook,
    text: "Exportar resultados a Excel o integrar directamente vía API a tu sistema",
  },
  {
    icon: Mail,
    text: "Enviar tus cotizaciones a tus clientes vía Email",
  },
];

export default function Solution() {
  return (
    <section id="solucion" className="section-spacing bg-white">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            label="La solución"
            title="Una sola plataforma para unificar y buscar precios"
            description="Con PriceFlow podés:"
          />
        </FadeIn>

        <div className="grid gap-3 sm:gap-4 max-w-2xl mx-auto">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={0.1 + index * 0.08}>
              <div className="flex items-center gap-3 bg-secondary-light/40 rounded-xl p-6 border border-secondary/10 hover:border-secondary/20 transition-colors duration-300">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center">
                  <feature.icon className="w-[18px] h-[18px] text-primary" />
                </div>
                <p className="text-foreground font-medium text-sm sm:text-base leading-snug">
                  {feature.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
