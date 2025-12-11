/**
 * Hook para detectar preferencia de movimiento reducido del usuario
 * Mejora accesibilidad y performance
 */

import { useEffect, useState } from "react"

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return prefersReducedMotion
}

// Variantes de animación para secciones
export const sectionVariants = {
  // Fade up estándar
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  // Slide desde la izquierda
  slideLeft: {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  // Slide desde la derecha
  slideRight: {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  // Zoom in con fade
  zoomIn: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  // Blur in
  blurIn: {
    initial: { opacity: 0, filter: "blur(10px)" },
    whileInView: { opacity: 1, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  // Rotate in suave
  rotateIn: {
    initial: { opacity: 0, rotateX: -15, y: 30 },
    whileInView: { opacity: 1, rotateX: 0, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
