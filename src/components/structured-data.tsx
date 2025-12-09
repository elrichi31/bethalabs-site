"use client"

import { useLanguage } from "@/contexts/language-context"

export default function StructuredData() {
  const { language } = useLanguage()
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BethaLabs",
    "alternateName": "BethaLabs Ecuador",
    "url": "https://www.bethalabs.com",
    "logo": "https://www.bethalabs.com/logo.png",
    "description": language === 'es' 
      ? "Agencia ecuatoriana de desarrollo web y automatización para PyMEs. Landing pages, e-commerce, chatbots WhatsApp y flujos automáticos con n8n."
      : "Ecuadorian web development and automation agency for SMEs. Landing pages, e-commerce, WhatsApp chatbots and automated workflows with n8n.",
    "inLanguage": [language === 'es' ? 'es-EC' : 'en-US'],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EC",
      "addressLocality": "Quito",
      "addressRegion": "Pichincha"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-0.1807",
      "longitude": "-78.4678"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Ecuador"
      },
      {
        "@type": "Country",
        "name": "Colombia"
      },
      {
        "@type": "Country",
        "name": "Perú"
      },
      {
        "@type": "Country",
        "name": "México"
      },
      {
        "@type": "Country",
        "name": "Argentina"
      },
      {
        "@type": "Country",
        "name": "Chile"
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/bethalabs",
      "https://github.com/bethalabs",
      "https://twitter.com/bethalabs"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "bethalabs.dev@gmail.com",
      "availableLanguage": ["Spanish", "English"]
    }
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development and Business Automation",
    "provider": {
      "@type": "Organization",
      "name": "BethaLabs"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Ecuador"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": language === 'es' 
        ? "Servicios de Desarrollo Web y Automatización"
        : "Web Development and Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "BethaWeb - " + (language === 'es' ? "Desarrollo Web Profesional" : "Professional Web Development"),
            "description": language === 'es'
              ? "Desarrollo de sitios web profesionales, landing pages de alta conversión, e-commerce y portfolios con Next.js y React."
              : "Professional website development, high-conversion landing pages, e-commerce and portfolios with Next.js and React.",
            "provider": {
              "@type": "Organization",
              "name": "BethaLabs"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "BethaFlow - " + (language === 'es' ? "Automatización de Procesos" : "Process Automation"),
            "description": language === 'es'
              ? "Automatización de procesos empresariales con n8n. Chatbots WhatsApp, integración de sistemas, flujos de trabajo inteligentes."
              : "Business process automation with n8n. WhatsApp chatbots, system integration, intelligent workflows.",
            "provider": {
              "@type": "Organization",
              "name": "BethaLabs"
            }
          }
        }
      ]
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BethaLabs",
    "image": "https://www.bethalabs.com/logo.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EC",
      "addressLocality": "Quito",
      "addressRegion": "Pichincha"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-0.1807",
      "longitude": "-78.4678"
    },
    "url": "https://www.bethalabs.com",
    "telephone": "+593-XX-XXX-XXXX",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.bethalabs.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": "https://www.bethalabs.com/#servicios"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": "https://www.bethalabs.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contacto",
        "item": "https://www.bethalabs.com/#contacto"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es BethaLabs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BethaLabs es una agencia de desarrollo web y automatización para PyMEs en Ecuador y Latinoamérica. Creamos sitios web profesionales, landing pages de alta conversión, e-commerce y automatizamos procesos con chatbots WhatsApp y flujos inteligentes con n8n."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué servicios ofrece BethaLabs en Ecuador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos dos servicios principales: BethaWeb (desarrollo web profesional: landing pages, e-commerce, portfolios, sitios corporativos con Next.js) y BethaFlow (automatización de procesos: chatbots WhatsApp, integración de sistemas, n8n, reportes automáticos). Atendemos PyMEs en todo Ecuador."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo puede la automatización ayudar a mi PyME en Ecuador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La automatización reduce tiempo en tareas repetitivas hasta un 80%, elimina errores humanos, mejora la productividad y permite que tu equipo se enfoque en actividades estratégicas. Automatizamos WhatsApp, CRM, reportes, integraciones entre sistemas y más."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué necesito un sitio web profesional para mi negocio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un sitio web profesional te da presencia online 24/7, genera confianza en tus clientes, te posiciona en Google y convierte visitantes en clientes. Creamos landing pages optimizadas que generan leads y e-commerce que venden mientras duermes."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué países opera BethaLabs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Operamos en toda Latinoamérica de forma remota, con base en Ecuador (Quito). Ofrecemos servicios presenciales en Ecuador y servicios 100% remotos para toda Latinoamérica. Trabajamos principalmente en español con clientes de Ecuador, Colombia, Perú, México, Argentina y Chile."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
