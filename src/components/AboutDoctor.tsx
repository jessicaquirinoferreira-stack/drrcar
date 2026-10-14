import React from 'react';
import { motion } from 'motion/react';
import {
  HeartHandshake,
  Sparkles,
  Cpu,
  Award,
  ShieldCheck,
  Clock,
  GraduationCap,
  Quote,
  Building2,
} from 'lucide-react';
import {
  DOCTOR_DATA,
  CREDENTIALS_LIST,
  ABOUT_DIFFERENTIALS,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '../data/content';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';

const DIFFERENTIAL_ICONS: Record<string, React.ReactNode> = {
  empatia: <HeartHandshake className="w-5 h-5 text-[#8B0000]" />,
  personalizado: <Sparkles className="w-5 h-5 text-[#8B0000]" />,
  tecnicas: <Cpu className="w-5 h-5 text-[#8B0000]" />,
  durabilidade: <Award className="w-5 h-5 text-[#8B0000]" />,
  seguranca: <ShieldCheck className="w-5 h-5 text-[#8B0000]" />,
  horarios: <Clock className="w-5 h-5 text-[#8B0000]" />,
};

export const AboutDoctor: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: Doctor Real Photo (5090 - Livros de Implantodontia e Odontologia Legal) & Official Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD1] shadow-md bg-white h-full flex flex-col">
              <div className="relative flex-1 min-h-[460px]">
                <img
                  src={DOCTOR_DATA.images.about}
                  onError={(e) => {
                    e.currentTarget.src = DOCTOR_DATA.localBackups.about;
                  }}
                  alt="Dr. Carlos Eduardo Carvalho Vilela com livros de Implantodontia, Odontologia Legal e Reabilitação Oral"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs text-[#D4AF37] font-semibold">
                    {DOCTOR_DATA.cro} · {DOCTOR_DATA.motto}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-0.5">
                    {DOCTOR_DATA.fullName}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F4EFE6] mt-1">
                    Especialista em Implantodontia · Mestre em Laser (USP/IPEN) · Odontologia Legal
                  </p>
                </div>
              </div>

              {/* Instagram Official Strip */}
              <div className="p-4 bg-[#F4EFE6] border-t border-[#E8DFD1] flex items-center justify-between gap-4">
                <div className="text-xs text-[#3A2E2F]">
                  <span className="font-semibold text-[#590009]">Acompanhe casos clínicos:</span>{' '}
                  <span>{DOCTOR_DATA.instagramHandle}</span>
                </div>
                <a
                  href={DOCTOR_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B0000] hover:text-[#590009] transition-colors whitespace-nowrap shrink-0"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Ver Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bio & Academic Authority Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#8B0000] tracking-wide">
                <GraduationCap className="w-4 h-4" />
                <span>{DOCTOR_DATA.motto.toUpperCase()}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#524344] font-semibold">{DOCTOR_DATA.cro}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1C1617] leading-[1.15]">
                {DOCTOR_DATA.fullName}
              </h2>

              <p className="text-base sm:text-lg text-[#3A2E2F] leading-relaxed font-medium">
                Cirurgião-dentista, especialista em Implantodontia, mestre em Laser na Odontologia
                pela <strong className="font-bold text-[#590009]">USP/IPEN</strong> e profissional
                com formação em Odontologia Legal e Forense pela{' '}
                <strong className="font-bold text-[#590009]">Faculdade São Leopoldo Mandic</strong>.
              </p>

              <p className="text-sm sm:text-base text-[#4A3B3C] leading-relaxed">
                Com trajetória na Odontologia desde o final da década de 1990, o Dr. Carlos
                construiu sua experiência na prática clínica, na docência e na análise técnica de
                questões odontológicas complexas.
              </p>

              {/* Atuação Clínica e Tradição do Dr. Carlos */}
              <div className="p-4 rounded-xl bg-white border border-[#E8DFD1] flex items-center gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E8DFD1] flex items-center justify-center text-[#8B0000] shrink-0">
                  <Building2 className="w-5 h-5 text-[#8B0000]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#590009]">
                    Consultório Próprio com 27 Anos de Prática Clínica e Dedicação Integral
                  </p>
                  <p className="text-xs text-[#524344]">
                    Localizado na {DOCTOR_DATA.address}, com atendimento humanizado, ética e tecnologia.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Pillars of Comprehensive Formation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CREDENTIALS_LIST.map((cred, index) => (
                <div
                  key={cred.title}
                  className="p-4 rounded-xl bg-white border border-[#E8DFD1] shadow-2xs hover:border-[#8B0000]/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-[#8B0000]">0{index + 1}. Formação</span>
                    <span className="font-semibold text-[#524344]">{cred.institution}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1C1617]">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-[#524344] mt-1 leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Official Trajectory Summary Quote */}
            <blockquote className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8DFD1] relative">
              <Quote className="w-7 h-7 text-[#C59B6D]/40 absolute top-4 right-4" />
              <p className="font-display italic text-lg sm:text-xl text-[#590009] font-bold leading-snug">
                “{DOCTOR_DATA.trajectorySummary}”
              </p>
              <footer className="mt-1.5 text-xs font-semibold text-[#4A3B3C]">
                — {DOCTOR_DATA.fullName} · {DOCTOR_DATA.cro}
              </footer>
            </blockquote>

            {/* CTA */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.about)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#8B0000] hover:bg-[#73000A] shadow-md transition-all duration-200 hover:scale-[1.02] whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#D4AF37]" />
                <span>Falar com o Dr. Carlos no WhatsApp</span>
              </a>
              <span className="text-xs text-[#524344]">
                Atendimento agendado até às 22h com hora marcada
              </span>
            </div>
          </motion.div>
        </div>

        {/* 6 Differentials Cards Grid */}
        <div className="mt-16 pt-14 border-t border-[#E8DFD1]">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold text-[#8B0000] tracking-wide">
              {DOCTOR_DATA.experienceYears.toUpperCase()}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1617] mt-1">
              Diferenciais do Atendimento do Dr. Carlos Vilela
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_DIFFERENTIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-[#E8DFD1] hover:border-[#8B0000]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E8DFD1] flex items-center justify-center mb-4">
                    {DIFFERENTIAL_ICONS[item.id]}
                  </div>
                  <h4 className="font-display text-xl font-semibold text-[#1C1617]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#524344] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
