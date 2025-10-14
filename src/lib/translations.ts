// Cache para las traducciones
let translationsCache: typeof translations | null = null;

export const translations = {
  es: {
    // Navbar
    navbar: {
      home: "Inicio",
      services: "Servicios",
      cases: "Casos",
      blog: "Blog",
      contact: "Contacto",
    },

    // Hero
    hero: {
      subtitle: "BethaLabs",
      title: "Transformando tu negocio con",
      titleHighlight1: "automatizaciones inteligentes",
      titleAnd: "y",
      titleHighlight2: "seguridad digital",
      description: "Potenciamos pequeñas y medianas empresas con soluciones técnicas que optimizan procesos y protegen tus datos",
      ctaPrimary: "Solicitar demo gratuita",
      ctaSecondary: "Ver nuestros servicios",
    },

    // About
    about: {
      title: "¿Quiénes somos?",
      paragraph1: "En BethaLabs somos una agencia dedicada a la innovación tecnológica. Creamos automatizaciones, optimizamos flujos internos y brindamos consultorías de ciberseguridad para que negocios sin área técnica puedan escalar con confianza.",
      paragraph2: "Nuestra misión es democratizar el acceso a soluciones técnicas avanzadas, ayudando a pequeñas y medianas empresas a competir con herramientas de clase mundial.",
      paragraph3: "🌎 Enfocados en el mercado latinoamericano: ofrecemos servicios presenciales en Ecuador y remotos en toda Latinoamérica.",
      cta: "Hablemos de tu proyecto",
    },

    // Services
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones técnicas diseñadas para PyMEs que quieren crecer con tecnología confiable",
      
      bethaflow: {
        name: "BethaFlow",
        title: "Automatizaciones inteligentes",
        description: "Diseñamos flujos automáticos entre tus herramientas para que tu equipo se enfoque en lo importante.",
        featuresTitle: "Qué hacemos:",
        features: [
          "Integraciones personalizadas con n8n o Python",
          "Automatización de reportes y notificaciones",
          "Sincronización de datos en tiempo real",
          "Mantenimiento y escalado continuo"
        ],
        benefitsTitle: "Beneficios para ti:",
        benefits: [
          "Ahorro de tiempo y reducción de errores",
          "Procesos más eficientes sin intervención manual",
          "Mejores decisiones con datos conectados"
        ]
      },
      
      bethasecure: {
        name: "BethaSecure",
        title: "Consultoría de Ciberseguridad",
        description: "Protegemos tu negocio con auditorías, configuraciones seguras y asesoramiento continuo.",
        featuresTitle: "Qué hacemos:",
        features: [
          "Auditorías de seguridad (PCs, red, contraseñas)",
          "Detección y limpieza de malware",
          "Configuración de copias de seguridad",
          "Asesoramiento en buenas prácticas digitales"
        ],
        benefitsTitle: "Beneficios para ti:",
        benefits: [
          "Tranquilidad ante amenazas digitales",
          "Menor riesgo de pérdida de datos",
          "Confianza para usar tecnología sin temor"
        ]
      },

      methodology: {
        title: "Nuestra Metodología",
        subtitle: "Cómo trabajamos contigo: de la idea al resultado",
        steps: [
          {
            step: "01",
            title: "Diagnóstico y descubrimiento",
            description: "Nos reunimos contigo para entender tus operaciones, herramientas actuales y puntos de dolor."
          },
          {
            step: "02",
            title: "Propuesta a medida",
            description: "Creamos una solución personalizada con roadmap claro y entregables definidos."
          },
          {
            step: "03",
            title: "Implementación & pruebas",
            description: "Desarrollamos, testeamos y validamos cada parte del proyecto con comunicación transparente."
          },
          {
            step: "04",
            title: "Entrega & capacitación",
            description: "Te entregamos documentación, capacitación básica y acompañamiento inicial."
          },
          {
            step: "05",
            title: "Soporte y escalado",
            description: "Ofrecemos mantenimiento opcional, mejoras continuas o auditorías periódicas."
          }
        ]
      }
    },

    // Projects
    projects: {
      title: "Casos de éxito",
      subtitle: "Proyectos reales que demuestran nuestro impacto",
      viewMore: "Ver más",
      contentNote: "Contenido en español (enfoque en mercado latinoamericano)",
      contentBadge: "🇪🇸 Español",
    },

    // Blog
    blog: {
      title: "Blog",
      subtitle: "Artículos, guías y análisis sobre automatización y ciberseguridad",
      readMore: "Leer más",
      readTime: "min de lectura",
      contentNote: "La mayoría de artículos están escritos en español para nuestra audiencia latinoamericana",
      contentBadge: "🇪🇸 Español",
    },

    // Contact
    contact: {
      title: "Empieza tu transformación digital",
      subtitle: "¿Listo para optimizar tu negocio con automatización o proteger tus datos? Hablemos. En BethaLabs estamos listos para acompañarte.",
      formTitle: "Solicita tu consultoría gratuita",
      form: {
        name: "Nombre completo",
        email: "Email",
        company: "Empresa (opcional)",
        message: "Cuéntanos qué necesitas",
        submit: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado! Nos pondremos en contacto pronto.",
        error: "Error al enviar. Por favor intenta de nuevo.",
      },
      infoTitle: "Información de contacto",
      email: "Email",
      location: "Ubicación",
      locationValue: "Quito, Ecuador (servicios remotos disponibles)",
      socialTitle: "Síguenos",
    },

    // Footer
    footer: {
      description: "Innovación, automatización y seguridad para tu negocio.",
      quickLinks: "Enlaces rápidos",
      contactTitle: "Contacto",
      contactDescription: "¿Listo para optimizar tu negocio?",
      contactFooter: "BethaLabs — innovación, automatización y seguridad para tu negocio.",
      rights: "Todos los derechos reservados.",
      developedBy: "Desarrollado por",
    }
  },

  en: {
    // Navbar
    navbar: {
      home: "Home",
      services: "Services",
      cases: "Cases",
      blog: "Blog",
      contact: "Contact",
    },

    // Hero
    hero: {
      subtitle: "BethaLabs",
      title: "Transforming your business with",
      titleHighlight1: "intelligent automations",
      titleAnd: "and",
      titleHighlight2: "digital security",
      description: "We empower small and medium businesses with technical solutions that optimize processes and protect your data",
      ctaPrimary: "Request free demo",
      ctaSecondary: "View our services",
    },

    // About
    about: {
      title: "Who we are?",
      paragraph1: "At BethaLabs we are an agency dedicated to technological innovation. We create automations, optimize internal workflows and provide cybersecurity consulting so businesses without a technical area can scale with confidence.",
      paragraph2: "Our mission is to democratize access to advanced technical solutions, helping small and medium businesses compete with world-class tools.",
      paragraph3: "🌎 Focused on the Latin American market: we offer on-site services in Ecuador and remote services throughout Latin America.",
      cta: "Let's talk about your project",
    },

    // Services
    services: {
      title: "Our Services",
      subtitle: "Technical solutions designed for SMEs that want to grow with reliable technology",
      
      bethaflow: {
        name: "BethaFlow",
        title: "Intelligent Automations",
        description: "We design automatic workflows between your tools so your team can focus on what matters.",
        featuresTitle: "What we do:",
        features: [
          "Custom integrations with n8n or Python",
          "Report and notification automation",
          "Real-time data synchronization",
          "Continuous maintenance and scaling"
        ],
        benefitsTitle: "Benefits for you:",
        benefits: [
          "Time savings and error reduction",
          "More efficient processes without manual intervention",
          "Better decisions with connected data"
        ]
      },
      
      bethasecure: {
        name: "BethaSecure",
        title: "Cybersecurity Consulting",
        description: "We protect your business with audits, secure configurations and ongoing advice.",
        featuresTitle: "What we do:",
        features: [
          "Security audits (PCs, network, passwords)",
          "Malware detection and removal",
          "Backup configuration",
          "Best digital practices consulting"
        ],
        benefitsTitle: "Benefits for you:",
        benefits: [
          "Peace of mind against digital threats",
          "Lower risk of data loss",
          "Confidence to use technology without fear"
        ]
      },

      methodology: {
        title: "Our Methodology",
        subtitle: "How we work with you: from idea to result",
        steps: [
          {
            step: "01",
            title: "Diagnosis and discovery",
            description: "We meet with you to understand your operations, current tools and pain points."
          },
          {
            step: "02",
            title: "Customized proposal",
            description: "We create a personalized solution with clear roadmap and defined deliverables."
          },
          {
            step: "03",
            title: "Implementation & testing",
            description: "We develop, test and validate each part of the project with transparent communication."
          },
          {
            step: "04",
            title: "Delivery & training",
            description: "We deliver documentation, basic training and initial support."
          },
          {
            step: "05",
            title: "Support and scaling",
            description: "We offer optional maintenance, continuous improvements or periodic audits."
          }
        ]
      }
    },

    // Projects
    projects: {
      title: "Success Stories",
      subtitle: "Real projects that demonstrate our impact",
      viewMore: "View more",
      contentNote: "Content in Spanish (Latin American market focus)",
      contentBadge: "🇪🇸 Spanish",
    },

    // Blog
    blog: {
      title: "Blog",
      subtitle: "Articles, guides and analysis on automation and cybersecurity",
      readMore: "Read more",
      readTime: "min read",
      contentNote: "Most articles are written in Spanish for our Latin American audience",
      contentBadge: "🇪🇸 Spanish",
    },

    // Contact
    contact: {
      title: "Start your digital transformation",
      subtitle: "Ready to optimize your business with automation or protect your data? Let's talk. At BethaLabs we are ready to support you.",
      formTitle: "Request your free consultation",
      form: {
        name: "Full name",
        email: "Email",
        company: "Company (optional)",
        message: "Tell us what you need",
        submit: "Send message",
        sending: "Sending...",
        success: "Message sent! We'll get in touch soon.",
        error: "Error sending. Please try again.",
      },
      infoTitle: "Contact information",
      email: "Email",
      location: "Location",
      locationValue: "Quito, Ecuador (remote services available)",
      socialTitle: "Follow us",
    },

    // Footer
    footer: {
      description: "Innovation, automation and security for your business.",
      quickLinks: "Quick links",
      contactTitle: "Contact",
      contactDescription: "Ready to optimize your business?",
      contactFooter: "BethaLabs — innovation, automation and security for your business.",
      rights: "All rights reserved.",
      developedBy: "Developed by",
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.es;

// Helper para obtener traducciones con caché
export function getTranslations(lang: Language) {
  if (!translationsCache) {
    translationsCache = translations;
  }
  return translationsCache[lang];
}
