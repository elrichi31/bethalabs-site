"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Github } from "lucide-react"

const projects = [
    {
      id: 1,
      title: "Product Catalog",
      description: "Un catálogo de productos diseñado para gestionar promociones en Amazon, facilitando la organización y actualización de los productos disponibles.",
      image: "/projects/product-catalog.png",
      tags: ["API", "Next.js", "E-commerce", "Gestión de Productos"],
    },
    {
      id: 2,
      title: "DDOS-script",
      description: "Un script en Python diseñado para pruebas de seguridad y simulación de ataques de denegación de servicio distribuido (DDoS).",
      image: "https://aodatacloud.es/wp-content/uploads/2024/02/DDoS.webp",
      tags: ["Python", "Ciberseguridad", "Pentesting", "Redes"],
    },
    {
      id: 3,
      title: "Subastas",
      description: "Una plataforma en TypeScript para gestionar subastas en línea, permitiendo a los usuarios ofertar y comprar productos en tiempo real.",
      image: "/projects/auction.png",
      tags: ["TypeScript", "Web App", "Subastas", "Tiempo Real"],
    },
    {
      id: 4,
      title: "Hotel App",
      description: "Aplicación de gestión hotelera que permite reservas, administración de habitaciones y servicios para huéspedes.",
      image: "/projects/hotelapp.png",
      tags: ["Gestión Hotelera", "Reservas", "Aplicación Web", "Hospitalidad"],
    },
  ];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto">
            Una selección de mis trabajos en ciberseguridad y desarrollo web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-[#34A853]/20 text-[#34A853] px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-[#B3B3B3] mb-4">{project.description}</p>
                <motion.button
                  className="flex items-center text-[#34A853] font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Ver más <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="flex items-center px-6 py-3 bg-[#1E1E1E] text-white font-medium rounded-full shadow-lg hover:bg-[#2a8644] transition-colors duration-300">
            <a href="https://github.com/elrichi31" target="_blank" rel="noopener noreferrer" className="flex items-center">
    
               Ver todos mis proyectos
            </a>
            <Github className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}