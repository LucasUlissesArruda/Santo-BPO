"use client";

import Image from 'next/image';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Feedback = {
  text: string;
  name: string;
  role: string;
  /** Sem foto própria => avatar com iniciais (evita usar foto de outra pessoa) */
  avatar?: string;
};

const feedbacks: Feedback[] = [
  {
    text: 'Adoro o seu trabalho e a forma clara de se comunicar !! Transmitindo leveza para cada encontro da mentoria ❤️.',
    name: 'Rafaela Bosche',
    role: 'Nutricionista comportamental',
    avatar: '/img/RafaelaBosche.jpg',
  },
  {
    text: 'Obrigada Andréia, foi um prazer conhecer vc também mesmo que a distância quem sabe um dia nos conheceremos. Creio que a mentoria com vcs terá grandes resultados em nome de Jesus Cristo 🙏 Que Deus abençoe sempre 🙏',
    name: 'Leide Lins',
    role: 'Toda lady',
    avatar: '/img/leide.jpg',
  },
  {
    text: 'Obrigada Annie querida por cada encontro, por cada palavra de ânimo e positividade, creio que Deus tem grandes coisas para nós enquanto Toda_Lady e para vcs também Santobpo 🙏🙌 AMEI todas as dicas e sugestões, vou fazer tudo no tempo certo 😅😁 A mentoria foi o primeiro passo.',
    name: 'Leide Lins',
    role: 'Toda lady',
    avatar: '/img/leide.jpg',
  },
  {
    text: 'Eu tô até agora sem acreditar o tanto que cresceu a clínica, tô muito feliz e emocionadaaaa Sei que seu trabalho tbm foi essencial para esse crescimento ❤️',
    name: 'Juliana Silveira',
    role: 'Juliana Silveira Estetica & Bem-Estar',
    avatar: '/img/juliana.jpg',
  },
  {
    text: 'Bom dia meninas, eu fiquei feliz com o retorno, ainda vamos ter um tempo aí pra ter uma média de como está o andamento, mas só de não estarmos no vermelho já foi um alívio... obrigada pelo trabalho de vcs, tá sendo maravilhoso',
    name: 'Andressa',
    role: 'Financeiro & Saúde',
  },
  {
    text: 'Eu to tão feliz c os resultados de novembro Só tenho a agradecer ✨ obrigada equipe e vamos buscar evoluir ainda mais 🦷🤍',
    name: 'Tamires Nogarotto',
    role: 'Odontologia',
  },
  {
    text: 'Faltou você dizer que além de tudo isso, você realmente ajuda a gente crescer, porque você mostra no que investir, como investir e principalmente como guardar dinheiro 💰 eu só cresci depois que você entrou em minha vida ❤️',
    name: 'Nossa Cliente',
    role: 'Empreendedora Expandindo',
  },
];

function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('');
}

export default function Testimonials() {
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [playing, setPlaying] = useState(!reduceMotion);

  const toggleAutoplay = () => {
    if (!swiper) return;
    if (playing) swiper.autoplay.stop();
    else swiper.autoplay.start();
  };

  return (
    <section id="feedbacks" className="section section--sand">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">Quem já confia</p>
          <h2 className="section-title">Feedbacks</h2>
        </header>

        <div
          className="testimonials"
          data-reveal
          onFocusCapture={() => swiper?.autoplay?.running && swiper.autoplay.pause()}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) swiper?.autoplay?.resume();
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
            onSwiper={setSwiper}
            onAutoplayStart={() => setPlaying(true)}
            onAutoplayStop={() => setPlaying(false)}
            spaceBetween={48}
            slidesPerView={1}
            navigation={{ prevEl: '.t-arrow--prev', nextEl: '.t-arrow--next' }}
            keyboard={{ enabled: true }}
            pagination={{ el: '.testimonials__dots', clickable: true }}
            autoplay={reduceMotion ? false : { delay: 8000, disableOnInteraction: true, pauseOnMouseEnter: true }}
            loop
            a11y={{
              prevSlideMessage: 'Depoimento anterior',
              nextSlideMessage: 'Próximo depoimento',
              paginationBulletMessage: 'Ir para o depoimento {{index}}',
            }}
          >
            {feedbacks.map((fb, idx) => (
              <SwiperSlide key={idx}>
                <figure className="testimonial-card">
                  <span className="testimonial-card__quote" aria-hidden="true">“</span>
                  <blockquote className="testimonial-card__text">{fb.text}</blockquote>
                  <figcaption className="testimonial-card__author">
                    {fb.avatar ? (
                      <Image
                        src={fb.avatar}
                        alt={`Foto de ${fb.name}`}
                        width={72}
                        height={72}
                        className="avatar"
                      />
                    ) : (
                      <span className="avatar avatar--initials" aria-hidden="true">
                        {initials(fb.name)}
                      </span>
                    )}
                    <span className="testimonial-card__who">
                      <strong>{fb.name}</strong>
                      <small>{fb.role}</small>
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonials__bar">
            <button type="button" className="t-arrow t-arrow--prev" aria-label="Depoimento anterior">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>

            {!reduceMotion && (
              <button
                type="button"
                className="testimonials__toggle"
                onClick={toggleAutoplay}
                aria-label={playing ? 'Pausar troca automática de depoimentos' : 'Retomar troca automática de depoimentos'}
              >
                {playing ? (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" /></svg>
                )}
              </button>
            )}

            <div className="testimonials__dots" />

            <button type="button" className="t-arrow t-arrow--next" aria-label="Próximo depoimento">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
