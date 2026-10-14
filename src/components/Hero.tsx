import React from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  MapPin,
  Award,
  GraduationCap,
  ArrowDownRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import {
  DOCTOR_DATA,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '../data/content';
import { WhatsAppIcon } from './BrandIcons';

export const Hero: React.FC = () => {

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-20 lg:py-28 overflow-hidden bg-[#FAF8F5]"
    >
      {/* Fundo Claro Profissional e Elegante (Sem fotos artificiais / Sem IA) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Gradiente radial suave de luminosidade médica */}
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#F4EFE6] to-transparent opacity-70 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#E8DFD1]/40 to-transparent opacity-60 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] rounded-full bg-gradient-to-t from-white to-transparent opacity-80 blur-2xl" />

        {/* Linhas decorativas sutis de precisão e autoridade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8DFD1_1px,transparent_1px),linear-gradient(to_bottom,#E8DFD1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna Esquerda: Proposta de Valor e Conversão */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#73000A]"
            >
              <span className="text-[#8B0000] font-bold">{DOCTOR_DATA.motto}</span>
              <span aria-hidden="true" className="text-[#C59B6D]">·</span>
              <span className="text-[#4A3B3C] font-semibold">{DOCTOR_DATA.cro}</span>
              <span aria-hidden="true" className="text-[#C59B6D]">·</span>
              <span className="text-[#4A3B3C] font-semibold">27 anos de atuação clínica</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.08] tracking-tight text-[#1C1617]"
            >
              Recupere seu sorriso com segurança, estética e confiança
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#3A2E2F] font-normal leading-relaxed max-w-2xl"
            >
              Implantes dentários, reabilitação oral e clareamento de alta performance com o{' '}
              <strong className="font-semibold text-[#590009]">
                {DOCTOR_DATA.fullName}
              </strong>{' '}
              – Mestre em Laser na Odontologia (USP/IPEN) e Especialista em Implantodontia.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-sm sm:text-base text-[#524344] leading-relaxed max-w-xl"
            >
              Com trajetória na Odontologia desde o final da década de 1990, une prática clínica de
              27 anos em São Bernardo do Campo, docência e assistência técnica pericial para
              oferecer tratamentos de máxima previsibilidade.
            </motion.p>

            {/* Botões de Ação */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-semibold text-white bg-[#8B0000] hover:bg-[#73000A] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>Quero Agendar no WhatsApp</span>
              </a>

              <a
                href="#atuacao"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-medium text-[#2A2021] bg-white hover:bg-[#F4EFE6] border border-[#E8DFD1] shadow-xs transition-all duration-200 hover:scale-[1.01] whitespace-nowrap"
              >
                <span>Conhecer Mentoria & Perícia</span>
                <ArrowDownRight className="w-4 h-4 text-[#8B0000]" />
              </a>
            </motion.div>

            {/* Destaques de Confiança */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pt-4 border-t border-[#E8DFD1] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#4A3B3C]"
            >
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>27 anos de prática em SBC</span>
              </div>
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>Mestrado USP / IPEN</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>Atendimento agendado até 22h</span>
              </div>
            </motion.div>
          </div>

          {/* Coluna Direita: Foto Real do Dr. Carlos E. C. Vilela */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full"
          >
            {/* Moldura da Foto Real Oficial */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD1] shadow-xl bg-white">
              <img
                src={DOCTOR_DATA.images.hero}
                onError={(e) => {
                  e.currentTarget.src = DOCTOR_DATA.localBackups.hero;
                }}
                alt="Dr. Carlos Eduardo Carvalho Vilela — Especialista em Implantodontia com modelo anatômico"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] sm:h-[530px] object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

              {/* Selo de Legenda com Nome e Assinatura */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DFD1] shadow-xs">
                <div className="flex items-center justify-between">
                  <p className="font-display text-xl font-bold text-[#590009]">
                    {DOCTOR_DATA.fullName}
                  </p>
                  <span className="text-[11px] font-bold text-[#8B0000] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E8DFD1]">
                    {DOCTOR_DATA.cro}
                  </span>
                </div>
                <p className="text-xs text-[#4A3B3C] mt-0.5 font-medium">
                  {DOCTOR_DATA.signature}
                </p>
                <div className="mt-2 pt-2 border-t border-[#E8DFD1]/60 flex items-center justify-between text-[11px] text-[#524344]">
                  <span className="flex items-center gap-1 font-semibold text-[#8B0000]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B0000]" />
                    Especialista em Implantodontia · Mestre em Laser (USP)
                  </span>
                  <span className="text-[#8B0000] font-semibold">São Bernardo do Campo</span>
                </div>
              </div>
            </div>

            {/* Floating Highlight Card 1: Atendimento até 22h */}
            <div className="animate-float-slow sm:absolute sm:-top-5 sm:-left-6 mt-3 sm:mt-0 p-3.5 rounded-xl bg-white border border-[#E8DFD1] shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E8DFD1] text-[#8B0000] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#8B0000]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#590009]">Atendimento até 22h</p>
                <p className="text-[11px] text-[#524344]">Horário Noturno Agendado</p>
              </div>
            </div>

            {/* Floating Highlight Card 2: São Bernardo do Campo */}
            <div className="sm:absolute sm:-bottom-5 sm:-right-4 mt-3 sm:mt-0 p-3.5 rounded-xl bg-white border border-[#E8DFD1] shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E8DFD1] text-[#8B0000] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#8B0000]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#590009]">São Bernardo do Campo</p>
                <p className="text-[11px] text-[#524344]">Av. Caminho do Mar, 2030</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
