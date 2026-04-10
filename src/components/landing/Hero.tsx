"use client";

import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight, Package } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden hero-gradient min-h-[70vh] lg:min-h-[min(90vh,800px)] flex items-center"
    >
      <div className="section-container relative z-10 py-16 sm:py-20 md:py-24 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_minmax(0,480px)] gap-10 lg:gap-14 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <FadeIn delay={0.1}>
              <span className="inline-flex items-center gap-2 bg-primary-light text-primary font-semibold text-xs sm:text-sm px-3.5 py-1.5 rounded-full mb-5">
                <Package className="w-4 h-4" />
                Plataforma para equipos de compras
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-extrabold text-secondary-dark leading-[1.15] mb-5">
                Buscá precios de todos tus proveedores{" "}
                <span className="text-primary">en segundos</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-lg font-medium">
                Subí cualquier Excel, normalizalo automáticamente y encontrá
                productos sin perder tiempo entre archivos desordenados.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <button
                id="hero-cta"
                onClick={onCtaClick}
                className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 cursor-pointer"
              >
                Solicitar acceso
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </FadeIn>
          </div>

          {/* Right: Visual element — Mini Table */}
          <FadeIn delay={0.4} direction="right">
            <div className="hidden lg:block relative pr-2">
              <div className="bg-white rounded-2xl shadow-xl border border-border/80 p-5 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs whitespace-nowrap">
                    <thead>
                      <tr className="text-muted border-b border-border">
                        <th className="font-semibold pb-3 pr-4">Proveedor</th>
                        <th className="font-semibold pb-3 pr-4">Código</th>
                        <th className="font-semibold pb-3 pr-4">Descripción</th>
                        <th className="font-semibold pb-3">Precio</th>
                      </tr>
                    </thead>
                    <tbody className="text-secondary-dark divide-y divide-border/50">
                      <tr>
                        <td className="py-3 pr-4">
                          <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                            Ferretería Sur
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-muted font-mono">TU-12</td>
                        <td className="py-3 pr-4 font-medium">Tubo PVC 1/2" x 6m</td>
                        <td className="py-3 font-semibold">$4.500</td>
                      </tr>
                      <tr className="bg-surface/50">
                        <td className="py-3 pr-4">
                          <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium bg-purple-50 text-purple-700 border border-purple-100">
                            Mayorista ABC
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-muted font-mono">CEM-50</td>
                        <td className="py-3 pr-4 font-medium">Cemento Loma Negra 50kg</td>
                        <td className="py-3 font-semibold text-primary">$9.200</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">
                          <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
                            Corralón Norte
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-muted font-mono">LAD-H</td>
                        <td className="py-3 pr-4 font-medium">Ladrillo Hueco 18x18x33</td>
                        <td className="py-3 font-semibold">$380</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-3 right-2 bg-primary text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg">
                ✓ Datos normalizados
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
