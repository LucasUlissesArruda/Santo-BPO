import { FaWhatsapp } from 'react-icons/fa';
import { PARTNERS, whatsappHref } from '@/data/site';

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      {/* Imagem otimizada: WebP leve no mobile e desktop (a foto já traz a logo) */}
      <picture className="hero__media">
        <source media="(max-width: 991px)" srcSet="/img/hero-mobile.webp" />
        <img
          src="/img/hero-desktop.webp"
          alt="Annie e Andréia em atendimento, com a logo da Santo BPO"
          className="hero__img"
          width={2048}
          height={1365}
          fetchPriority="high"
        />
      </picture>
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__panel">
        <p className="eyebrow">BPO Financeiro para PMEs</p>
        <h1 id="hero-title" className="hero__title">
          Clareza e previsibilidade para o <em>financeiro</em> da sua empresa
        </h1>
        <div className="hero__cta">
          <a
            href={whatsappHref(
              PARTNERS.annie.phone,
              'Olá! Vim pelo site da Santo BPO e gostaria de saber mais sobre o BPO financeiro.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <FaWhatsapp aria-hidden="true" /> Falar no WhatsApp
          </a>
          <a href="#servicos" className="btn btn--ghost">
            Conheça os serviços
          </a>
        </div>
      </div>

      <a href="#quem-somos" className="hero__scroll" aria-label="Rolar para a próxima seção">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
