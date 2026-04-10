import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PriceFlow — Unificá y buscá precios de proveedores en segundos",
  description:
    "Subí cualquier Excel de proveedor, normalizalo automáticamente y encontrá productos sin perder tiempo entre archivos desordenados. La plataforma para equipos de compras y comerciales.",
  keywords: [
    "gestión de precios",
    "listas de precios proveedores",
    "comparar precios construcción",
    "normalizar Excel",
    "búsqueda de productos",
    "SaaS construcción",
  ],
  openGraph: {
    title: "PriceFlow — Unificá y buscá precios de proveedores en segundos",
    description:
      "Subí cualquier Excel de proveedor, normalizalo automáticamente y encontrá productos sin perder tiempo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
