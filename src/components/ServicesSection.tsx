import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Bone, Cpu, Smile, Layers } from 'lucide-react';
import { DOCTOR_DATA, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './BrandIcons';

export const CLINICAL_SERVICES = [
  {
    id: 'implantes',
    title: 'Especialista em Implantes Dentários',
    badge: 'Especialidade Principal',
    icon: <ShieldCheck className="w-6 h-6 text-[#8B0000]" />,
    description:
      'Substituição de raízes dentárias perdidas por pinos de titânio biocompatível de alta durabilidade. Garante firmeza idêntica à dos dentes naturais, devolvendo o prazer de mastigar, falar e sorrir com total confiança.',
    details: [
      'Integração óssea (osseointegração) comprovada cientificamente',
      'Pós-operatório mais confortável com aplicação de Laserterapia (USP)',
      'Planejamento milimétrico com tomografia e cirurgia guiada',
    ],
    whatsappPrompt: 'Olá Dr. Carlos, vim pelo site e gostaria de saber mais sobre Implantes Dentários.',
  },
  {
    id: 'enxerto',
    title: 'Enxerto Ósseo',
    badge: 'Cirurgia Regenerativa',
    icon: <Bone className="w-6 h-6 text-[#8B0000]" />,
    description:
      'Procedimento regenerativo avançado indicado para pacientes que apresentam perda de espessura ou altura óssea. Reconstrói o suporte estrutural necessário para receber os implantes com segurança e estabilidade.',
    details: [
      'Recuperação do volume ósseo maxilar e mandibular',
      'Técnicas cirúrgicas seguras e modernas com biomateriais consagrados',
      'Garantia de base sólida para reabilitações duradouras',
    ],
    whatsappPrompt: 'Olá Dr. Carlos, gostaria de saber mais sobre o procedimento de Enxerto Ósseo.',
  },
  {
    id: 'lentes-emax',
    title: 'Lentes de Emax',
    badge: 'Estética em Porcelana',
    icon: <Sparkles className="w-6 h-6 text-[#8B0000]" />,
    description:
      'Facetas e lentes de contato dental confeccionadas em cerâmica de dissilicato de lítio (Emax). Oferecem resistência superior e translucidez impecável para harmonizar cor, formato e alinhamento do sorriso.',
    details: [
      'Dissilicato de Emax: máxima resistência e longevidade estética',
      'Mínimo desgaste dental, preservando a estrutura original',
      'Naturalidade translúcida que imita perfeitamente o esmalte do dente',
    ],
    whatsappPrompt: 'Olá Dr. Carlos, gostaria de saber mais sobre Lentes de Emax para meu sorriso.',
  },
  {
    id: 'reabilitacao',
    title: 'Reabilitação Oral',
    badge: 'Restauração Completa',
    icon: <Layers className="w-6 h-6 text-[#8B0000]" />,
    description:
      'Tratamento integrado que recupera a saúde bucal global, corrigindo a oclusão (mordida), substituindo múltiplos dentes perdidos e devolvendo a harmonia estética e funcional de todo o sistema masticatório.',
    details: [
      'Planejamento personalizado envolvendo próteses fixas e implantes',
      'Correção da mordida e alívio de dores articulares e musculares',
      'Devolução integral da função mastigatória e da autoestima',
    ],
    whatsappPrompt: 'Olá Dr. Carlos, gostaria de agendar uma avaliação para Reabilitação Oral.',
  },
  {
    id: 'protocolos',
    title: 'Protocolos para Desdentados',
    badge: 'Próteses Fixas Totais',
    icon: <Smile className="w-6 h-6 text-[#8B0000]" />,
    description:
      'Solução definitiva para pacientes que utilizam dentaduras móveis instáveis. O protocolo fixo sobre implantes (como All-on-4) prende-se firmemente aos pinos de titânio, eliminando a necessidade de próteses removíveis.',
    details: [
      'Firmeza absoluta: não solta ao falar ou mastigar',
      'Eliminação completa de feridas e desconfortos causados por próteses móveis',
      'Sorriso fixo, estético e rejuvenescedor com alta durabilidade',
    ],
    whatsappPrompt: 'Olá Dr. Carlos, gostaria de saber mais sobre Protocolos para Desdentados.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-bold text-[#8B0000] tracking-wide">
            Especialidades e Tratamentos Oferecidos · {DOCTOR_DATA.cro}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1617] mt-2 leading-[1.12]">
            Serviços Especializados do Dr. Carlos Vilela
          </h2>
          <p className="text-base sm:text-lg text-[#524344] mt-4 leading-relaxed">
            Conheça os tratamentos de alta precisão conduzidos com 27 anos de experiência clínica,
            rigor científico e atendimento humanizado em São Bernardo do Campo.
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINICAL_SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-7 sm:p-8 rounded-2xl bg-white border border-[#E8DFD1] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1 border-2 border-[#8B0000]/30' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8DFD1] flex items-center justify-center shrink-0">
                    {srv.icon}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[#8B0000] border border-[#E8DFD1]">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#1C1617] leading-snug">
                  {srv.title}
                </h3>

                <p className="text-sm text-[#4A3B3C] leading-relaxed">{srv.description}</p>

                <div className="pt-3 border-t border-[#E8DFD1] space-y-2">
                  <p className="text-xs font-bold text-[#590009]">Destaques do Procedimento:</p>
                  <ul className="space-y-1.5 text-xs text-[#3A2E2F]">
                    {srv.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8B0000] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DFD1]">
                <a
                  href={getWhatsAppUrl(srv.whatsappPrompt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#8B0000] hover:bg-[#73000A] shadow-xs hover:shadow-md transition-all duration-200 hover:scale-[1.01]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span>Agendar Avaliação</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
