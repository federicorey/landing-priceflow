"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Building2,
  Users,
  Table2,
  Receipt,
} from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Empresas con múltiples proveedores",
    description: "Que reciben listas de precios en distintos formatos y necesitan unificarlas.",
  },
  {
    icon: Users,
    title: "Equipos comerciales y de compras",
    description: "Que dedican horas a buscar y comparar precios entre planillas.",
  },
  {
    icon: Table2,
    title: "Operaciones que dependen de Excel",
    description: "Que necesitan una solución para salir del caos de las hojas de cálculo.",
  },
  {
    icon: Receipt,
    title: "Negocios que necesitan cotizar rápido",
    description: "Que pierden oportunidades por la demora en armar presupuestos.",
  },
];

export default function TargetAudience() {
  return (
    <section id="para-quien" className="section-spacing bg-white">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            label="Para quién es"
            title="Diseñado para equipos que trabajan con múltiples listas de precios"
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <FadeIn key={index} delay={0.1 + index * 0.1}>
              <div className="flex flex-col gap-3 bg-surface rounded-xl p-6 border border-border hover:border-primary/25 transition-colors duration-300 h-full">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary-light flex items-center justify-center">
                  <audience.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-base font-bold text-secondary-dark">
                  {audience.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
