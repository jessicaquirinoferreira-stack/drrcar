import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Send,
  Sparkles,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';
import { DOCTOR_DATA, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../data/content';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  ctaType?: 'whatsapp' | 'instagram' | 'both' | 'none';
  customWaMessage?: string;
  timestamp: string;
}

export const ToothAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Mensagem inicial de boas-vindas do Dentinho
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome-1',
          sender: 'assistant',
          text: `Olá! Eu sou o Dentinho Virtual do consultório do Dr. Carlos Eduardo Carvalho Vilela (CRO-SP 62.085).`,
          timestamp: getCurrentTime(),
          ctaType: 'none',
        },
        {
          id: 'welcome-2',
          sender: 'assistant',
          text: `Estou aqui para tirar suas dúvidas rápidas sobre avaliações, implantes, horários estendidos até 22h, mentoria para dentistas e perícia judicial. Como posso te orientar hoje?`,
          timestamp: getCurrentTime(),
          ctaType: 'both',
        },
      ]);
    }
  }, [messages.length]);

  useEffect(() => {
    // Esconde o tooltip após 8 segundos
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  // Motor de conhecimento inteligente do consultório
  const getBotResponse = (query: string): { text: string; ctaType: 'whatsapp' | 'instagram' | 'both' | 'none'; customWaMessage?: string } => {
    const q = query.toLowerCase();

    // 1. Agendamento / Avaliação / Consulta
    if (q.includes('agendar') || q.includes('consulta') || q.includes('avaliação') || q.includes('marcar') || q.includes('atendimento')) {
      return {
        text: `O Dr. Carlos Vilela realiza avaliações detalhadas com planejamento individualizado e diagnóstico seguro. Os atendimentos são previamente agendados e ocorrem até às 22h em São Bernardo do Campo. Você pode escolher seu melhor dia e horário diretamente pelo WhatsApp!`,
        ctaType: 'whatsapp',
        customWaMessage: 'Olá, Dr. Carlos! Conversei com o Dentinho Virtual no site e gostaria de agendar uma consulta de avaliação.',
      };
    }

    // 2. Horários / Noite / 22h
    if (q.includes('horário') || q.includes('hora') || q.includes('22h') || q.includes('noite') || q.includes('funciona') || q.includes('aberto')) {
      return {
        text: `Para a conveniência de quem tem rotina intensa, o consultório oferece atendimento com horário estendido agendado até às 22h, de segunda a sexta-feira. Todas as consultas têm hora marcada e pontualidade rigorosa.`,
        ctaType: 'whatsapp',
        customWaMessage: 'Olá, Dr. Carlos! Gostaria de agendar uma consulta no período noturno (até às 22h).',
      };
    }

    // 3. Endereço / Onde fica / Localização
    if (q.includes('endereço') || q.includes('onde') || q.includes('local') || q.includes('fica') || q.includes('sbc') || q.includes('são bernardo') || q.includes('chegar')) {
      return {
        text: `O consultório está localizado na Avenida Caminho do Mar, 2030 – Rudge Ramos, São Bernardo do Campo / SP. Fácil acesso pelo ABC Paulista e com total comodidade e segurança.`,
        ctaType: 'whatsapp',
        customWaMessage: 'Olá, Dr. Carlos! Gostaria de confirmar o endereço e detalhes para estacionamento/chegada ao consultório.',
      };
    }

    // 4. Implantes / Enxerto / Pouco osso / Dor
    if (q.includes('implante') || q.includes('enxerto') || q.includes('pouco osso') || q.includes('dente') || q.includes('prótese') || q.includes('protocolo') || q.includes('dói') || q.includes('dor')) {
      return {
        text: `O Dr. Carlos possui mais de 27 anos de experiência em Implantodontia e é mestre em Laser pela USP/IPEN. Os procedimentos são confortáveis e seguros, associados à Biofotônica para rápida regeneração e sem dor. Mesmo pacientes com perda óssea avançada podem receber tratamentos previsíveis com enxertia moderna.`,
        ctaType: 'whatsapp',
        customWaMessage: 'Olá, Dr. Carlos! Tenho interesse em implantes dentários/reabilitação e gostaria de agendar uma avaliação clínica.',
      };
    }

    // 5. Mentoria para Dentistas
    if (q.includes('mentoria') || q.includes('curso') || q.includes('dentista') || q.includes('colega') || q.includes('caso clínico') || q.includes('aluno')) {
      return {
        text: `A Mentoria Clínica do Dr. Carlos Vilela é voltada a cirurgiões-dentistas que buscam excelência prática, segurança em planejamento cirúrgico 3D de implantes e manejo de casos complexos. É um programa individual ou em grupos reduzidos com discussão 1 a 1.`,
        ctaType: 'whatsapp',
        customWaMessage: 'Olá, Dr. Carlos! Sou cirurgião-dentista e gostaria de obter detalhes sobre a Mentoria Clínica individual.',
      };
    }

    // 6. Odontologia Legal & Assistência Técnica Pericial
    if (q.includes('perícia') || q.includes('pericia') || q.includes('legal') || q.includes('processo') || q.includes('laudo') || q.includes('assistente técnico') || q.includes('judicial') || q.includes('advogado')) {
      return {
        text: `Com formação em Odontologia Legal e Forense pela Faculdade São Leopoldo Mandic, o Dr. Carlos atua como Assistente Técnico em processos judiciais, formulando quesitos estratégicos, pareceres técnicos e análise probatória circunstanciada para advogados e partes.`,
        ctaType: 'whatsapp',
        customWaMessage: 'Olá, Dr. Carlos! Gostaria de consultar sobre atuação em Assistência Técnica Pericial / Parecer Técnico.',
      };
    }

    // 7. Instagram
    if (q.includes('instagram') || q.includes('insta') || q.includes('rede') || q.includes('fotos') || q.includes('casos')) {
      return {
        text: `Você pode acompanhar o dia a dia clínico, dicas científicas e bastidores no perfil oficial do Instagram: @dr.carlosecvilela. Siga o Dr. Carlos e acompanhe os conteúdos!`,
        ctaType: 'instagram',
      };
    }

    // 8. Preço / Valores / Convênio
    if (q.includes('preço') || q.includes('valor') || q.includes('quanto custa') || q.includes('orçamento') || q.includes('convênio') || q.includes('plano')) {
      return {
        text: `Por determinação ética do Código do Conselho Federal de Odontologia (CFO), cada plano de tratamento e valor deve ser elaborado somente após exame clínico minucioso e análise tomográfica. As consultas são particulares com emissão de recibo completo para reembolso. Chame no WhatsApp para verificar disponibilidade de agenda!`,
        ctaType: 'whatsapp',
        customWaMessage: 'Olá, Dr. Carlos! Gostaria de saber como funciona a consulta de avaliação e condições de atendimento.',
      };
    }

    // Resposta padrão inteligente
    return {
      text: `Excelente pergunta! Como cada caso clínico exige uma análise detalhada da saúde bucal, o ideal é conversar diretamente com o Dr. Carlos ou sua equipe pelo WhatsApp. Você também pode conferir nossos casos no Instagram.`,
      ctaType: 'both',
      customWaMessage: `Olá, Dr. Carlos! Estive no seu site e gostaria de esclarecer uma dúvida: "${query}"`,
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulação de digitação humanizada do Dentinho (600ms)
    setTimeout(() => {
      const response = getBotResponse(text);
      const botMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        ctaType: response.ctaType,
        customWaMessage: response.customWaMessage,
        timestamp: getCurrentTime(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 650);
  };

  const handleQuickQuestion = (questionText: string) => {
    handleSendMessage(questionText);
  };

  const quickQuestions = [
    'Como agendar consulta?',
    'Atendimento até às 22h',
    'Implantes e Enxerto',
    'Mentoria para Dentistas',
    'Assistência Pericial',
    'Instagram oficial',
  ];

  return (
    <>
      {/* BOTÃO FLUTUANTE DO DENTINHO ASSISTENTE VIRTUAL (Lado Esquerdo) */}
      <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3 select-none">
        {/* Tooltip de Balão de Fala Inicial */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.85, x: -10 }}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white border border-[#CBD5E1] shadow-[0_8px_25px_rgba(0,0,0,0.12)] text-[#1A1A1A] cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <div className="w-2 h-2 rounded-full bg-[#7A1F2B] animate-ping" />
              <div className="text-left">
                <p className="text-xs font-serif font-bold text-[#7A1F2B]">
                  Dentinho Virtual Dr. Carlos
                </p>
                <p className="text-[11px] text-[#4A4D52] font-sans">
                  Dúvidas rápidas? Clique para conversar!
                </p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-[#9CA3AF] hover:text-[#1A1A1A] ml-1 p-0.5"
                aria-label="Fechar"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botão Redondo com o Ícone do Dentinho */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir Dentinho Assistente Virtual"
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#F4F6F9] to-[#E2E7ED] border-2 border-[#CBD5E1] shadow-[0_8px_25px_rgba(122,31,43,0.22)] hover:shadow-[0_10px_30px_rgba(122,31,43,0.35)] flex items-center justify-center cursor-pointer transition-all duration-300"
        >
          {/* Anel Pulsante Suave de Atenção em Rubí */}
          <span className="absolute -inset-1 rounded-full bg-[#7A1F2B]/20 animate-pulse pointer-events-none" />

          {/* Ilustração Vetorial 3D do Dentinho Assistente */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm"
          >
            <defs>
              {/* Gradiente Esmalte Branco Perolado */}
              <linearGradient id="toothEnamel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F9FAFC" />
                <stop offset="85%" stopColor="#E2E7ED" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>

              {/* Gradiente Vinho do Laço/Gravata */}
              <linearGradient id="bowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A82537" />
                <stop offset="50%" stopColor="#7A1F2B" />
                <stop offset="100%" stopColor="#4A0E15" />
              </linearGradient>

              {/* Dourado da Estrela de Brilho */}
              <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#CA8A04" />
              </linearGradient>
            </defs>

            {/* Sombra da base */}
            <ellipse cx="50" cy="90" rx="26" ry="5" fill="#000000" opacity="0.12" />

            {/* Corpo do Dentinho Anatômico Sorridente */}
            <path
              d="M 50 16 C 68 16 82 22 83 36 C 84 50 82 64 74 80 C 70 88 64 88 59 78 C 55 70 52 70 50 72 C 48 70 45 70 41 78 C 36 88 30 88 26 80 C 18 64 16 50 17 36 C 18 22 32 16 50 16 Z"
              fill="url(#toothEnamel)"
              stroke="#B0B9C6"
              strokeWidth="2"
            />

            {/* Brilho Especular Superior do Dente */}
            <path
              d="M 28 26 C 36 21 54 21 68 25 C 64 22 46 20 32 23 Z"
              fill="#FFFFFF"
              opacity="0.8"
            />

            {/* Olhinhos Simpáticos do Dentinho */}
            <ellipse cx="38" cy="42" rx="3.5" ry="4.5" fill="#1A1A1A" />
            <circle cx="36.5" cy="40.5" r="1.2" fill="#FFFFFF" />

            <ellipse cx="62" cy="42" rx="3.5" ry="4.5" fill="#1A1A1A" />
            <circle cx="60.5" cy="40.5" r="1.2" fill="#FFFFFF" />

            {/* Bochechas Rosadinhas */}
            <circle cx="30" cy="48" r="3.5" fill="#F43F5E" opacity="0.25" />
            <circle cx="70" cy="48" r="3.5" fill="#F43F5E" opacity="0.25" />

            {/* Sorriso Alegre do Dentinho */}
            <path
              d="M 40 52 C 45 58 55 58 60 52"
              stroke="#7A1F2B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Gravatinha / Laço Rubí de Luxo */}
            <path
              d="M 44 68 L 50 72 L 44 76 Z"
              fill="url(#bowGrad)"
            />
            <path
              d="M 56 68 L 50 72 L 56 76 Z"
              fill="url(#bowGrad)"
            />
            <circle cx="50" cy="72" r="2.5" fill="#D4AF37" />

            {/* Estrelinha de Brilho de Limpeza Dentária no Canto Superior */}
            <path
              d="M 74 18 L 76 24 L 82 26 L 76 28 L 74 34 L 72 28 L 66 26 L 72 24 Z"
              fill="url(#sparkleGrad)"
            />
          </svg>

          {/* Indicador de Status Online Verde */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-white shadow-xs" />
        </motion.button>
      </div>

      {/* JANELA DO CHAT DO ASSISTENTE VIRTUAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 w-[92vw] sm:w-[410px] max-h-[85vh] sm:max-h-[640px] bg-white rounded-3xl border border-[#CBD5E1] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden select-none"
          >
            {/* CABEÇALHO DO CHAT */}
            <div className="bg-gradient-to-r from-[#7A1F2B] via-[#8B1A2B] to-[#5C121C] text-white p-4 sm:p-5 flex items-center justify-between relative shadow-sm">
              {/* Linha decorativa dourada fina */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FDE047] to-transparent opacity-60" />

              <div className="flex items-center gap-3">
                {/* Miniatura do Dentinho */}
                <div className="w-10 h-10 rounded-full bg-white/15 p-1 border border-white/30 flex items-center justify-center flex-shrink-0">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                    <span className="text-sm">🦷</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-base text-white leading-tight">
                      Dentinho Virtual
                    </h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#10B981] text-white">
                      Online
                    </span>
                  </div>
                  <p className="text-[11px] text-[#F9EBEF] font-sans">
                    Assistente Oficial · Dr. Carlos Vilela (CRO-SP 62.085)
                  </p>
                </div>
              </div>

              {/* Botão Fechar */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fechar Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* CORPO DE MENSAGENS */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-3.5 bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF] max-h-[380px] sm:max-h-[420px]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#1A1A1A] text-white rounded-br-xs shadow-sm'
                        : 'bg-white text-[#1A1A1A] border border-[#E2E8F0] rounded-bl-xs shadow-sm font-sans'
                    }`}
                  >
                    {msg.sender === 'assistant' && (
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#7A1F2B] mb-1">
                        <span>Dentinho</span>
                      </div>
                    )}
                    <p>{msg.text}</p>
                    <span
                      className={`text-[9px] mt-1.5 block text-right ${
                        msg.sender === 'user' ? 'text-gray-400' : 'text-[#888888]'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {/* BOTÕES DE REDIRECIONAMENTO PARA WHATSAPP E INSTAGRAM */}
                  {msg.sender === 'assistant' && msg.ctaType && msg.ctaType !== 'none' && (
                    <div className="mt-2.5 flex flex-wrap gap-2 max-w-[90%]">
                      {(msg.ctaType === 'whatsapp' || msg.ctaType === 'both') && (
                        <a
                          href={getWhatsAppUrl(
                            msg.customWaMessage || WHATSAPP_MESSAGES.general
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1A1A1A] hover:bg-[#000000] text-white text-[11px] font-bold tracking-wide uppercase transition-all shadow-sm hover:scale-[1.02] border border-[#333333]"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                          <span>FALAR NO WHATSAPP</span>
                          <ChevronRight className="w-3 h-3 text-white" />
                        </a>
                      )}

                      {(msg.ctaType === 'instagram' || msg.ctaType === 'both') && (
                        <a
                          href={DOCTOR_DATA.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#7A1F2B] hover:bg-[#5C121C] text-white text-[11px] font-bold tracking-wide uppercase transition-all shadow-sm hover:scale-[1.02] border border-[#A82537]"
                        >
                          <InstagramIcon className="w-3.5 h-3.5 text-white" />
                          <span>VER INSTAGRAM</span>
                          <ExternalLink className="w-3 h-3 text-white" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Indicador de Digitação do Dentinho */}
              {isTyping && (
                <div className="flex items-center gap-2 p-3 bg-white border border-[#E2E8F0] rounded-2xl rounded-bl-xs w-20 text-[#7A1F2B] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#7A1F2B] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#7A1F2B] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#7A1F2B] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* BOTÕES DE PERGUNTAS RÁPIDAS (CHIPS) */}
            <div className="p-2.5 bg-[#F1F5F9] border-t border-[#E2E8F0] overflow-x-auto flex gap-1.5 scrollbar-none">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleQuickQuestion(q)}
                  className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#FDF5F6] hover:text-[#7A1F2B] hover:border-[#7A1F2B]/40 border border-[#CBD5E1] text-[11px] font-medium text-[#333333] whitespace-nowrap transition-colors shadow-2xs cursor-pointer flex-shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* CAMPO DE ENTRADA DE TEXTO */}
            <div className="p-3 bg-white border-t border-[#E2E8F0]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escreva sua pergunta para o Dentinho..."
                  className="flex-1 px-3.5 py-2.5 rounded-full border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#7A1F2B]/20 focus:border-[#7A1F2B] transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 rounded-full bg-[#7A1F2B] hover:bg-[#5C121C] disabled:bg-[#D1D5DB] text-white flex items-center justify-center transition-colors flex-shrink-0 shadow-sm cursor-pointer"
                  aria-label="Enviar"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
