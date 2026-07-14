"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contato" style={{ backgroundColor: '#fff', padding: '100px 20px' }}>
      <h2 className="section-title" data-aos="fade-up">Contatos</h2>
      <div className="team-container">
        
        {/* ROW 1: Annie */}
        <div className="team-row" data-aos="fade-up">
          <div className="team-photo-box">
            <div className="team-photo-frame"></div>
            <img src="/img/Annie.jpg" alt="Annie" className="team-photo" />
          </div>
          <div className="team-info">
            <div className="team-signature">Oi, eu sou a Annie!</div>
            <p className="team-bio">
              Administradora por formação e BPO Financeiro por experiência e muito estudo e cursos! 
              Formada em Administração em 2016, Pós Graduada em Marketing Digital em 2018 e especialista em BPO Financeiro desde 2022.
            </p>
            <p className="team-bio">
              Após 12 anos de atuação na área como colaboradora em empresas, amigas mais próximas 
              e clientes das empresas que eu trabalhei começaram a me procurar pedindo dicas e 
              direcionamentos sobre finanças e consultorias em seus negócios, assim nasce a Santo BPO.
            </p>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp style={{ fontSize: '1.2rem' }} /> WhatsApp
            </a>
          </div>
        </div>

        {/* ROW 2: Andreia */}
        <div className="team-row reverse" data-aos="fade-up" data-aos-delay="100">
          <div className="team-photo-box">
            <div className="team-photo-frame"></div>
            <img src="/img/Andreia.jpg" alt="Andreia" className="team-photo" />
          </div>
          <div className="team-info">
            <div className="team-signature">Oi, eu sou a Andreia!</div>
            <p className="team-bio">
              Mãe de dois filhos. Experiência em mais de 20 anos na área de Finanças. Pós graduada em MBA em Gestão, Contabilidade e Finanças Empresariais.
            </p>
            <p className="team-bio">
              Certificada para atuar em BPO Financeiro pela Starfin Treinamentos e para atuar em Consultoria e Assessoria Financeira pela Techfinance.
            </p>
            <a href="https://wa.me/5511888888888" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp style={{ fontSize: '1.2rem' }} /> WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
