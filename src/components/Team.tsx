import Image from 'next/image';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { EMAIL, PARTNERS, displayPhone, telHref, whatsappHref, type Partner } from '@/data/site';
import ContactForm from './ContactForm';

type Member = {
  partner: Partner;
  photo: string;
  signature: string;
  bio: string[];
  reverse?: boolean;
};

const members: Member[] = [
  {
    partner: PARTNERS.annie,
    photo: '/img/Annie.jpg',
    signature: 'Oi, eu sou a Annie!',
    bio: [
      'Administradora por formação e BPO Financeiro por experiência e muito estudo e cursos! Formada em Administração em 2016, Pós Graduada em Marketing Digital em 2018 e especialista em BPO Financeiro desde 2022.',
      'Após 12 anos de atuação na área como colaboradora em empresas, amigas mais próximas e clientes das empresas que eu trabalhei começaram a me procurar pedindo dicas e direcionamentos sobre finanças e consultorias em seus negócios, assim nasce a Santo BPO.',
    ],
  },
  {
    partner: PARTNERS.andreia,
    photo: '/img/Andreia.jpg',
    signature: 'Oi, eu sou a Andréia!',
    bio: [
      'Mãe de dois filhos. Experiência em mais de 20 anos na área de Finanças. Pós graduada em MBA em Gestão, Contabilidade e Finanças Empresariais.',
      'Certificada para atuar em BPO Financeiro pela Starfin Treinamentos e para atuar em Consultoria e Assessoria Financeira pela Techfinance.',
    ],
    reverse: true,
  },
];

export default function Team() {
  return (
    <section id="contato" className="section section--white">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">Conheça as sócias</p>
          <h2 className="section-title">Contatos</h2>
        </header>

        <div className="team">
          {members.map(({ partner, photo, signature, bio, reverse }) => (
            <article key={partner.id} className={`team-row ${reverse ? 'team-row--reverse' : ''}`} data-reveal>
              <div className="team-row__photo">
                <div className="photo-frame photo-frame--tall">
                  <Image
                    src={photo}
                    alt={`${partner.name}, sócia administradora da Santo BPO`}
                    width={600}
                    height={900}
                    sizes="(max-width: 768px) 85vw, 420px"
                    className="photo-frame__img"
                  />
                </div>
              </div>

              <div className="team-row__info">
                <h3 className="signature">{signature}</h3>
                {bio.map((p, i) => (
                  <p key={i} className="team-bio">{p}</p>
                ))}

                <ul className="contact-list">
                  <li>
                    <a href={telHref(partner.phone)}>
                      <FaPhoneAlt aria-hidden="true" />
                      <span>{displayPhone(partner)}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${EMAIL}`}>
                      <FaEnvelope aria-hidden="true" />
                      <span>{EMAIL}</span>
                    </a>
                  </li>
                </ul>

                <a
                  href={whatsappHref(partner.phone, `Olá, ${partner.name}! Vim pelo site da Santo BPO.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp"
                >
                  <FaWhatsapp aria-hidden="true" /> Chamar a {partner.name} no WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="contact-panel" id="formulario" data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
