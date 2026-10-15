export const DOCTOR_DATA = {
  fullName: 'Dr. Carlos Eduardo Carvalho Vilela',
  shortName: 'Dr. Carlos Vilela',
  signature: 'Dr. Carlos Eduardo Carvalho Vilela | Cirurgião-Dentista | CRO-SP 62.085',
  cro: 'CRO-SP 62.085',
  clinicName: 'Consultório Dr. Carlos Eduardo Carvalho Vilela',
  motto: 'Odontologia com Segurança, Ética e Confiança',
  heroSubtitle:
    'Mais de 27 anos dedicados à odontologia em São Bernardo do Campo, unindo experiência, tecnologia e uma abordagem ética e personalizada para oferecer tratamentos com excelência e previsibilidade.',
  instagramHandle: '@dr.carlosecvilela',
  instagramUrl: 'https://www.instagram.com/dr.carlosecvilela',
  email: 'dr.carlosvilela@uol.com.br',
  // Telefones oficiais
  whatsappBase: 'https://wa.me/5511974465956',
  phoneMobile: '(11) 97446-5956', // WhatsApp Principal / Mentoria & Perícia
  phoneClinicMobile: '(11) 99557-0284', // WhatsApp Consultório
  phoneLandline: '(11) 4368-5956', // Telefone Fixo
  address: 'Avenida Caminho do Mar, 2030 – Rudge Ramos, São Bernardo do Campo / SP',
  hours: 'Atendimento com horário estendido agendado até às 22h',
  experienceYears: 'Mais de 27 anos de experiência',
  croFormatted: 'CRO-SP 62.085',
  images: {
    // Foto oficial do Hero: Dr. Carlos na poltrona preta de couro, mão no queixo, com livros à frente
    hero: '/images/5096.jpg',
    // Foto oficial para Quem Sou Eu: Dr. Carlos de terno preto na mesa com literatura científica
    about: '/images/5090.jpg',
    // Foto oficial para Mentoria e Perícia: Dr. Carlos no ambiente de estudo e consultório
    mentorship: '/images/5092.jpg',
    // Foto oficial para Diferenciais e Planejamento
    differentials: '/images/5094.jpg',
    // Foto adicional oficial (modelo de implante / reabilitação)
    clinical: '/images/5076.jpg',
  },
};

export function getWhatsAppUrl(message: string, isBackup = false): string {
  const base = isBackup ? 'https://wa.me/5511995570284' : DOCTOR_DATA.whatsappBase;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general: 'Olá, Dr. Carlos Vilela! Acessei seu site e gostaria de agendar uma consulta.',
  hero: 'Olá, Dr. Carlos! Gostaria de saber mais sobre seu atendimento clínico e agendar uma avaliação.',
  mentorship: 'Olá, Dr. Carlos! Sou cirurgião-dentista e gostaria de obter informações sobre a Mentoria Clínica individual.',
  legalExpert: 'Olá, Dr. Carlos! Gostaria de consultar sobre serviços de Assistência Técnica Pericial e pareceres técnicos em Odontologia Legal.',
  differentials: 'Olá, Dr. Carlos! Gostaria de entender mais sobre o planejamento e agendamento personalizado.',
  faq: 'Olá, Dr. Carlos! Tenho uma dúvida sobre os tratamentos e gostaria de conversar com o senhor.',
  contact: 'Olá, Dr. Carlos! Gostaria de entrar em contato para agendar uma consulta em São Bernardo do Campo.',
};

// Três pilares redondos abaixo do Hero (especificados exatamente na solicitação do usuário)
export const HERO_HIGHLIGHTS = [
  {
    id: 'experiencia',
    title: 'EXPERIÊNCIA CLÍNICA',
    description: 'Tratamentos com excelência e previsibilidade',
    details: 'Mais de 27 anos dedicados à prática cirúrgica e reabilitadora de alta precisão em São Bernardo do Campo.',
  },
  {
    id: 'mentoria',
    title: 'MENTORIA PARA DENTISTAS',
    description: 'Compartilhamento de experiência e conhecimento prático',
    details: 'Orientação personalizada em casos clínicos complexos, planejamento cirúrgico e tomada de decisão.',
  },
  {
    id: 'pericia',
    title: 'ODONTOLOGIA LEGAL E ASSISTÊNCIA TÉCNICA',
    description: 'Suporte técnico e científico com ética e responsabilidade',
    details: 'Elaboração de quesitos, laudos circunstanciados e pareceres científicos com rigor legal e pericial.',
  },
];

// 1. Quem Sou Eu - Dados aprofundados
export const ABOUT_DATA = {
  title: 'QUEM SOU EU',
  subtitle: 'Conhecimento Construído na Prática e Rigor Científico',
  headline: 'Mais de 27 anos dedicados à saúde bucal, docência e ciência odontológica',
  lead: 'Com mais de duas décadas e meia de prática ininterrupta em São Bernardo do Campo, o Dr. Carlos Eduardo Carvalho Vilela construiu uma trajetória sólida pautada pelo compromisso ético, atualização técnico-científica contínua e atendimento humanizado.',
  bioParagraphs: [
    'O Dr. Carlos Eduardo Carvalho Vilela (CRO-SP 62.085) alia sólida formação acadêmica à vivência diária de consultório, acompanhando a evolução dos materiais, das técnicas de diagnóstico por imagem e dos protocolos regenerativos.',
    'Sua prática clínica é sustentada por três valores inegociáveis: empatia para compreender as reais expectativas de cada paciente, escuta ativa para entender o histórico e as dores de quem o procura, e foco absoluto na previsibilidade e segurança dos resultados.',
    'Além do atendimento a pacientes que buscam reabilitações seguras, sua formação o consolidou como referência técnica tanto no suporte a colegas cirurgiões-dentistas por meio de mentorias clínicas, quanto no amparo pericial ao judiciário e a operadores do direito.',
  ],
  credentials: [
    {
      title: 'Especialista em Implantodontia',
      institution: 'Mais de 27 anos de casuística cirúrgica e protética',
      description: 'Planejamento tridimensional, enxertos ósseos estruturados e reabilitações completas com previsibilidade.',
    },
    {
      title: 'Mestre em Laser na Odontologia',
      institution: 'USP / IPEN (Universidade de São Paulo)',
      description: 'Pesquisa avançada em biofotônica, modulação tecidual, reparação óssea acelerada e analgesia biológica.',
    },
    {
      title: 'Odontologia Legal e Forense',
      institution: 'Faculdade São Leopoldo Mandic',
      description: 'Capacitação pericial forense, documentação odontológica, auditoria clínica e responsabilidade civil profissional.',
    },
  ],
  coreValues: [
    {
      label: 'EMPATIA',
      desc: 'Compreensão integral do paciente, acolhendo receios com paciência e transparência.',
    },
    {
      label: 'ESCUTA ATIVA',
      desc: 'Diagnóstico construído ouvindo os anseios individuais antes de propor qualquer conduta.',
    },
    {
      label: 'FOCO E PREVISIBILIDADE',
      desc: 'Planejamento minucioso orientado por literatura científica e técnicas comprovadas.',
    },
  ],
  booksHighlight: {
    title: 'Acervo e Literatura Científica de Referência',
    desc: 'O Dr. Carlos mantém constante imersão nas principais publicações e tratados internacionais de Implantodontia, Reabilitação Oral e Odontologia Legal, garantindo que cada conduta adotada em consultório seja rigorosamente fundamentada na melhor evidência contemporânea.',
  },
};

// 2. Mentoria e Perícia - Seção dedicada exclusivamente
export const MENTORSHIP_LEGAL_DATA = {
  title: 'MENTORIA E PERÍCIA',
  subtitle: 'Conhecimento Compartilhado e Rigor Técnico-Científico',
  lead: 'Duas frentes de atuação altamente especializadas onde a vivência de mais de 27 anos se transforma em segurança para dentistas e precisão para o Direito.',
  mentorship: {
    title: 'Mentoria Clínica para Dentistas',
    badge: 'Desenvolvimento Profissional',
    summary: 'Compartilhamento de experiência e conhecimento prático para cirurgiões-dentistas que desejam elevar a segurança em seus diagnósticos e procedimentos.',
    topics: [
      'Discussão minuciosa de casos clínicos complexos e tomografia',
      'Planejamento cirúrgico e protético reverso para implantes',
      'Condutas seguras na prevenção e resolução de intercorrências',
      'Boas práticas de prontuário, termo de consentimento e gestão de risco',
      'Atendimento 1-a-1 com foco na realidade clínica de consultório',
    ],
    ctaText: 'Solicitar Informações sobre Mentoria',
  },
  legal: {
    title: 'Odontologia Legal & Assistência Técnica Pericial',
    badge: 'Suporte Técnico-Jurídico',
    summary: 'Atuação ética, técnica e respaldada pelas ciências forenses para amparo a advogados, tribunais e partes envolvidas em litígios odontológicos.',
    topics: [
      'Elaboração de quesitos técnicos estratégicos para a perícia',
      'Acompanhamento do exame pericial presencial como Assistente Técnico',
      'Emissão de Pareceres Técnicos circunstanciados e fundamentados',
      'Manifestação crítica e científica sobre laudos periciais judiciais',
      'Análise de nexo causal, prontuários, radiografias e tomografias',
    ],
    ctaText: 'Consultar Assistência Técnica Pericial',
  },
};

// 3. Diferenciais
export const DIFFERENTIALS_DATA = [
  {
    number: '01',
    title: 'Mais de 27 Anos de Experiência Clínica',
    desc: 'Atuação contínua e dedicada em São Bernardo do Campo, acumulando milhares de casos solucionados com tranquilidade, longevidade e alto índice de sucesso.',
  },
  {
    number: '02',
    title: 'Planejamento Individualizado e Rigoroso',
    desc: 'Cada paciente recebe um protocolo único, respaldado por tomografia tridimensional, diagnóstico preciso e respeito absoluto à biologia óssea e gengival.',
  },
  {
    number: '03',
    title: 'Abordagem Ética e Transparente',
    desc: 'Sem promessas irreais ou condutas invasivas desnecessárias. Todas as etapas, opções de materiais e prognósticos são explicados de forma clara e honesta.',
  },
  {
    number: '04',
    title: 'Previsibilidade e Excelência Técnica',
    desc: 'A convergência da Implantodontia moderna com a Biofotônica (Laser USP) e a visão preventiva da Odontologia Legal para tratamentos seguros e duradouros.',
  },
  {
    number: '05',
    title: 'Atendimento com Horário Estendido até 22h',
    desc: 'Consultas agendadas com conveniência e pontualidade, permitindo que profissionais e executivos cuidem da saúde bucal sem conflitar com suas rotinas diárias.',
  },
  {
    number: '06',
    title: 'Conhecimento Construído na Prática',
    desc: 'A autoridade de quem não apenas executa cirurgias e próteses, mas também orienta colegas de profissão e assessora pericialmente questões técnicas complexas.',
  },
];

// 4. Dúvidas / FAQ
export const FAQ_DATA = [
  {
    q: 'Como funciona a avaliação clínica com o Dr. Carlos Vilela?',
    a: 'A consulta inicial é minuciosa e sem pressa. O Dr. Carlos realiza uma anamnese detalhada, escuta as queixas e expectativas do paciente, analisa exames radiográficos e tomográficos tridimensionais e elabora um planejamento cirúrgico e protético individualizado, explicando detalhadamente cada etapa.',
  },
  {
    q: 'Quem tem pouco osso pode realizar implantes dentários?',
    a: 'Sim. Graças às técnicas contemporâneas de enxertia óssea, regeneração tecidual guiada e implantes com design e tratamento de superfície de última geração, é possível reabilitar com segurança e estabilidade casos de atrofia óssea que antes eram considerados inviáveis.',
  },
  {
    q: 'O procedimento de implante dentário dói ou causa desconforto?',
    a: 'O procedimento cirúrgico é indolor, realizado sob anestesia local de alta eficácia. Além disso, a aplicação terapêutica do Laser de Baixa Potência no pós-operatório imediato proporciona potente ação anti-inflamatória, analgésica e de bioestimulação celular, tornando a recuperação surpreendentemente confortável.',
  },
  {
    q: 'Como funciona a Mentoria Clínica para cirurgiões-dentistas?',
    a: 'A mentoria é individualizada ou em pequenos grupos restritos. O Dr. Carlos Vilela analisa junto com o mentorado casos clínicos reais, guiando desde a leitura e planejamento em software de tomografia até a escolha de componentes, técnicas de incisão/sutura e gestão de riscos operatórios.',
  },
  {
    q: 'Qual é o papel do Assistente Técnico Pericial em Odontologia Legal?',
    a: 'O Assistente Técnico é o profissional de confiança de uma das partes em um processo judicial. Ele formula quesitos técnicos, fiscaliza o exame pericial conduzido pelo perito do juiz, e elabora um Parecer Técnico fundamentado cientificamente para assegurar que a verdade biológica e técnica seja compreendida pelo magistrado.',
  },
  {
    q: 'Qual é o horário de atendimento no consultório em São Bernardo do Campo?',
    a: 'Para proporcionar conforto a pacientes com rotinas intensas, o consultório oferece atendimento agendado previamente até às 22h, de segunda a sexta-feira, em ambiente calmo, reservado e acolhedor na Avenida Caminho do Mar, 2030.',
  },
];
