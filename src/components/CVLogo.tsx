import React from 'react';

interface CVLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  centered?: boolean;
  variant?: 'emblem-only' | 'full' | 'compact';
}

export const CVLogo: React.FC<CVLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  centered = true,
  variant = 'full',
}) => {
  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-20 h-20 sm:w-22 sm:h-22',
    xl: 'w-26 h-26',
  };

  const titleSizes = {
    sm: 'text-xs font-serif font-bold text-[#111111]',
    md: 'text-sm sm:text-[15px] font-serif font-bold text-[#111111] tracking-tight whitespace-nowrap',
    lg: 'text-lg sm:text-xl font-serif font-bold text-[#111111] tracking-tight whitespace-nowrap',
    xl: 'text-2xl font-serif font-bold text-[#111111] whitespace-nowrap',
  };

  const subSizes = {
    sm: 'text-[8px] tracking-[0.16em] whitespace-nowrap',
    md: 'text-[9.5px] tracking-[0.18em] whitespace-nowrap',
    lg: 'text-xs tracking-[0.2em] whitespace-nowrap',
    xl: 'text-xs tracking-[0.24em] whitespace-nowrap',
  };

  return (
    <div
      className={`flex items-center select-none ${
        centered ? 'flex-col justify-center text-center' : 'flex-row gap-3 text-left'
      } ${className}`}
    >
      {/* Emblema 3D Medalhão Rubí & Implante Cromado Metálico */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 drop-shadow-md`}>
        <svg
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(122,31,43,0.3)]"
        >
          <defs>
            {/* Esfera / Base Rubí Degradê 3D com Brilho Profundo */}
            <radialGradient id="rubySphere" cx="38%" cy="32%" r="68%">
              <stop offset="0%" stopColor="#D9384E" />
              <stop offset="40%" stopColor="#8F1424" />
              <stop offset="78%" stopColor="#540812" />
              <stop offset="100%" stopColor="#2E0207" />
            </radialGradient>

            {/* Anel Prata Cromado Biselado */}
            <linearGradient id="chromeBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#DDE2E8" />
              <stop offset="50%" stopColor="#8A95A5" />
              <stop offset="75%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#596372" />
            </linearGradient>

            {/* Prata Titânio para o Implante */}
            <linearGradient id="titaniumImplant" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B0B7C3" />
              <stop offset="35%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#8E99A8" />
              <stop offset="100%" stopColor="#5E6877" />
            </linearGradient>

            {/* Dourado Suave de Acento */}
            <linearGradient id="goldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D6" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8B6914" />
            </linearGradient>

            {/* Sombra 3D */}
            <filter id="metalShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Anel Externo Prata Cromado */}
          <circle cx="70" cy="70" r="66" stroke="url(#chromeBevel)" strokeWidth="3.5" />
          <circle cx="70" cy="70" r="62.5" stroke="#4A0811" strokeWidth="1.2" opacity="0.6" />

          {/* Disco / Medalhão Rubí 3D */}
          <circle cx="70" cy="70" r="61" fill="url(#rubySphere)" />

          {/* Brilho Especular Superior do Medalhão */}
          <ellipse cx="68" cy="32" rx="34" ry="16" fill="white" opacity="0.18" />

          {/* Elemento de Implante Dentário em Titânio Cromado */}
          <g filter="url(#metalShadow)">
            {/* Plataforma / Conexão Protética do Implante */}
            <path
              d="M 60 32 L 80 32 L 77 40 L 63 40 Z"
              fill="url(#titaniumImplant)"
              stroke="#FFFFFF"
              strokeWidth="0.8"
            />
            {/* Colar Polido do Implante */}
            <rect x="62" y="41" width="16" height="3.5" rx="1.5" fill="url(#titaniumImplant)" />

            {/* Rosca / Espiras Anatômicas do Implante Dentário */}
            <rect x="63" y="46.5" width="14" height="3" rx="1.5" fill="url(#titaniumImplant)" stroke="#FFFFFF" strokeWidth="0.4" />
            <rect x="64" y="51.5" width="12" height="3" rx="1.5" fill="url(#titaniumImplant)" stroke="#FFFFFF" strokeWidth="0.4" />
            <rect x="65" y="56.5" width="10" height="3" rx="1.5" fill="url(#titaniumImplant)" stroke="#FFFFFF" strokeWidth="0.4" />
            <rect x="66" y="61.5" width="8" height="2.8" rx="1.4" fill="url(#titaniumImplant)" stroke="#FFFFFF" strokeWidth="0.4" />
            <rect x="67" y="66" width="6" height="2.5" rx="1.2" fill="url(#titaniumImplant)" stroke="#FFFFFF" strokeWidth="0.4" />
            {/* Ápice Arredondado do Implante */}
            <path d="M 68 70 L 72 70 L 70 75 Z" fill="url(#titaniumImplant)" />

            {/* Monograma Cromado 'C' Esculpido à Esquerda */}
            <path
              d="M 62 44 C 40 44 32 54 32 68 C 32 82 42 94 62 94 C 70 94 76 90 80 86"
              stroke="url(#chromeBevel)"
              strokeWidth="5.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Filete de Brilho no 'C' */}
            <path
              d="M 62 45.5 C 43 45.5 35 55 35 68 C 35 80 44 92 62 92"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />

            {/* Monograma 'V' Estilizado à Direita com Asa Rubí/Prata */}
            <path
              d="M 68 44 L 84 94 L 102 44"
              stroke="url(#chromeBevel)"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Asa de corte dinâmico no 'V' em Vinho e Prata */}
            <path
              d="M 84 94 L 108 38 C 102 44 92 50 84 62"
              fill="url(#rubySphere)"
              stroke="url(#chromeBevel)"
              strokeWidth="1.2"
              opacity="0.9"
            />
            {/* Brilho no 'V' */}
            <path
              d="M 70 47 L 84 91 L 99 47"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.8"
            />
          </g>

          {/* Pequeno Ponto Dourado Central de Precisão */}
          <circle cx="70" cy="18" r="2.2" fill="url(#goldSheen)" />
          <circle cx="70" cy="122" r="2.2" fill="url(#goldSheen)" />
        </svg>
      </div>

      {variant !== 'emblem-only' && (
        <div className={`mt-1 sm:mt-1.5 ${centered ? 'text-center' : 'text-left'}`}>
          <div className={titleSizes[size]}>
            Dr. Carlos Eduardo Carvalho Vilela
          </div>
          {showSubtitle && (
            <>
              <div
                className={`text-[#444444] font-sans font-semibold uppercase mt-0.5 flex items-center justify-center gap-1.5 ${subSizes[size]}`}
              >
                <span>CIRURGIÃO-DENTISTA</span>
                <span className="text-[#888888]">|</span>
                <span>CRO-SP 62.085</span>
              </div>
              {/* Diamante Vermelho Pequeno Centralizado como na Referência 5407.jpeg */}
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#7A1F2B]" />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
