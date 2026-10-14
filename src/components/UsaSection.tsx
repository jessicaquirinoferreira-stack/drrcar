import React from 'react';
import { Language } from '../types';
import { CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, Globe, Clock, Sparkles, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';

interface UsaSectionProps {
  lang: Language;
}

export const UsaSection: React.FC<UsaSectionProps> = ({ lang }) => {
  const t = CONTENT[lang].usaSection;
  const whatsappUrl = buildWhatsAppLink(t.whatsappMessage);

  const benefitIcons = [
    <HeartHandshake className="w-5 h-5 text-[#C9A227]" key="heart" />,
    <Globe className="w-5 h-5 text-[#C9A227]" key="globe" />,
    <Clock className="w-5 h-5 text-[#C9A227]" key="clock" />,
    <Shield className="w-5 h-5 text-[#C9A227]" key="shield" />,
  ];

  const regions = [
    {
      flag: '🇧🇷',
      region: lang === 'pt' ? 'Brasil (Nacional)' : 'Brazil (National)',
      detail: lang === 'pt' ? 'Todos os 26 estados + Distrito Federal e presencial em SP' : 'All 26 states + Federal District and in-person in SP',
      time: 'Horário de Brasília (BRT)',
    },
    {
      flag: '🇺🇸',
      region: lang === 'pt' ? 'Estados Unidos' : 'United States',
      detail: lang === 'pt' ? 'Comunidade brasileira nos 50 estados (FL, MA, NY, CA, TX...)' : 'Brazilian community in all 50 states (FL, MA, NY, CA, TX...)',
      time: 'EST, CST, MST, PST',
    },
    {
      flag: '🇪🇺',
      region: lang === 'pt' ? 'Europa & Reino Unido' : 'Europe & UK',
      detail: lang === 'pt' ? 'Portugal, Inglaterra, Irlanda, Alemanha, Espanha, Suíça...' : 'Portugal, UK, Ireland, Germany, Spain, Switzerland...',
      time: 'WET, CET, GMT',
    },
    {
      flag: '🌏',
      region: lang === 'pt' ? 'Canadá, Ásia & Oceania' : 'Canada, Asia & Oceania',
      detail: lang === 'pt' ? 'Brasileiros no Canadá, Japão, Austrália e outros países' : 'Brazilians in Canada, Japan, Australia and beyond',
      time: lang === 'pt' ? 'Agenda flexível adaptada' : 'Flexible adapted slots',
    },
  ];

  return (
    <section id="eua" className="py-20 lg:py-28 bg-[#0F1215] text-[#FBF9F5] relative overflow-hidden border-t border-[#C9A227]/30">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Flags & Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Global Flag Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#161B20] text-white text-xs sm:text-sm font-semibold shadow-xl mb-4 border border-[#C9A227]/50 animate-shimmer">
            <span className="text-xl">🇧🇷</span>
            <span className="text-[#C9A227] font-bold">✕</span>
            <span className="text-xl">🌎</span>
            <span className="ml-1 tracking-wide text-[#DFC56E]">{t.highlightBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#DFC56E] font-semibold mt-2.5">
            {t.tagline}
          </p>
        </div>

        {/* Master Showcase Visual: 5045.jpg fully complete and perfectly framed */}
        <div className="mb-14 max-w-5xl mx-auto">
          <div className="relative group">
            {/* Glowing gold ambient background */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C9A227]/30 via-emerald-500/20 to-[#C9A227]/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700 pointer-events-none" />

            {/* Container displaying the full 16:9 photo without cropping */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9A227]/40 bg-[#0A0C0E]">
              <img
                src={ASSETS.urls.photo5045 || ASSETS.usa}
                alt="Dra. Tatiane Vilela - Terapia Online para Brasil e Exterior"
                className="w-full aspect-video sm:aspect-[16/9] object-contain sm:object-cover object-center filter contrast-[1.02] block"
                loading="eager"
              />

              {/* Status Ribbon below the photo */}
              <div className="p-3.5 sm:p-4 bg-[#111417]/95 backdrop-blur-md border-t border-[#C9A227]/30 flex flex-wrap items-center justify-between gap-3 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="font-semibold text-white">
                    {lang === 'pt' ? 'Atendimento Online Ativo' : 'Active Online Practice'}
                  </span>
                  <span className="text-white/40 hidden sm:inline">|</span>
                  <span className="text-[#DFC56E] hidden sm:inline">
                    {lang === 'pt' ? 'Brasil & Exterior' : 'Brazil & International'}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-[11px] sm:text-xs text-white/70">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>{lang === 'pt' ? '100% Sigiloso & Criptografado' : '100% Confidential & Encrypted'}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'pt' ? 'Plataforma Telepsicologia' : 'Telehealth Platform'}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & 4 Benefit Pillars */}
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Explanatory text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-white/85 font-light leading-relaxed text-left bg-[#161B20]/60 p-6 sm:p-8 rounded-2xl border border-white/10">
            <p className="text-lg font-normal text-white">
              {t.p1}
            </p>
            <p>
              {t.p2}
            </p>
          </div>

          {/* 4 Feature cards (No payment references) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#161B20] border border-white/10 hover:border-[#C9A227]/60 transition-all shadow-sm group text-left"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2.5 rounded-xl bg-[#C9A227]/15 group-hover:bg-[#C9A227] transition-colors shrink-0">
                    {benefitIcons[idx % benefitIcons.length]}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#DFC56E] transition-colors">
                    {b.title}
                  </h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Global Coverage & Time Zones Card */}
          <div className="p-6 rounded-2xl bg-[#161B20] border border-[#C9A227]/30 space-y-4 text-left">
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#DFC56E]">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C9A227]" />
                {lang === 'pt'
                  ? 'Cobertura Global & Fusos Horários Flexíveis:'
                  : 'Global Reach & Flexible Time Zones:'}
              </span>
              <span className="text-white/60 font-mono text-[11px]">Online Segunda a Sábado</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {regions.map((reg, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#0F1215] border border-white/5 flex flex-col justify-between space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{reg.flag}</span>
                    <span className="font-bold text-white text-xs">{reg.region}</span>
                  </div>
                  <p className="text-[11px] text-white/60 font-light leading-snug">
                    {reg.detail}
                  </p>
                  <span className="text-[10px] text-[#DFC56E] font-mono font-medium">
                    {reg.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Strong Central WhatsApp CTA */}
          <div className="text-center pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-shimmer inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-sm sm:text-base font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-[#25D366]/25 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{t.cta}</span>
            </a>
            <p className="text-xs text-white/60 mt-3 font-light">
              {t.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
