export const DOCTOR_DATA = {
  fullName: 'Dr. Carlos Eduardo Carvalho Vilela',
  shortName: 'Dr. Carlos Vilela',
  signature: 'Dr. Carlos Vilela — Implantodontia, Laser e Odontologia Legal',
  cro: 'CRO-SP 62085',
  clinicName: 'Consultório Dr. Carlos Vilela',
  motto: 'Conhecimento construído na prática',
  trajectorySummary:
    'Uma trajetória que une experiência clínica, conhecimento científico, docência e análise técnica.',
  presentation: 'Dr. Carlos Vilela | Especialista em Implantodontia & Assistência Técnica Pericial',
  instagramHandle: '@dr.carlosecvilela',
  instagramUrl: 'https://www.instagram.com/dr.carlosecvilela',
  email: 'dr.carlosvilela@uol.com.br',
  officialLogo: 'https://i.postimg.cc/DfBQJFpS/Logo-odontologico-luxuoso-em-ouro-e-rubi.png',
  // Telefones oficiais atualizados
  whatsappBase: 'https://wa.me/5511974465956',
  phoneMobile: '(11) 97446-5956', // WhatsApp Oficial Principal / Mentoria
  phoneClinicMobile: '(11) 99557-0284', // WhatsApp Consultório / Agendamento
  phoneLandline: '(11) 4368-5956', // Telefone Fixo
  address: 'Avenida Caminho do Mar, 2030 – São Bernardo do Campo / SP',
  hours: 'Atendimento agendado até às 22h',
  experienceYears: '27 anos de atuação na região',
  sinceYear: 'Desde o final da década de 1990',
  quote: 'Cuidar do seu sorriso é investir na sua saúde e confiança todos os dias.',
  // 6 Fotos reais oficiais do Dr. Carlos E. C. Vilela (links enviados pelo usuário, sem fotos de IA):
  images: {
    hero: 'https://i.postimg.cc/pdQwHpWf/5076.jpg', // Foto 1 (Hero): Dr. Carlos segurando modelo anatômico de implante
    about: 'https://i.postimg.cc/CKp3XjgH/5088.jpg', // Foto 2 (Sobre): Dr. Carlos de jaleco branco no consultório
    implants: 'https://i.postimg.cc/FKXM8j4V/5090.jpg', // Foto 3 (Implantes): Dr. Carlos com acervo e livros científicos
    specialized: 'https://i.postimg.cc/FKXM8j4d/5092.jpg', // Foto 4 (Mentoria & Perícia): Dr. Carlos de terno no consultório
    whyChoose: 'https://i.postimg.cc/bvf7WQhT/5094.jpg', // Foto 5 (Diferenciais): Dr. Carlos no planejamento do atendimento
    whitening: 'https://i.postimg.cc/YSB5Z1Hx/5096.jpg', // Foto 6 (Clareamento & Conforto): Dr. Carlos tomando café
    contact: 'https://i.postimg.cc/bvf7WQhT/5094.jpg', // Foto do atendimento e avaliação
  },
  // Cópias locais idênticas das 6 fotos reais para garantir carregamento instantâneo:
  localBackups: {
    hero: '/images/5076.jpg',
    about: '/images/5088.jpg',
    implants: '/images/5090.jpg',
    specialized: '/images/5092.jpg',
    whyChoose: '/images/5094.jpg',
    whitening: '/images/5096.jpg',
    contact: '/images/5094.jpg',
  },
};

// Lista completa das 6 fotos reais oficiais enviadas pelo cliente
export const OFFICIAL_GALLERY_PHOTOS = [
  {
    id: '5076',
    url: 'https://i.postimg.cc/pdQwHpWf/5076.jpg',
    localFallback: '/images/5076.jpg',
    label: 'Foto 1 · Início / Avaliação',
    desc: 'Dr. Carlos com modelo anatômico de implante dentário',
  },
  {
    id: '5088',
    url: 'https://i.postimg.cc/CKp3XjgH/5088.jpg',
    localFallback: '/images/5088.jpg',
    label: 'Foto 2 · Consultório Dr. Carlos',
    desc: 'Dr. Carlos de jaleco no consultório em São Bernardo do Campo',
  },
  {
    id: '5090',
    url: 'https://i.postimg.cc/FKXM8j4V/5090.jpg',
    localFallback: '/images/5090.jpg',
    label: 'Foto 3 · Conhecimento Científico',
    desc: 'Dr. Carlos com acervo bibliográfico e literatura especializada',
  },
  {
    id: '5092',
    url: 'https://i.postimg.cc/FKXM8j4d/5092.jpg',
    localFallback: '/images/5092.jpg',
    label: 'Foto 4 · Mentoria & Perícia',
    desc: 'Dr. Carlos de terno ao lado do troféu de destaque odontológico',
  },
  {
    id: '5094',
    url: 'https://i.postimg.cc/bvf7WQhT/5094.jpg',
    localFallback: '/images/5094.jpg',
    label: 'Foto 5 · Planejamento Clínico',
    desc: 'Dr. Carlos planejando a conduta clínica e diagnóstico minucioso',
  },
  {
    id: '5096',
    url: 'https://i.postimg.cc/YSB5Z1Hx/5096.jpg',
    localFallback: '/images/5096.jpg',
    label: 'Foto 6 · Clareamento & Conforto',
    desc: 'Dr. Carlos com xícara de café demonstrando liberdade clínica',
  },
];

export function getWhatsAppUrl(message: string, isClinicBackup = false): string {
  const base = isClinicBackup ? 'https://wa.me/5511995570284' : DOCTOR_DATA.whatsappBase;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  header: 'Olá Dr. Carlos, vim pelo site e gostaria de agendar uma avaliação odontológica.',
  hero: 'Olá Dr. Carlos, vim pelo site e quero recuperar meu sorriso com a segurança de seus 27 anos de experiência. Poderia verificar os horários disponíveis?',
  about: 'Olá Dr. Carlos, conheci sua trajetória clínica e acadêmica pelo site e gostaria de agendar uma consulta.',
  implants: 'Olá Dr. Carlos, vim pelo site e gostaria de saber se sou candidato(a) para implante dentário.',
  whitening: 'Olá Dr. Carlos, quero agendar o clareamento com laserterapia sem dor e sem restrição a café e vinho.',
  mentorship: 'Olá Dr. Carlos, sou cirurgião-dentista e gostaria de informações sobre a sua Mentoria odontológica.',
  mentorshipSingle: 'Olá Dr. Carlos, gostaria de consultar a disponibilidade para uma Consulta Avulsa de Mentoria.',
  mentorshipPackage4: 'Olá Dr. Carlos, gostaria de saber mais sobre o Pacote Mensal de Mentoria com 4 consultas.',
  mentorshipPackage8: 'Olá Dr. Carlos, gostaria de saber mais sobre o Pacote Mensal de Mentoria com 8 consultas.',
  legalExpert: 'Olá Dr. Carlos, gostaria de consultar seus serviços de Assistência Técnica Pericial em processo odontológico.',
  whyChoose: 'Olá Dr. Carlos, gostaria de agendar meu acompanhamento odontológico (atendimento até às 22h).',
  floating: 'Olá Dr. Carlos, vim pelo site e gostaria de agendar um atendimento.',
  assistant: 'Olá Dr. Carlos, conversei com o Assistente Virtual no site e gostaria de mais informações.',
  faq: 'Olá Dr. Carlos, vi as Perguntas e Respostas sobre a Mentoria e gostaria de agendar minha consulta.',
};

export const CREDENTIALS_LIST = [
  {
    title: 'Especialista em Implantodontia',
    institution: 'Pós-Graduação e Docência',
    description:
      'Cirurgias avançadas, enxertos ósseos e reabilitação de dentes perdidos com próteses fixas e precisão milimétrica.',
  },
  {
    title: 'Mestre em Laser na Odontologia',
    institution: 'USP / IPEN',
    description:
      'Mestrado acadêmico pela USP/IPEN, desenvolvendo protocolos de alta performance para pós-operatório sem dor e clareamento biológico.',
  },
  {
    title: 'Odontologia Legal e Forense',
    institution: 'Faculdade São Leopoldo Mandic',
    description:
      'Formação sólida para perícia técnica, análise científica e atuação qualificada em assistência técnica pericial.',
  },
  {
    title: 'Assistente Técnico & Docente',
    institution: 'Causas Cíveis desde 2010',
    description:
      'Professor em especialização de Implantodontia e assistente técnico pericial em processos judiciais cíveis em todo o Brasil.',
  },
];

export const SPECIALIZED_FRONTS = [
  {
    id: 'mentoria',
    badge: 'Para Cirurgiões-Dentistas',
    title: 'Mentoria para Cirurgiões-Dentistas',
    subtitle: 'Compartilhamento de conhecimento e experiência clínica de 27 anos',
    description:
      'Orientação técnica individualizada voltada ao aprimoramento profissional, ao refinamento do raciocínio clínico, ao planejamento cirúrgico e protético e à tomada de decisões seguras na prática odontológica diária.',
    bullets: [
      'Discussão aprofundada de casos clínicos complexos de implantes e reabilitação oral',
      'Refinamento de planejamento cirúrgico e protocolos de laserterapia',
      'Segurança e assertividade na tomada de decisões com base em 27 anos de prática',
      'Ética profissional, responsabilidade e prevenção de intercorrências clínicas',
    ],
    ctaText: 'Quero saber sobre a Mentoria',
    ctaMessage: WHATSAPP_MESSAGES.mentorship,
  },
  {
    id: 'pericia',
    badge: 'Assistência Técnica Cível',
    title: 'Assistência Técnica em Processos Judiciais Odontológicos',
    subtitle: 'Análise técnica e científica especializada desde 2010',
    description:
      'Análise técnica especializada de casos envolvendo tratamentos odontológicos, procedimentos clínicos, implantes, cirurgias, reabilitações e eventuais alegações de falha profissional. Atua como assistente técnico contratado pela parte interessada (seja o cirurgião-dentista ou o paciente), com rigor técnico e científico.',
    bullets: [
      'Elaboração de quesitos periciais e pareceres técnicos fundamentados na literatura científica',
      'Acompanhamento de perícias judiciais com postura ética e técnica',
      'Análise detalhada de prontuários, exames de imagem e termos de consentimento',
      'Integração de conhecimento clínico e jurídico dentro dos limites da atuação profissional',
    ],
    ctaText: 'Solicitar Assistência Técnica Pericial',
    ctaMessage: WHATSAPP_MESSAGES.legalExpert,
  },
];

export const MENTORSHIP_PACKAGES = [
  {
    id: 'avulsa',
    title: 'Consulta Avulsa',
    badge: 'Orientação Pontual',
    description: 'Um encontro direcionado para uma demanda clínica ou profissional específica.',
    features: [
      'Orientação técnica individualizada com o Dr. Carlos Vilela',
      'Duração previamente combinada para esclarecimento de dúvidas pontuais',
      'Discussão de planejamento ou situação clínica desafiadora',
      'Direcionamento focado nas necessidades imediatas do profissional',
    ],
    ctaText: 'Consultar Consulta Avulsa',
    whatsappMessage: WHATSAPP_MESSAGES.mentorshipSingle,
  },
  {
    id: 'mensal-4',
    title: 'Pacote Mensal (4 Consultas)',
    badge: 'Mais Procurado · 1x por Semana',
    description: 'Acompanhamento contínuo para desenvolver raciocínio clínico semanal.',
    features: [
      '4 encontros ao longo do mês (1 encontro por semana)',
      'Acompanhamento de casos em andamento no consultório',
      'Aprofundamento em Implantodontia, Laser e condutas clínicas',
      'Evolução gradual da segurança e da tomada de decisões',
    ],
    ctaText: 'Consultar Pacote 4 Consultas',
    whatsappMessage: WHATSAPP_MESSAGES.mentorshipPackage4,
    popular: true,
  },
  {
    id: 'mensal-8',
    title: 'Pacote Mensal (8 Consultas)',
    badge: 'Intensivo · 2x por Semana',
    description: 'Acompanhamento intensivo com dois encontros semanais para rápido avanço.',
    features: [
      '8 encontros ao longo do mês (2 encontros por semana)',
      'Suporte próximo em rotinas clínicas e cirúrgicas intensas',
      'Revisão minuciosa de documentações, termos e planejamento',
      'Imersão profunda com base nos 27 anos de docência e prática do Dr. Carlos',
    ],
    ctaText: 'Consultar Pacote 8 Consultas',
    whatsappMessage: WHATSAPP_MESSAGES.mentorshipPackage8,
  },
];

export const MENTORSHIP_FAQS = [
  {
    number: '01',
    question: 'O que é a mentoria odontológica do Dr. Carlos Vilela?',
    answer:
      'A mentoria odontológica é um acompanhamento profissional destinado a dentistas que desejam desenvolver mais segurança clínica, aprimorar o planejamento dos tratamentos e tomar decisões com maior confiança na prática odontológica.\n\nCom a experiência do Dr. Carlos Vilela em Implantodontia, Laser e Odontologia Legal, o profissional terá a oportunidade de discutir dúvidas, aprofundar conhecimentos e desenvolver seu raciocínio clínico.',
  },
  {
    number: '02',
    question: 'Para quem é indicada a mentoria?',
    answer:
      'É indicada principalmente para recém-formados, dentistas em início de carreira e profissionais que desejam aprimorar seus conhecimentos, discutir casos clínicos e ganhar mais segurança no atendimento aos pacientes.',
  },
  {
    number: '03',
    question: 'Quais assuntos podem ser abordados durante as consultas?',
    answer:
      'Podem ser discutidos temas como Implantodontia, utilização do laser na odontologia, planejamento de tratamentos, dúvidas clínicas, discussão de casos, tomada de decisões e aspectos relacionados à Odontologia Legal.',
  },
  {
    number: '04',
    question: 'Preciso ser recém-formado para participar?',
    answer:
      'Não. A mentoria também é indicada para dentistas experientes que desejam aprofundar conhecimentos, discutir situações profissionais e buscar novas perspectivas para sua atuação clínica.',
  },
  {
    number: '05',
    question: 'Como funciona a consulta avulsa?',
    answer:
      'A consulta avulsa é indicada para o dentista que precisa de orientação pontual, deseja esclarecer dúvidas específicas ou discutir uma situação clínica.\n\nO atendimento tem duração previamente combinada e permite direcionar a conversa às necessidades profissionais do participante.',
  },
  {
    number: '06',
    question: 'Posso contratar um acompanhamento mensal?',
    answer:
      'Sim. O acompanhamento mensal é indicado para quem deseja desenvolver seus conhecimentos de maneira contínua, com encontros programados para discutir dúvidas, acompanhar desafios da prática clínica e aprofundar assuntos de interesse profissional.',
  },
  {
    number: '07',
    question: 'Quais são as opções de pacotes?',
    answer:
      'Existem diferentes formatos de acompanhamento, de acordo com a necessidade de cada profissional:\n\n• Consulta avulsa: um encontro para uma demanda específica.\n• Pacote mensal com 4 consultas: indicado para quem deseja realizar um encontro por semana.\n• Pacote mensal com 8 consultas: indicado para quem busca um acompanhamento mais intensivo, com dois encontros por semana.\n\nA frequência, a duração dos encontros e a disponibilidade são combinadas previamente.',
  },
  {
    number: '08',
    question: 'Qual é o valor da mentoria?',
    answer:
      'Os valores variam conforme a modalidade escolhida. É possível contratar uma consulta avulsa ou optar por um pacote mensal de acompanhamento.\n\nEntre em contato para conhecer as opções disponíveis e identificar o formato mais adequado à sua necessidade profissional.',
  },
  {
    number: '09',
    question: 'Posso levar casos clínicos para discussão?',
    answer:
      'Sim. É possível discutir casos clínicos, planejamento e possibilidades de tratamento, respeitando os limites técnicos e éticos da atividade de mentoria.\n\nOs casos devem ser apresentados sem dados que permitam identificar os pacientes. A mentoria não substitui a responsabilidade técnica do dentista assistente nem o atendimento presencial quando necessário.',
  },
  {
    number: '10',
    question: 'A mentoria garante resultados clínicos?',
    answer:
      'A mentoria tem como objetivo contribuir para o desenvolvimento profissional, o aprimoramento do raciocínio clínico e a tomada de decisões mais fundamentadas. Os resultados dependem de diversos fatores, incluindo a experiência, a formação e a aplicação dos conhecimentos pelo profissional.',
  },
  {
    number: '11',
    question: 'A mentoria também aborda Odontologia Legal?',
    answer:
      'Sim. O Dr. Carlos Vilela também atua na área de Odontologia Legal e pode orientar sobre aspectos técnicos relacionados à documentação odontológica, responsabilidade profissional e questões periciais, conforme a natureza da demanda.\n\nA assistência técnica em processos judiciais é um serviço específico, com contratação e condições próprias.',
  },
  {
    number: '12',
    question: 'Como faço para agendar minha consulta?',
    answer:
      'Para consultar a disponibilidade e conhecer os formatos de atendimento, entre em contato diretamente pelo WhatsApp:\n\nWhatsApp: (11) 97446-5956\nE-mail: dr.carlosvilela@uol.com.br\n\nDr. Carlos Vilela — Implantodontia, Laser e Odontologia Legal.',
  },
];

export const ABOUT_DIFFERENTIALS = [
  {
    id: 'empatia',
    title: 'Empatia e Escuta Ativa',
    description:
      'Ouvindo suas necessidades com atenção genuína e oferecendo as melhores soluções para a sua saúde e rotina.',
  },
  {
    id: 'personalizado',
    title: 'Foco Estético e Funcional',
    description:
      'Atendimento personalizado com foco em resultados estéticos naturais e devolução integral da mastigação.',
  },
  {
    id: 'tecnicas',
    title: 'Tecnologias USP/IPEN',
    description:
      'Protocolos avançados de Laserterapia baseados em mestrado pela USP/IPEN e planejamento de alta precisão.',
  },
  {
    id: 'durabilidade',
    title: 'Durabilidade e Rigor',
    description:
      'Materiais biocompatíveis consagrados mundialmente com longevidade e respaldo científico garantido.',
  },
  {
    id: 'seguranca',
    title: 'Perícia e Segurança Ética',
    description:
      'Rigor técnico respaldado pela formação em Odontologia Legal e Forense (São Leopoldo Mandic) e CRO-SP 62085.',
  },
  {
    id: 'horarios',
    title: 'Horários Flexíveis até às 22h',
    description:
      'Atendimento exclusivo agendado para quem necessita de horários diferenciados após o expediente tradicional.',
  },
];

export const IMPLANT_CANDIDATES = [
  {
    title: 'Perda de um ou mais dentes',
    status: 'Indicado',
    detail: 'Substitui a raiz perdida com firmeza igual à dos dentes naturais.',
  },
  {
    title: 'Usuários de prótese móvel ou dentadura',
    status: 'Transformador',
    detail: 'Elimina a instabilidade, as dores de atrito e devolve a força mastigatória.',
  },
  {
    title: 'Boa saúde geral e óssea',
    status: 'Ideal',
    detail: 'Se houver pouca espessura de osso, realizamos enxertos ósseos seguros.',
  },
  {
    title: 'Diabéticos ou hipertensos controlados',
    status: 'Apto com Acompanhamento',
    detail: 'Com exames médicos em dia e controle rigoroso, o procedimento é seguro.',
  },
  {
    title: 'Fumantes',
    status: 'Atenção Especial',
    detail: 'Apresentam risco cirúrgico aumentado; orientamos interrupção temporária.',
  },
];

export const IMPLANT_STEPS = [
  {
    step: '01',
    title: 'Avaliação Clínica e Tomografia',
    description: 'Análise minuciosa de densidade óssea, formato facial e planejamento milimétrico da cirurgia.',
  },
  {
    step: '02',
    title: 'Fixação Biocompatível do Titânio',
    description: 'Cirurgia guiada e indolor com aplicação de Laserterapia para otimizar o conforto imediato.',
  },
  {
    step: '03',
    title: 'Osseointegração Segura',
    description: 'Período biológico onde o titânio se funde permanentemente ao tecido ósseo.',
  },
  {
    step: '04',
    title: 'Instalação da Prótese Definitiva',
    description: 'Coroa de porcelana personalizada, restaurando a cor, o brilho e o prazer de mastigar.',
  },
];

export const WHITENING_BENEFITS = [
  {
    title: 'Melhora da autoestima e rejuvenescimento',
    description: 'Um sorriso mais claro transmite saúde, vitalidade e autoconfiança no dia a dia.',
  },
  {
    title: 'Sem dor e sem sensibilidade incômoda',
    description: 'Protocolo científico exclusivo com Laserterapia (USP) que atua protegendo o nervo dental.',
  },
  {
    title: 'Tratamento rápido com resultados visíveis',
    description: 'Ganhos notáveis de luminosidade já nas primeiras sessões em consultório.',
  },
  {
    title: 'Procedimento seguro e não invasivo',
    description: 'Não desgasta nem altera o esmalte original do dente.',
  },
  {
    title: 'Remoção de manchas profundas e amareladas',
    description: 'Quebra molecular profunda de pigmentos acumulados ao longo dos anos.',
  },
  {
    title: 'Supervisão do Especialista e Mestre',
    description: 'Avaliação prévia minuciosa para garantir a técnica ideal e a saúde das gengivas.',
  },
  {
    title: 'Adequado para ocasiões marcantes',
    description: 'Perfeito para eventos, casamentos, formaturas ou reuniões profissionais.',
  },
  {
    title: 'Estímulo a hábitos de higiene rigorosos',
    description: 'Pacientes com dentes clareados cuidam com ainda mais dedicação da sua saúde bucal.',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mariana Alencar, 46 anos',
    location: 'Rudge Ramos · São Bernardo do Campo',
    procedure: 'Reabilitação com Implantes Dentários',
    beforeAfterLabel: 'Ausência dentária posterior → Prótese fixa sobre implante de titânio',
    quote:
      'Eu tinha muito receio de fazer implante por causa da dor e da minha rotina corrida no trabalho. O Dr. Carlos me atendeu às 20h30 com uma paciência única, usou laserterapia no pós-operatório e não senti praticamente nada. Saber que ele atua há 27 anos aqui na região me deu segurança total.',
    highlight: 'Pós-operatório tranquilo com Laserterapia e atendimento noturno',
  },
  {
    id: 2,
    name: 'Dr. Roberto Mendes, 54 anos',
    location: 'Jardim do Mar · São Bernardo do Campo',
    procedure: 'Implante e Reabilitação Oral Completa',
    beforeAfterLabel: 'Prótese móvel instável → Reabilitação fixa estética e funcional',
    quote:
      'Saber que o Dr. Carlos tem formação em Odontologia Legal pela São Leopoldo Mandic e mestrado pela USP me deu a tranquilidade que eu procurava. Ele explicou cada detalhe com rigor técnico impressionante e devolveu minha confiança para comer e sorrir em público.',
    highlight: 'Segurança mastigatória, ética e excelência clínica',
  },
  {
    id: 3,
    name: 'Camila Vasconcelos, 33 anos',
    location: 'Nova Petrópolis · São Bernardo do Campo',
    procedure: 'Clareamento Dental Exclusivo Sem Sensibilidade',
    beforeAfterLabel: 'Dentes pigmentados por café → Clareamento natural sem dor (Tom A1/BL3)',
    quote:
      'Já tinha desistido de clarear os dentes porque sentia pontadas horríveis em tentativas anteriores e não queria cortar meu café. Com a técnica exclusiva do Dr. Carlos, clareei na primeira sessão sem dor nenhuma e continuei tomando meu café normalmente!',
    highlight: 'Zero dor e sem restrição ao café ou vinho',
  },
];

export interface AssistantTopic {
  id: string;
  question: string;
  shortLabel: string;
  answer: string;
  whatsappPrompt: string;
}

export const ASSISTANT_TOPICS: AssistantTopic[] = [
  {
    id: 'trajetoria-dr-carlos',
    shortLabel: 'Trajetória do Dr. Carlos',
    question: 'Quem é o Dr. Carlos Eduardo Carvalho Vilela e qual a sua trajetória?',
    answer:
      'O Dr. Carlos Eduardo Carvalho Vilela (CRO-SP 62085) é cirurgião-dentista com trajetória desde o final da década de 1990 (27 anos atuando na região de São Bernardo do Campo). É especialista em Implantodontia, mestre em Laser na Odontologia pela USP/IPEN, formado em Odontologia Legal e Forense pela Faculdade São Leopoldo Mandic, professor e assistente técnico cível desde 2010. Contato: WhatsApp (11) 97446-5956 | E-mail: dr.carlosvilela@uol.com.br.',
    whatsappPrompt: 'Olá Dr. Carlos, conheci sua trajetória no site e gostaria de agendar uma consulta.',
  },
  {
    id: 'mentoria-dentistas',
    shortLabel: 'Mentoria para Dentistas',
    question: 'Como funciona a Mentoria Odontológica do Dr. Carlos Vilela?',
    answer:
      'A Mentoria é um acompanhamento destinado a dentistas (recém-formados ou experientes) que desejam desenvolver mais segurança clínica, aprimorar o planejamento dos tratamentos e tomar decisões com maior confiança em Implantodontia, Laser e Odontologia Legal. Formatos: Consulta Avulsa, Pacote Mensal com 4 consultas (1x/semana) ou Pacote Mensal com 8 consultas (2x/semana). Agendamento via WhatsApp: (11) 97446-5956 ou E-mail: dr.carlosvilela@uol.com.br.',
    whatsappPrompt: WHATSAPP_MESSAGES.mentorship,
  },
  {
    id: 'pacotes-mentoria',
    shortLabel: 'Opções de Pacotes de Mentoria',
    question: 'Quais são as opções de pacotes da Mentoria?',
    answer:
      'Existem 3 formatos principais:\n• Consulta avulsa: um encontro para uma demanda específica.\n• Pacote mensal com 4 consultas: um encontro por semana.\n• Pacote mensal com 8 consultas: acompanhamento intensivo com dois encontros por semana.\nEntre em contato pelo WhatsApp (11) 97446-5956 para consultar valores e disponibilidade!',
    whatsappPrompt: WHATSAPP_MESSAGES.mentorship,
  },
  {
    id: 'assistencia-pericial',
    shortLabel: 'Assistência Técnica Judicial',
    question: 'Como funciona a Assistência Técnica em processos judiciais odontológicos?',
    answer:
      'O Dr. Carlos Vilela atua desde 2010 como assistente técnico pericial em causas cíveis envolvendo tratamentos odontológicos, implantes, cirurgias, reabilitações e eventuais alegações de falha profissional. Presta suporte técnico tanto para cirurgiões-dentistas quanto para pacientes, unindo conhecimento clínico aprofundado e respaldo científico e jurídico.',
    whatsappPrompt: WHATSAPP_MESSAGES.legalExpert,
  },
  {
    id: 'o-que-e-implante',
    shortLabel: 'O que é implante dentário?',
    question: 'O que é o implante dentário e como ele substitui o dente?',
    answer:
      'O implante dentário é um pino de titânio biocompatível inserido de forma segura no osso maxilar ou mandibular para substituir a raiz de um dente perdido. Ele serve de base sólida para a colocação de uma prótese fixa, devolvendo a função mastigatória e a estética natural ao seu sorriso.',
    whatsappPrompt: 'Olá Dr. Carlos, gostaria de saber se sou candidato(a) para fazer implante dentário.',
  },
  {
    id: 'como-funciona-clareamento',
    shortLabel: 'Clareamento sem dor (USP)',
    question: 'Como funciona o clareamento dental sem dor do Dr. Carlos?',
    answer:
      'Com o domínio do mestrado em Laser na Odontologia pela USP/IPEN, o Dr. Carlos aplica uma técnica exclusiva que proporciona de 70% a 100% de redução de sensibilidade. É um clareamento sem dor e sem restrições alimentares: você pode continuar tomando café e vinho normalmente!',
    whatsappPrompt: WHATSAPP_MESSAGES.whitening,
  },
  {
    id: 'horario-endereco-contato',
    shortLabel: 'WhatsApp, E-mail e Endereço',
    question: 'Quais são os contatos oficiais e endereço do Dr. Carlos Vilela?',
    answer:
      'WhatsApp: (11) 97446-5956 (ou 11 99557-0284 / fixo 11 4368-5956).\nE-mail: dr.carlosvilela@uol.com.br.\nEndereço: Av. Caminho do Mar, 2030 – São Bernardo do Campo / SP. Atendimento com agendamento até às 22h!',
    whatsappPrompt: WHATSAPP_MESSAGES.floating,
  },
];
