import React, { useState } from 'react';
import { MapPin, Phone, Clock, CheckCircle2, Send, Building2, Mail, Sparkles } from 'lucide-react';
import { DOCTOR_DATA, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Implantes Dentários');
  const [period, setPeriod] = useState('Noite (18h às 22h)');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || name.trim().length < 2) {
      setError('Por favor, informe seu nome para o atendimento personalizado.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setError('Por favor, informe um telefone ou WhatsApp válido com DDD.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const customWhatsAppMessage = `Olá Dr. Carlos, meu nome é ${name || 'Interessado(a)'}. Vim pelo site e gostaria de agendar uma conversa para ${interest} (Preferência de horário: ${period}. Meu telefone: ${phone}).`;

  return (
    <section
      id="contato"
      className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8DFD1] text-[#1C1617] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Closing Statement Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <p className="text-xs sm:text-sm font-bold text-[#8B0000] tracking-wide">
            {DOCTOR_DATA.clinicName} · {DOCTOR_DATA.experienceYears} · {DOCTOR_DATA.cro}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1617] leading-[1.12]">
            “Seu novo sorriso e o aprimoramento da sua prática profissional começam aqui.”
          </h2>
          <p className="text-sm sm:text-base text-[#524344]">
            Converse diretamente pelo WhatsApp ou envie uma mensagem por e-mail. Atendimento clínico
            agendado até às 22h e consultoria/mentoria odontológica personalizada.
          </p>

          <p className="text-xs font-semibold text-[#8B0000]">
            {DOCTOR_DATA.signature}
          </p>

          {/* Giant High-Conversion WhatsApp Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl(
                'Olá Dr. Carlos, vim pelo site e quero conversar agora pelo WhatsApp!'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-5 rounded-2xl text-base sm:text-lg font-bold text-white bg-[#8B0000] hover:bg-[#73000A] shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-[1.03] whitespace-nowrap"
            >
              <WhatsAppIcon className="w-6 h-6 text-[#D4AF37]" />
              <span>Falar no WhatsApp · {DOCTOR_DATA.phoneMobile}</span>
            </a>

            <a
              href={`mailto:${DOCTOR_DATA.email}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-5 rounded-2xl text-sm sm:text-base font-semibold text-[#1C1617] bg-white hover:bg-[#FAF8F5] border border-[#E8DFD1] shadow-md transition-colors whitespace-nowrap"
            >
              <Mail className="w-5 h-5 text-[#8B0000]" />
              <span>{DOCTOR_DATA.email}</span>
            </a>
          </div>
        </div>

        {/* 2-Column Split: Contact Channels & Map (6 cols) + Interactive Booking Form (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Col 1 (6 cols): Official Address, Phones, Email & Embedded Map */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5 bg-white border border-[#E8DFD1] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-[#8B0000]">{DOCTOR_DATA.clinicName}</p>
                  <span className="text-[10px] font-bold text-[#524344] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E8DFD1]">
                    {DOCTOR_DATA.cro}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#1C1617] mt-0.5">
                  {DOCTOR_DATA.fullName}
                </h3>
                <p className="text-xs text-[#8B0000] font-medium mt-0.5">
                  {DOCTOR_DATA.signature}
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8DFD1] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#8B0000]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1C1617]">Telefones e WhatsApp</p>
                    <div className="flex flex-col gap-1 mt-0.5 text-[#3A2E2F] tabular-nums text-xs">
                      <a
                        href={getWhatsAppUrl('Olá Dr. Carlos, vim pelo site e gostaria de agendar uma conversa.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#8B0000] font-bold underline underline-offset-2 flex items-center gap-1.5"
                      >
                        <span>{DOCTOR_DATA.phoneMobile}</span>
                        <span className="text-[10px] font-normal text-[#8B0000] bg-[#FAF8F5] px-1.5 py-0.2 rounded border border-[#E8DFD1]">
                          Principal / Mentoria
                        </span>
                      </a>
                      <a
                        href={getWhatsAppUrl('Olá, gostaria de agendar uma consulta na ProDents.', true)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#8B0000] underline underline-offset-2 text-[#524344]"
                      >
                        {DOCTOR_DATA.phoneClinicMobile} (Consultório ProDents)
                      </a>
                      <a
                        href="tel:+551143685956"
                        className="hover:text-[#8B0000] underline underline-offset-2 text-[#524344]"
                      >
                        {DOCTOR_DATA.phoneLandline} (Telefone Fixo)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8DFD1] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#8B0000]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1C1617]">E-mail Oficial</p>
                    <a
                      href={`mailto:${DOCTOR_DATA.email}`}
                      className="text-xs text-[#8B0000] font-semibold hover:underline block mt-0.5"
                    >
                      {DOCTOR_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8DFD1] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#8B0000]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1C1617]">Endereço do Consultório</p>
                    <p className="text-[#524344] mt-0.5 leading-tight">{DOCTOR_DATA.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8DFD1] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#8B0000]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1C1617]">Horário Diferenciado</p>
                    <p className="text-[#524344] mt-0.5">{DOCTOR_DATA.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xl overflow-hidden border border-[#E8DFD1] h-32 bg-[#F4EFE6] relative shadow-2xs">
              <iframe
                title="Localização da ProDents Odontologia - Avenida Caminho do Mar, 2030, São Bernardo do Campo"
                src="https://www.google.com/maps?q=Avenida+Caminho+do+Mar,+2030,+Sao+Bernardo+do+Campo,+SP&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Col 2 (6 cols): Quick Pre-Evaluation & Mentorship Request Form */}
          <div className="lg:col-span-6 bg-white text-[#1C1617] rounded-2xl p-6 sm:p-8 border border-[#E8DFD1] shadow-xs flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-[#8B0000]">Agendamento Personalizado</p>
              <h3 className="font-display text-xl font-bold text-[#1C1617] mt-0.5">
                Solicite sua Consulta ou Mentoria
              </h3>
              <p className="text-xs text-[#524344] mt-1 mb-4">
                Preencha abaixo para direcionar seu atendimento ao WhatsApp oficial.
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#8B0000]/30 space-y-3 text-center my-2">
                  <div className="w-10 h-10 rounded-full bg-[#15803D]/15 text-[#15803D] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#1C1617]">
                    Tudo pronto, {name}!
                  </h4>
                  <p className="text-xs text-[#524344]">
                    Interesse em <strong>{interest}</strong> ({period}).
                  </p>
                  <a
                    href={getWhatsAppUrl(customWhatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-[#15803D] hover:bg-[#166534] shadow-md transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Abrir WhatsApp com {DOCTOR_DATA.phoneMobile}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] text-[#8B0000] hover:underline block mx-auto cursor-pointer"
                  >
                    Editar dados
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  {error && (
                    <p className="p-2.5 rounded-lg bg-[#8B0000]/10 border border-[#8B0000]/30 text-[#8B0000] font-medium text-xs">
                      {error}
                    </p>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block font-semibold text-[#1C1617] mb-1">
                      Seu Nome Completo
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Dra. Mariana Alencar"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8DFD1] focus:border-[#8B0000] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block font-semibold text-[#1C1617] mb-1">
                      WhatsApp com DDD
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8DFD1] focus:border-[#8B0000] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-interest" className="block font-semibold text-[#1C1617] mb-1">
                      Área de Interesse
                    </label>
                    <select
                      id="contact-interest"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8DFD1] focus:border-[#8B0000] focus:bg-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Mentoria Odontológica (Consulta Avulsa)">
                        Mentoria Odontológica (Consulta Avulsa)
                      </option>
                      <option value="Mentoria Odontológica (Pacote Mensal 4 consultas)">
                        Mentoria Odontológica (Pacote Mensal 4 consultas)
                      </option>
                      <option value="Mentoria Odontológica (Pacote Mensal 8 consultas)">
                        Mentoria Odontológica (Pacote Mensal 8 consultas)
                      </option>
                      <option value="Assistência Técnica em Processo Judicial">
                        Assistência Técnica em Processo Judicial
                      </option>
                      <option value="Implantes Dentários (Avaliação Clínica)">
                        Implantes Dentários (Avaliação Clínica)
                      </option>
                      <option value="Clareamento Dental com Laserterapia">
                        Clareamento Dental com Laserterapia
                      </option>
                      <option value="Reabilitação Oral e Cirurgias Avançadas">
                        Reabilitação Oral e Cirurgias Avançadas
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-period" className="block font-semibold text-[#1C1617] mb-1">
                      Preferência de Horário
                    </label>
                    <select
                      id="contact-period"
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8DFD1] focus:border-[#8B0000] focus:bg-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Noite (18h às 22h) - ProDents">
                        Noite (18h às 22h) · Horário Noturno ProDents
                      </option>
                      <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
                      <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                      <option value="Sábado (Sob consulta)">Sábado (Sob consulta)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-[#8B0000] hover:bg-[#73000A] shadow-sm transition-all duration-200 cursor-pointer hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Avançar para o WhatsApp ({DOCTOR_DATA.phoneMobile})</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-4 border-t border-[#E8DFD1] mt-4 flex items-center justify-between text-[11px] text-[#524344]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#15803D]" />
                Atendimento rápido pelo WhatsApp
              </span>
              <a
                href={`mailto:${DOCTOR_DATA.email}`}
                className="text-[#8B0000] font-semibold hover:underline"
              >
                {DOCTOR_DATA.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
