"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

const quickLinks = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#servicios" },
  { name: "Casos", href: "#proyectos" },
  { name: "Blog", href: "#blog" },
  { name: "Contacto", href: "#contacto" },
]

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-[#2a2a2a] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">BethaLabs</h3>
            <p className="text-[#B3B3B3] mb-4">Innovación, automatización y seguridad para tu negocio.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#34A853]"
                  aria-label={link.name}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#B3B3B3] hover:text-[#34A853] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <p className="text-[#B3B3B3] mb-2">¿Listo para optimizar tu negocio?</p>
            <a href="mailto:contacto@bethalabs.dev" className="text-[#34A853] hover:underline block mb-3">
              contacto@bethalabs.dev
            </a>
            <p className="text-[#B3B3B3] text-sm">BethaLabs — innovación, automatización y seguridad para tu negocio.</p>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#B3B3B3] text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BethaLabs. Todos los derechos reservados.
          </p>
          <p className="text-[#B3B3B3] text-sm">
            Desarrollado por <span className="text-[#34A853]">BethaLabs</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

