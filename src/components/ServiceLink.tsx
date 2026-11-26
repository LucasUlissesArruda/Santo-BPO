"use client";

export const SERVICE_EVENT = 'santo:service-selected';

/** Link "Quero este serviço": avisa o formulário qual serviço foi escolhido e rola até ele. */
export default function ServiceLink({ title }: { title: string }) {
  return (
    <a
      href="#formulario"
      className="service-card__link"
      onClick={() => window.dispatchEvent(new CustomEvent(SERVICE_EVENT, { detail: title }))}
    >
      <span className="service-card__link-label">
        Quero este serviço<span className="sr-only">: {title}</span>
      </span>
      <span className="service-card__link-arrow" aria-hidden="true">→</span>
    </a>
  );
}
