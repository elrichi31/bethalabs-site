"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Cómo proteger tu aplicación web contra ataques XSS",
    excerpt: "Aprende las mejores prácticas para prevenir ataques de Cross-Site Scripting en tus aplicaciones web.",
    date: "15 Feb 2023",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Optimizando el rendimiento de aplicaciones Next.js",
    excerpt: "Estrategias avanzadas para mejorar la velocidad y experiencia de usuario en aplicaciones Next.js.",
    date: "3 Mar 2023",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "El futuro de la autenticación: más allá de las contraseñas",
    excerpt: "Explorando métodos modernos de autenticación como WebAuthn y biometría.",
    date: "22 Abr 2023",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "6 min",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Últimas Publicaciones</h2>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto">
            Artículos sobre ciberseguridad, desarrollo web y tecnología.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center text-sm text-[#B3B3B3] mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime} lectura</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-[#B3B3B3] mb-4 flex-grow">{post.excerpt}</p>
                <Link href="#" className="text-[#34A853] font-medium hover:underline mt-auto inline-flex items-center">
                  Leer artículo
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="#" className="inline-flex items-center text-[#34A853] font-medium hover:underline">
            Ver todas las publicaciones
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

