import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  ChevronDown,
  CalendarCheck,
  Mail,
  Send,
  Sparkles,
  Users,
  CheckCircle2,
  FileText,
  Clock,
} from 'lucide-react';
import {
  DOCTOR_DATA,
  MENTORSHIP_FAQS,
  MENTORSHIP_PACKAGES,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '../data/content';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const filteredFaqs = MENTORSHIP_FAQS.filter((faq) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      faq.question.toLowerCase().includes(term) ||
      faq.answer.toLowerCase().includes(term) ||
      faq.number.includes(term)
    );
  });

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8DFD1] relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B0000] tracking-wide mb-2">
            <HelpCircle className="w-4 h-4 text-[#8B0000]" />
            <span>Perguntas e Respostas Oficiais · Mentoria & Atuação Clínica</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1617] leading-[1.12]">
            Dúvidas Frequentes sobre a Mentoria Odontológica
          </h2>
          <p className="text-base sm:text-lg text-[#524344] mt-4 leading-relaxed">
            Esclareça as principais questões sobre formatos de acompanhamento, pacotes, discussão de
            casos clínicos e assistência pericial com o Dr. Carlos Vilela.
          </p>
        </div>

        {/* 3 Packages Showcase (Item 7 da Mentoria em destaque visual) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#8B0000]">Formatos de Atendimento</span>
              <h3 className="font-display text-2xl font-bold text-[#1C1617]">
                Opções de Pacotes de Acompanhamento
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#524344] max-w-md">
              Frequência e duração combinadas previamente de acordo com a sua necessidade clínica e
              momento profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {MENTORSHIP_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-white border-2 border-[#8B0000] shadow-md ring-4 ring-[#8B0000]/10 relative'
                    : 'bg-white border border-[#E8DFD1] shadow-2xs hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                        pkg.popular
                          ? 'bg-[#FAF8F5] text-[#8B0000] border-[#8B0000]/30'
                          : 'bg-[#F4EFE6] text-[#590009] border-[#E8DFD1]'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                    {pkg.popular && (
                      <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider bg-[#590009] px-2 py-0.5 rounded text-white">
                        Destaque
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-2xl font-bold text-[#1C1617]">{pkg.title}</h4>
                  <p className="text-xs text-[#524344] mt-1.5 leading-relaxed">{pkg.description}</p>

                  <div className="pt-4 mt-4 border-t border-[#E8DFD1] space-y-2">
                    <p className="text-xs font-bold text-[#1C1617]">O que contempla:</p>
                    <ul className="space-y-2 text-xs text-[#3A2E2F]">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8B0000] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8DFD1]">
                  <a
                    href={getWhatsAppUrl(pkg.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-[#8B0000] hover:bg-[#73000A] text-white shadow-sm hover:scale-[1.02]'
                        : 'bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#1C1617] border border-[#E8DFD1]'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#D4AF37]" />
                    <span>{pkg.ctaText}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search input for questions */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-semibold text-[#590009]">
            Exibindo <strong>{filteredFaqs.length}</strong> de {MENTORSHIP_FAQS.length} perguntas
          </p>
          <div className="max-w-md w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar pergunta ou palavra-chave (ex: pacotes, casos, valores)..."
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8DFD1] focus:border-[#8B0000] focus:outline-none text-xs sm:text-sm text-[#1C1617] shadow-2xs placeholder:text-[#524344]/60"
            />
          </div>
        </div>

        {/* 12 Accordion Questions List */}
        <div className="space-y-3.5 mb-14">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.number}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-[#8B0000]/60 shadow-md ring-1 ring-[#8B0000]/20'
                    : 'bg-white border-[#E8DFD1] shadow-2xs hover:border-[#8B0000]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#8B0000] bg-[#FAF8F5] border border-[#E8DFD1] px-2.5 py-1 rounded-lg shrink-0">
                      {faq.number}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-[#1C1617] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 border ${
                      isOpen
                        ? 'bg-[#8B0000] text-white border-[#8B0000] rotate-180'
                        : 'bg-[#FAF8F5] text-[#524344] border-[#E8DFD1]'
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
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#FAF8F5] text-sm text-[#4A3B3C] leading-relaxed whitespace-pre-line pl-14 sm:pl-16">
                        {faq.answer}

                        {/* Extra CTA on question 12 / final scheduling */}
                        {faq.number === '12' && (
                          <div className="mt-4 pt-4 border-t border-[#E8DFD1] flex flex-wrap items-center gap-3">
                            <a
                              href={getWhatsAppUrl(WHATSAPP_MESSAGES.faq)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-xs font-bold shadow-2xs transition-colors"
                            >
                              <WhatsAppIcon className="w-4 h-4" />
                              <span>Conversar no WhatsApp {DOCTOR_DATA.phoneMobile}</span>
                            </a>
                            <a
                              href={`mailto:${DOCTOR_DATA.email}`}
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E8DFD1] hover:bg-[#FAF8F5] text-[#1C1617] text-xs font-bold transition-colors"
                            >
                              <Mail className="w-4 h-4 text-[#8B0000]" />
                              <span>{DOCTOR_DATA.email}</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct Mentoria & Contact Official Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-white via-[#FAF8F5] to-[#F4EFE6] border-2 border-[#C59B6D]/50 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#8B0000] border border-[#E8DFD1]">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B6D]" />
                <span>Atendimento Direto com o Especialista</span>
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1617]">
                Pronto para aprimorar sua segurança clínica e tomada de decisões?
              </h3>
              <p className="text-sm sm:text-base text-[#4A3B3C]">
                Consulte a disponibilidade de horários para a sua Consulta Avulsa ou Pacote Mensal.
                Atendimento presencial em São Bernardo do Campo ou formato remoto para dentistas de
                todo o país.
              </p>
              <p className="text-xs font-semibold text-[#8B0000] italic">
                {DOCTOR_DATA.signature}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.mentorship)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-bold text-white bg-[#8B0000] hover:bg-[#73000A] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#D4AF37]" />
                <span>WhatsApp: {DOCTOR_DATA.phoneMobile}</span>
              </a>

              <a
                href={`mailto:${DOCTOR_DATA.email}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#1C1617] bg-white hover:bg-[#FAF8F5] border border-[#E8DFD1] shadow-2xs transition-colors"
              >
                <Mail className="w-4 h-4 text-[#8B0000]" />
                <span>E-mail: {DOCTOR_DATA.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
