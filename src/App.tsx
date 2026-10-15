import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDoctor } from './components/AboutDoctor';
import { SpecializedFrontsSection } from './components/SpecializedFrontsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';
import { ToothAssistant } from './components/ToothAssistant';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1A1A] selection:bg-[#7A1F2B] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutDoctor />
        <SpecializedFrontsSection />
        <WhyChooseSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      {/* Dentinho Assistente Virtual no Canto Esquerdo */}
      <ToothAssistant />
      {/* Botão de WhatsApp e Voltar ao Topo no Canto Direito */}
      <FloatingElements />
    </div>
  );
}

export default App;
