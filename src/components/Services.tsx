import {
  FaSignOutAlt,
  FaSignInAlt,
  FaChartBar,
  FaSyncAlt,
  FaFileInvoice,
  FaBarcode,
  FaChalkboardTeacher,
  FaShieldAlt,
} from 'react-icons/fa';
import ServiceLink from './ServiceLink';

const services = [
  {
    title: 'Gestão de contas a pagar',
    text: 'Vencimentos e pagamentos organizados, sem perder prazos.',
    icon: <FaSignOutAlt aria-hidden="true" />,
  },
  {
    title: 'Gestão de contas a receber',
    text: 'Cobranças e recebimentos sempre sob controle.',
    icon: <FaSignInAlt aria-hidden="true" />,
  },
  {
    title: 'Acompanhamento de métricas e resultados',
    text: 'Números claros para você decidir com segurança.',
    icon: <FaChartBar aria-hidden="true" />,
  },
  {
    title: 'Conciliação bancária e de caixa',
    text: 'Conferimos extratos e caixa para tudo bater no fim do mês.',
    icon: <FaSyncAlt aria-hidden="true" />,
  },
  {
    title: 'Emissão e envio de notas fiscais',
    text: 'Emitimos e enviamos as notas aos seus clientes, sem atrasos.',
    icon: <FaFileInvoice aria-hidden="true" />,
  },
  {
    title: 'Emissão e envio de boletos bancários',
    text: 'Geramos e enviamos os boletos e acompanhamos o pagamento.',
    icon: <FaBarcode aria-hidden="true" />,
  },
  {
    title: 'Treinamentos',
    text: 'Ensinamos você e sua equipe a manter o financeiro em dia.',
    icon: <FaChalkboardTeacher aria-hidden="true" />,
  },
  {
    title: 'Segurança Financeira',
    text: 'Processos e controles que protegem o caixa da empresa.',
    icon: <FaShieldAlt aria-hidden="true" />,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section section--sand">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">O que fazemos</p>
          <h2 className="section-title">Nossos Serviços</h2>
        </header>

        <ul className="services-grid">
          {services.map((service, idx) => (
            <li
              key={service.title}
              className="service-card"
              data-reveal
              style={{ ['--delay' as string]: `${(idx % 4) * 90}ms` }}
            >
              <span className="service-card__index" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="service-card__icon">{service.icon}</span>
              <div className="service-card__body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ServiceLink title={service.title} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
