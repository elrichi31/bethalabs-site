"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type AnimationContextType = {
  animationsEnabled: boolean
}

const AnimationContext = createContext<AnimationContextType>({ animationsEnabled: false })

function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [animationsEnabled, setAnimationsEnabled] = useState(false)

  useEffect(() => {
    // Detectar preferencia de reducir movimiento y tamaño de pantalla
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqDesktop = window.matchMedia('(min-width: 768px)')

    const evaluate = () => {
      const reduced = mqReduced.matches
      const isDesktop = mqDesktop.matches
      setAnimationsEnabled(isDesktop && !reduced)
      if (!isDesktop || reduced) {
        document.body.classList.add('no-animations')
      } else {
        document.body.classList.remove('no-animations')
      }
    }

    evaluate()

    mqReduced.addEventListener?.('change', evaluate)
    mqDesktop.addEventListener?.('change', evaluate)

    return () => {
      mqReduced.removeEventListener?.('change', evaluate)
      mqDesktop.removeEventListener?.('change', evaluate)
    }
  }, [])

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimationsEnabled() {
  return useContext(AnimationContext).animationsEnabled
}

export default AnimationProvider
