"use client";

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { PARTNERS, whatsappHref } from '@/data/site';

/**
 * Botão fixo de WhatsApp. Aparece depois que o visitante rola além do início
 * (no topo o hero já tem o próprio botão) e some quando o formulário está na tela.
 */
export default function FloatingWhatsApp() {
  const [scrolled, setScrolled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const form = document.getElementById('formulario');
    if (!form || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !formVisible;

  return (
    <a
      className={`wa-float ${visible ? 'is-visible' : ''}`}
      href={whatsappHref(
        PARTNERS.annie.phone,
        'Olá! Vim pelo site da Santo BPO e gostaria de saber mais sobre o BPO financeiro.'
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Santo BPO no WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : true}
    >
      <FaWhatsapp aria-hidden="true" />
      <span className="wa-float__label">Fale conosco</span>
    </a>
  );
}
