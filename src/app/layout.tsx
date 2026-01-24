import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// highlight.js CSS movido a blog-post.tsx para lazy loading
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LanguageProvider } from "@/contexts/language-context"
import AnimationProvider from '@/contexts/animation-context'
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
    'diseño web Guayaquil',
    'landing pages Ecuador',
    'automatización Latinoamérica',
    'e-commerce Ecuador',
    'n8n español',
    'chatbots WhatsApp Ecuador',
    'automatización empresarial',
    'transformación digital PyMEs',
    'BethaLabs',
    'BethaFlow',
    'BethaWeb',
    'integración WhatsApp CRM',
    'sitios web profesionales Ecuador',
    'páginas web Ecuador',
    'agencia digital Ecuador',
    'automatización remota',
    'desarrollo web LATAM'
  ],
  authors: [{ name: 'BethaLabs Team', url: 'https://www.bethalabs.com' }],
  creator: 'BethaLabs',
  publisher: 'BethaLabs',
  category: 'technology',
  classification: 'Web Development Agency',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://www.bethalabs.com',
    languages: {
      'es-EC': 'https://www.bethalabs.com',
      'en': 'https://www.bethalabs.com',
    },
  },
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
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'BethaLabs - Desarrollo Web y Automatización Ecuador',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BethaLabs | Desarrollo Web y Automatización Ecuador',
    description: 'Agencia de desarrollo web y automatización para PyMEs ecuatorianas',
    images: ['/icon-512.png'],
    creator: '@bethalabs',
    site: '@bethalabs',
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
  other: {
    // Metadata para redes sociales
    'og:logo': 'https://www.bethalabs.com/icon-512.png',
    'og:brand': 'BethaLabs',
    // TikTok metadata
    'tiktok:app_id': 'bethalabs',
    'tiktok:title': 'BethaLabs | Desarrollo Web y Automatización Ecuador',
    'tiktok:description': 'Creamos sitios web profesionales y automatizamos procesos para PyMEs',
    // Instagram metadata
    'instagram:title': 'BethaLabs Ecuador',
    'instagram:description': 'Desarrollo Web y Automatización para PyMEs',
    // LinkedIn metadata
    'linkedin:owner': 'BethaLabs',
    // Pinterest metadata
    'pinterest:title': 'BethaLabs | Desarrollo Web y Automatización',
    'pinterest:description': 'Agencia de desarrollo web en Ecuador',
  },
  // verification: {
  //   google: 'AÑADIR_CODIGO_GOOGLE_SEARCH_CONSOLE',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-EC" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts to eliminate render-blocking chain */}
        <link rel="preload" href="/fonts/gt.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/acorn.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        {/* Critical CSS inline - texto visible inmediatamente */}
        <style dangerouslySetInnerHTML={{__html: `
          @font-face{font-family:"GT Walsheim";src:url("/fonts/gt.woff") format("woff");font-display:swap}
          @font-face{font-family:"Acorn";src:url("/fonts/acorn.woff") format("woff");font-display:swap}
          :root{--titleFont:"Acorn",system-ui,sans-serif;--bodyFont:"GT Walsheim",system-ui,sans-serif}
          html,body{margin:0;padding:0;background:#121212;color:#fff;font-family:"GT Walsheim",system-ui,sans-serif;overflow-x:hidden;max-width:100vw}
          .hero-text{opacity:1!important;transform:none!important}
        `}} />
        {/* Google Analytics - gtag.js (deferred to idle to avoid blocking LCP) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-02QG2EX4RP"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`(function(){
            function init(){
              try{
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                window.gtag = window.gtag || gtag;
                gtag('js', new Date());
                gtag('config', 'G-02QG2EX4RP');
              }catch(e){}
            }
            if ('requestIdleCallback' in window) requestIdleCallback(init);
            else window.addEventListener('load', init);
          })();`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimationProvider>
          <LanguageProvider>
            <DynamicMetadata />
            {children}
          </LanguageProvider>
        </AnimationProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
