"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section id="about" className="py-20 bg-[#1A1A1A] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.title}</h2>
            <p className="text-[#B3B3B3] text-lg mb-6">{t.paragraph1}</p>
            <p className="text-[#B3B3B3] text-lg mb-6">{t.paragraph2}</p>
            <div className="bg-[#34A853]/10 border border-[#34A853]/30 text-[#34A853] px-4 py-3 rounded-lg mb-6">
              <p className="text-sm font-medium">{t.paragraph3}</p>
            </div>
            <a href="#contacto" className="inline-flex items-center text-[#34A853] font-medium hover:underline">
              {t.cta}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about.webp"
                alt="BethaLabs - Agencia de automatización y ciberseguridad"
                width={384}
                height={384}
                sizes="384px"
                quality={75}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#34A853]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#34A853]/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

