import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Scale,
  CheckCircle2,
  Users,
  FileText,
  ArrowRight,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { SPECIALIZED_FRONTS, getWhatsAppUrl, DOCTOR_DATA, WHATSAPP_MESSAGES } from '../data/content';
import { WhatsAppIcon } from './BrandIcons';

export const SpecializedFrontsSection: React.FC = () => {
  return (
    <section
      id="atuacao"
      className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8DFD1] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B0000] tracking-wide mb-2">
            <ShieldCheck className="w-4 h-4 text-[#8B0000]" />
            <span>Docência, Análise Técnica e Consultoria Especializada</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1617] leading-[1.12]">
            Frentes Especializadas de Atuação Profissional
          </h2>
          <p className="text-base sm:text-lg text-[#524344] mt-4 leading-relaxed">
            Hoje, a experiência de 27 anos do{' '}
            <strong className="font-semibold text-[#1C1617]">{DOCTOR_DATA.fullName}</strong> se
            conecta a duas propostas essenciais: compartilhar conhecimento prático com colegas de
            profissão e oferecer suporte pericial de alta precisão técnica e científica.
          </p>
        </div>

        {/* Foto Real 4 (5092): Dr. Carlos de Terno ao lado do Troféu de Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 rounded-2xl overflow-hidden border border-[#E8DFD1] bg-white shadow-xs grid grid-cols-1 md:grid-cols-12 items-stretch"
        >
          <div className="md:col-span-5 relative min-h-[300px] md:min-h-[340px]">
            <img
              src={DOCTOR_DATA.images.specialized}
              onError={(e) => {
                e.currentTarget.src = DOCTOR_DATA.localBackups.specialized;
              }}
              alt="Dr. Carlos Eduardo Carvalho Vilela em terno no consultório ProDents com troféu de reconhecimento"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-bold text-[#D4AF37] bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded border border-white/20">
                Foto Oficial 4 · Mentoria & Perícia
              </span>
              <p className="font-display text-lg font-bold mt-1 text-white">
                {DOCTOR_DATA.fullName}
              </p>
              <p className="text-xs text-[#F4EFE6]">
                {DOCTOR_DATA.signature}
              </p>
            </div>
          </div>

          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8B0000]">
                <Award className="w-4 h-4 text-[#8B0000]" />
                <span>Experiência Docente e Pericial desde 2010</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1617]">
                Conhecimento construído na prática clínica, acadêmica e pericial
              </h3>
              <p className="text-sm text-[#4A3B3C] leading-relaxed">
                Cirurgião-dentista com graduação em Odontologia, especialização em Implantodontia, mestrado em Laser na Odontologia pela USP/IPEN e formação em Odontologia Legal e Forense pela Faculdade São Leopoldo Mandic.
              </p>
              <p className="text-xs text-[#524344] leading-relaxed">
                Atua como professor convidado em cursos de especialização em Implantodontia e como assistente técnico judicial em causas cíveis desde 2010, unindo a visão clínica real às normas éticas e técnico-legais.
              </p>
            </div>

            <div className="pt-3 border-t border-[#E8DFD1] flex flex-wrap items-center gap-4 text-xs font-semibold text-[#590009]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B0000]" />
                {DOCTOR_DATA.cro}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B0000]" />
                27 anos de clínica em SBC
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B0000]" />
                Perito Assistente Cível
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2 Major Fronts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {SPECIALIZED_FRONTS.map((front, index) => {
            const isMentorship = front.id === 'mentoria';
            return (
              <motion.div
                key={front.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8DFD1] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-[#FAF8F5] text-[#8B0000] border border-[#E8DFD1]">
                      {isMentorship ? (
                        <Users className="w-3.5 h-3.5 text-[#8B0000]" />
                      ) : (
                        <Scale className="w-3.5 h-3.5 text-[#8B0000]" />
                      )}
                      <span>{front.badge}</span>
                    </span>
                    <span className="text-xs font-semibold text-[#524344] font-mono">
                      FRENTE 0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1617] leading-tight">
                      {front.title}
                    </h3>
                    <p className="text-xs font-bold text-[#8B0000] mt-1">{front.subtitle}</p>
                  </div>

                  <p className="text-sm text-[#4A3B3C] leading-relaxed">{front.description}</p>

                  <div className="pt-2 border-t border-[#E8DFD1] space-y-2.5">
                    <p className="text-xs font-bold text-[#1C1617]">Destaques e Abrangência:</p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#3A2E2F]">
                      {front.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8DFD1] space-y-2">
                  <a
                    href={getWhatsAppUrl(front.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#8B0000] hover:bg-[#73000A] shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#D4AF37]" />
                    <span>{front.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  {isMentorship && (
                    <a
                      href="#faq"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#590009] hover:bg-[#FAF8F5] border border-[#E8DFD1] transition-colors"
                    >
                      <span>Ver Perguntas Frequentes & Pacotes (FAQ)</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F4EFE6] border border-[#E8DFD1] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <p className="text-xs font-bold text-[#8B0000]">
              Experiência que Integra Conhecimento Clínico e Jurídico
            </p>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-[#1C1617]">
              “Sua experiência permite integrar conhecimento clínico e jurídico, auxiliando na
              compreensão das questões odontológicas discutidas em processos judiciais, sempre dentro
              dos limites de sua atuação profissional.”
            </h4>
            <p className="text-xs text-[#524344]">
              {DOCTOR_DATA.fullName} · {DOCTOR_DATA.cro} · Responsável Técnico {DOCTOR_DATA.clinicName}
            </p>
          </div>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.legalExpert)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#1C1617] bg-white hover:bg-[#FAF8F5] border border-[#E8DFD1] shadow-2xs whitespace-nowrap shrink-0 transition-colors"
          >
            <FileText className="w-4 h-4 text-[#8B0000]" />
            <span>Consultar Casos Periciais</span>
          </a>
        </div>
      </div>
    </section>
  );
};
