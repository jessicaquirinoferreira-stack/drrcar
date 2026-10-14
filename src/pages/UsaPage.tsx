import React from 'react';
import { Language } from '../types';
import { CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, Globe, Clock, ShieldCheck, CheckCircle2, Heart, Star, Shield } from 'lucide-react';

interface UsaPageProps {
  lang: Language;
  onBackToHome: () => void;
}

export const UsaPage: React.FC<UsaPageProps> = ({ lang, onBackToHome }) => {
  const t = CONTENT[lang].usaSection;
  const whatsappUrl = buildWhatsAppLink(t.whatsappMessage);

  const globalRegions = [
    {
      flag: '🇧🇷',
      title: lang === 'pt' ? 'Todo o Brasil' : 'All of Brazil',
      desc: lang === 'pt' ? 'Atendimento presencial em São Bernardo do Campo e online para os 26 estados + DF.' : 'In-person care in São Bernardo do Campo and online across all 26 Brazilian states + DF.',
    },
    {
      flag: '🇺🇸',
      title: lang === 'pt' ? 'Estados Unidos (50 Estados)' : 'United States (All 50 States)',
      desc: lang === 'pt' ? 'Flórida, Massachusetts, Califórnia, Nova York, Texas, Geórgia, Nova Jersey e todo o país.' : 'Florida, Massachusetts, California, New York, Texas, Georgia, New Jersey and nationwide.',
    },
    {
      flag: '🇪🇺',
      title: lang === 'pt' ? 'Europa & Reino Unido' : 'Europe & United Kingdom',
      desc: lang === 'pt' ? 'Portugal, Inglaterra, Irlanda, Espanha, Alemanha, Itália, França, Suíça e outros países.' : 'Portugal, England, Ireland, Spain, Germany, Italy, France, Switzerland and beyond.',
    },
    {
      flag: '🌏',
      title: lang === 'pt' ? 'Canadá, Japão & Oceania' : 'Canada, Japan & Oceania',
      desc: lang === 'pt' ? 'Horários flexíveis adaptados para expatriados no Canadá, Japão, Austrália e outros continentes.' : 'Flexible time slots adapted for expats in Canada, Japan, Australia and other continents.',
    },
  ];

  const timezones = [
    { zone: lang === 'pt' ? 'Horário de Brasília (BRT)' : 'Brasília Time (BRT)', ex: 'Brasil (São Paulo, Rio, Brasília)' },
    { zone: 'EST (Eastern Time)', ex: 'New York, Miami, Boston, Atlanta' },
    { zone: 'CST (Central Time)', ex: 'Chicago, Dallas, Houston' },
    { zone: 'MST / PST (Pacific / Mountain)', ex: 'Los Angeles, San Francisco, Seattle, Denver' },
    { zone: 'WET / GMT / CET', ex: 'Lisboa, Londres, Dublin, Berlim, Paris' },
  ];

  return (
    <div className="py-12 bg-[#FBF9F5] text-[#161B20] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="text-xs sm:text-sm font-semibold text-[#8C631A] hover:underline flex items-center gap-1 cursor-pointer"
          >
            ← {lang === 'pt' ? 'Voltar para o início' : 'Back to home'}
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl">🇧🇷</span>
            <span className="text-xl">🌎</span>
          </div>
        </div>

        {/* Hero Banner with complete 5045 photo */}
        <div className="bg-[#111417] text-white rounded-3xl p-6 sm:p-10 lg:p-12 mb-16 relative overflow-hidden border border-[#C9A227]/30 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/20 text-[#DFC56E] border border-[#C9A227]/40 text-xs font-medium">
              <span>🇧🇷</span>
              <span>{t.highlightBadge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              {t.p1}
            </p>
          </div>

          {/* Master 16:9 photo displayed completely */}
          <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#C9A227]/40 shadow-2xl bg-[#0A0C0E] mb-8">
            <img
              src={ASSETS.urls.photo5045 || ASSETS.usa}
              alt="Dra. Tatiane Vilela - Terapia Online Brasil e Exterior"
              className="w-full aspect-video sm:aspect-[16/9] object-contain sm:object-cover block"
            />
            <div className="p-3 sm:p-4 bg-[#161B20] flex flex-wrap items-center justify-between gap-3 text-xs text-white/80 border-t border-white/10">
              <span className="flex items-center gap-2 text-[#DFC56E] font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                {lang === 'pt' ? 'Atendimento no seu fuso horário (Brasil e Exterior)' : 'Scheduled in your local time zone (Brazil & Worldwide)'}
              </span>
              <span className="text-white/60 text-[11px]">
                {lang === 'pt' ? 'CRP 06/98605-SP · Sigilo Absoluto' : 'Licensed CRP 06/98605-SP · Full Confidentiality'}
              </span>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{t.cta}</span>
            </a>
          </div>
        </div>

        {/* Why mother tongue matters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#475467] leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111417]">
              {lang === 'pt' ? 'Por que fazer psicoterapia na sua língua materna?' : 'Why engage in therapy in your native language?'}
            </h2>
            <p>
              {lang === 'pt'
                ? 'Mesmo dominando outro idioma para trabalhar ou socializar, quando falamos de dores emocionais profundas, memórias de infância, dinâmicas de casal ou vulnerabilidades íntimas, a língua materna é o idioma do coração.'
                : 'Even when fluent in a second language for career or daily life, when processing deep emotional pain, childhood memories, couple struggles, or intimate vulnerabilities, our mother tongue is the language of the heart.'}
            </p>
            <p>
              {lang === 'pt'
                ? 'Com a Dra. Tatiane Vilela, você não precisa traduzir seus sentimentos nem explicar o contexto sociocultural brasileiro: ela compreende a fundo a realidade de quem mora no Brasil ou vive no exterior, bem como as fases da adaptação e os desafios da distância.'
                : 'With Dr. Tatiane Vilela, you never have to translate your feelings or explain Brazilian cultural nuances: she thoroughly understands the reality of the diaspora and the emotional phases of adapting to life abroad.'}
            </p>

            {/* Global regions coverage card */}
            <div className="p-6 rounded-2xl bg-white border border-[#EDE6DC] shadow-xs space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111417] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C9A227]" />
                <span>{lang === 'pt' ? 'Atendimento sem fronteiras geográficas:' : 'Serving clients across global regions:'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#525E6A]">
                {globalRegions.map((reg, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#FBF9F5] border border-[#EDE6DC] space-y-1">
                    <div className="flex items-center gap-2 font-bold text-[#111417]">
                      <span className="text-base">{reg.flag}</span>
                      <span>{reg.title}</span>
                    </div>
                    <p className="text-[11px] text-[#525E6A] font-light leading-snug">
                      {reg.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Time zones & Direct WhatsApp Box (No payment cards) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Time zone card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EDE6DC] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#8C631A]">
                <Clock className="w-5 h-5 text-[#C9A227]" />
                <h3 className="font-serif font-bold text-lg text-[#111417]">
                  {lang === 'pt' ? 'Fusos Horários Cobertos' : 'Covered Time Zones'}
                </h3>
              </div>
              <p className="text-xs text-[#525E6A]">
                {lang === 'pt'
                  ? 'Flexibilidade total de agendamento compatível com a sua rotina de trabalho onde você estiver.'
                  : 'Total scheduling flexibility tailored to your work and personal routine wherever you reside.'}
              </p>
              <div className="space-y-2 text-xs">
                {timezones.map((tz, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#FBF8EB] flex items-center justify-between">
                    <span className="font-bold text-[#111417]">{tz.zone}</span>
                    <span className="text-[#525E6A] text-[11px] truncate max-w-[160px] text-right">{tz.ex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Telehealth security card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EDE6DC] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#8C631A]">
                <ShieldCheck className="w-5 h-5 text-[#C9A227]" />
                <h3 className="font-serif font-bold text-lg text-[#111417]">
                  {lang === 'pt' ? 'Privacidade & Sigilo Absoluto' : 'Absolute Confidentiality'}
                </h3>
              </div>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                {lang === 'pt'
                  ? 'As sessões são realizadas por videochamada em plataformas seguras e criptografadas, rigorosamente em conformidade com o Código de Ética Profissional do Conselho Federal de Psicologia (CFP).'
                  : 'Sessions take place via secure, encrypted telehealth platforms, fully compliant with professional psychology licensing ethics and strict confidentiality guidelines.'}
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{lang === 'pt' ? 'Plataforma certificada para telepsicologia' : 'Certified platform for telepsychology'}</span>
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="p-6 rounded-2xl bg-[#111417] text-white text-center space-y-3 border border-[#C9A227]/30">
              <p className="text-sm font-serif font-bold text-white">
                {lang === 'pt' ? 'Mora no Brasil ou no Exterior e quer dar o primeiro passo?' : 'Living in Brazil or abroad and ready for the first step?'}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{lang === 'pt' ? 'Conversar no WhatsApp agora' : 'Chat on WhatsApp now'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
