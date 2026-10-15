import React from 'react';
import { motion } from 'motion/react';
import { DOCTOR_DATA, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../data/content';

export const Hero: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.hero);

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#E9EDF2] via-[#F6F8FA] to-[#FAFBFD] border-b border-[#D5DBE2]"
    >
      {/* Linha Principal do Hero (Largura Total: O desenho da direita fica 100% alinhado com a parede do site à direita) */}
      <div className="w-full relative">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[580px] lg:min-h-[640px] xl:min-h-[680px]">
          
          {/* LADO ESQUERDO: ESCULTURA METÁLICA 3D + TIPOGRAFIA PRINCIPAL */}
          <div className="w-full lg:w-[48%] xl:w-[46%] 2xl:w-[44%] relative z-10 flex flex-col justify-center px-6 sm:px-12 lg:pl-12 xl:pl-16 2xl:pl-20 py-12 lg:py-16">
            
            {/* Escultura 3D Vetorial: Implante Cromado e Ondas Metálicas Líquidas com Acento Rubí (Alinhada na borda esquerda / parede esquerda do site) */}
            <div className="absolute left-0 top-0 bottom-0 w-36 sm:w-44 pointer-events-none opacity-90 hidden sm:block overflow-hidden">
              <svg
                viewBox="0 0 200 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Gradiente Cromo Polido */}
                  <linearGradient id="chromeRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="20%" stopColor="#E5E9EE" />
                    <stop offset="45%" stopColor="#9AA5B4" />
                    <stop offset="70%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#6C7685" />
                  </linearGradient>

                  {/* Gradiente Vinho Burgundy Profundo da Curva Superior */}
                  <linearGradient id="rubyRibbon" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#3E060D" />
                    <stop offset="35%" stopColor="#7A1F2B" />
                    <stop offset="70%" stopColor="#A82537" />
                    <stop offset="100%" stopColor="#540C15" />
                  </linearGradient>

                  {/* Sombra da Escultura */}
                  <filter id="ribbonShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="3" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.18" />
                  </filter>
                </defs>

                {/* Onda Escultural Vermelho Vinho no Topo da Curva */}
                <path
                  d="M -30 20 C 60 50 140 120 110 240 C 90 320 10 380 -20 400 Z"
                  fill="url(#rubyRibbon)"
                  filter="url(#ribbonShadow)"
                />

                {/* Fita Cromada Líquida 3D Sobreposta */}
                <path
                  d="M -40 80 C 80 130 150 220 120 360 C 90 500 -10 580 -40 650 Z"
                  fill="url(#chromeRibbon)"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  filter="url(#ribbonShadow)"
                  opacity="0.95"
                />

                {/* Espiras do Implante Dentário Titânio na Lateral Esquerda */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M -20 ${260 + i * 26} C 35 ${255 + i * 26} 75 ${270 + i * 26} 45 ${280 + i * 26} C 20 ${285 + i * 26} -20 ${278 + i * 26} -20 ${278 + i * 26} Z`}
                    fill="url(#chromeRibbon)"
                    stroke="#FFFFFF"
                    strokeWidth="0.8"
                    opacity="0.85"
                  />
                ))}

                {/* Brilho Especular Superior */}
                <path
                  d="M 10 90 C 70 140 120 220 95 330"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </svg>
            </div>

            {/* Conteúdo de Texto Centralizado no Layout */}
            <div className="relative z-10 max-w-xl sm:pl-16 lg:pl-20">
              {/* Rótulo Superior: O D O N T O L O G I A   C O M */}
              <div className="text-xs sm:text-sm font-sans font-semibold tracking-[0.32em] text-[#4A4D52] uppercase mb-3">
                O D O N T O L O G I A &nbsp; C O M
              </div>

              {/* Título Principal Exato de 5407.jpeg */}
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-serif leading-[1.08] tracking-tight">
                <span className="block text-[#7A1F2B] italic font-serif">
                  Segurança,
                </span>
                <span className="block text-[#1A1A1A] font-serif font-bold">
                  Ética e
                </span>
                <span className="block text-[#7A1F2B] font-serif font-bold">
                  Confiança
                </span>
              </h1>

              {/* Linha Fina Decorativa Vermelho Vinho com Detalhe Sutil */}
              <div className="mt-4 mb-5 flex items-center gap-2 w-44">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#7A1F2B] to-[#CBD5E1]" />
                <div className="w-1.5 h-1.5 rotate-45 bg-[#7A1F2B]" />
              </div>

              {/* Parágrafo Descritivo Exato */}
              <p className="text-sm sm:text-base text-[#333333] font-sans font-normal leading-relaxed max-w-lg">
                Mais de 27 anos dedicados à odontologia em São Bernardo do Campo,
                unindo experiência, tecnologia e uma abordagem ética e personalizada
                para oferecer tratamentos com excelência e previsibilidade.
              </p>
            </div>
          </div>

          {/* LADO DIREITO: FOTO DO DR. CARLOS EM CONSULTÓRIO COM OS LIVROS (5090.jpg) 
              TOTALMENTE ALINHADA COM A PAREDE DIREITA DO SITE (SEM BORDAS OU GAPS) */}
          <div className="w-full lg:w-[52%] xl:w-[54%] 2xl:w-[56%] relative flex items-end justify-end overflow-hidden">
            <div className="relative w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[640px] xl:min-h-[680px]">
              <img
                src="/images/5090.jpg"
                alt="Dr. Carlos Eduardo Carvalho Vilela sentado em consultório com acervo científico e livros de Implantodontia, Odontologia Legal e Reabilitação Oral"
                className="w-full h-full object-cover object-[center_top] lg:object-right-top"
                loading="eager"
              />

              {/* Efeito de Fusão Gradual à Esquerda para Integrar Suavemente com o Fundo Prata/Branco */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-48 bg-gradient-to-r from-[#E9EDF2] sm:from-[#F6F8FA] via-[#F6F8FA]/60 to-transparent pointer-events-none" />

              {/* Brilho Sutil Superior e Inferior */}
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#EBEEF2]/60 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#E4E8ED] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* FAIXA INFERIOR COM OS TRÊS ÍCONES REDONDOS EM VERMELHO VINHO (Idêntica a 5407.jpeg) */}
        <div className="relative z-20 border-t border-[#D5DBE1] bg-gradient-to-r from-[#EBEEF2] via-[#F4F6F8] to-[#EBEEF2] py-5 px-6 sm:px-10 lg:px-14">
          {/* Linha decorativa fina superior */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent" />

          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
            
            {/* PILAR 1: EXPERIÊNCIA CLÍNICA */}
            <div className="flex items-center gap-4">
              {/* Ícone Redondo Rubí: Dente com Espiras de Implante */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#941929] via-[#7A1F2B] to-[#4F0C15] border-2 border-white shadow-[0_4px_12px_rgba(122,31,43,0.35)] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-white">
                  {/* Contorno do Dente com Rosca de Implante Interna */}
                  <path
                    d="M 18 6 C 22 6 27 8 28 13 C 29 18 27 24 24 28 C 22 30 20 28 18 30 C 16 28 14 30 12 28 C 9 24 7 18 8 13 C 9 8 14 6 18 6 Z"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Espiras Internas */}
                  <line x1="14" y1="15" x2="22" y2="15" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="15" y1="19" x2="21" y2="19" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="16" y1="23" x2="20" y2="23" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>

              {/* Textos */}
              <div className="text-left">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#7A1F2B] tracking-tight leading-tight">
                  EXPERIÊNCIA CLÍNICA
                </h3>
                <p className="font-sans text-[10px] sm:text-[11px] font-semibold text-[#555555] uppercase tracking-wider mt-0.5">
                  TRATAMENTOS COM <br className="hidden sm:inline" />
                  EXCELÊNCIA E PREVISIBILIDADE
                </p>
              </div>
            </div>

            {/* PILAR 2: MENTORIA PARA DENTISTAS */}
            <div className="flex items-center gap-4">
              {/* Ícone Redondo Rubí: Grupo de Dentistas / Mentoria */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#941929] via-[#7A1F2B] to-[#4F0C15] border-2 border-white shadow-[0_4px_12px_rgba(122,31,43,0.35)] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-white">
                  {/* Mentor Central */}
                  <circle cx="18" cy="12" r="3.5" stroke="#FFFFFF" strokeWidth="2" />
                  <path d="M 12 24 C 12 20.5 14.5 18 18 18 C 21.5 18 24 20.5 24 24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  {/* Dentista Esquerda */}
                  <circle cx="9" cy="14" r="2.8" stroke="#FFFFFF" strokeWidth="1.6" />
                  <path d="M 4 25 C 4 22 6 20 9 20" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
                  {/* Dentista Direita */}
                  <circle cx="27" cy="14" r="2.8" stroke="#FFFFFF" strokeWidth="1.6" />
                  <path d="M 32 25 C 32 22 30 20 27 20" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>

              {/* Textos */}
              <div className="text-left">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#7A1F2B] tracking-tight leading-tight">
                  MENTORIA PARA DENTISTAS
                </h3>
                <p className="font-sans text-[10px] sm:text-[11px] font-semibold text-[#555555] uppercase tracking-wider mt-0.5">
                  COMPARTILHAMENTO DE EXPERIÊNCIA <br className="hidden sm:inline" />
                  E CONHECIMENTO PRÁTICO
                </p>
              </div>
            </div>

            {/* PILAR 3: ODONTOLOGIA LEGAL E ASSISTÊNCIA TÉCNICA */}
            <div className="flex items-center gap-4">
              {/* Ícone Redondo Rubí: Balança da Justiça / Odontologia Legal */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#941929] via-[#7A1F2B] to-[#4F0C15] border-2 border-white shadow-[0_4px_12px_rgba(122,31,43,0.35)] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-white">
                  {/* Haste Central da Balança */}
                  <line x1="18" y1="7" x2="18" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="28" x2="24" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="18" cy="8" r="1.5" fill="#FFFFFF" />
                  {/* Travessão */}
                  <line x1="8" y1="12" x2="28" y2="12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  {/* Prato Esquerdo */}
                  <line x1="8" y1="12" x2="5" y2="20" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="8" y1="12" x2="11" y2="20" stroke="#FFFFFF" strokeWidth="1.5" />
                  <path d="M 4 20 C 5 23 11 23 12 20 Z" fill="#FFFFFF" opacity="0.85" />
                  {/* Prato Direito */}
                  <line x1="28" y1="12" x2="25" y2="20" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="28" y1="12" x2="31" y2="20" stroke="#FFFFFF" strokeWidth="1.5" />
                  <path d="M 24 20 C 25 23 31 23 32 20 Z" fill="#FFFFFF" opacity="0.85" />
                </svg>
              </div>

              {/* Textos */}
              <div className="text-left">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#7A1F2B] tracking-tight leading-tight">
                  ODONTOLOGIA LEGAL <br className="hidden sm:inline" />
                  E ASSISTÊNCIA TÉCNICA
                </h3>
                <p className="font-sans text-[10px] sm:text-[11px] font-semibold text-[#555555] uppercase tracking-wider mt-0.5">
                  SUPORTE TÉCNICO E CIENTÍFICO <br className="hidden sm:inline" />
                  COM ÉTICA E RESPONSABILIDADE
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
