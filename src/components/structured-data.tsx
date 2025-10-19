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
      ? "Agencia ecuatoriana especializada en automatización de procesos empresariales y ciberseguridad para PyMEs. Expertos en n8n, Make, y protección digital."
      : "Ecuadorian agency specialized in business process automation and cybersecurity for SMEs. Experts in n8n, Make, and digital protection.",
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
    "serviceType": "Business Automation and Cybersecurity",
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
        ? "Servicios de Automatización y Ciberseguridad"
        : "Automation and Cybersecurity Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "BethaFlow - " + (language === 'es' ? "Automatización de Procesos" : "Process Automation"),
            "description": language === 'es'
              ? "Automatización de procesos empresariales con n8n y Make. Facturación automática, integración de sistemas, flujos de trabajo inteligentes."
              : "Business process automation with n8n and Make. Automatic billing, system integration, intelligent workflows.",
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
            "name": "BethaSecure - " + (language === 'es' ? "Ciberseguridad" : "Cybersecurity"),
            "description": language === 'es'
              ? "Consultoría en ciberseguridad, auditorías de seguridad, protección de datos, cumplimiento normativo para PyMEs."
              : "Cybersecurity consulting, security audits, data protection, regulatory compliance for SMEs.",
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
          "text": "BethaLabs es una agencia especializada en automatización de procesos empresariales y ciberseguridad para PyMEs en Ecuador y Latinoamérica. Ayudamos a empresas de forma remota y presencial a optimizar sus operaciones con herramientas como n8n y Make, y a proteger sus datos con soluciones de ciberseguridad profesionales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué servicios ofrece BethaLabs en Ecuador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos dos servicios principales: BethaFlow (automatización de procesos con n8n, Make, integración de sistemas, facturación automática) y BethaSecure (consultoría en ciberseguridad, auditorías, protección de datos, cumplimiento normativo). Atendemos PyMEs en todo Ecuador."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo puede la automatización ayudar a mi PyME en Ecuador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La automatización reduce tiempo en tareas repetitivas hasta un 80%, elimina errores humanos, mejora la productividad y permite que tu equipo se enfoque en actividades estratégicas. Automatizamos facturación, CRM, reportes, integraciones entre sistemas y más."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué es importante la ciberseguridad para PyMEs ecuatorianas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las PyMEs son cada vez más objetivo de ciberataques. La protección de datos de clientes, cumplimiento con regulaciones ecuatorianas, y la continuidad del negocio dependen de una buena estrategia de ciberseguridad. Ofrecemos soluciones accesibles y efectivas."
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
