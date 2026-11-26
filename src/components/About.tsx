import Image from 'next/image';
import { FaAward, FaHandshake, FaChartLine } from 'react-icons/fa';

const credentials = [
  { icon: <FaAward aria-hidden="true" />, title: 'Certificadas', text: 'BPO Financeiro (Starfin) e Consultoria (Techfinance)' },
  { icon: <FaChartLine aria-hidden="true" />, title: '+20 anos', text: 'de experiência da Andréia na área de finanças' },
  { icon: <FaHandshake aria-hidden="true" />, title: 'Sob medida', text: 'Soluções adaptadas à realidade de cada empresa' },
];

export default function About() {
  return (
    <section id="quem-somos" className="section section--cream">
      <div className="container about">
        <div className="about__text" data-reveal="left">
          <p className="eyebrow">Sobre nós</p>
          <h2 className="section-title section-title--left">Quem Somos?</h2>
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
          <p className="about__partners">
            Hoje contamos com duas sócias administradoras que são a Annie e a Andréia.
          </p>

          <ul className="credentials" aria-label="Diferenciais">
            {credentials.map((c) => (
              <li key={c.title} className="credentials__item">
                <span className="credentials__icon">{c.icon}</span>
                <span>
                  <strong>{c.title}</strong>
                  <small>{c.text}</small>
                </span>
              </li>
            ))}
          </ul>

          <a className="btn btn--primary" href="#contato">
            Venha para a Santo BPO
          </a>
        </div>

        <div className="about__image" data-reveal="right">
          <div className="photo-frame">
            <Image
              src="/img/fotoequipe.jpg"
              alt="Equipe Santo BPO - Annie e Andréia"
              width={533}
              height={800}
              sizes="(max-width: 768px) 90vw, 450px"
              className="photo-frame__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
