import { Metadata } from "next";

export const metadataByLanguage = {
  es: {
    title: {
      default: 'BethaLabs | Desarrollo Web y Automatización Ecuador',
      template: '%s | BethaLabs'
    },
    description: 'Desarrollo web profesional y automatizaciones con n8n para PyMEs en Ecuador y Latinoamérica. Landing pages, sitios web y flujos automáticos.',
    keywords: [
      'desarrollo web Ecuador',
      'diseño web Quito',
      'automatización Ecuador',
      'automatización Latinoamérica',
      'landing pages Ecuador',
      'n8n español',
      'Make automatización',
      'sitios web profesionales',
      'automatización empresarial',
      'transformación digital',
      'BethaLabs',
      'BethaFlow',
      'BethaWeb',
      'integración WhatsApp CRM',
      'chatbots WhatsApp',
      'desarrollo web PyMEs',
      'páginas web Ecuador',
      'automatización remota'
    ],
    openGraph: {
      title: 'BethaLabs | Desarrollo Web y Automatización Ecuador',
      description: 'Desarrollo web profesional y automatizaciones para PyMEs. Servicios remotos y presenciales.',
      locale: 'es_EC' as const,
      siteName: 'BethaLabs Ecuador',
    },
    twitter: {
      title: 'BethaLabs | Desarrollo Web y Automatización Ecuador',
      description: 'Desarrollo web y automatizaciones para PyMEs en Ecuador y LATAM',
    },
  },
  en: {
    title: {
      default: 'BethaLabs | Web Development & Automation LATAM',
      template: '%s | BethaLabs'
    },
    description: 'Professional web development and n8n automations for SMEs in Ecuador and Latin America. Landing pages, websites and automated workflows.',
    keywords: [
      'web development Ecuador',
      'web design Latin America',
      'automation Ecuador',
      'landing pages',
      'n8n automation',
      'Make automation',
      'professional websites',
      'business automation',
      'digital transformation',
      'BethaLabs',
      'BethaFlow',
      'BethaWeb',
      'WhatsApp CRM integration',
      'WhatsApp chatbots',
      'SME web development',
      'web pages Ecuador',
      'remote automation'
    ],
    openGraph: {
      title: 'BethaLabs | Web Development & Automation LATAM',
      description: 'Professional web development and automations for SMEs. Remote and on-site services.',
      locale: 'en_US' as const,
      siteName: 'BethaLabs',
    },
    twitter: {
      title: 'BethaLabs | Web Development & Automation LATAM',
      description: 'Web development and automations for SMEs in Ecuador & LATAM',
    },
  }
} as const;

export function getMetadataByLanguage(lang: 'es' | 'en'): Metadata {
  const meta = metadataByLanguage[lang];
  
  return {
    metadataBase: new URL('https://www.bethalabs.com'),
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    authors: [{ name: 'BethaLabs Team' }],
    creator: 'BethaLabs',
    publisher: 'BethaLabs',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: 'https://www.bethalabs.com',
      languages: {
        'es-EC': 'https://www.bethalabs.com?lang=es',
        'en-US': 'https://www.bethalabs.com?lang=en',
      }
    },
    openGraph: {
      type: 'website',
      locale: meta.openGraph.locale,
      alternateLocale: lang === 'es' ? ['en_US'] : ['es_EC'],
      url: 'https://www.bethalabs.com',
      siteName: meta.openGraph.siteName,
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `BethaLabs - ${lang === 'es' ? 'Desarrollo Web y Automatización' : 'Web Development & Automation'}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.twitter.title,
      description: meta.twitter.description,
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
  };
}
