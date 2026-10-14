import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDoctor } from './components/AboutDoctor';
import { ImplantsSection } from './components/ImplantsSection';
import { WhiteningSection } from './components/WhiteningSection';
import { SpecializedFrontsSection } from './components/SpecializedFrontsSection';
import { FaqSection } from './components/FaqSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1617]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutDoctor />
        <ImplantsSection />
        <WhiteningSection />
        <SpecializedFrontsSection />
        <FaqSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}

export default App;
