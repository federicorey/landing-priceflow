"use client";

import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import Demo from "@/components/landing/Demo";
import Benefits from "@/components/landing/Benefits";
import TargetAudience from "@/components/landing/TargetAudience";
import CtaFinal from "@/components/landing/CtaFinal";
import Footer from "@/components/landing/Footer";
import LeadModal from "@/components/landing/LeadModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onCtaClick={openModal} />
      <main className="flex-1 pt-16">
        <Hero onCtaClick={openModal} />
        <Problem />
        <Solution />
        <HowItWorks />
        <Demo />
        <Benefits />
        <TargetAudience />
        <CtaFinal onCtaClick={openModal} />
      </main>
      <Footer />
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
