"use client"

import { useLanguage } from "@/contexts/language-context"
import StructuredData from "./structured-data"
import { useEffect, useState } from "react"

export default function StructuredDataClient() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  
  // Solo renderizar después de la hidratación para evitar mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    // Renderizar español por defecto durante SSR
    return <StructuredData language="es" />
  }
  
  return <StructuredData language={language} />
}
