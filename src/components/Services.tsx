"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaSignOutAlt, 
  FaSignInAlt, 
  FaChartBar, 
  FaSyncAlt, 
  FaFileInvoice, 
  FaBarcode, 
  FaChalkboardTeacher, 
  FaShieldAlt 
} from 'react-icons/fa';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    { title: "Gestão de contas a pagar", icon: <FaSignOutAlt /> },
    { title: "Gestão de contas a receber", icon: <FaSignInAlt /> },
    { title: "Acompanhamento de métricas e resultados", icon: <FaChartBar /> },
    { title: "Conciliação bancária e de caixa", icon: <FaSyncAlt /> },
    { title: "Emissão e envio de notas fiscais", icon: <FaFileInvoice /> },
    { title: "Emissão e envio de boletos bancários", icon: <FaBarcode /> },
    { title: "Treinamentos", icon: <FaChalkboardTeacher /> },
    { title: "Segurança Financeira", icon: <FaShieldAlt /> }
  ];

  return (
    <section id="servicos" className="bg-light-gray">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Nossos Serviços</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="service-card" 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
