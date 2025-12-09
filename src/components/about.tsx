"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

// Componente de esfera 3D animada estilo wireframe
function AnimatedSphere() {
  return (
    <div className="relative w-full aspect-square max-w-[350px] mx-auto flex items-center justify-center">
      {/* Glow de fondo */}
      <div className="absolute w-[60%] h-[60%] bg-[#34A853]/10 rounded-full blur-3xl" />
      
      {/* Contenedor de la esfera */}
      <div className="relative w-full h-full">
        {/* Anillo 1 - Horizontal principal */}
        <motion.div
          className="absolute inset-[15%] border-2 border-dashed border-[#34A853]/60 rounded-full"
          style={{ borderSpacing: "10px" }}
          animate={{ rotateX: 75, rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Anillo 2 - Inclinado */}
        <motion.div
          className="absolute inset-[15%] border-2 border-dashed border-[#34A853]/50 rounded-full"
          animate={{ rotateX: 75, rotateY: -360, rotateZ: 20 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Anillo 3 - Más inclinado */}
        <motion.div
          className="absolute inset-[15%] border-2 border-dashed border-[#34A853]/40 rounded-full"
          animate={{ rotateX: 75, rotateY: 360, rotateZ: -30 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Anillo 4 - Vertical */}
        <motion.div
          className="absolute inset-[15%] border-2 border-dashed border-[#34A853]/50 rounded-full"
          animate={{ rotateY: 360, rotateZ: 90 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Anillo 5 - Diagonal */}
        <motion.div
          className="absolute inset-[15%] border-2 border-dashed border-[#34A853]/35 rounded-full"
          animate={{ rotateX: 60, rotateY: -360, rotateZ: 45 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Anillo 6 - Otra diagonal */}
        <motion.div
          className="absolute inset-[15%] border-2 border-dashed border-[#34A853]/30 rounded-full"
          animate={{ rotateX: 50, rotateY: 360, rotateZ: -60 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />

        {/* Círculo central sólido pequeño */}
        <div className="absolute inset-[42%] bg-[#34A853]/20 rounded-full backdrop-blur-sm border border-[#34A853]/40" />
        
        {/* Punto central brillante */}
        <motion.div
          className="absolute inset-[46%] bg-[#34A853] rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Partículas orbitando */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-[10%] left-1/2 w-1.5 h-1.5 bg-[#34A853] rounded-full shadow-lg shadow-[#34A853]/50" />
      </motion.div>
      
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-[15%] right-[20%] w-1 h-1 bg-[#34A853]/70 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-[30%] left-[10%] w-1 h-1 bg-[#34A853]/60 rounded-full" />
      </motion.div>
    </div>
  )
}

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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            <AnimatedSphere />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

