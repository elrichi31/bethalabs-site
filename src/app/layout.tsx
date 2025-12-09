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
    default: 'BethaLabs | Desarrollo Web y Automatización Ecuador',
    template: '%s | BethaLabs Ecuador'
  },
  description: 'Agencia de desarrollo web y automatización para PyMEs en Ecuador y Latinoamérica. Landing pages, e-commerce, chatbots WhatsApp y flujos automáticos con n8n.',
  keywords: [
    'desarrollo web Ecuador',
    'diseño web Quito',
    'landing pages Ecuador',
    'automatización Latinoamérica',
    'e-commerce Ecuador',
    'n8n español',
    'chatbots WhatsApp',
    'automatización empresarial',
    'transformación digital',
    'BethaLabs',
    'BethaFlow',
    'BethaWeb',
    'integración WhatsApp CRM',
    'sitios web profesionales',
    'páginas web Ecuador',
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
    title: 'BethaLabs | Desarrollo Web y Automatización Ecuador',
    description: 'Creamos sitios web profesionales y automatizamos procesos para PyMEs ecuatorianas. Landing pages, e-commerce y chatbots WhatsApp.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BethaLabs - Desarrollo Web y Automatización Ecuador',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BethaLabs | Desarrollo Web y Automatización Ecuador',
    description: 'Agencia de desarrollo web y automatización para PyMEs ecuatorianas',
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
        {/* Critical CSS inline - texto visible inmediatamente con fuente sistema */}
        <style dangerouslySetInnerHTML={{__html: `
          @font-face{font-family:"Acorn";src:url("/fonts/acorn.woff") format("woff");font-display:optional}
          @font-face{font-family:"GT Walsheim";src:url("/fonts/gt.woff") format("woff");font-display:optional}
          :root{--titleFont:"Acorn",system-ui,-apple-system,sans-serif;--bodyFont:"GT Walsheim",system-ui,-apple-system,sans-serif}
          html,body{margin:0;padding:0;background:#121212;color:#fff;font-family:system-ui,-apple-system,sans-serif}
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
