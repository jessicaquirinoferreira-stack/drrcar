import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Scale,
  CheckCircle2,
  Users,
  FileText,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';
import {
  DOCTOR_DATA,
  MENTORSHIP_LEGAL_DATA,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '../data/content';
import { WhatsAppIcon } from './BrandIcons';

export const SpecializedFrontsSection: React.FC = () => {
  const mentorshipWhatsapp = getWhatsAppUrl(WHATSAPP_MESSAGES.mentorship);
  const legalWhatsapp = getWhatsAppUrl(WHATSAPP_MESSAGES.legalExpert);

  return (
    <section
      id="mentoria-pericia"
      className="relative py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Luz e gradiente sutil de prata */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-white blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold tracking-widest text-[#7A1F2B] uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{MENTORSHIP_LEGAL_DATA.title}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            {MENTORSHIP_LEGAL_DATA.subtitle}
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#CBD5E1]" />
            <div className="w-2 h-2 rounded-full bg-[#7A1F2B]" />
            <div className="h-[1px] w-16 bg-[#CBD5E1]" />
          </div>

          <p className="mt-4 text-base sm:text-lg text-[#4A4D52] font-sans">
            {MENTORSHIP_LEGAL_DATA.lead}
          </p>
        </div>

        {/* Card Destaque Institucional com Foto do Dr. Carlos */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-[#CBD5E1] bg-white shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0]">
            <div className="relative rounded-xl overflow-hidden border border-[#CBD5E1] shadow-md bg-white">
              <img
                src={DOCTOR_DATA.images.mentorship}
                alt="Dr. Carlos Eduardo Carvalho Vilela - Mentoria e Perícia"
                className="w-full h-auto max-h-[560px] object-contain block"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF5F6] border border-[#F9EBEF] text-[11px] font-bold tracking-wider text-[#7A1F2B] uppercase">
              <span>Autoridade Clínica & Docência</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1F2B]">
              Compartilhamento de Experiência Prática & Suporte Técnico-Científico
            </h3>
            <p className="text-sm sm:text-base text-[#333333] leading-relaxed font-sans">
              Com mais de 27 anos de vivência ininterrupta em procedimentos cirúrgicos e reabilitadores,
              o Dr. Carlos coloca sua maturidade clínica e titulação acadêmica a serviço do avanço da
              odontologia e da segurança jurídica dos profissionais da saúde.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-[#7A1F2B] font-bold text-xs uppercase mb-1">
                  <Users className="w-4 h-4" />
                  <span>Para Dentistas</span>
                </div>
                <p className="text-xs text-[#4A4D52]">
                  Discussão de casos reais, planejamento reverso e segurança na tomada de decisões cirúrgicas.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-[#7A1F2B] font-bold text-xs uppercase mb-1">
                  <FileText className="w-4 h-4" />
                  <span>Para o Meio Jurídico</span>
                </div>
                <p className="text-xs text-[#4A4D52]">
                  Pareceres técnicos embasados em literatura de impacto e análise probatória com ética inquestionável.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* As Duas Frentes Exclusivas: Mentoria e Perícia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Mentoria para Dentistas */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 sm:p-8 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#FDF5F6] border border-[#F9EBEF] flex items-center justify-center text-[#7A1F2B]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F3F4F6] text-[#4A4D52] border border-[#E5E7EB]">
                  {MENTORSHIP_LEGAL_DATA.mentorship.badge}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2.5">
                {MENTORSHIP_LEGAL_DATA.mentorship.title}
              </h3>

              <p className="text-sm text-[#4A4D52] mb-6 leading-relaxed">
                {MENTORSHIP_LEGAL_DATA.mentorship.summary}
              </p>

              <div className="space-y-3 mb-8">
                {MENTORSHIP_LEGAL_DATA.mentorship.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#333333]">
                    <CheckCircle2 className="w-4 h-4 text-[#7A1F2B] flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={mentorshipWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#000000] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm border border-[#333333]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>{MENTORSHIP_LEGAL_DATA.mentorship.ctaText}</span>
            </a>
          </motion.div>

          {/* Card 2: Odontologia Legal & Perícia */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 sm:p-8 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#FDF5F6] border border-[#F9EBEF] flex items-center justify-center text-[#7A1F2B]">
                  <Scale className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F3F4F6] text-[#4A4D52] border border-[#E5E7EB]">
                  {MENTORSHIP_LEGAL_DATA.legal.badge}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2.5">
                {MENTORSHIP_LEGAL_DATA.legal.title}
              </h3>

              <p className="text-sm text-[#4A4D52] mb-6 leading-relaxed">
                {MENTORSHIP_LEGAL_DATA.legal.summary}
              </p>

              <div className="space-y-3 mb-8">
                {MENTORSHIP_LEGAL_DATA.legal.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#333333]">
                    <CheckCircle2 className="w-4 h-4 text-[#7A1F2B] flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={legalWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#7A1F2B] hover:bg-[#5C121C] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm border border-[#A82537]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>{MENTORSHIP_LEGAL_DATA.legal.ctaText}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
