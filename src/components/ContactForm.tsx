"use client";

import { useEffect, useId, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { PARTNERS, displayPhone, whatsappHref, type Partner } from '@/data/site';
import { isValidPhone, maskPhone } from '@/lib/masks';
import { SERVICE_EVENT } from './ServiceLink';

type Errors = { name?: string; phone?: string };
type Sent = { href: string; name: string } | null;

/**
 * Formulário de contato em 2 passos (1: seus dados, 2: com quem e o quê).
 * Sem backend: ao enviar, abre o WhatsApp da sócia escolhida com a mensagem pronta.
 */
export default function ContactForm() {
  const uid = useId();
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [partnerId, setPartnerId] = useState<Partner['id']>('annie');
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Sent>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  // só move o foco depois de uma ação do usuário (não ao carregar a página)
  const moveFocus = useRef(false);

  // Serviço escolhido nos cards: preenche a mensagem e volta ao passo 1
  useEffect(() => {
    const onService = (e: Event) => {
      const title = (e as CustomEvent<string>).detail;
      setMessage(`Tenho interesse em: ${title}.`);
      setSent(null);
      setStep(1);
      moveFocus.current = true;
    };
    window.addEventListener(SERVICE_EVENT, onService);
    return () => window.removeEventListener(SERVICE_EVENT, onService);
  }, []);

  useEffect(() => {
    if (!moveFocus.current) return;
    moveFocus.current = false;
    const target = step === 1 ? nameRef.current : messageRef.current;
    target?.focus({ preventScroll: true });
  }, [step]);

  const goNext = () => {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = 'Informe seu nome.';
    if (!isValidPhone(phone)) next.phone = 'Informe um telefone válido com DDD.';
    setErrors(next);
    if (Object.keys(next).length > 0) {
      (next.name ? nameRef.current : phoneRef.current)?.focus();
      return;
    }
    moveFocus.current = true;
    setStep(2);
  };

  const goBack = () => {
    moveFocus.current = true;
    setSent(null);
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 1) {
      goNext(); // Enter no passo 1 avança em vez de enviar
      return;
    }

    const text = [
      `Olá! Meu nome é ${name.trim()}.`,
      message.trim() || 'Gostaria de saber mais sobre o BPO financeiro da Santo BPO.',
      `Meu telefone para retorno: ${phone}`,
    ].join('\n');

    const href = whatsappHref(PARTNERS[partnerId].phone, text);
    window.open(href, '_blank', 'noopener,noreferrer');
    setSent({ href, name: PARTNERS[partnerId].name });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__head">
        <p className="eyebrow">Fale com a gente</p>
        <h3>Conte rapidinho o que você precisa</h3>
        <p>Dois passos rápidos e abrimos uma conversa no WhatsApp.</p>
      </div>

      <div className="steps" role="group" aria-label={`Passo ${step} de 2`}>
        <span className={`steps__item ${step === 1 ? 'is-current' : 'is-done'}`}>
          <b aria-hidden="true">1</b> Seus dados
        </span>
        <span className="steps__bar" aria-hidden="true" />
        <span className={`steps__item ${step === 2 ? 'is-current' : ''}`}>
          <b aria-hidden="true">2</b> Sua conversa
        </span>
      </div>

      {step === 1 && (
        <>
          <div className="field">
            <label htmlFor={`${uid}-name`}>Seu nome</label>
            <input
              id={`${uid}-name`}
              ref={nameRef}
              name="nome"
              type="text"
              autoComplete="name"
              placeholder="Como podemos te chamar?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? `${uid}-name-err` : undefined}
            />
            {errors.name && (
              <span id={`${uid}-name-err`} className="field__error" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor={`${uid}-phone`}>Seu telefone / WhatsApp</label>
            <input
              id={`${uid}-phone`}
              ref={phoneRef}
              name="telefone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="(00) 00000-0000"
              maxLength={15}
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? `${uid}-phone-err` : undefined}
            />
            {errors.phone && (
              <span id={`${uid}-phone-err`} className="field__error" role="alert">
                {errors.phone}
              </span>
            )}
          </div>

          <button type="button" className="btn btn--primary" onClick={goNext}>
            Continuar <span aria-hidden="true">→</span>
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <fieldset className="contact-form__who">
            <legend>Com quem você quer falar?</legend>
            {Object.values(PARTNERS).map((p) => (
              <label key={p.id} className={`chip ${partnerId === p.id ? 'is-checked' : ''}`}>
                <input
                  type="radio"
                  name={`${uid}-partner`}
                  value={p.id}
                  checked={partnerId === p.id}
                  onChange={() => setPartnerId(p.id)}
                />
                <span>
                  {p.name}
                  <small>{displayPhone(p)}</small>
                </span>
              </label>
            ))}
          </fieldset>

          <div className="field">
            <label htmlFor={`${uid}-msg`}>
              Mensagem <span className="field__optional">(opcional)</span>
            </label>
            <textarea
              id={`${uid}-msg`}
              ref={messageRef}
              rows={3}
              maxLength={500}
              name="mensagem"
              placeholder="Ex.: preciso organizar contas a pagar e receber"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="contact-form__actions">
            <button type="button" className="btn btn--ghost" onClick={goBack}>
              <span aria-hidden="true">←</span> Voltar
            </button>
            <button type="submit" className="btn btn--whatsapp">
              <FaWhatsapp aria-hidden="true" /> Enviar pelo WhatsApp
            </button>
          </div>
        </>
      )}

      <p className="contact-form__status" role="status" aria-live="polite">
        {sent && (
          <>
            Abrimos o WhatsApp da {sent.name} em uma nova aba. Não abriu?{' '}
            <a href={sent.href} target="_blank" rel="noopener noreferrer">Toque aqui</a>.
          </>
        )}
      </p>
    </form>
  );
}
