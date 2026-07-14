"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const feedbacks = [
    {
      text: "Adoro o seu trabalho e a forma clara de se comunicar !! Transmitindo leveza para cada encontro da mentoria ❤️.",
      name: "Rafaela Bosche",
      role: "Nutricionista comportamental",
      avatar: "/img/RafaelaBosche.enc.jpg"
    },
    {
      text: "Obrigada Andréia, foi um prazer conhecer vc também mesmo que a distância quem sabe um dia nos conheceremos. Creio que a mentoria com vcs terá grandes resultados em nome de Jesus Cristo 🙏 Que Deus abençoe sempre 🙏",
      name: "Leide Lins",
      role: "Toda lady",
      avatar: "/img/leide.jpg"
    },
    {
      text: "Obrigada Annie querida por cada encontro, por cada palavra de ânimo e positividade, creio que Deus tem grandes coisas para nós enquanto Toda_Lady e para vcs também Santobpo 🙏🙌 AMEI todas as dicas e sugestões, vou fazer tudo no tempo certo 😅😁 A mentoria foi o primeiro passo.",
      name: "Leide Lins",
      role: "Toda lady",
      avatar: "/img/leide.jpg"
    },
    {
      text: "Eu tô até agora sem acreditar o tanto que cresceu a clínica, tô muito feliz e emocionadaaaa Sei que seu trabalho tbm foi essencial para esse crescimento ❤️",
      name: "Juliana Silveira",
      role: "Juliana Silveira Estetica & Bem-Estar",
      avatar: "/img/juliana.jpg"
    },
    {
      text: "Bom dia meninas, eu fiquei feliz com o retorno, ainda vamos ter um tempo aí pra ter uma média de como está o andamento, mas só de não estarmos no vermelho já foi um alívio... obrigada pelo trabalho de vcs, tá sendo maravilhoso",
      name: "Andressa",
      role: "Financeiro & Saúde",
      avatar: "/img/RafaelaBosche.enc.jpg"
    },
    {
      text: "Eu to tão feliz c os resultados de novembro Só tenho a agradecer ✨ obrigada equipe e vamos buscar evoluir ainda mais 🦷🤍",
      name: "Tamires Nogarotto",
      role: "Odontologia",
      avatar: "/img/leide.jpg"
    },
    {
      text: "Faltou você dizer que além de tudo isso, você realmente ajuda a gente crescer, porque você mostra no que investir, como investir e principalmente como guardar dinheiro 💰 eu só cresci depois que você entrou em minha vida ❤️",
      name: "Nossa Cliente",
      role: "Empreendedora Expandindo",
      avatar: "/img/juliana.jpg"
    }
  ];

  return (
    <section id="feedbacks" className="testimonials-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Feedbacks</h2>
        
        <div data-aos="fade-up" data-aos-delay="200" className="mx-auto" style={{ maxWidth: '900px' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000, disableOnInteraction: true }}
            loop={true}
          >
            {feedbacks.map((fb, idx) => (
              <SwiperSlide key={idx}>
                <div className="testimonial-card">
                  <div className="testimonial-quotes">“</div>
                  <p className="testimonial-text">{fb.text}</p>
                  <div className="testimonial-author">
                    <img 
                      src={fb.avatar} 
                      alt={`Foto ${fb.name}`} 
                      className="testimonial-avatar" 
                      width="150" 
                      height="150" 
                    />
                    <div className="testimonial-author-info">
                      <h4>{fb.name}</h4>
                      <p>{fb.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
