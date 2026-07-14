"use client";

import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="rodape" className="premium-footer">
      <div className="footer-top">

        {/* Logo Ouro e Manifesto */}
        <div className="footer-col brand-col">
          <Link href="#inicio" className="footer-logo">
            Santo BPO
          </Link>
          <p className="footer-manifesto">
            Transformando o financeiro de pequenas e médias empresas com previsibilidade, segurança e lucros palpáveis.
          </p>
        </div>

        {/* Links Minimalistas */}
        <div className="footer-col">
          <h4>Navegação</h4>
          <Link href="#inicio">Início</Link>
          <Link href="#quem-somos">Sobre Nós</Link>
          <Link href="#servicos">Nossos Serviços</Link>
        </div>

        {/* Área de Contato Direta */}
        <div className="footer-col contact-col">
          <h4>Fale com uma Assessora</h4>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="footer-contact-link">
            <FaWhatsapp className="footer-icon-gold" />
            (11) 99999-9999
          </a>
          <a href="mailto:contato@santobpo.com.br" className="footer-contact-link">
            <FaEnvelope className="footer-icon-gold" />
            contato@santobpo.com.br
          </a>

          <div className="social-links-premium">
            <a href="#" aria-label="Instagram" className="social-btn">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5511999999999" aria-label="WhatsApp" className="social-btn">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Santo BPO. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
