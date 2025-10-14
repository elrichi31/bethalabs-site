"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Función para detectar idioma inicial (antes del render)
function getInitialLanguage(): Language {
  // Solo en el cliente
  if (typeof window === 'undefined') return 'es';
  
  // 1. Verificar localStorage primero
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage === 'es' || savedLanguage === 'en') {
    return savedLanguage;
  }
  
  // 2. Detectar del navegador
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("es")) {
    return "es";
  }
  
  // 3. Default a español (mercado principal)
  return "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Actualizar el atributo lang del documento
    document.documentElement.lang = language === 'es' ? 'es-EC' : 'en-US';
    setIsLoading(false);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang === 'es' ? 'es-EC' : 'en-US';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
