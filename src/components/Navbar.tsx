import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { DOCTOR_DATA, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './BrandIcons';
import { CVLogo } from './CVLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <header className="sticky top-0 z-50 w-full select-none">
      {/* Barra de Navegação Superior Prata Metálica Integrada (Idêntica à Referência 5407.jpeg) */}
      <div
        className={`w-full transition-all duration-300 relative ${
          isScrolled
            ? 'bg-gradient-to-r from-[#F0F3F6]/98 via-[#FFFFFF]/98 to-[#F0F3F6]/98 backdrop-blur-md shadow-[0_6px_25px_-5px_rgba(0,0,0,0.12)] border-b border-[#D0D7DE]'
            : 'bg-gradient-to-r from-[#EBEEF2] via-[#F8FAFC] to-[#EBEEF2] border-b border-[#D5DBE1]'
        }`}
      >
        {/* Linha decorativa reflexiva superior em prata */}
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent opacity-90" />

        <div className="w-full px-4 sm:px-8 xl:px-14">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* LADO ESQUERDO DO MENU: QUEM SOU EU | MENTORIA E PERÍCIA */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a
                href="#quem-sou-eu"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#quem-sou-eu');
                }}
                className="font-serif font-bold text-xs xl:text-sm tracking-wider text-[#1A1A1A] hover:text-[#7A1F2B] transition-colors uppercase whitespace-nowrap"
              >
                QUEM SOU EU
              </a>

              {/* Divisor Vertical Prata Fino */}
              <span className="h-7 w-[1px] bg-gradient-to-b from-transparent via-[#9CA3AF] to-transparent" />

              <a
                href="#mentoria-pericia"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#mentoria-pericia');
                }}
                className="font-serif font-bold text-xs xl:text-sm tracking-wider text-[#1A1A1A] hover:text-[#7A1F2B] transition-colors uppercase text-left leading-tight whitespace-nowrap"
              >
                MENTORIA <br className="hidden xl:inline" />
                E PERÍCIA
              </a>

              {/* Divisor Vertical Prata Fino */}
              <span className="h-7 w-[1px] bg-gradient-to-b from-transparent via-[#9CA3AF] to-transparent" />
            </div>

            {/* CENTRO: EMBLEMA / LOGO CENTRALIZADO COM ARCO DESCENDENTE PERFEITO (SEM CORTAR TEXTO) */}
            <div className="relative flex flex-col items-center justify-center pt-1 z-30">
              {/* Escudo / Arco descendente em prata sólida que envelopa 100% do logo e do texto sem cortar */}
              <div className="hidden lg:block absolute -top-1 w-[380px] xl:w-[410px] h-[152px] pointer-events-none z-10">
                <svg
                  viewBox="0 0 410 152"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                >
                  <defs>
                    <linearGradient id="crestSilver" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FAFAFC" />
                      <stop offset="55%" stopColor="#F1F4F8" />
                      <stop offset="90%" stopColor="#E2E7EE" />
                      <stop offset="100%" stopColor="#D8DFE7" />
                    </linearGradient>
                    <linearGradient id="crestBorder" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#CCD3DB" />
                      <stop offset="50%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#CCD3DB" />
                    </linearGradient>
                  </defs>
                  {/* Forma do arco descendente elegante */}
                  <path
                    d="M 10 0 L 400 0 C 385 45 355 146 205 146 C 55 146 25 45 10 0 Z"
                    fill="url(#crestSilver)"
                    stroke="url(#crestBorder)"
                    strokeWidth="1.8"
                  />
                  {/* Linha decorativa fina vinho na borda inferior do arco */}
                  <path
                    d="M 85 136 C 135 148 275 148 325 136"
                    stroke="#7A1F2B"
                    strokeWidth="1.2"
                    opacity="0.4"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Logo CV Completo com Tipografia Oficial e Diamante (Fica no z-20 sobre o escudo) */}
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer flex flex-col items-center relative z-20 pt-1 pb-1"
              >
                <CVLogo size="md" showSubtitle centered />
              </a>
            </div>

            {/* LADO DIREITO DO MENU: DIFERENCIAIS | DÚVIDAS / FAQ | CONTATO | BOTÃO WHATSAPP */}
            <div className="flex items-center space-x-4 xl:space-x-6">
              {/* Links de navegação desktop */}
              <div className="hidden lg:flex items-center space-x-5 xl:space-x-6">
                {/* DIFERENCIAIS EM VERMELHO VINHO COMO NA IMAGEM 5407.jpeg */}
                <a
                  href="#diferenciais"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#diferenciais');
                  }}
                  className="font-serif font-bold text-xs xl:text-sm tracking-wider text-[#7A1F2B] hover:text-[#5C121C] transition-colors uppercase whitespace-nowrap"
                >
                  DIFERENCIAIS
                </a>

                {/* Divisor Vertical */}
                <span className="h-7 w-[1px] bg-gradient-to-b from-transparent via-[#9CA3AF] to-transparent" />

                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#faq');
                  }}
                  className="font-serif font-bold text-xs xl:text-sm tracking-wider text-[#1A1A1A] hover:text-[#7A1F2B] transition-colors uppercase whitespace-nowrap"
                >
                  DÚVIDAS / FAQ
                </a>

                {/* Divisor Vertical */}
                <span className="h-7 w-[1px] bg-gradient-to-b from-transparent via-[#9CA3AF] to-transparent" />

                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contato');
                  }}
                  className="font-serif font-bold text-xs xl:text-sm tracking-wider text-[#1A1A1A] hover:text-[#7A1F2B] transition-colors uppercase whitespace-nowrap"
                >
                  CONTATO
                </a>
              </div>

              {/* BOTÃO PRETO ARREDONDADO COM ÍCONE DE WHATSAPP BRANCO, TEXTO EM 2 LINHAS E CHEVRON */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0D0D0D] hover:bg-[#000000] text-white border border-[#444444] shadow-[0_3px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_18px_rgba(0,0,0,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                {/* Ícone WhatsApp em balão branco */}
                <div className="w-6 h-6 rounded-full bg-transparent flex items-center justify-center flex-shrink-0 text-white">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>

                {/* Texto em duas linhas exatamente como em 5407.jpeg */}
                <div className="text-left leading-tight pr-1">
                  <div className="text-[9px] sm:text-[10px] font-sans font-medium text-[#D1D5DB] tracking-wider uppercase">
                    FALAR PELO
                  </div>
                  <div className="text-xs sm:text-[13px] font-sans font-bold text-white tracking-widest uppercase">
                    WHATSAPP
                  </div>
                </div>

                {/* Chevron > Branco */}
                <ChevronRight className="w-4 h-4 text-white flex-shrink-0" />
              </a>

              {/* Botão Hambúrguer Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#1A1A1A] hover:bg-[#E2E8F0] transition-colors"
                aria-label="Abrir Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Linha decorativa inferior fina em prata metálica */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent" />
      </div>

      {/* Menu Drawer Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-[#CBD5E1] shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 py-6 space-y-3">
            <a
              href="#quem-sou-eu"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#quem-sou-eu');
              }}
              className="block py-2.5 px-3 rounded-lg text-sm font-serif font-bold text-[#1A1A1A] hover:text-[#7A1F2B] hover:bg-[#F3F4F6]"
            >
              QUEM SOU EU
            </a>
            <a
              href="#mentoria-pericia"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#mentoria-pericia');
              }}
              className="block py-2.5 px-3 rounded-lg text-sm font-serif font-bold text-[#1A1A1A] hover:text-[#7A1F2B] hover:bg-[#F3F4F6]"
            >
              MENTORIA E PERÍCIA
            </a>
            <a
              href="#diferenciais"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#diferenciais');
              }}
              className="block py-2.5 px-3 rounded-lg text-sm font-serif font-bold text-[#7A1F2B] hover:bg-[#F3F4F6]"
            >
              DIFERENCIAIS
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#faq');
              }}
              className="block py-2.5 px-3 rounded-lg text-sm font-serif font-bold text-[#1A1A1A] hover:text-[#7A1F2B] hover:bg-[#F3F4F6]"
            >
              DÚVIDAS / FAQ
            </a>
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contato');
              }}
              className="block py-2.5 px-3 rounded-lg text-sm font-serif font-bold text-[#1A1A1A] hover:text-[#7A1F2B] hover:bg-[#F3F4F6]"
            >
              CONTATO
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
