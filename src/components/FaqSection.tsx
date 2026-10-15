import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQ_DATA, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './BrandIcons';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.faq);

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold tracking-widest text-[#7A1F2B] uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DÚVIDAS / FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Perguntas Frequentes
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#CBD5E1]" />
            <div className="w-2 h-2 rounded-full bg-[#7A1F2B]" />
            <div className="h-[1px] w-16 bg-[#CBD5E1]" />
          </div>

          <p className="mt-4 text-base sm:text-lg text-[#4A4D52] font-sans">
            Informações claras e transparentes sobre atendimento, implantes dentários,
            mentoria profissional e perícia técnica.
          </p>
        </div>

        {/* Lista Accordion Clean */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border bg-white ${
                  isOpen
                    ? 'border-[#7A1F2B]/40 shadow-md ring-1 ring-[#7A1F2B]/10'
                    : 'border-[#CBD5E1] hover:border-[#94A3B8] shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-serif text-lg sm:text-xl font-bold transition-colors ${
                      isOpen ? 'text-[#7A1F2B]' : 'text-[#1A1A1A]'
                    }`}
                  >
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#7A1F2B] text-white rotate-180'
                        : 'bg-[#F3F4F6] text-[#6B7280]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#4A4D52] leading-relaxed font-sans border-t border-[#F1F5F9]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Box de Contato Direto caso tenha outra dúvida */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#CBD5E1] text-center shadow-sm">
          <p className="font-serif text-xl font-bold text-[#1A1A1A]">
            Ainda possui alguma dúvida específica?
          </p>
          <p className="text-xs sm:text-sm text-[#4A4D52] mt-1 mb-5">
            Converse diretamente com o Dr. Carlos Vilela pelo WhatsApp para esclarecimentos.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#000000] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm border border-[#333333]"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>TIRAR DÚVIDA PELO WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
