"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section id="about" className="py-28 md:py-32 bg-[#1A1A1A] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {(() => {
                const parts = t.title.split(" ")
                const first = parts.shift() || ""
                const rest = parts.join(" ")
                return (
                  <>
                    <span className="text-white">{first} </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400">{rest}</span>
                  </>
                )
              })()}
            </h2>
            <p className="text-[#B3B3B3] text-base md:text-lg leading-relaxed mb-6">
              {language === 'es' ? (
                <>
                  {t.paragraph1.split('desarrollo web y automatización')[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400 font-semibold">desarrollo web y automatización</span>
                  {t.paragraph1.split('desarrollo web y automatización')[1]}
                </>
              ) : (
                <>
                  {t.paragraph1.split('web development and automation')[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400 font-semibold">web development and automation</span>
                  {t.paragraph1.split('web development and automation')[1]}
                </>
              )}
            </p>
            <p className="text-[#B3B3B3] text-base md:text-lg mb-6">{t.paragraph2}</p>
            <div className="bg-[#34A853]/8 border border-[#34A853]/20 text-[#34A853] px-5 py-4 rounded-xl mb-6 max-w-xl">
              <p className="text-sm md:text-base font-medium">{t.paragraph3}</p>
            </div>
            <a href="#contacto" className="inline-flex items-center text-[#34A853] font-medium hover:underline">
              {t.cta}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[620px] mx-auto">
              {/* Glow effect detrás de la imagen */}
              <div className="absolute inset-0 bg-[#34A853]/10 rounded-3xl blur-4xl" />
              
              {/* Imagen */}
              <div className="relative rounded-3xl overflow-hidden border border-[#34A853]/20 shadow-2xl">
                <Image
                  src="/about.avif"
                  alt="BethaLabs - Desarrollo Web y Automatización"
                  width={620}
                  height={620}
                  className="w-full h-auto"
                  loading="lazy"
                  quality={90}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

