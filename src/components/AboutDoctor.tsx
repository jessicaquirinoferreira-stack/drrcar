import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  Ear,
  Target,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import {
  DOCTOR_DATA,
  ABOUT_DATA,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '../data/content';
import { WhatsAppIcon } from './BrandIcons';

export const AboutDoctor: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  const valueIcons = [
    <HeartHandshake key="1" className="w-5 h-5 text-[#7A1F2B]" />,
    <Ear key="2" className="w-5 h-5 text-[#7A1F2B]" />,
    <Target key="3" className="w-5 h-5 text-[#7A1F2B]" />,
  ];

  return (
    <section
      id="quem-sou-eu"
      className="relative py-20 lg:py-28 bg-white border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Elementos sutis de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#F1F5F9] via-[#F8FAFC] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FDF5F6] border border-[#F9EBEF] text-xs font-bold tracking-widest text-[#7A1F2B] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{ABOUT_DATA.title}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            {ABOUT_DATA.subtitle}
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#CBD5E1]" />
            <div className="w-2 h-2 rounded-full bg-[#7A1F2B]" />
            <div className="h-[1px] w-16 bg-[#CBD5E1]" />
          </div>

          <p className="mt-4 text-base sm:text-lg text-[#4A4D52] font-sans">
            {ABOUT_DATA.headline}
          </p>
        </div>

        {/* Bloco Principal em Duas Colunas: Foto Oficial e Trajetória */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Foto Oficial do Dr. Carlos ("Foto Preta" de Terno com Acervo Científico) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              {/* Moldura Prata e Vinho */}
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[#FFFFFF] via-[#F3F4F6] to-[#E2E8F0] border border-[#CBD5E1] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)]">
                <div className="relative overflow-hidden rounded-xl bg-[#1A1A1A]">
                  <img
                    src={DOCTOR_DATA.images.about}
                    alt="Dr. Carlos Eduardo Carvalho Vilela com acervo científico"
                    className="w-full h-auto object-cover object-center max-h-[500px]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-md border border-[#E2E8F0]">
                    <p className="font-serif text-[#7A1F2B] font-bold text-sm">
                      Dr. Carlos Eduardo Carvalho Vilela
                    </p>
                    <p className="text-[11px] text-[#4A4D52]">
                      Cirurgião-Dentista | CRO-SP 62.085
                    </p>
                  </div>
                </div>
              </div>

              {/* Tag lateral com selo CRO */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-[#E2E8F0] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7A1F2B]" />
                <span className="text-xs font-bold text-[#1A1A1A]">
                  CRO-SP 62.085 Oficial
                </span>
              </div>
            </div>
          </div>

          {/* Texto Sobre a Trajetória, Formação e Valores */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-sm sm:text-base text-[#333333] leading-relaxed">
              {ABOUT_DATA.bioParagraphs.map((paragraph, idx) => (
                <p key={idx} className="font-sans">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Três Valores: Empatia, Escuta Ativa, Foco e Previsibilidade */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#7A1F2B] mb-3">
                Valores Inegociáveis no Atendimento
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ABOUT_DATA.coreValues.map((val, idx) => (
                  <div
                    key={val.label}
                    className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#7A1F2B]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      {valueIcons[idx]}
                      <span className="font-serif font-bold text-xs sm:text-sm text-[#1A1A1A]">
                        {val.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#4A4D52] leading-tight">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Destaque para os Livros Científicos */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#FDF5F6] via-white to-[#F8FAFC] border border-[#F9EBEF] shadow-sm flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#7A1F2B] text-white flex-shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#7A1F2B]">
                  {ABOUT_DATA.booksHighlight.title}
                </h4>
                <p className="text-xs text-[#4A4D52] mt-1 leading-relaxed">
                  {ABOUT_DATA.booksHighlight.desc}
                </p>
              </div>
            </div>

            {/* Formação Acadêmica e Especialidades */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#7A1F2B] mb-3">
                Formação Acadêmica & Especialidades
              </h3>
              <div className="space-y-3">
                {ABOUT_DATA.credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#CBD5E1] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-serif font-bold text-sm text-[#1A1A1A]">
                        {cred.title}
                      </div>
                      <div className="text-xs text-[#7A1F2B] font-medium">
                        {cred.institution}
                      </div>
                      <div className="text-xs text-[#6B7280] mt-0.5">
                        {cred.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botão de Contato / Agendamento */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#000000] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm border border-[#333333]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>AGENDAR CONSULTA COM O DR. CARLOS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
