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