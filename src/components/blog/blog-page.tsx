"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Search, Calendar, Clock, Tag } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

interface BlogPageProps {
  posts: BlogPost[]
}

const categories = ["Todos", "Automatización", "Ciberseguridad", "Tutoriales"]

export default function BlogPage({ posts }: BlogPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  // Filtrar posts por búsqueda y categoría
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog de BethaLabs</h1>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            Artículos, guías y recursos sobre automatización, ciberseguridad y transformación digital para PyMEs
          </p>
        </motion.div>

        {/* Búsqueda y Filtros */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Barra de búsqueda */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B3B3B3] h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar artículos, tags o temas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#1E1E1E] border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34A853] text-white placeholder-[#B3B3B3]"
              />
            </div>
          </div>

          {/* Filtros de categoría */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#34A853] text-white"
                    : "bg-[#1E1E1E] text-[#B3B3B3] hover:bg-[#2a2a2a]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl h-full flex flex-col group hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={400}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                      loading={index < 3 ? "eager" : "lazy"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#34A853] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-[#B3B3B3] mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#34A853] transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-[#B3B3B3] text-sm mb-4 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-[#34A853]/10 text-[#34A853] px-2 py-1 rounded-full flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-[#34A853] font-medium group-hover:underline flex items-center gap-2">
                      Leer artículo
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#B3B3B3] text-lg">
              No se encontraron artículos que coincidan con tu búsqueda.
            </p>
          </motion.div>
        )}

        {/* CTA al final */}
        <motion.div
          className="mt-20 text-center bg-[#1E1E1E] rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-[#B3B3B3] mb-8 max-w-2xl mx-auto">
            Si te gustó nuestro contenido, imagina lo que podemos hacer por tu empresa. Agenda una consultoría gratuita.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center px-8 py-4 bg-[#34A853] text-white font-medium rounded-full shadow-lg hover:bg-[#2a8644] transition-colors duration-300"
          >
            Solicitar consultoría gratuita
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
