import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, SlidersHorizontal, Quote } from 'lucide-react';
import { TESTIMONIALS, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './BrandIcons';

const CLINICAL_CASES = [
  {
    id: 'caso-implante',
    category: 'Implante Dentário + Prótese Fixa em Porcelana',
    title: 'Reabilitação Estética e Funcional Superior',
    description:
      'Espaço reservado para fotografia clínica Antes/Depois (conforme normas do CRO). Use o controle deslizante para visualizar a simulação da transformação estética.',
    beforeLabel: 'Antes · Ausência e Desarmonia',
    afterLabel: 'Depois · Implante Fixo Natural',
    beforeTone: '#CDB89D',
    afterTone: '#FAF6EE',
  },
  {
    id: 'caso-clareamento',
    category: 'Clareamento Exclusivo com Laserterapia',
    title: 'Clareamento Sem Dor e Sem Restrição ao Café/Vinho',
    description:
      'Espaço reservado para fotografia clínica Antes/Depois. Redução de 70% a 100% da sensibilidade com ganho expressivo de luminosidade já na 1ª sessão.',
    beforeLabel: 'Antes · Pigmentação Escurecida',
    afterLabel: 'Depois · Branco Natural e Iluminado',
    beforeTone: '#DEC6A4',
    afterTone: '#FFFFFF',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderValues, setSliderValues] = useState<Record<string, number>>({
    'caso-implante': 55,
    'caso-clareamento': 60,
  });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-bold text-[#8B0000] tracking-wide">
              Histórias Reais de Transformação e Confiança
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1617] mt-2 leading-[1.12]">
              Resultados e Depoimentos de Pacientes
            </h2>
          </div>
          <p className="text-sm text-[#524344] max-w-md">
            Seu sorriso merece esse cuidado! Veja o impacto de um tratamento planejado com empatia,
            técnica apurada e horários pensados para você.
          </p>
        </div>

        {/* Interactive Before/After Placeholders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CLINICAL_CASES.map((item) => {
            const val = sliderValues[item.id] ?? 50;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFD1] shadow-2xs space-y-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#8B0000]">{item.category}</span>
                  <span className="text-xs text-[#524344] flex items-center gap-1 font-medium">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#8B0000]" />
                    <span>Simulador Antes / Depois</span>
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-[#1C1617]">{item.title}</h3>

                {/* Interactive Split Visual Placeholder Ready for Real Clinical Photos */}
                <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden border border-[#E8DFD1] select-none bg-[#F4EFE6]">
                  {/* AFTER LAYER (Full Width Underneath) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F4EFE6] to-[#E8DFD1] flex flex-col items-center justify-center p-6 text-center">
                    <div className="flex items-center gap-1.5 mb-3">
                      {[1, 2, 3, 4, 5, 6].map((tooth) => (
                        <div
                          key={tooth}
                          className="w-8 sm:w-10 h-11 sm:h-12 rounded-b-xl rounded-t-md border border-[#C59B6D]/40 shadow-xs transition-colors"
                          style={{ backgroundColor: item.afterTone }}
                        />
                      ))}
                    </div>
                    <p className="font-display text-lg font-bold text-[#590009]">
                      {item.afterLabel}
                    </p>
                    <p className="text-[11px] text-[#524344] mt-0.5">
                      [Placeholder Pronto para Foto Clínica Real – Depois]
                    </p>
                  </div>

                  {/* BEFORE LAYER (Clipped by Slider %) */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-[#E2D6C5] via-[#D8C7B2] to-[#CCB59C] flex flex-col items-center justify-center p-6 text-center"
                    style={{ width: `${val}%` }}
                  >
                    <div className="w-full min-w-[300px] flex flex-col items-center justify-center">
                      <div className="flex items-center gap-1.5 mb-3">
                        {[1, 2, 3, 4, 5, 6].map((tooth) => (
                          <div
                            key={tooth}
                            className={`w-8 sm:w-10 h-11 sm:h-12 rounded-b-xl rounded-t-md border border-black/15 ${
                              item.id === 'caso-implante' && tooth === 4
                                ? 'opacity-20 border-dashed'
                                : ''
                            }`}
                            style={{ backgroundColor: item.beforeTone }}
                          />
                        ))}
                      </div>
                      <p className="font-display text-lg font-bold text-[#3A2E2F]">
                        {item.beforeLabel}
                      </p>
                      <p className="text-[11px] text-[#524344] mt-0.5">
                        [Placeholder Pronto para Foto Clínica Real – Antes]
                      </p>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div
                    className="absolute inset-y-0 w-0.5 bg-[#8B0000] shadow-md pointer-events-none"
                    style={{ left: `${val}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#8B0000] text-white border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-md">
                      ↔
                    </div>
                  </div>
                </div>

                {/* Range Slider Control */}
                <div className="space-y-1.5">
                  <input
                    type="range"
                    min={10}
                    max={90}
                    value={val}
                    aria-label={`Comparar antes e depois de ${item.title}`}
                    onChange={(e) =>
                      setSliderValues((prev) => ({
                        ...prev,
                        [item.id]: Number(e.target.value),
                      }))
                    }
                    className="w-full accent-[#8B0000] cursor-pointer"
                  />
                  <p className="text-xs text-[#524344] leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated Patient Testimonials Carousel */}
        <div className="relative rounded-2xl bg-white border border-[#E8DFD1] p-7 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-1 text-[#D4AF37] mb-4" aria-label="Avaliação 5 estrelas">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-bold text-[#590009] ml-2">
                  Relato de Paciente Verificado · São Bernardo do Campo
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="font-display italic text-2xl sm:text-3xl text-[#1C1617] leading-relaxed">
                    “{currentTestimonial.quote}”
                  </p>

                  <div className="pt-2 space-y-1">
                    <p className="text-base font-bold text-[#590009]">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-xs text-[#524344]">
                      {currentTestimonial.location} · {currentTestimonial.procedure}
                    </p>
                    <p className="text-xs text-[#8B0000] font-semibold pt-1">
                      Resultado: {currentTestimonial.beforeAfterLabel}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls & Direct Conversion */}
            <div className="lg:col-span-4 flex flex-col justify-between lg:items-end space-y-6 border-t lg:border-t-0 lg:border-l border-[#E8DFD1] pt-6 lg:pt-0 lg:pl-8">
              <Quote className="w-10 h-10 text-[#C59B6D]/40 hidden lg:block" />

              <div className="w-full space-y-4">
                <p className="text-xs text-[#524344]">
                  Depoimento <span className="font-bold text-[#1C1617] tabular-nums">{activeIndex + 1}</span> de{' '}
                  <span className="font-bold text-[#1C1617] tabular-nums">{TESTIMONIALS.length}</span>
                </p>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Depoimento anterior"
                    className="p-3 rounded-xl border border-[#E8DFD1] bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#590009] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Próximo depoimento"
                    className="p-3 rounded-xl border border-[#E8DFD1] bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#590009] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#8B0000] hover:bg-[#73000A] shadow-xs transition-all duration-200 hover:scale-[1.01]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span>Transforme seu sorriso agora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
