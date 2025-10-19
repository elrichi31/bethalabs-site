import { Metadata } from "next";

export const metadataByLanguage = {
  es: {
    title: {
      default: 'BethaLabs | Automatización y Ciberseguridad Ecuador',
      template: '%s | BethaLabs'
    },
    description: 'Automatización con n8n/Make y ciberseguridad para PyMEs en Ecuador y Latinoamérica. Servicios remotos y presenciales.',
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
    openGraph: {
      title: 'BethaLabs | Automatización y Ciberseguridad Ecuador',
      description: 'Automatización con n8n/Make y ciberseguridad para PyMEs. Servicios remotos y presenciales.',
      locale: 'es_EC' as const,
      siteName: 'BethaLabs Ecuador',
    },
    twitter: {
      title: 'BethaLabs | Automatización y Ciberseguridad Ecuador',
      description: 'Automatización con n8n/Make y ciberseguridad para PyMEs en Ecuador y LATAM',
    },
  },
  en: {
    title: {
      default: 'BethaLabs | Automation & Cybersecurity LATAM',
      template: '%s | BethaLabs'
    },
    description: 'Automation with n8n/Make and cybersecurity for SMEs in Ecuador and Latin America. Remote and on-site services.',
    keywords: [
      'automation Ecuador',
      'automation Latin America',
      'SME cybersecurity',
      'n8n automation',
      'Make automation',
      'remote IT consulting',
      'business automation',
      'digital transformation',
      'BethaLabs',
      'BethaFlow',
      'BethaSecure',
      'WhatsApp CRM integration',
      'automatic billing',
      'IT security',
      'technology consulting',
      'Ecuador IT services',
      'remote automation'
    ],
    openGraph: {
      title: 'BethaLabs | Automation & Cybersecurity LATAM',
      description: 'Automation with n8n/Make and cybersecurity for SMEs. Remote and on-site services.',
      locale: 'en_US' as const,
      siteName: 'BethaLabs',
    },
    twitter: {
      title: 'BethaLabs | Automation & Cybersecurity LATAM',
      description: 'Automation with n8n/Make and cybersecurity for SMEs in Ecuador & LATAM',
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
          alt: `BethaLabs - ${lang === 'es' ? 'Automatización y Ciberseguridad' : 'Automation & Cybersecurity'}`,
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
