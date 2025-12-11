"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Función para leer idioma de la cookie
function getCookieLanguage(): Language {
  if (typeof document === 'undefined') return 'es';
  
  const cookies = document.cookie.split('; ');
  const languageCookie = cookies.find(row => row.startsWith('language='));
  const cookieValue = languageCookie?.split('=')[1];
  
  return (cookieValue === 'es' || cookieValue === 'en') ? cookieValue : 'es';
}

// Función para establecer cookie
function setCookieLanguage(lang: Language) {
  const maxAge = 60 * 60 * 24 * 365; // 1 año
  document.cookie = `language=${lang}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getCookieLanguage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Actualizar el atributo lang del documento
    document.documentElement.lang = language === 'es' ? 'es-EC' : 'en-US';
    setIsLoading(false);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setCookieLanguage(lang);
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
