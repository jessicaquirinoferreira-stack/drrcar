import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  Mail,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import {
  DOCTOR_DATA,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '../data/content';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Consulta Clínica / Avaliação');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    if (!name.trim()) return;

    const formattedMsg = `Olá, Dr. Carlos Vilela! Meu nome é ${name}. Vim pelo site oficial e gostaria de falar sobre: ${interest}.${
      phone ? ` Meu telefone é ${phone}.` : ''
    }${message ? ` Mensagem: ${message}` : ''}`;

    const url = getWhatsAppUrl(formattedMsg);
    setSubmitted(true);
    window.open(url, '_blank');
  };

  const bigWhatsAppUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.contact);

  return (
    <section
      id="contato"
      className="relative py-20 lg:py-28 bg-white border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Elementos sutis de fundo */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-[#F8FAFC] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FDF5F6] border border-[#F9EBEF] text-xs font-bold tracking-widest text-[#7A1F2B] uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CANAL DIRETO DE ATENDIMENTO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Entre em Contato com o Dr. Carlos Vilela
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#CBD5E1]" />
            <div className="w-2 h-2 rounded-full bg-[#7A1F2B]" />
            <div className="h-[1px] w-16 bg-[#CBD5E1]" />
          </div>

          <p className="mt-4 text-base sm:text-lg text-[#4A4D52] font-sans">
            Agende sua avaliação clínica, tire dúvidas sobre mentoria profissional ou
            solicite assistência técnica pericial em São Bernardo do Campo.
          </p>
        </div>

        {/* Grade de 2 Colunas: Informações Oficiais e Formulário Simples */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Coluna da Esquerda: Informações de Contato, Endereço e Instagram */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-white via-[#FAFAFA] to-[#F8FAFC] border border-[#CBD5E1] shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#7A1F2B]">
                Informações de Atendimento
              </h3>

              {/* WhatsApp Oficial */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FDF5F6] border border-[#F9EBEF] flex items-center justify-center text-[#7A1F2B] flex-shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-[#7A1F2B]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#6B7280] font-bold block">
                    WhatsApp Oficial / Mentoria & Perícia
                  </span>
                  <a
                    href={bigWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl font-bold text-[#1A1A1A] hover:text-[#7A1F2B] transition-colors"
                  >
                    {DOCTOR_DATA.phoneMobile}
                  </a>
                  <p className="text-xs text-[#4A4D52] mt-0.5">
                    Canal direto com o consultório para agendamentos rápidos
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FDF5F6] border border-[#F9EBEF] flex items-center justify-center text-[#7A1F2B] flex-shrink-0">
                  <InstagramIcon className="w-5 h-5 text-[#7A1F2B]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#6B7280] font-bold block">
                    Instagram Oficial
                  </span>
                  <a
                    href={DOCTOR_DATA.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl font-bold text-[#1A1A1A] hover:text-[#7A1F2B] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{DOCTOR_DATA.instagramHandle}</span>
                    <ExternalLink className="w-4 h-4 text-[#7A1F2B]" />
                  </a>
                  <p className="text-xs text-[#4A4D52] mt-0.5">
                    Acompanhe casos clínicos, publicações científicas e bastidores
                  </p>
                </div>
              </div>

              {/* Endereço em São Bernardo do Campo */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FDF5F6] border border-[#F9EBEF] flex items-center justify-center text-[#7A1F2B] flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#7A1F2B]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#6B7280] font-bold block">
                    Endereço do Consultório
                  </span>
                  <p className="font-serif text-base font-bold text-[#1A1A1A]">
                    {DOCTOR_DATA.address}
                  </p>
                  <p className="text-xs text-[#4A4D52] mt-0.5">
                    Localização privilegiada e de fácil acesso no ABC Paulista
                  </p>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FDF5F6] border border-[#F9EBEF] flex items-center justify-center text-[#7A1F2B] flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#7A1F2B]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#6B7280] font-bold block">
                    Horário de Atendimento
                  </span>
                  <p className="font-serif text-base font-bold text-[#1A1A1A]">
                    Segunda a Sexta · Atendimento até às 22h
                  </p>
                  <p className="text-xs text-[#4A4D52] mt-0.5">
                    Exclusivamente com agendamento prévio com hora marcada
                  </p>
                </div>
              </div>

              {/* Telefone Fixo e E-mail */}
              <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap gap-6 text-xs text-[#4A4D52]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#7A1F2B]" />
                  <span>Fixo: {DOCTOR_DATA.phoneLandline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#7A1F2B]" />
                  <span>{DOCTOR_DATA.email}</span>
                </div>
              </div>
            </div>

            {/* BOTÃO GRANDE DE WHATSAPP (solicitado explicitamente no prompt) */}
            <a
              href={bigWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3.5 py-5 px-8 rounded-full bg-[#1A1A1A] hover:bg-[#000000] text-white font-sans text-sm sm:text-base font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:scale-[1.02] border border-[#333333]"
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
              <span>FALAR DIRETAMENTE PELO WHATSAPP</span>
            </a>
          </div>

          {/* Coluna da Direita: Formulário Simples */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#CBD5E1] shadow-md">
              <div className="mb-6">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#7A1F2B] block">
                  Mensagem Direta
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  Envie sua Mensagem
                </h3>
                <p className="text-xs text-[#6B7280] mt-1">
                  Preencha os campos abaixo para iniciar seu contato personalizado com o Dr. Carlos.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Dra. Mariana Silva ou Carlos Santos"
                    className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-[#F9FAFB] text-[#1A1A1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1F2B]/20 focus:border-[#7A1F2B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                    Telefone ou WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-[#F9FAFB] text-[#1A1A1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1F2B]/20 focus:border-[#7A1F2B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                    Assunto de Interesse
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-[#F9FAFB] text-[#1A1A1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1F2B]/20 focus:border-[#7A1F2B] transition-all"
                  >
                    <option value="Consulta Clínica / Avaliação">Consulta Clínica / Avaliação com o Dr. Carlos</option>
                    <option value="Implantes Dentários e Reabilitação">Implantes Dentários e Reabilitação Oral</option>
                    <option value="Mentoria Clínica para Dentistas">Mentoria Clínica para Cirurgiões-Dentistas</option>
                    <option value="Assistência Técnica Pericial Odontológica">Assistência Técnica Pericial & Pareceres</option>
                    <option value="Outro Assunto">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                    Mensagem ou Detalhes (Opcional)
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte brevemente sobre o seu caso, dúvida ou objetivo..."
                    className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-[#F9FAFB] text-[#1A1A1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1F2B]/20 focus:border-[#7A1F2B] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#7A1F2B] hover:bg-[#5C121C] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>ENVIAR VIA WHATSAPP</span>
                </button>

                {submitted && (
                  <div className="p-3.5 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center gap-2.5 text-xs text-[#166534]">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                    <span>Mensagem preparada! Abrindo conversa oficial no WhatsApp...</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
