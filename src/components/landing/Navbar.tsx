"use client";

import { Package } from "lucide-react";

interface NavbarProps {
  onCtaClick: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="section-container h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white">
            <Package className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl text-secondary-dark tracking-tight">
            PriceFlow
          </span>
        </div>
        
        <button
          onClick={onCtaClick}
          className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-5 py-2 rounded-full transition-colors duration-300"
        >
          Solicitar acceso
        </button>
      </div>
    </header>
  );
}
