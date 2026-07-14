import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main aria-label="Página principal da Santo BPO">

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="hero">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">
            BPO Financeiro para<br />
            <span className="hero-highlight">Pequenas e Médias Empresas</span>
          </h1>
          <p className="hero-subtitle">
            Gestão financeira completa — contas a pagar, receber, conciliação bancária e emissão de documentos.
            Clareza, previsibilidade e crescimento para o seu negócio.
          </p>
          <div className="hero-cta-group">
            <a className="btn-premium" href="#servicos">
              Conheça nossos serviços
            </a>
            <a className="btn-secondary" href="#quem-somos">
              Quem somos
            </a>
          </div>
        </div>
      </section>

      {/* --- SOBRE A SANTO --- */}
      <About />

      {/* --- SERVIÇOS --- */}
      <Services />

      {/* --- EQUIPE / CONTATOS --- */}
      <Team />

      {/* --- FEEDBACKS --- */}
      <Testimonials />

      {/* --- RODAPÉ --- */}
      <Footer />

    </main>
  );
}