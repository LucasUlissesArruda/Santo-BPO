import type { Metadata } from 'next';
import './globals.css';
import AppNavbar from '@/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const siteUrl = 'https://www.santobpo.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Santo BPO | BPO Financeiro para Pequenas e Médias Empresas',
    template: '%s | Santo BPO',
  },
  description:
    'A Santo BPO oferece gestão financeira completa para pequenas e médias empresas: contas a pagar, contas a receber, conciliação bancária, emissão de notas fiscais e boletos. Terceirize seu financeiro com quem entende do seu negócio.',
  keywords: [
    'BPO financeiro',
    'gestão financeira PME',
    'terceirização financeira',
    'contas a pagar e receber',
    'conciliação bancária',
    'emissão de notas fiscais',
    'gestão financeira pequenas empresas',
    'consultoria financeira',
    'Santo BPO',
  ],
  authors: [{ name: 'Santo BPO', url: siteUrl }],
  creator: 'Santo BPO',
  publisher: 'Santo BPO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Santo BPO',
    title: 'Santo BPO | BPO Financeiro para Pequenas e Médias Empresas',
    description:
      'Gestão financeira completa para PMEs: contas a pagar, receber, conciliação bancária e emissão de documentos. Clareza, previsibilidade e crescimento para o seu negócio.',
    images: [
      {
        url: '/img/fotoequipe.jpg',
        width: 1200,
        height: 630,
        alt: 'Equipe Santo BPO - Annie e Andréia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santo BPO | BPO Financeiro para PMEs',
    description:
      'Gestão financeira completa para pequenas e médias empresas. Terceirize seu financeiro com a Santo BPO.',
    images: ['/img/fotoequipe.jpg'],
  },
  category: 'business',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Santo BPO',
  description:
    'BPO Financeiro especializado em pequenas e médias empresas. Oferecemos gestão de contas a pagar, contas a receber, conciliação bancária, emissão de notas fiscais e boletos.',
  url: siteUrl,
  logo: `${siteUrl}/img/santo.ico`,
  image: `${siteUrl}/img/fotoequipe.jpg`,
  email: 'contato@santobpo.com.br',
  priceRange: '$$',
  areaServed: 'BR',
  availableLanguage: 'Portuguese',
  sameAs: ['https://www.instagram.com/santobpo'],
  serviceType: [
    'BPO Financeiro',
    'Gestão de Contas a Pagar',
    'Gestão de Contas a Receber',
    'Conciliação Bancária',
    'Emissão de Notas Fiscais',
    'Emissão de Boletos',
    'Consultoria Financeira',
    'Treinamentos Financeiros',
  ],
  founder: [
    { '@type': 'Person', name: 'Annie' },
    { '@type': 'Person', name: 'Andréia' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppNavbar />
        {children}
      </body>
    </html>
  );
}