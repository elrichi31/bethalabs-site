import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'highlight.js/styles/atom-one-dark.css';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LanguageProvider } from "@/contexts/language-context"
import DynamicMetadata from "@/components/dynamic-metadata"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bethalabs.com'),
  title: {
    default: 'BethaLabs | Automatización y Ciberseguridad en Ecuador',
    template: '%s | BethaLabs Ecuador'
  },
  description: 'Agencia de automatización y ciberseguridad para PyMEs en Ecuador y Latinoamérica. Especialistas en n8n, Make, y protección digital. Servicios remotos y presenciales.',
  keywords: [
    'automatización Ecuador',
    'automatización Latinoamérica',
    'ciberseguridad PyMEs',
    'n8n español',
    'Make automatización',
    'consultoría IT remota',
    'automatización empresarial',
    'transformación digital',
    'BethaLabs',
    'BethaFlow',
    'BethaSecure',
    'integración WhatsApp CRM',
    'facturación automática',
    'seguridad informática',
    'consultoría tecnológica',
    'servicios IT Ecuador',
    'automatización remota'
  ],
  authors: [{ name: 'BethaLabs Team' }],
  creator: 'BethaLabs',
  publisher: 'BethaLabs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    url: 'https://www.bethalabs.com',
    siteName: 'BethaLabs Ecuador',
    title: 'BethaLabs | Automatización y Ciberseguridad en Ecuador',
    description: 'Transformamos negocios ecuatorianos con automatizaciones inteligentes y seguridad digital. Expertos en n8n, Make y protección de datos.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BethaLabs - Automatización y Ciberseguridad Ecuador',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BethaLabs | Automatización y Ciberseguridad en Ecuador',
    description: 'Agencia líder en automatización y ciberseguridad para PyMEs ecuatorianas',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-EC" suppressHydrationWarning>
      <head>
        {/* Preconnect para reducir latencia de fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS inline para hero above-the-fold */}
        <style dangerouslySetInnerHTML={{__html: `
          html,body{margin:0;padding:0;width:100%;overflow-x:hidden}
          body{background:#121212;color:#fff;font-family:var(--bodyFont),sans-serif}
          .hero-section{min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;background:#121212}
          .navbar{position:fixed;top:0;left:0;right:0;z-index:50;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
        `}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <DynamicMetadata />
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
