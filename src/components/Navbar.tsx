"use client";

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/data/site';

export default function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('inicio');

  // Estado "rolado" da barra
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Destaca o link da seção visível
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Fecha o menu com Esc e trava rolagem de fundo enquanto aberto
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  // Ao ampliar a janela (desktop), fecha o menu mobile e libera a rolagem
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 992px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`site-nav ${scrolled || open ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}
    >
      <nav className="site-nav__inner" aria-label="Navegação principal">
        <a href="#inicio" className="site-nav__brand" onClick={close}>
          Santo BPO
        </a>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="site-nav__burger" aria-hidden="true" />
        </button>

        <div id="menu-principal" className="site-nav__menu">
          <ul className="site-nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`site-nav__link ${active === link.id ? 'is-active' : ''}`}
                  aria-current={active === link.id ? 'location' : undefined}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className="btn btn--primary btn--sm" onClick={close}>
            Começar
          </a>
        </div>
      </nav>
    </header>
  );
}
