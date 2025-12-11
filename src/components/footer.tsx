"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer
  const tn = translations[language].navbar

  const quickLinks = [
    { name: tn.home, href: "#" },
    { name: tn.services, href: "#servicios" },
    { name: tn.cases, href: "#proyectos" },
    { name: tn.blog, href: "#blog" },
    { name: tn.contact, href: "#contacto" },
  ]
  return (
    <footer className="bg-[#121212] border-t border-[#2a2a2a] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400">BethaLabs</span>
            </h3>
            <p className="text-[#B3B3B3] mb-4">{t.description}</p>
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
            <h3 className="text-white font-bold text-lg mb-4">{t.quickLinks}</h3>
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
            <h3 className="text-white font-bold text-lg mb-4">{t.contactTitle}</h3>
            <p className="text-[#B3B3B3] mb-2">{t.contactDescription}</p>
            <a href="mailto:bethalabs.dev@gmail.com" className="text-[#34A853] hover:underline block mb-3">
              bethalabs.dev@gmail.com
            </a>
            <p className="text-[#B3B3B3] text-sm">{t.contactFooter}</p>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#B3B3B3] text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BethaLabs. {t.rights}
          </p>
          <p className="text-[#B3B3B3] text-sm">
            {t.developedBy} <span className="text-[#34A853]">BethaLabs</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

