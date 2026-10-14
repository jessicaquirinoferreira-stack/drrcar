import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Info, Shield, Sparkles, ArrowRight } from 'lucide-react';
import {
  DOCTOR_DATA,
  IMPLANT_CANDIDATES,
  IMPLANT_STEPS,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '../data/content';
import { WhatsAppIcon } from './BrandIcons';

const SELF_CHECK_QUESTIONS = [
  {
    id: 'perda',
    label: 'Perdi um ou mais dentes (ou uso prótese móvel que causa desconforto)',
  },
  {
    id: 'saude',
    label: 'Tenho boa saúde geral (ou diabetes/hipertensão sob controle médico)',
  },
  {
    id: 'higiene',
    label: 'Busco uma solução fixa, segura e duradoura para mastigar e sorrir',
  },
];

export const ImplantsSection: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>(['perda', 'saude', 'higiene']);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="implantes"
      className="py-20 lg:py-28 bg-white border-y border-[#E8DFD1] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-bold text-[#8B0000] tracking-wide">
            Reabilitação Oral Fixa e Segura · Especialidade Principal
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1617] mt-2 leading-[1.12]">
            Implantes Dentários: Função, Estética e Segurança de Volta ao Seu Sorriso
          </h2>
          <p className="text-base sm:text-lg text-[#524344] mt-4 leading-relaxed">
            Sorria com confiança! Entenda como a implantodontia moderna devolve a estabilidade dos
            dentes naturais com procedimentos confortáveis, planejados pelo{' '}
            <strong className="font-semibold text-[#1C1617]">Dr. Carlos Vilela</strong>.
          </p>
        </div>

        {/* Main Educational Grid: O que é + Real Photo (5076 - Dr. Carlos com o Modelo de Implante) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left: O que é Implante Dentário + Benefícios Principais */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 p-7 sm:p-9 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD1] flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B0000]">
                <Shield className="w-4 h-4" />
                <span>O Que É o Implante Dentário?</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1617]">
                Substituição Biocompatível da Raiz Natural
              </h3>

              <p className="text-base sm:text-lg text-[#2A2021] leading-relaxed font-normal">
                “O implante dentário é um pino de titânio inserido no osso maxilar ou mandibular
                para substituir a raiz de um dente perdido, servindo de base para a colocação de
                uma prótese fixa, devolvendo função e estética ao sorriso.”
              </p>

              <div className="pt-4 border-t border-[#E8DFD1] space-y-3">
                <p className="text-xs font-bold text-[#590009]">
                  Por que realizar seu implante com o Dr. Carlos Vilela?
                </p>
                <ul className="space-y-2.5 text-sm text-[#3A2E2F]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0 mt-1" />
                    <span>
                      <strong>Biocompatibilidade em Titânio:</strong> Integra-se naturalmente ao
                      osso (osseointegração), garantindo firmeza equivalente à raiz natural.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0 mt-1" />
                    <span>
                      <strong>Pós-Operatório com Laserterapia:</strong> Como Mestre em
                      Laserterapia Odontológica pela USP, aplica protocolos que aceleram a
                      cicatrização e diminuem sensivelmente o desconforto.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0 mt-1" />
                    <span>
                      <strong>Preservação Óssea e Facial:</strong> Evita a reabsorção óssea provocada
                      pela falta de dentes e preserva o contorno jovem e harmônico da face.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Quick Eligibility Check */}
            <div className="p-5 rounded-xl bg-white border border-[#E8DFD1] space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-[#590009]">
                  Autoavaliação Rápida: Identifique seu perfil
                </p>
                <span className="text-xs text-[#8B0000] font-semibold tabular-nums">
                  {checkedItems.length}/3 selecionados
                </span>
              </div>
              <div className="space-y-2">
                {SELF_CHECK_QUESTIONS.map((q) => {
                  const active = checkedItems.includes(q.id);
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => toggleCheck(q.id)}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs sm:text-sm flex items-center gap-2.5 transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#FAF8F5] border-[#8B0000]/50 text-[#1C1617] font-medium'
                          : 'bg-white border-[#E8DFD1] text-[#524344]'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded flex items-center justify-center text-[10px] shrink-0 font-bold ${
                          active ? 'bg-[#8B0000] text-white' : 'border border-[#C59B6D]'
                        }`}
                      >
                        {active ? '✓' : ''}
                      </span>
                      <span>{q.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Real Photo (5076 - Dr. Carlos com o Modelo Anatômico de Implante) + Quem Pode Fazer */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6"
          >
            {/* Imagem Real do Dr. Carlos na Implantodontia (Foto 5090 - Acervo Científico) Completa e Perfeitamente Ajustada */}
            <div className="rounded-2xl overflow-hidden border border-[#E8DFD1] bg-white shadow-md flex flex-col">
              {/* Moldura limpa com foto completa e sem cortes */}
              <div className="bg-[#FAF8F5] p-3 sm:p-5 flex items-center justify-center">
                <img
                  src={DOCTOR_DATA.images.implants}
                  onError={(e) => {
                    e.currentTarget.src = DOCTOR_DATA.localBackups.implants;
                  }}
                  alt="Dr. Carlos Eduardo Carvalho Vilela — Especialista em Implantodontia e Mestre em Laser"
                  referrerPolicy="no-referrer"
                  className="w-full max-w-[440px] h-auto max-h-[560px] object-contain rounded-xl border border-[#E8DFD1]/80 shadow-xs transition-transform duration-300 hover:scale-[1.01]"
                />
              </div>

              {/* Legenda institucional abaixo da foto, preservando 100% da imagem visível */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#E8DFD1]">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#8B0000] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E8DFD1]">
                    Acervo Científico & Prática Clínica
                  </span>
                  <span className="text-xs text-[#524344] font-medium">
                    {DOCTOR_DATA.cro}
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#1C1617] mt-2">
                  Dr. Carlos Vilela — Implantodontia e Reabilitação Oral
                </h3>
                <p className="text-xs sm:text-sm text-[#4A3B3C] mt-1 leading-relaxed">
                  Planejamento cirúrgico guiado e literatura especializada para máxima segurança, precisão estética e conforto biológico.
                </p>
              </div>
            </div>

            {/* Quem pode fazer implante dentário? */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD1] flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold text-[#1C1617]">
                  Quem pode fazer implante dentário?
                </h3>
                <Info className="w-5 h-5 text-[#8B0000] shrink-0" />
              </div>

              <div className="space-y-3">
                {IMPLANT_CANDIDATES.map((candidate) => (
                  <div
                    key={candidate.title}
                    className="p-3.5 rounded-xl bg-white border border-[#E8DFD1] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-[#1C1617]">
                          {candidate.title}
                        </h4>
                        <span className="text-xs text-[#8B0000] font-semibold">
                          · {candidate.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#524344] mt-0.5 leading-relaxed">
                        {candidate.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Como Funciona / Processo Resumido */}
        <div id="como-funciona" className="pt-12 border-t border-[#E8DFD1] scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-bold text-[#8B0000] tracking-wide">
                Passo a Passo Transparente
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1617] mt-1">
                Como Funciona o Tratamento com Implantes
              </h3>
            </div>
            <p className="text-sm text-[#524344] max-w-md">
              Cada etapa é conduzida pessoalmente pelo Dr. Carlos Vilela com rigor técnico,
              biossegurança e acompanhamento próximo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {IMPLANT_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD1] flex flex-col justify-between hover:border-[#8B0000]/40 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#8B0000] tabular-nums">
                    ETAPA {item.step}
                  </span>
                  <h4 className="font-display text-xl font-semibold text-[#1C1617] mt-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#524344] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8DFD1] flex items-center justify-between text-xs text-[#8B0000] font-semibold">
                  <span>Protocolo seguro</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Light Theme Conversion Banner for Implants */}
          <div className="p-7 sm:p-10 rounded-2xl bg-gradient-to-r from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] border border-[#E8DFD1] shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs text-[#8B0000] font-bold">
                <Sparkles className="w-4 h-4 text-[#C59B6D]" />
                <span>Avaliação Individualizada com Dr. Carlos Vilela</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1617]">
                Descubra a melhor solução para o seu caso com segurança total
              </h4>
              <p className="text-sm text-[#524344]">
                Tire suas dúvidas sobre enxerto ósseo, diabetes/hipertensão controlada ou tempo de
                tratamento diretamente pelo WhatsApp.
              </p>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.implants)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#8B0000] hover:bg-[#73000A] shadow-md transition-all duration-200 hover:scale-[1.02] whitespace-nowrap shrink-0"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#D4AF37]" />
              <span>Quero saber se posso fazer implante – Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
