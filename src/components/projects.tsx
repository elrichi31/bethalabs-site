"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Zap, ShoppingBag, Sparkles } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const projectsData = [
    {
      id: 1,
      image: "/projects/product-catalog.avif",
      tags: ["Next.js", "Tailwind", "SEO"],
      category: "Web App",
      size: "large", // Proyecto destacado grande
      icon: TrendingUp
    },
    {
      id: 2,
      image: "/projects/hotelapp.avif",
      tags: ["WhatsApp", "n8n", "Automation"],
      category: "Automation",
      size: "normal",
      icon: Zap
    },
    {
      id: 3,
      image: "/projects/auction.avif",
      tags: ["E-commerce", "React", "Payments"],
      category: "E-commerce",
      size: "tall",
      icon: ShoppingBag
    },
    {
      id: 4,
      image: "/projects/product-catalog.avif", // Reutilizamos para el 4to
      tags: ["Analytics", "Dashboard", "React"],
      category: "SaaS",
      size: "normal",
      icon: Sparkles,
      isPlaceholder: true // Proyecto en desarrollo
    }
  ];

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language].projects
  
  // Combinar datos estáticos con traducciones (extendemos para el 4to proyecto)
  const projects = projectsData.map((project, index) => {
    const caseData = t.cases[index] || t.cases[0]; // Fallback al primero si no existe
    return {
      ...project,
      title: project.isPlaceholder ? "SaaS Analytics Dashboard" : caseData.title,
      description: project.isPlaceholder 
        ? "Dashboard corporativo para visualización de big data en tiempo real." 
        : caseData.description,
      impact: project.isPlaceholder ? "En desarrollo" : caseData.impact
    };
  });

  return (
    <section id="proyectos" className="py-32 bg-[#121212] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#34A853]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#34A853]/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header mejorado */}
        <motion.div
          className="mb-12 pb-8 border-b border-white/10"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 text-[#34A853] text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse"></span>
            <span>Resultados 2024</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-white">Historias de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400">Éxito</span>
          </h2>
          <p className="text-base md:text-lg text-[#B3B3B3] max-w-3xl">
            Innovación estratégica y diseño de alto impacto. Una selección curada de nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400 font-semibold">proyectos más recientes</span> que transformaron negocios en Ecuador y Latinoamérica.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[280px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className={`
                group relative overflow-hidden rounded-xl bg-[#1E1E1E] border border-white/5 shadow-lg
                h-[280px] md:h-auto
                ${project.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''}
                ${project.size === 'tall' ? 'lg:row-span-2' : ''}
                ${project.size === 'wide' ? 'lg:col-span-2' : ''}
                ${project.isPlaceholder ? 'bg-gradient-to-br from-[#1E1E1E] to-gray-900' : ''}
              `}
            >
              {!project.isPlaceholder ? (
                <>
                  {/* Imagen de fondo */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  
                  {/* Contenido superpuesto */}
                  <div className="absolute bottom-0 left-0 p-5 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-2 py-0.5 rounded bg-[#34A853] text-black text-[10px] font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <ArrowRight className="text-[#34A853] w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#34A853] transition-colors">
                      {project.title.replace('🚀 ', '')}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-gray-400 border border-white/10 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                // Proyecto placeholder (en desarrollo)
                <div className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <project.icon className="text-[#34A853] w-8 h-8 mb-3" />
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-[#B3B3B3] mt-2">{project.description}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-xs text-gray-500">{project.impact}</span>
                    <ArrowRight className="text-gray-500 hover:text-white cursor-pointer transition-colors w-5 h-5" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}