import React from 'react';
import { ArrowUp } from 'lucide-react';
import { DOCTOR_DATA } from '../data/content';
import { CVLogo } from './CVLogo';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'QUEM SOU EU', href: '#quem-sou-eu' },
    { label: 'MENTORIA E PERÍCIA', href: '#mentoria-pericia' },
    { label: 'DIFERENCIAIS', href: '#diferenciais' },
    { label: 'DÚVIDAS / FAQ', href: '#faq' },
    { label: 'CONTATO', href: '#contato' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F6] border-t border-[#CBD5E1] pt-14 pb-12 relative overflow-hidden">
      {/* Linha decorativa fina superior em prata e vermelho vinho */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7A1F2B] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloco Central: Logo CV e Informações da Marca */}
        <div className="flex flex-col items-center text-center mb-10">
          <CVLogo size="lg" showSubtitle centered className="mb-4" />

          <p className="font-serif text-[#1A1A1A] font-bold text-base sm:text-lg mt-2">
            Dr. Carlos Eduardo Carvalho Vilela | Cirurgião-Dentista | CRO-SP 62.085
          </p>

          <p className="text-xs text-[#6B7280] font-sans max-w-xl mt-1.5 leading-relaxed">
            Mais de 27 anos dedicados à prática cirúrgica, reabilitação oral, mentoria clínica
            para cirurgiões-dentistas e assistência técnica pericial em São Bernardo do Campo / SP.
          </p>
        </div>

        {/* Links do Menu Centralizados */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 py-5 border-y border-[#E2E8F0]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs sm:text-sm font-semibold tracking-wider text-[#333333] hover:text-[#7A1F2B] transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Detalhes de Endereço, Instagram e Voltar ao Topo */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#6B7280]">
          <div className="text-center md:text-left space-y-1">
            <p>
              <strong className="text-[#1A1A1A]">Consultório:</strong> {DOCTOR_DATA.address}
            </p>
            <p>
              Atendimento com horário estendido agendado até às 22h · WhatsApp: {DOCTOR_DATA.phoneMobile}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={DOCTOR_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#333333] hover:text-[#7A1F2B] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{DOCTOR_DATA.instagramHandle}</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-[#333333] hover:text-[#7A1F2B] hover:border-[#7A1F2B] transition-all shadow-2xs"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Linha de Direitos e Responsabilidade Técnica */}
        <div className="mt-8 pt-6 border-t border-[#E5E7EB] text-center text-[11px] text-[#9CA3AF]">
          <p>
            © {new Date().getFullYear()} Dr. Carlos Eduardo Carvalho Vilela. Todos os direitos reservados.
            Responsável Técnico: Dr. Carlos Eduardo Carvalho Vilela — CRO-SP 62.085.
          </p>
          <p className="mt-1">
            Este site tem caráter informativo e de divulgação profissional em estrita conformidade com o Código de Ética Odontológica (Resoluções CFO).
          </p>
        </div>
      </div>
    </footer>
  );
};
