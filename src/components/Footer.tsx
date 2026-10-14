import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { DOCTOR_DATA, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../data/content';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4EFE6] text-[#2A2021] border-t border-[#E8DFD1] pt-16 pb-28 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E8DFD1]">
          {/* Col 1: Brand, Official Signature & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E8DFD1] shadow-2xs flex items-center justify-center p-1.5 overflow-hidden shrink-0">
                <img
                  src={DOCTOR_DATA.officialLogo}
                  alt="Logo Oficial Dr. Carlos Vilela"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#8B0000] bg-white px-2 py-0.5 rounded border border-[#E8DFD1]">
                    {DOCTOR_DATA.cro}
                  </span>
                  <span className="text-xs font-semibold text-[#524344]">
                    {DOCTOR_DATA.clinicName} (27 anos)
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#590009]">
                  {DOCTOR_DATA.fullName}
                </h3>
                <p className="text-xs font-bold text-[#8B0000] mt-1">
                  {DOCTOR_DATA.signature}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#4A3B3C] leading-relaxed max-w-md">
              Cirurgião-dentista, especialista em Implantodontia, mestre em Laser na Odontologia
              pela <strong>USP/IPEN</strong> e formação em Odontologia Legal e Forense pela{' '}
              <strong>Faculdade São Leopoldo Mandic</strong>. Conectando 27 anos de prática clínica
              à mentoria profissional e análise pericial especializada.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={DOCTOR_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram oficial @dr.carlosecvilela"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#E8DFD1] hover:bg-[#FAF8F5] text-xs font-semibold text-[#590009] shadow-2xs transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#8B0000]" />
                <span>{DOCTOR_DATA.instagramHandle}</span>
              </a>

              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.floating)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp oficial do Dr. Carlos Vilela"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#15803D] hover:bg-[#166534] text-xs font-bold text-white shadow-2xs transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp: {DOCTOR_DATA.phoneMobile}</span>
              </a>

              <a
                href={`mailto:${DOCTOR_DATA.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#E8DFD1] hover:bg-[#FAF8F5] text-xs font-semibold text-[#1C1617] shadow-2xs transition-colors"
              >
                <Mail className="w-4 h-4 text-[#8B0000]" />
                <span>{DOCTOR_DATA.email}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#8B0000] tracking-wide">
              Navegação Rápida
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#4A3B3C]">
              <li>
                <a href="#inicio" className="hover:text-[#8B0000] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#8B0000] transition-colors">
                  Sobre o Dr.
                </a>
              </li>
              <li>
                <a href="#implantes" className="hover:text-[#8B0000] transition-colors">
                  Implantes
                </a>
              </li>
              <li>
                <a href="#clareamento" className="hover:text-[#8B0000] transition-colors">
                  Clareamento
                </a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-[#8B0000] transition-colors">
                  Mentoria & Perícia
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#8B0000] font-semibold text-[#8B0000] transition-colors">
                  Dúvidas / FAQ
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#8B0000] transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#8B0000] transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#8B0000] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Contacts */}
          <div className="lg:col-span-4 space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-bold text-[#8B0000] tracking-wide">
              Canais Oficiais de Contato
            </h4>
            <div className="space-y-2 text-[#3A2E2F]">
              <p className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-[#15803D] shrink-0" />
                <span>
                  <strong>WhatsApp Principal / Mentoria:</strong> {DOCTOR_DATA.phoneMobile}
                </span>
              </p>
              <p className="flex items-center gap-2 text-xs text-[#524344]">
                <Phone className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>Consultório ProDents: {DOCTOR_DATA.phoneClinicMobile} · {DOCTOR_DATA.phoneLandline}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8B0000] shrink-0" />
                <a href={`mailto:${DOCTOR_DATA.email}`} className="text-[#8B0000] font-semibold hover:underline">
                  {DOCTOR_DATA.email}
                </a>
              </p>
              <p className="flex items-start gap-2 pt-1 text-xs text-[#524344]">
                <MapPin className="w-4 h-4 text-[#8B0000] shrink-0 mt-0.5" />
                <span>{DOCTOR_DATA.address}</span>
              </p>
              <p className="flex items-center gap-2 text-xs text-[#73000A] font-semibold">
                <Clock className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>{DOCTOR_DATA.hours}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#524344]">
          <p>
            © {new Date().getFullYear()} {DOCTOR_DATA.fullName} · {DOCTOR_DATA.cro}. Todos os direitos reservados.
          </p>
          <p className="italic">
            {DOCTOR_DATA.signature}
          </p>
        </div>
      </div>
    </footer>
  );
};
