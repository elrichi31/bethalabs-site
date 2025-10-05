"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
    {
      id: 1,
      title: "Flow Contable Automático",
      description: "Desarrollamos una automatización completa para una PyME del sector servicios que procesaba manualmente más de 100 transacciones semanales. La solución integra formularios de Google Forms con hojas de cálculo, automatiza la categorización de gastos mediante reglas inteligentes, genera reportes ejecutivos automáticos cada viernes y envía notificaciones por email a los responsables de cada área.",
      challenge: "El equipo perdía 15+ horas semanales en tareas manuales de copia y pegado entre sistemas.",
      solution: "Flujo n8n que conecta formularios → Google Sheets → procesamiento automático → envío de reportes.",
      image: "/projects/product-catalog.png",
      tags: ["n8n", "Automatización", "Reportes", "Email"],
      impact: "Reducción de 50% de tiempo manual"
    },
    {
      id: 2,
      title: "Revisión de Seguridad para Equipo PyME",
      description: "Auditoría integral de ciberseguridad para un consultorio médico con 8 equipos. Realizamos diagnóstico completo de configuración de red WiFi, detección y eliminación de malware en 3 equipos comprometidos, implementación de sistema de copias de seguridad automatizadas en la nube, actualización de software crítico y capacitación personalizada de 2 horas para todo el equipo en gestión segura de contraseñas y prevención de phishing.",
      challenge: "Sin protección básica, contraseñas débiles, datos sensibles sin respaldo y dispositivos infectados.",
      solution: "Limpieza completa, configuración de firewalls, backups automáticos y entrenamiento del equipo.",
      image: "https://aodatacloud.es/wp-content/uploads/2024/02/DDoS.webp",
      tags: ["Ciberseguridad", "Auditoría", "Backup", "Capacitación"],
      impact: "100% de protección ante amenazas comunes"
    },
    {
      id: 3,
      title: "Integración API de Ventas",
      description: "Creamos una integración personalizada en Python para una tienda online que manejaba pedidos desde múltiples canales (Mercado Libre, sitio web propio y WhatsApp Business). La solución sincroniza en tiempo real el inventario entre plataformas, actualiza automáticamente el estado de pedidos, genera facturas electrónicas y mantiene una base de datos unificada de clientes, eliminando por completo los errores de sobre-venta y duplicación de registros.",
      challenge: "Gestión manual de 3 canales de venta causaba sobre-ventas, desincronización de stock y duplicación de clientes.",
      solution: "API middleware que centraliza toda la información y sincroniza bidireccionalmente todas las plataformas.",
      image: "/projects/auction.png",
      tags: ["Python", "API Integration", "Tiempo Real", "CRM"],
      impact: "Eliminación de errores de sincronización"
    },
    {
      id: 4,
      title: "Sistema de Notificaciones Inteligente",
      description: "Implementamos un sistema de comunicación automática para un hotel boutique de 20 habitaciones. El workflow incluye confirmaciones instantáneas por WhatsApp al reservar, recordatorios automáticos 24h antes del check-in, mensajes de bienvenida con información útil al hacer check-in, encuestas de satisfacción post-estadía y seguimiento automático para incentivar próximas reservas. Todo conectado con su sistema de gestión sin necesidad de intervención del personal.",
      challenge: "Personal ocupado olvidaba enviar confirmaciones, recordatorios y seguimientos, perdiendo oportunidades de fidelización.",
      solution: "Automatización completa vía n8n conectando PMS hotelero + WhatsApp Business API + CRM.",
      image: "/projects/hotelapp.png",
      tags: ["Automatización", "Notificaciones", "Gestión", "Workflows"],
      impact: "Reducción de 30% en tiempo de gestión"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Casos Destacados</h2>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto">
            Soluciones reales que han transformado la operación de nuestros clientes
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-[#34A853]/20 text-[#34A853] px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-[#B3B3B3] text-sm leading-relaxed mb-4">{project.description}</p>
                {project.impact && (
                  <div className="p-3 bg-[#34A853]/10 rounded-lg border-l-4 border-[#34A853]">
                    <p className="text-[#34A853] text-sm font-semibold">✅ {project.impact}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <motion.a
            href="#contacto"
            className="flex items-center px-6 py-3 bg-[#34A853] text-white font-medium rounded-full shadow-lg hover:bg-[#2a8644] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar consultoría gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}