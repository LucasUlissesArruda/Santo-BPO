import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import CtaBand from '../components/CtaBand';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main id="conteudo" aria-label="Página principal da Santo BPO">
        <Hero />
        <Stats />
        <About />
        <Services />
        <CtaBand />
        <Team />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
