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
      ? 'BethaLabs | Desarrollo Web y Automatización Ecuador'
      : 'BethaLabs | Web Development & Automation LATAM';

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
        ? 'Desarrollo web profesional y automatizaciones con n8n para PyMEs en Ecuador y Latinoamérica. Landing pages, e-commerce y chatbots.'
        : 'Professional web development and n8n automations for SMEs in Ecuador and Latin America. Landing pages, e-commerce and chatbots.'
    );

    // OG Tags
    updateOrCreateMeta(
      'meta[property="og:title"]',
      'property',
      language === 'es'
        ? 'BethaLabs | Desarrollo Web y Automatización Ecuador'
        : 'BethaLabs | Web Development & Automation LATAM'
    );

    updateOrCreateMeta(
      'meta[property="og:description"]',
      'property',
      language === 'es'
        ? 'Creamos sitios web profesionales y automatizamos procesos para hacer crecer tu negocio.'
        : 'We create professional websites and automate processes to grow your business.'
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
        ? 'BethaLabs | Desarrollo Web y Automatización Ecuador'
        : 'BethaLabs | Web Development & Automation LATAM'
    );

    updateOrCreateMeta(
      'meta[name="twitter:description"]',
      'name',
      language === 'es'
        ? 'Agencia de desarrollo web y automatización para PyMEs ecuatorianas'
        : 'Web development and automation agency for Latin American SMEs'
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

    addHreflangLink('es-EC', 'https://www.bethalabs.com?lang=es');
    addHreflangLink('en-US', 'https://www.bethalabs.com?lang=en');
    addHreflangLink('x-default', 'https://www.bethalabs.com');

  }, [language]);

  // Este componente solo actualiza el DOM, no renderiza nada visible
  return null;
}
