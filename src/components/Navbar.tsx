"use client";

import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={scrolled ? 'nav-scrolled' : 'nav-top'}>
      <Container>
        <Link href="#inicio" passHref legacyBehavior>
          <Navbar.Brand style={{ fontFamily: 'MoonTime, sans-serif', fontSize: '3.5rem', fontWeight: 500, transition: 'all 0.4s ease' }}>
            Santo BPO
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            border: 'none',
            transform: 'scale(0.9)',
            backgroundColor: 'rgba(255,255,255,0.8)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: 'center' }}>
            {['Início', 'Sobre a Santo', 'Serviços', 'Contato', 'Depoimentos'].map((item, index) => {
              const hrefs = ['#inicio', '#quem-somos', '#servicos', '#contato', '#feedbacks'];
              return (
                <Nav.Link key={index} href={hrefs[index]} className="nav-link">
                  {item}
                </Nav.Link>
              )
            })}
            <Link href="#contato" className="btn-premium" style={{ marginLeft: '15px', padding: '8px 25px', fontSize: '0.9rem' }}>
              Começar
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}