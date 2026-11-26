import { FaWhatsapp } from 'react-icons/fa';
import { PARTNERS, whatsappHref } from '@/data/site';

/** Chamada de conversão no meio da página, logo depois dos serviços. */
export default function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="container cta-band__inner" data-reveal>
        <div className="cta-band__text">
          <h2 id="cta-band-title">Pronta para organizar o financeiro da sua empresa?</h2>
          <p>Conte o que você precisa e a gente indica o melhor caminho, sem compromisso.</p>
        </div>
        <div className="cta-band__actions">
          <a
            href={whatsappHref(
              PARTNERS.annie.phone,
              'Olá! Vim pelo site da Santo BPO e gostaria de um orçamento de BPO financeiro.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            <FaWhatsapp aria-hidden="true" /> Falar no WhatsApp
          </a>
          <a href="#formulario" className="btn btn--outline-light">
            Preencher formulário
          </a>
        </div>
      </div>
    </section>
  );
}
