"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const projectsData = [
    {
      id: 1,
      image: "/projects/product-catalog.png",
      tags: ["Next.js", "Landing Page", "Web Design", "SEO"]
    },
    {
      id: 2,
      image: "/projects/hotelapp.png",
      tags: ["WhatsApp", "Chatbot", "n8n", "Automation"]
    },
    {
      id: 3,
      image: "/projects/auction.png",
      tags: ["E-commerce", "Next.js", "Payments", "React"]
    },
  ];

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language].projects
  
  // Combinar datos estáticos con traducciones
  const projects = projectsData.map((project, index) => ({
    ...project,
    title: t.cases[index].title,
    description: t.cases[index].description,
    impact: t.cases[index].impact
  }));

  return (
    <section id="proyectos" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid - 3 columnas iguales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#34A853]/50 transition-all duration-300 group h-full flex flex-col">
                {/* Imagen del proyecto */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
                </div>
                
                {/* Contenido */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Título del proyecto */}
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                    {project.title.replace('🚀 ', '')}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-[#B3B3B3] text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tags en verde */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-[#34A853]/20 text-[#34A853] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Impacto/Resultado */}
                  {project.impact && (
                    <div className="pt-4 border-t border-[#2A2A2A]">
                      <p className="text-[#34A853] text-sm font-semibold">
                        ✨ {project.impact}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <motion.a
            href="#contacto"
            className="flex items-center px-8 py-4 bg-[#34A853] text-white font-semibold rounded-full shadow-lg hover:bg-[#2a8644] transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.ctaButton}
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}