import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { DOCTOR_DATA, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../data/content';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';

export const FloatingElements: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none select-none">
      {/* Botão Voltar ao Topo */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao início da página"
          className="pointer-events-auto w-10 h-10 rounded-full bg-white border border-[#CBD5E1] text-[#1A1A1A] hover:text-white hover:bg-[#7A1F2B] hover:border-[#7A1F2B] shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Botão Oficial Flutuante do Instagram do Dr. Carlos Vilela (Posicionado em cima do WhatsApp) */}
      <a
        href={DOCTOR_DATA.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Seguir Dr. Carlos Vilela no Instagram @dr.carlosecvilela"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white text-xs font-semibold tracking-wider uppercase shadow-[0_4px_16px_rgba(225,48,108,0.35)] hover:shadow-[0_6px_22px_rgba(225,48,108,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/30"
      >
        <InstagramIcon className="w-4 h-4 text-white" />
        <span className="hidden sm:inline font-semibold">
          Instagram Oficial
        </span>
      </a>

      {/* Botão Oficial Flutuante de WhatsApp do Dr. Carlos Vilela */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Dr. Carlos Vilela no WhatsApp"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#000000] text-white text-xs font-semibold tracking-wider uppercase shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 border border-[#333333]"
      >
        <WhatsAppIcon className="w-5 h-5 text-white" />
        <span className="hidden sm:inline font-semibold">
          Falar pelo WhatsApp
        </span>
      </a>
    </div>
  );
};
