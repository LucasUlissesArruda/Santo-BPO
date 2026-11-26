"use client";

import { useEffect, useRef } from 'react';

/**
 * Efeitos de rolagem leves (substitui a biblioteca AOS):
 *  - revela elementos `[data-reveal]` quando entram na tela (IntersectionObserver)
 *  - barra de progresso de leitura no topo da página
 * Respeita `prefers-reduced-motion`: sem animação, conteúdo aparece direto.
 */
export default function ScrollEffects() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    let observer: IntersectionObserver | undefined;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
    } else {
      root.classList.add('js-ready');
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );
      targets.forEach((el) => observer?.observe(el));
    }

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const max = root.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      root.classList.remove('js-ready');
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
