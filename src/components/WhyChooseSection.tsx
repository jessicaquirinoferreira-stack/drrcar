import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Clock,
  Compass,
  HeartHandshake,
  Cpu,
} from 'lucide-react';
import {
  DOCTOR_DATA,
  DIFFERENTIALS_DATA,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '../data/content';
import { WhatsAppIcon } from './BrandIcons';

export const WhyChooseSection: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.differentials);

  const differentialIcons = [
    <Award key="1" className="w-5 h-5 text-[#7A1F2B]" />,
    <Compass key="2" className="w-5 h-5 text-[#7A1F2B]" />,
    <HeartHandshake key="3" className="w-5 h-5 text-[#7A1F2B]" />,
    <Cpu key="4" className="w-5 h-5 text-[#7A1F2B]" />,
    <Clock key="5" className="w-5 h-5 text-[#7A1F2B]" />,
    <ShieldCheck key="6" className="w-5 h-5 text-[#7A1F2B]" />,
  ];

  return (
    <section
      id="diferenciais"
      className="relative py-20 lg:py-28 bg-white border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Sombra e iluminação suave */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#F1F5F9] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FDF5F6] border border-[#F9EBEF] text-xs font-bold tracking-widest text-[#7A1F2B] uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIFERENCIAIS DE ALTO PADRÃO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Excelência Clínica, Rigor Ético & Previsibilidade
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#CBD5E1]" />
            <div className="w-2 h-2 rounded-full bg-[#7A1F2B]" />
            <div className="h-[1px] w-16 bg-[#CBD5E1]" />
          </div>

          <p className="mt-4 text-base sm:text-lg text-[#4A4D52] font-sans">
            Pilares construídos ao longo de 27 anos que asseguram tratamentos
            personalizados com tecnologia de ponta e respeito biológico integral.
          </p>
        </div>

        {/* Grade de Cards Elegantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {DIFFERENTIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              className="group relative p-7 rounded-2xl bg-gradient-to-br from-white via-[#FAFAFA] to-[#F8FAFC] border border-[#CBD5E1] hover:border-[#7A1F2B]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Linha superior fina vinho que aparece no hover */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#7A1F2B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-bold text-[#7A1F2B]/30 group-hover:text-[#7A1F2B] transition-colors">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center group-hover:scale-110 transition-transform">
                    {differentialIcons[idx]}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-[#7A1F2B] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-[#4A4D52] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#F1F5F9] flex items-center gap-2 text-xs font-semibold text-[#7A1F2B]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Padrão Dr. Carlos Vilela</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faixa de Chamada Elegante em Prata & Vinho */}
        <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-[#F8FAFC] via-white to-[#F8FAFC] border border-[#CBD5E1] shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7A1F2B]">
              Atendimento com Hora Marcada
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              Planeje sua avaliação clínica individualizada
            </h4>
            <p className="text-sm text-[#4A4D52] font-sans">
              Horários reservados e flexíveis até às 22h para acomodar sua rotina com tranquilidade,
              em consultório estruturado em São Bernardo do Campo.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A1A1A] hover:bg-[#000000] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:scale-[1.02] border border-[#333333]"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>FALAR PELO WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
