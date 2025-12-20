"use client"

import React, { useEffect, useState } from 'react'

export default function HeroSectionEffects() {
  const [enabled, setEnabled] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)')

    const evaluate = () => {
      setReduced(mqReduced.matches)
      setEnabled(mq.matches && !mqReduced.matches)
    }

    evaluate()
    mq.addEventListener?.('change', evaluate)
    mqReduced.addEventListener?.('change', evaluate)
    return () => {
      mq.removeEventListener?.('change', evaluate)
      mqReduced.removeEventListener?.('change', evaluate)
    }
  }, [])

  if (!enabled) return null
  if (reduced) return null

  return (
    <>
      <div
        className="absolute top-0 left-1/4 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full pointer-events-none bg-[#34A853]/18 blur-[110px] mix-blend-screen animate-float"
        style={{ willChange: 'transform' }}
        aria-hidden
      />

      <div
        className="absolute bottom-0 right-1/4 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full pointer-events-none bg-[#34A853]/10 blur-[120px] mix-blend-screen animate-float"
        style={{ willChange: 'transform', animationDelay: '0.6s' }}
        aria-hidden
      />

      <div className="hidden md:block absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#34A853] rounded-full animate-float"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%`, opacity: 0.4 + (i * 0.1), animationDuration: `${6 + i}s` }}
            aria-hidden
          />
        ))}
      </div>

      <div className="hidden lg:block absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#34A853]/30 to-transparent animate-slide-x" aria-hidden />
        <div className="absolute top-2/3 right-0 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#34A853]/20 to-transparent animate-slide-x-reverse" aria-hidden />
      </div>
    </>
  )
}
