"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Clock,
  ShieldCheck,
  Zap,
  FolderSync,
  FileCheck,
  Webhook,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Ahorrá horas de trabajo manual",
    description:
      "Dejá de copiar y pegar entre planillas. El mapeo automático hace el trabajo por vos.",
  },
  {
    icon: ShieldCheck,
    title: "Reducí errores en precios",
    description:
      "Un formato estándar elimina las inconsistencias que generan problemas en cotizaciones.",
  },
  {
    icon: Zap,
    title: "Accedé a la información en segundos",
    description:
      "Buscá por producto con lenguaje natural y encontrá resultados al instante.",
  },
  {
    icon: FolderSync,
    title: "Centralizá todos tus proveedores",
    description:
      "Toda la información en un solo lugar, organizada y actualizada.",
  },
  {
    icon: FileCheck,
    title: "Prepará cotizaciones más rápido",
    description:
      "Con precios unificados, armar presupuestos es mucho más ágil.",
  },
  {
    icon: Webhook,
    title: "Fácil integración vía API",
    description:
      "Conectá PriceFlow con tu ERP o sistema de gestión actual para mantener todo siempre sincronizado.",
  },
];

function BenefitCard({ benefit }: { benefit: (typeof benefits)[number] }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
        <benefit.icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-base font-bold text-secondary-dark">
        {benefit.title}
      </h3>
      <p className="text-muted leading-relaxed text-sm">
        {benefit.description}
      </p>
    </div>
  );
}

export default function Benefits() {
  return (
    <section id="beneficios" className="section-spacing bg-surface">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            label="Beneficios"
            title="Menos tiempo procesando datos, más tiempo vendiendo"
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={0.1 + index * 0.08}>
              <BenefitCard benefit={benefit} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
