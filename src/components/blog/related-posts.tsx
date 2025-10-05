"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/lib/blog"
import { ArrowRight } from "lucide-react"

interface RelatedPostsProps {
  currentPost: BlogPost
  allPosts: BlogPost[]
}

export default function RelatedPosts({ currentPost, allPosts }: RelatedPostsProps) {
  // Función para calcular similitud entre posts
  const getPostSimilarity = (post: BlogPost): number => {
    let score = 0
    
    // Misma categoría = +5 puntos
    if (post.category === currentPost.category) {
      score += 5
    }
    
    // Tags en común = +2 puntos por tag
    const commonTags = post.tags.filter(tag => 
      currentPost.tags.includes(tag)
    )
    score += commonTags.length * 2
    
    return score
  }

  // Obtener posts relacionados (excluyendo el actual)
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => ({
      ...post,
      similarity: getPostSimilarity(post)
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 2) // Top 2 más relacionados

  // Si no hay posts relacionados, no mostrar nada
  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-16 border-t border-[#2A2A2A] pt-12">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        📖 Artículos Relacionados
      </motion.h2>
      
      <p className="text-[#B3B3B3] mb-8">
        Estos artículos también podrían interesarte:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="bg-[#1E1E1E] rounded-lg overflow-hidden hover:bg-[#252525] transition-colors duration-300 h-full">
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge de categoría */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#34A853]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-[#B3B3B3] mb-3">
                    <span>{post.readTime} lectura</span>
                    <span>{new Date(post.date).toLocaleDateString('es-EC', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#34A853] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-[#B3B3B3] text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Tags comunes */}
                  {post.tags.some(tag => currentPost.tags.includes(tag)) && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags
                        .filter(tag => currentPost.tags.includes(tag))
                        .slice(0, 3)
                        .map(tag => (
                          <span 
                            key={tag}
                            className="bg-[#34A853]/10 text-[#34A853] px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  )}

                  <div className="flex items-center text-[#34A853] text-sm font-medium group-hover:gap-2 transition-all duration-300">
                    Leer artículo
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Call to Action según categoría */}
      <motion.div
        className="mt-8 p-6 bg-[#1E1E1E] rounded-lg border border-[#2A2A2A]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              {currentPost.category === "Ciberseguridad" ? "🔒 Protege tu Negocio" : "⚡ Automatiza tu Empresa"}
            </h3>
            <p className="text-[#B3B3B3] text-sm">
              {currentPost.category === "Ciberseguridad" 
                ? "Auditorías de seguridad • Respuesta a incidentes • Capacitación para equipos"
                : "Automatización de procesos • Integración de sistemas • Soporte técnico continuo"
              }
            </p>
          </div>
          <a
            href="mailto:bethalabs.dev@gmail.com"
            className="bg-[#34A853] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2d8e45] transition-colors duration-300 text-center whitespace-nowrap"
          >
            Contáctanos
          </a>
        </div>
      </motion.div>
    </section>
  )
}
