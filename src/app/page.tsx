"use client";

import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="hero">
      </section>

      {/* --- SOBRE A SANTO --- */}
      <About />

      {/* --- SERVIÇOS --- */}
      <Services />



      {/* --- REPOSICIONADO: EQUIPE / CONTATOS --- */}
      <Team />

      {/* --- FEEDBACKS --- */}
      <Testimonials />

      {/* --- RODAPÉ --- */}
      <Footer />


    </main>
  );
}