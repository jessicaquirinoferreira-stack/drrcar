import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, HeartHandshake, Eye, Shield, Sparkles, Award } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = CONTENT[lang].about;

  const whatsappAboutUrl = buildWhatsAppLink(
    lang === 'pt'
      ? 'Olá Dra. Tatiane, li sobre você no site e gostaria de conversar sobre atendimento terapêutico.'
      : 'Hello Dr. Tatiane, I read about you on your website and would like to talk about therapeutic care.'
  );

  const valueIcons = [
    <Eye className="w-5 h-5 text-[#C9A227]" key="eye" />,
    <Shield className="w-5 h-5 text-[#C9A227]" key="shield" />,
    <HeartHandshake className="w-5 h-5 text-[#C9A227]" key="heart" />,
    <Sparkles className="w-5 h-5 text-[#C9A227]" key="sparkles" />,
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-[#FBF9F5] text-[#161B20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo & Credential Accent */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Backing decorative frame */}
              <div className="absolute -inset-3 bg-[#EFE9DF] rounded-2xl transform -rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={ASSETS.about}
                  alt="Dra. Tatiane Vilela"
                  className="w-full aspect-[2/3] max-h-[560px] object-cover object-top"
                  loading="lazy"
                />
                
                {/* Floating card on image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-lg shadow-md border border-[#EDE6DC]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FBF5DF] flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-[#C9A227]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#8C631A] font-semibold">
                        {lang === 'pt' ? 'Registro Profissional' : 'Professional License'}
                      </p>
                      <p className="text-sm font-bold text-[#161B20] font-mono">
                        {CLINIC_INFO.crp}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Values Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8C631A] font-semibold">
                {t.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111417] mt-1 leading-snug">
                {t.title}
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#303841] leading-relaxed font-light">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* Values Grid */}
            <div className="pt-2">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-[#161B20] mb-4">
                {t.valuesTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.values.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#EDE6DC] shadow-xs hover:border-[#C9A227]/50 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-2 rounded-lg bg-[#FBF8EB] shrink-0">
                        {valueIcons[idx % valueIcons.length]}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#161B20]">
                          {val.title}
                        </h4>
                        <p className="text-xs text-[#525E6A] mt-1 leading-normal">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Professional Presentation Blocks (Requested by Dra. Tatiane) */}
            <div className="pt-6 space-y-6 border-t border-[#EDE6DC]">
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-[#111417]">
                  {lang === 'pt' ? 'Psicoterapia: um espaço para compreender, transformar e crescer' : 'Psychotherapy: A Space to Understand, Transform and Grow'}
                </h3>
                <p className="text-sm text-[#303841] leading-relaxed font-light">
                  {lang === 'pt'
                    ? 'A psicoterapia é um espaço de escuta profissional, acolhimento e reflexão, no qual cada pessoa pode compreender melhor suas emoções, reconhecer padrões, enfrentar dificuldades e desenvolver novas possibilidades para a própria vida.'
                    : 'Psychotherapy is a space of professional listening, welcoming, and reflection, where each person can better understand their emotions, recognize patterns, face difficulties, and develop new possibilities for their own life.'}
                </p>
                <p className="text-sm text-[#303841] leading-relaxed font-light">
                  {lang === 'pt'
                    ? 'Atendo demandas individuais, conjugais e familiares, oferecendo um acompanhamento personalizado, pautado na ética, no respeito e na compreensão da singularidade de cada história.'
                    : 'I handle individual, couple, and family demands, offering personalized support guided by ethics, respect, and the understanding of each story\'s uniqueness.'}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-[#111417]">
                  {lang === 'pt' ? 'Terapia Sexual: acolhimento e conhecimento para viver a sexualidade com mais liberdade' : 'Sexual Therapy: Welcoming and Knowledge to Live Sexuality with More Freedom'}
                </h3>
                <p className="text-sm text-[#303841] leading-relaxed font-light">
                  {lang === 'pt'
                    ? 'A sexualidade faz parte da saúde e do bem-estar. Ainda assim, muitas pessoas enfrentam dificuldades para falar sobre o assunto, seja por vergonha, insegurança, experiências anteriores, conflitos no relacionamento ou falta de informação.'
                    : 'Sexuality is part of health and well-being. Yet, many people face difficulties talking about the subject due to shame, insecurity, past experiences, relationship conflicts, or lack of information.'}
                </p>
                <p className="text-sm text-[#303841] leading-relaxed font-light">
                  {lang === 'pt'
                    ? 'Como especialista em Sexualidade Humana, ofereço acompanhamento psicoterapêutico para questões relacionadas ao desejo sexual, às dificuldades de intimidade, à comunicação entre parceiros, à satisfação sexual e aos conflitos que podem afetar a vida íntima e os relacionamentos.'
                    : 'As a specialist in Human Sexuality, I offer psychotherapeutic support for issues related to sexual desire, intimacy difficulties, partner communication, sexual satisfaction, and conflicts affecting intimate life and relationships.'}
                </p>
                <p className="text-sm text-[#303841] leading-relaxed font-light">
                  {lang === 'pt'
                    ? 'A terapia sexual é um espaço profissional, ético e acolhedor, que permite compreender essas questões sem julgamentos, respeitando os limites e a individualidade de cada pessoa ou casal. Quando necessário, o acompanhamento também pode envolver encaminhamento a outros profissionais de saúde.'
                    : 'Sexual therapy is a professional, ethical, and welcoming space allowing these issues to be understood without judgment, respecting each person or couple\'s limits and individuality.'}
                </p>
              </div>

              <div className="space-y-3 bg-[#F5EFE6] p-6 rounded-2xl border border-[#EBE1D2]">
                <h3 className="text-xl font-serif font-bold text-[#111417]">
                  {lang === 'pt' ? 'Meu compromisso com você' : 'My Commitment to You'}
                </h3>
                <p className="text-sm text-[#303841] leading-relaxed font-light">
                  {lang === 'pt'
                    ? 'Cada pessoa tem uma história única e merece ser escutada com atenção, respeito e responsabilidade. Meu compromisso é oferecer um espaço seguro para que você possa compreender suas dificuldades, fortalecer seus recursos emocionais e construir relações mais saudáveis consigo mesmo e com as pessoas ao seu redor.'
                    : 'Each person has a unique story and deserves to be heard with attention, respect, and responsibility. My commitment is to provide a safe space for you to understand your difficulties and strengthen emotional resources.'}
                </p>
                <p className="text-sm text-[#303841] leading-relaxed font-light italic">
                  {lang === 'pt'
                    ? '“Cuidar de si é um passo importante para transformar a maneira como você vive, se relaciona e se percebe.”'
                    : '“Caring for oneself is an important step to transform how you live, relate, and perceive yourself.”'}
                </p>
                <p className="text-sm text-[#303841] leading-relaxed font-light">
                  {lang === 'pt'
                    ? 'Ofereço psicoterapia presencial, em São Bernardo do Campo (SP), e atendimento on-line, para quem busca acompanhamento psicológico com acolhimento, ética e profissionalismo.'
                    : 'I offer in-person psychotherapy in São Bernardo do Campo (SP) and online care for those seeking psychological support with warmth, ethics, and professionalism.'}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href={whatsappAboutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold bg-[#111417] hover:bg-[#21272E] text-[#FBF9F5] shadow-md hover:text-[#DFC56E] transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{t.ctaAbout}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
