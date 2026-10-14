import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { DOCTOR_DATA, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../data/content';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre o Dr.', href: '#sobre' },
  { label: 'Implantes', href: '#implantes' },
  { label: 'Clareamento', href: '#clareamento' },
  { label: 'Mentoria & Perícia', href: '#atuacao' },
  { label: 'Dúvidas / FAQ', href: '#faq' },
  { label: 'Diferenciais', href: '#beneficios' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (y / docHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8DFD1] shadow-xs py-3.5 transition-all">
      {/* Top Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F4EFE6] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#8B0000] via-[#A52A2A] to-[#C59B6D] transition-transform duration-150 origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Logo & Title with CRO */}
        <a
          href="#inicio"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group"
          title={`${DOCTOR_DATA.fullName} · ${DOCTOR_DATA.cro}`}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border border-[#E8DFD1] shadow-sm flex items-center justify-center p-0.5 overflow-hidden shrink-0 group-hover:border-[#8B0000] transition-colors">
            <img
              src={DOCTOR_DATA.officialLogo}
              alt="Logo Dr. Carlos Vilela"
              className="w-full h-full object-contain scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#590009] group-hover:text-[#8B0000] transition-colors leading-none">
              Dr. Carlos Vilela
            </span>
            <span className="text-[10px] font-semibold text-[#8B0000] tracking-wide mt-1">
              {DOCTOR_DATA.cro} · Implantodontia & Laser
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Navegação Principal"
          className="hidden xl:flex items-center gap-5 text-[13px] font-medium"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#3A2E2F] hover:text-[#8B0000] py-1 relative whitespace-nowrap shrink-0 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#8B0000] after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Official Social Icons + Primary CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={DOCTOR_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram oficial @dr.carlosecvilela"
            title="Instagram @dr.carlosecvilela"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#590009] bg-[#FAF8F5] hover:bg-[#F4EFE6] border border-[#E8DFD1] transition-all duration-200 hover:scale-105"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp oficial do Dr. Carlos Vilela"
            title="Conversar no WhatsApp"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#15803D] bg-[#FAF8F5] hover:bg-[#F4EFE6] border border-[#E8DFD1] transition-all duration-200 hover:scale-105"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#8B0000] hover:bg-[#73000A] shadow-xs hover:shadow-md transition-all duration-200 hover:scale-[1.02] whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Agendar Consulta</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="xl:hidden p-2 rounded-lg text-[#590009] hover:bg-[#F4EFE6] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E8DFD1] shadow-xl px-4 pt-3 pb-6 mt-3">
          <p className="text-xs text-[#73000A] font-semibold mb-3 pb-2 border-b border-[#E8DFD1]">
            {DOCTOR_DATA.fullName} · {DOCTOR_DATA.cro} · 27 anos de atuação clínica
          </p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#2A2021] hover:bg-[#FAF8F5] hover:text-[#8B0000] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-[#E8DFD1]">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-[#8B0000] hover:bg-[#73000A] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Agendar Avaliação no WhatsApp</span>
            </a>
            <a
              href={DOCTOR_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#590009] border border-[#E8DFD1] bg-[#FAF8F5] hover:bg-[#F4EFE6] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Siga {DOCTOR_DATA.instagramHandle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
