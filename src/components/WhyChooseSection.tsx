import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CalendarCheck,
  HeartPulse,
  Award,
  Clock,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { DOCTOR_DATA, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './BrandIcons';

export const WhyChooseSection: React.FC = () => {
  const [visitProfile, setVisitProfile] = useState<'tradicional' | 'especial'>('tradicional');

  return (
    <section
      id="beneficios"
      className="py-20 lg:py-28 bg-white border-t border-[#E8DFD1] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-bold text-[#8B0000] tracking-wide">
            Excelência, Prevenção e Longevidade
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1617] mt-2 leading-[1.12]">
            Por que escolher o Dr. Carlos Vilela?
          </h2>
          <p className="text-base sm:text-lg text-[#524344] mt-4 leading-relaxed">
            Mais do que procedimentos isolados, você conta com o cuidado integral de um
            Especialista, Mestre e Professor comprometido com a sua saúde a longo prazo.
          </p>
        </div>

        {/* 3-Part Layout: Real Photo 4 (Dr. Carlos no Consultório) + Authority Cards + Frequency Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-10">
          {/* Left: Real Photo 4 (Dr. Carlos em pé junto à cadeira executiva e troféu de implante) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD1] shadow-md bg-white h-full min-h-[460px]">
              <img
                src={DOCTOR_DATA.images.whyChoose}
                onError={(e) => {
                  e.currentTarget.src = DOCTOR_DATA.localBackups.whyChoose;
                }}
                alt="Dr. Carlos E. C. Vilela em seu consultório em São Bernardo do Campo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs text-[#D4AF37] font-semibold">Atendimento Exclusivo</p>
                <p className="font-display text-2xl font-bold">
                  Compromisso com Ética e Longevidade
                </p>
                <p className="text-xs text-[#F4EFE6] mt-0.5">
                  Consultas detalhadas e ambiente acolhedor até às 22h.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Pillars & Evening Urgency Trigger */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD1] space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DFD1] flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#8B0000]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#1C1617]">
                  Autoridade Acadêmica e Pericial
                </h3>
                <p className="text-sm text-[#524344] leading-relaxed">
                  Como Professor de Ética, Implantodontia e Perito Odontológico, cada diagnóstico é
                  pautado na transparência absoluta, precisão técnica e indicação ética.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD1] space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DFD1] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#8B0000]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#1C1617]">
                  Mestrado em Laserterapia
                </h3>
                <p className="text-sm text-[#524344] leading-relaxed">
                  Tecnologia a laser aplicada tanto na cicatrização acelerada de implantes e
                  cirurgias quanto no clareamento sem dor (70% a 100% menos sensibilidade).
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.14 }}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD1] space-y-3 sm:col-span-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#8B0000]">
                      <Clock className="w-4 h-4" />
                      <span>Conveniência Exclusiva em São Bernardo do Campo</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#1C1617]">
                      Atendimento Agendado até às 22h
                    </h3>
                    <p className="text-sm text-[#524344] leading-relaxed">
                      Sabemos que sua agenda é exigente. Por isso, reservamos horários noturnos
                      especiais até às 22h para que você realize suas consultas e procedimentos sem
                      pressa e sem faltar ao trabalho.
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#E8DFD1] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-[#590009] font-medium">
                    Alta procura pelos horários entre 18h e 22h · Consulte disponibilidade da semana
                  </span>
                  <a
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.whyChoose)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#8B0000] hover:underline whitespace-nowrap"
                  >
                    Verificar horários noturnos →
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Health Quote Banner */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F4EFE6] border border-[#E8DFD1] flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#8B0000] text-white flex items-center justify-center shrink-0 mt-0.5">
                <HeartPulse className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-bold text-[#8B0000]">
                  Saúde Bucal e Saúde Sistêmica
                </p>
                <p className="font-display text-xl sm:text-2xl font-semibold text-[#1C1617] leading-snug">
                  “Manter acompanhamento odontológico regular é essencial não só para a saúde
                  bucal, mas também para a saúde geral do corpo.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Frequência Ideal de Visitas Card Full Width */}
        <div className="p-7 sm:p-9 rounded-2xl bg-gradient-to-b from-[#FAF8F5] via-white to-[#F4EFE6] text-[#1C1617] border-2 border-[#C59B6D]/40 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-[#8B0000]" />
                <span className="text-xs font-bold text-[#8B0000]">
                  Guia de Prevenção Odontológica Personalizada
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1617]">
                Qual a frequência ideal de visitas ao dentista?
              </h3>
              <p className="text-sm text-[#4A3B3C] leading-relaxed">
                O acompanhamento periódico previne perdas ósseas, preserva implantes e garante a
                longevidade da sua reabilitação oral. Selecione seu perfil:
              </p>

              {/* Interactive Segmented Toggle */}
              <div className="inline-flex gap-1.5 p-1 bg-[#F4EFE6] rounded-xl border border-[#E8DFD1]">
                <button
                  type="button"
                  onClick={() => setVisitProfile('tradicional')}
                  className={`py-2 px-4 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    visitProfile === 'tradicional'
                      ? 'bg-[#8B0000] text-white shadow-xs'
                      : 'text-[#524344] hover:text-[#1C1617]'
                  }`}
                >
                  Recomendação Tradicional
                </button>
                <button
                  type="button"
                  onClick={() => setVisitProfile('especial')}
                  className={`py-2 px-4 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    visitProfile === 'especial'
                      ? 'bg-[#8B0000] text-white shadow-xs'
                      : 'text-[#524344] hover:text-[#1C1617]'
                  }`}
                >
                  Casos Especiais
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              {visitProfile === 'tradicional' ? (
                <div className="p-5 rounded-xl bg-white border border-[#E8DFD1] shadow-2xs space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-3xl font-bold text-[#590009] tabular-nums">
                      A cada 6 meses
                    </span>
                    <span className="text-xs font-semibold text-[#8B0000]">Prevenção Padrão</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A3B3C] leading-relaxed">
                    Indicada para pacientes com boa saúde bucal geral. Inclui profilaxia completa,
                    avaliação das gengivas, checagem de restaurações e diagnóstico precoce.
                  </p>
                </div>
              ) : (
                <div className="p-5 rounded-xl bg-white border border-[#E8DFD1] shadow-2xs space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-3xl font-bold text-[#590009] tabular-nums">
                      A cada 3 a 4 meses
                    </span>
                    <span className="text-xs font-semibold text-[#8B0000]">Controle Especial</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A3B3C] leading-relaxed">
                    Recomendada para pacientes com múltiplos implantes, histórico de doença
                    periodontal, diabetes, hipertensão ou fumantes que necessitam de manutenção
                    aprofundada.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
