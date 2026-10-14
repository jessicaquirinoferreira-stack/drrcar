import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Coffee,
  Wine,
  Zap,
  Sliders,
  Heart,
  Home,
  ShieldCheck,
  Users,
  Smile,
} from 'lucide-react';
import {
  DOCTOR_DATA,
  WHITENING_BENEFITS,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '../data/content';
import { WhatsAppIcon } from './BrandIcons';

const BENEFIT_ICONS = [
  <Smile className="w-5 h-5 text-[#8B0000]" />,
  <Coffee className="w-5 h-5 text-[#8B0000]" />,
  <Zap className="w-5 h-5 text-[#8B0000]" />,
  <Sliders className="w-5 h-5 text-[#8B0000]" />,
  <Heart className="w-5 h-5 text-[#8B0000]" />,
  <Home className="w-5 h-5 text-[#8B0000]" />,
  <ShieldCheck className="w-5 h-5 text-[#8B0000]" />,
  <Users className="w-5 h-5 text-[#8B0000]" />,
];

const SHADE_STAGES = [
  { label: 'Tom Inicial (A3)', hex: '#E5D3B3', desc: 'Pigmentação acumulada por café, vinho e rotina' },
  { label: '1ª Sessão (A2)', hex: '#EFE4CE', desc: 'Quebra inicial das moléculas de pigmento sem dor' },
  { label: 'Resultado (A1)', hex: '#F7F2E7', desc: 'Brilho natural e uniforme com estrutura preservada' },
  { label: 'Alta Performance (BL2)', hex: '#FDFBF7', desc: 'Sorriso radiante, saudável e iluminado' },
];

export const WhiteningSection: React.FC = () => {
  const [selectedShade, setSelectedShade] = useState(3);

  return (
    <section id="clareamento" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-bold text-[#8B0000] tracking-wide">
            Estética Dental Avançada · Mestre em Laser na Odontologia (USP/IPEN)
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1617] mt-2 leading-[1.12]">
            Clareamento Dental de Alta Performance: Sem Dor e Sem Restrições
          </h2>
          <p className="text-base sm:text-lg text-[#524344] mt-4 leading-relaxed">
            Transforme seu sorriso com segurança clínica e conforto absoluto. Conheça o protocolo
            exclusivo conduzido pessoalmente pelo Dr. Carlos Vilela.
          </p>
        </div>

        {/* Highlight Exclusive Technique Banner (Light Luxury Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-14 p-7 sm:p-9 rounded-2xl bg-gradient-to-r from-white via-[#FAF8F5] to-[#F4EFE6] text-[#1C1617] shadow-sm border-2 border-[#C59B6D]/40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B0000]">
                <Sparkles className="w-4 h-4 text-[#C59B6D]" />
                <span>Diferencial Exclusivo · Mestre em Laserterapia (USP)</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#590009] leading-snug">
                “Clareamento sem dor e sem restrições alimentares – técnica exclusiva com 70% a
                100% de redução de sensibilidade. Pode continuar tomando café e vinho!”
              </h3>
              <p className="text-sm sm:text-base text-[#4A3B3C] leading-relaxed">
                Graças ao domínio científico em Laser na Odontologia (USP/IPEN), o protocolo
                protege as terminações nervosas do dente enquanto atua na quebra profunda das
                manchas, eliminando o incômodo tradicional dos métodos convencionais.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-white border border-[#E8DFD1] shadow-2xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E8DFD1] flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5 text-[#8B0000]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1C1617]">Café Liberado</p>
                  <p className="text-xs text-[#524344]">Sem dietas restritivas</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8DFD1] shadow-2xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E8DFD1] flex items-center justify-center shrink-0">
                  <Wine className="w-5 h-5 text-[#8B0000]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1C1617]">Vinho Liberado</p>
                  <p className="text-xs text-[#524344]">70% a 100% menos sensibilidade</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* O que é & Como funciona + Real Photo (5096 - Dr. Carlos com a Xícara de Café) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left: O que é + Como funciona + Simulador Interativo de Tom */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E8DFD1] shadow-2xs space-y-2.5">
                <p className="text-xs font-bold text-[#8B0000]">01. O Que É</p>
                <h3 className="font-display text-2xl font-semibold text-[#1C1617]">
                  Renovação Luminosa do Sorriso
                </h3>
                <p className="text-sm text-[#524344] leading-relaxed">
                  É um tratamento estético odontológico que clareia a cor dos dentes removendo
                  manchas e pigmentações acumuladas ao longo do tempo para revelar um sorriso mais
                  brilhante, jovem e harmônico.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E8DFD1] shadow-2xs space-y-2.5">
                <p className="text-xs font-bold text-[#8B0000]">02. Como Funciona</p>
                <h3 className="font-display text-2xl font-semibold text-[#1C1617]">
                  Ação Química Segura e Laser USP
                </h3>
                <p className="text-sm text-[#524344] leading-relaxed">
                  Utiliza agentes clareadores (peróxido de hidrogênio ou peróxido de carbamida) que
                  penetram no esmalte e na dentina, quebrando as moléculas que causam manchas sem
                  desgastar a estrutura dental.
                </p>
              </div>
            </div>

            {/* Interactive Shade Simulator */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFD1] shadow-2xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-bold text-[#8B0000]">
                    Simulador Educativo de Luminosidade Dental
                  </p>
                  <h4 className="font-display text-xl font-semibold text-[#1C1617]">
                    Visualize a evolução natural do clareamento personalizado
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#590009]">
                  {SHADE_STAGES[selectedShade].label}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {SHADE_STAGES.map((stage, idx) => (
                  <button
                    key={stage.label}
                    type="button"
                    onClick={() => setSelectedShade(idx)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedShade === idx
                        ? 'border-[#8B0000] bg-[#FAF8F5] shadow-xs'
                        : 'border-[#E8DFD1] bg-white hover:bg-[#FAF8F5]/60'
                    }`}
                  >
                    <div
                      className="w-full h-9 rounded-lg border border-black/10 mb-2 transition-colors"
                      style={{ backgroundColor: stage.hex }}
                    />
                    <p className="text-xs font-bold text-[#1C1617] truncate">{stage.label}</p>
                  </button>
                ))}
              </div>

              <p className="text-xs text-[#524344] pt-1">
                <strong className="text-[#1C1617]">Etapa selecionada:</strong>{' '}
                {SHADE_STAGES[selectedShade].desc}
              </p>
            </div>
          </div>

          {/* Right: Real Photo (Foto 5096 - Dr. Carlos tomando café em sua biblioteca) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD1] shadow-md h-full min-h-[420px] bg-white">
              <img
                src={DOCTOR_DATA.images.whitening}
                onError={(e) => {
                  e.currentTarget.src = DOCTOR_DATA.localBackups.whitening;
                }}
                alt="Dr. Carlos Eduardo Carvalho Vilela apreciando café no consultório, demonstrando o clareamento sem restrições"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <p className="text-xs text-[#D4AF37] font-semibold">
                  Técnica Exclusiva Dr. Carlos Vilela
                </p>
                <p className="font-display text-2xl font-bold">
                  Clareamento Sem Restrições ao Café ou Vinho
                </p>
                <p className="text-xs text-[#F4EFE6]">
                  70% a 100% menos sensibilidade com o poder da Laserterapia USP/IPEN.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Benefits Visual Grid */}
        <div className="space-y-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-[#8B0000] tracking-wide">
              Vantagens Clínicas e Estéticas
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1617] mt-1">
              8 Benefícios do Clareamento com o Dr. Carlos Vilela
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHITENING_BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-5 rounded-2xl bg-white border border-[#E8DFD1] hover:border-[#8B0000]/40 shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8DFD1] flex items-center justify-center mb-3.5">
                    {BENEFIT_ICONS[index]}
                  </div>
                  <h4 className="font-display text-lg font-semibold text-[#1C1617]">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#524344] mt-1.5 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Large CTA Button */}
          <div className="pt-6 flex flex-col items-center text-center space-y-3">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.whitening)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold text-white bg-[#8B0000] hover:bg-[#73000A] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] whitespace-nowrap"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#D4AF37]" />
              <span>Quero um sorriso mais branco – Agendar no WhatsApp</span>
            </a>
            <p className="text-xs text-[#524344]">
              Opções em consultório e supervisionadas em casa · Atendimento até às 22h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
