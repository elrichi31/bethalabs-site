"use client";

import { useLanguage } from "@/contexts/language-context";
import { useEffect } from "react";

export default function DynamicMetadata() {
  const { language } = useLanguage();

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return;

    // Actualizar title
    document.title = language === 'es' 
      ? 'BethaLabs | Automatización y Ciberseguridad Ecuador'
      : 'BethaLabs | Automation & Cybersecurity LATAM';

    // Actualizar o crear meta tags
    const updateOrCreateMeta = (selector: string, attribute: string, content: string) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (attribute === 'name') {
          meta.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
        } else if (attribute === 'property') {
          meta.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Description
    updateOrCreateMeta(
      'meta[name="description"]',
      'name',
      language === 'es'
        ? 'Automatización con n8n/Make y ciberseguridad para PyMEs en Ecuador y Latinoamérica. Servicios remotos y presenciales.'
        : 'Automation with n8n/Make and cybersecurity for SMEs in Ecuador and Latin America. Remote and on-site services.'
    );

    // OG Tags
    updateOrCreateMeta(
      'meta[property="og:title"]',
      'property',
      language === 'es'
        ? 'BethaLabs | Automatización y Ciberseguridad en Ecuador'
        : 'BethaLabs | Automation & Cybersecurity in Latin America'
    );

    updateOrCreateMeta(
      'meta[property="og:description"]',
      'property',
      language === 'es'
        ? 'Transformamos negocios ecuatorianos con automatizaciones inteligentes y seguridad digital.'
        : 'We transform Latin American businesses with intelligent automations and digital security.'
    );

    updateOrCreateMeta(
      'meta[property="og:locale"]',
      'property',
      language === 'es' ? 'es_EC' : 'en_US'
    );

    // Twitter Tags
    updateOrCreateMeta(
      'meta[name="twitter:title"]',
      'name',
      language === 'es'
        ? 'BethaLabs | Automatización y Ciberseguridad en Ecuador'
        : 'BethaLabs | Automation & Cybersecurity in Latin America'
    );

    updateOrCreateMeta(
      'meta[name="twitter:description"]',
      'name',
      language === 'es'
        ? 'Agencia líder en automatización y ciberseguridad para PyMEs ecuatorianas'
        : 'Leading automation and cybersecurity agency for Latin American SMEs'
    );

    // Agregar/actualizar hreflang links
    const addHreflangLink = (lang: string, href: string) => {
      const existingLink = document.querySelector(`link[hreflang="${lang}"]`);
      if (existingLink) {
        existingLink.setAttribute('href', href);
      } else {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.setAttribute('hreflang', lang);
        link.href = href;
        document.head.appendChild(link);
      }
    };

    addHreflangLink('es-EC', 'https://bethalabs.com?lang=es');
    addHreflangLink('en-US', 'https://bethalabs.com?lang=en');
    addHreflangLink('x-default', 'https://bethalabs.com');

  }, [language]);

  // Este componente solo actualiza el DOM, no renderiza nada visible
  return null;
}
