import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquareHeart, X, Send, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import {
  DOCTOR_DATA,
  ASSISTANT_TOPICS,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
  AssistantTopic,
} from '../data/content';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  whatsappPrompt?: string;
}

export const FloatingElements: React.FC = () => {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Olá! Sou o Assistente Virtual do Dr. Carlos Eduardo Carvalho Vilela. Como posso orientar você hoje? Escolha uma dúvida abaixo ou digite sua pergunta sobre Implantes, Clareamento, Mentoria Odontológica ou Assistência Pericial:',
      whatsappPrompt: WHATSAPP_MESSAGES.assistant,
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (assistantOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, assistantOpen]);

  const handleSelectTopic = (topic: AssistantTopic) => {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: topic.question,
    };

    const botMsg: ChatMessage = {
      id: `bot-${Date.now() + 1}`,
      sender: 'assistant',
      text: `${topic.answer}\n\nPara atendimento direto com o Dr. Carlos Vilela, converse pelo WhatsApp (${DOCTOR_DATA.phoneMobile}) ou envie um e-mail para ${DOCTOR_DATA.email}!`,
      whatsappPrompt: topic.whatsappPrompt,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const matchFreeTextToAnswer = (query: string): { answer: string; prompt: string } => {
    const q = query.toLowerCase();

    if (q.includes('mentoria') || q.includes('pacote') || q.includes('valor') || q.includes('preço') || q.includes('preco') || q.includes('consulta avulsa') || q.includes('4 consultas') || q.includes('8 consultas')) {
      return {
        answer:
          'A Mentoria Odontológica do Dr. Carlos Vilela oferece 3 formatos de atendimento: Consulta Avulsa (demanda pontual), Pacote Mensal de 4 Consultas (1x por semana) ou Pacote Mensal de 8 Consultas (2x por semana). É indicada para recém-formados e dentistas experientes para aprimoramento clínico, planejamento e Odontologia Legal. Valores e disponibilidade são informados pelo WhatsApp (11) 97446-5956 ou e-mail dr.carlosvilela@uol.com.br.',
        prompt: WHATSAPP_MESSAGES.mentorship,
      };
    }

    if (q.includes('email') || q.includes('e-mail') || q.includes('contato') || q.includes('whatsapp') || q.includes('telefone')) {
      return {
        answer: `Contatos oficiais do Dr. Carlos Vilela:\n• WhatsApp Principal / Mentoria: ${DOCTOR_DATA.phoneMobile}\n• WhatsApp Consultório: ${DOCTOR_DATA.phoneClinicMobile}\n• Telefone Fixo: ${DOCTOR_DATA.phoneLandline}\n• E-mail: ${DOCTOR_DATA.email}\n• Instagram: ${DOCTOR_DATA.instagramHandle}\n• Consultório: ${DOCTOR_DATA.address} (atendimento agendado até às 22h).`,
        prompt: WHATSAPP_MESSAGES.floating,
      };
    }

    if (q.includes('perícia') || q.includes('pericia') || q.includes('judicial') || q.includes('processo') || q.includes('forense') || q.includes('legal') || q.includes('laudo')) {
      return {
        answer: ASSISTANT_TOPICS[3].answer,
        prompt: ASSISTANT_TOPICS[3].whatsappPrompt,
      };
    }

    if (q.includes('clareamento') || q.includes('clarear') || q.includes('café') || q.includes('cafe') || q.includes('vinho') || q.includes('dor') || q.includes('sensibilidade')) {
      return {
        answer: ASSISTANT_TOPICS[5].answer,
        prompt: ASSISTANT_TOPICS[5].whatsappPrompt,
      };
    }

    if (q.includes('implante') || q.includes('titânio') || q.includes('titanio') || q.includes('prótese') || q.includes('protese') || q.includes('perda')) {
      return {
        answer: ASSISTANT_TOPICS[4].answer,
        prompt: ASSISTANT_TOPICS[4].whatsappPrompt,
      };
    }

    return {
      answer: `O Dr. Carlos Eduardo Carvalho Vilela (CRO-SP 62085) atua há 27 anos com excelência em Implantodontia, Laser (USP/IPEN), Odontologia Legal (São Leopoldo Mandic), Mentoria profissional e Perícias Cíveis.\n\nPara tirar sua dúvida específica, converse diretamente pelo WhatsApp (${DOCTOR_DATA.phoneMobile}) ou envie um e-mail para ${DOCTOR_DATA.email}.`,
      prompt: `Olá Dr. Carlos, vim pelo site e gostaria de orientação sobre: ${query}`,
    };
  };

  const handleSendText = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const matched = matchFreeTextToAnswer(trimmed);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
    };

    const botMsg: ChatMessage = {
      id: `bot-${Date.now() + 1}`,
      sender: 'assistant',
      text: `${matched.answer}\n\nConverse com o Dr. Carlos no WhatsApp (${DOCTOR_DATA.phoneMobile}) ou acesse nosso Instagram oficial!`,
      whatsappPrompt: matched.prompt,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputValue('');
  };

  return (
    <>
      {/* LEFT FLOATING BUTTON: Assistente Virtual */}
      <div className="fixed left-3 sm:left-5 bottom-5 z-40">
        <button
          type="button"
          onClick={() => setAssistantOpen((prev) => !prev)}
          aria-label="Abrir Assistente Virtual do Dr. Carlos Vilela"
          className="group flex items-center gap-2.5 px-3.5 py-3 rounded-2xl bg-white hover:bg-[#FAF8F5] text-[#1C1617] border-2 border-[#8B0000]/30 hover:border-[#8B0000] shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-xl bg-[#FAF8F5] border border-[#E8DFD1] flex items-center justify-center text-[#8B0000]">
              <MessageSquareHeart className="w-4 h-4 text-[#8B0000]" />
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#8B0000] rounded-full ring-2 ring-white animate-pulse" />
          </div>
          <div className="text-left hidden sm:block pr-1">
            <p className="text-xs font-bold text-[#590009] leading-none">Dúvidas Rápidas</p>
            <p className="text-[10px] text-[#524344] mt-0.5">Assistente Virtual</p>
          </div>
        </button>
      </div>

      {/* Floating Chat Window */}
      <AnimatePresence>
        {assistantOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-3 sm:left-5 bottom-20 z-50 w-[calc(100vw-24px)] sm:w-96 max-h-[580px] bg-white border border-[#E8DFD1] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-[#FAF8F5] border-b border-[#E8DFD1] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E8DFD1] flex items-center justify-center text-[#8B0000]">
                  <Sparkles className="w-4 h-4 text-[#8B0000]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#590009]">
                    Assistente do Dr. Carlos Vilela
                  </h3>
                  <p className="text-[10px] text-[#524344]">
                    Implantes · Clareamento · Mentoria · Perícia
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setAssistantOpen(false)}
                aria-label="Fechar assistente virtual"
                className="p-1 rounded-lg hover:bg-white text-[#524344] hover:text-[#8B0000] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-80 bg-[#FAF8F5]/50 text-xs">
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                        isUser
                          ? 'bg-[#8B0000] text-white rounded-br-xs'
                          : 'bg-white border border-[#E8DFD1] text-[#1C1617] shadow-2xs rounded-bl-xs'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>

                    {!isUser && msg.whatsappPrompt && (
                      <div className="flex items-center gap-2 mt-1.5 ml-1">
                        <a
                          href={getWhatsAppUrl(msg.whatsappPrompt)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-[10px] font-bold shadow-2xs transition-colors"
                        >
                          <WhatsAppIcon className="w-3 h-3" />
                          <span>Falar no WhatsApp ({DOCTOR_DATA.phoneMobile})</span>
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Question Buttons */}
            <div className="p-3 bg-[#FAF8F5] border-t border-[#E8DFD1]">
              <p className="text-[11px] font-bold text-[#590009] mb-2">
                Toque em uma dúvida rápida:
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                {ASSISTANT_TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleSelectTopic(topic)}
                    className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium bg-white hover:bg-[#8B0000] text-[#2A2021] hover:text-white border border-[#E8DFD1] transition-colors text-left cursor-pointer shadow-2xs"
                  >
                    {topic.shortLabel}
                  </button>
                ))}
              </div>
            </div>

            {/* Free Text Input */}
            <form
              onSubmit={handleSendText}
              className="p-3 bg-white border-t border-[#E8DFD1] flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua dúvida aqui..."
                aria-label="Digite sua dúvida para o assistente"
                className="flex-1 px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#E8DFD1] focus:border-[#8B0000] focus:bg-white focus:outline-none text-xs text-[#1C1617]"
              />
              <button
                type="submit"
                aria-label="Enviar pergunta"
                className="p-2.5 rounded-xl bg-[#8B0000] hover:bg-[#73000A] text-white transition-colors shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RIGHT FLOATING STACK: BOTÃO FLUTUANTE DO INSTAGRAM + BOTÃO FLUTUANTE DO WHATSAPP */}
      <div className="fixed right-3 sm:right-5 bottom-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* 1. BOTÃO FLUTUANTE OFICIAL DO INSTAGRAM (Solicitado explicitamente pelo usuário) */}
        <div className="pointer-events-auto group relative flex items-center">
          {/* Tooltip no Desktop */}
          <span className="hidden sm:inline-block mr-2 px-2.5 py-1 rounded-lg text-xs font-semibold text-white bg-black/80 backdrop-blur-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Siga no Instagram {DOCTOR_DATA.instagramHandle}
          </span>

          <a
            href={DOCTOR_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguir Dr. Carlos Vilela no Instagram @dr.carlosecvilela"
            title="Instagram oficial @dr.carlosecvilela"
            className="flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xl hover:shadow-2xl border-2 border-white transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="sr-only">Instagram @dr.carlosecvilela</span>
          </a>
        </div>

        {/* 2. BOTÃO FLUTUANTE OFICIAL DO WHATSAPP */}
        <div className="pointer-events-auto group relative flex items-center">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.floating)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar no WhatsApp com o Dr. Carlos Vilela"
            title={`Conversar no WhatsApp ${DOCTOR_DATA.phoneMobile}`}
            className="flex items-center gap-2.5 p-3 sm:px-5 sm:py-3.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white shadow-xl hover:shadow-2xl border-2 border-white transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce" />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold leading-tight whitespace-nowrap">
                WhatsApp Dr. Carlos
              </span>
              <span className="text-[10px] text-white/90 font-mono leading-tight">
                {DOCTOR_DATA.phoneMobile}
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
