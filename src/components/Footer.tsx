import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {
  EMAIL,
  INSTAGRAM_URL,
  NAV_LINKS,
  PARTNERS,
  displayPhone,
  telHref,
  whatsappHref,
} from '@/data/site';

export default function Footer() {
  const partners = Object.values(PARTNERS);

  return (
    <footer id="rodape" className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <a href="#inicio" className="site-footer__logo">Santo BPO</a>
          <p>
            Transformando o financeiro de pequenas e médias empresas com previsibilidade,
            segurança e lucros palpáveis.
          </p>
          <div className="social">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Santo BPO" className="social__btn">
              <FaInstagram aria-hidden="true" />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Enviar e-mail" className="social__btn">
              <FaEnvelope aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav className="site-footer__col" aria-label="Rodapé">
          <h3>Navegação</h3>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.id}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__col">
          <h3>Fale com uma Assessora</h3>
          <ul>
            {partners.map((p) => (
              <li key={p.id} className="site-footer__phone">
                <span className="site-footer__who">{p.name}</span>
                <a href={telHref(p.phone)} aria-label={`Ligar para ${p.name}: ${displayPhone(p)}`}>
                  <FaPhoneAlt aria-hidden="true" /> {displayPhone(p)}
                </a>
                <a
                  href={whatsappHref(p.phone, `Olá, ${p.name}! Vim pelo site da Santo BPO.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp da ${p.name}`}
                  className="site-footer__wa"
                >
                  <FaWhatsapp aria-hidden="true" />
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${EMAIL}`} className="site-footer__mail">
                <FaEnvelope aria-hidden="true" /> {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} Santo BPO. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
