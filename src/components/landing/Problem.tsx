"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  FileSpreadsheet,
  Columns3,
  Eraser,
  SearchX,
  GitCompareArrows,
} from "lucide-react";

const painPoints = [
  {
    icon: FileSpreadsheet,
    text: "Cada proveedor manda su Excel con un formato distinto",
  },
  {
    icon: Columns3,
    text: "Las columnas no coinciden nunca",
  },
  {
    icon: Eraser,
    text: "Tenés que limpiar y ordenar todo manualmente",
  },
  {
    icon: SearchX,
    text: "Buscar un precio específico lleva demasiado tiempo",
  },
  {
    icon: GitCompareArrows,
    text: "Comparar entre proveedores es lento y propenso a errores",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="section-spacing bg-surface">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            label="El problema"
            title="Gestionar listas de precios no debería ser tan caótico"
            description="Si trabajás con múltiples proveedores, seguro te pasa:"
          />
        </FadeIn>

        <div className="grid gap-3 sm:gap-4 max-w-2xl mx-auto">
          {painPoints.map((point, index) => (
            <FadeIn key={index} delay={0.1 + index * 0.08}>
              <div className="flex items-center gap-3 bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
                  <point.icon className="w-[18px] h-[18px] text-red-500" />
                </div>
                <p className="text-foreground font-medium text-sm sm:text-base leading-snug">
                  {point.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
