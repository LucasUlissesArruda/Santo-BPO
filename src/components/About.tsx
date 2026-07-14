"use client";

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="quem-somos">
      <div className="somos-section">
        {/* Texto */}
        <div className="somos-text" data-aos="fade-right">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Quem Somos?</h2>
          <p>
            A <strong>Santo BPO</strong> tem como missão trazer clareza e previsibilidade, com organização e planejamento. 
            Abraçando a necessidade financeira de pequenas e médias empresas, disponibilizamos um 
            atendimento atencioso e com soluções eficientes, podendo ser adaptadas às suas necessidades específicas.
          </p>
          <p>
            Financeiro efetivo, coerente com a realidade de pequenas e médias empreendedoras, 
            ajudando na gestão e organização do financeiro, para que assim possam se concentrar 
            em seus negócios e suas atividades chaves e fazer com que a empresa cresça exponencialmente.
          </p>
          <p style={{ fontWeight: 500, color: 'var(--primary)', marginBottom: '30px' }}>
            Hoje contamos com duas sócias administradoras que são a Annie e a Andréia.
          </p>
          <a className="btn-premium" href="#contato">
            Venha para a Santo BPO
          </a>
        </div>

        {/* Imagem */}
        <div className="somos-image" data-aos="fade-left">
          <div className="somos-image-wrapper">
            <Image 
              src="/img/fotoequipe.jpg" 
              alt="Equipe Santo BPO - Annie e Andréia" 
              width={500} 
              height={700}
              className="somos-img-obj"
              style={{ width: '100%', height: 'auto', maxWidth: '450px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}