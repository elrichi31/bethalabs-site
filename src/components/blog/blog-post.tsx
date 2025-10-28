"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Clock, Tag, ArrowLeft, Share2, Check } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import type { BlogPost as BlogPostType } from "@/lib/blog"
import { BlogPostStyles } from "./blog-post-styles"
import { useReducedMotion } from "@/lib/motion-utils"

// Lazy load de componentes pesados
const RelatedPosts = dynamic(() => import("./related-posts"), {
  loading: () => (
    <div className="mt-16 border-t border-[#2A2A2A] pt-12">
      <div className="animate-pulse">
        <div className="h-8 bg-[#1E1E1E] rounded w-64 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1E1E1E] rounded-lg h-80"></div>
          <div className="bg-[#1E1E1E] rounded-lg h-80"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false, // No necesario en SSR, solo en cliente
})

// Lazy load de confetti solo cuando se necesite
const loadConfetti = () => import("canvas-confetti")

interface BlogPostProps {
  post: BlogPostType
  allPosts: BlogPostType[]
}

export default function BlogPost({ post, allPosts }: BlogPostProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 200 : 100,
    damping: prefersReducedMotion ? 50 : 30,
    restDelta: 0.001
  })

  // Cargar likes del localStorage al montar
  useEffect(() => {
    const storedLikes = localStorage.getItem(`blog-likes-${post.slug}`)
    const hasUserLiked = localStorage.getItem(`blog-liked-${post.slug}`)
    
    if (storedLikes) {
      setLikes(parseInt(storedLikes))
    }
    if (hasUserLiked === 'true') {
      setHasLiked(true)
    }
  }, [post.slug])

  // Función para copiar URL al portapapeles
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  // Función para dar/quitar like con confeti (toggle)
  const handleLike = async () => {
    if (hasLiked) {
      // Unlike: Quitar like
      const newLikes = Math.max(0, likes - 1)
      setLikes(newLikes)
      setHasLiked(false)
      localStorage.setItem(`blog-likes-${post.slug}`, newLikes.toString())
      localStorage.removeItem(`blog-liked-${post.slug}`)
    } else {
      // Like: Dar like
      const newLikes = likes + 1
      setLikes(newLikes)
      setHasLiked(true)
      localStorage.setItem(`blog-likes-${post.slug}`, newLikes.toString())
      localStorage.setItem(`blog-liked-${post.slug}`, 'true')
      
      // Cargar confetti solo cuando se necesita (lazy)
      const confettiModule = await loadConfetti()
      const confetti = confettiModule.default
      
      // Confeti centrado en el botón (solo al dar like)
      const rect = document.getElementById('like-button')?.getBoundingClientRect()
      if (rect) {
        const x = (rect.left + rect.width / 2) / window.innerWidth
        const y = (rect.top + rect.height / 2) / window.innerHeight
        
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { x, y },
          colors: ['#34A853', '#ffffff', '#FFD700'],
          scalar: 0.8,
          gravity: 1.2,
          ticks: 200
        })
      }
    }
  }

  return (
    <div ref={containerRef} className="pt-32 pb-20">
      {/* Barra de progreso de lectura */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#34A853] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón volver */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-[#34A853] hover:underline gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>
        </motion.div>

        {/* Header del artículo */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Categoría y badges */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#34A853] text-white text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              {post.category}
            </span>
            <span className="text-[#B3B3B3] text-sm">•</span>
            <span className="text-[#B3B3B3] text-sm font-medium">
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>

          {/* Título con gradiente */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta información mejorada */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-3 bg-[#1E1E1E] px-4 py-2 rounded-full border border-[#2a2a2a]">
              <div className="w-8 h-8 bg-[#34A853] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <span className="text-white font-medium">{post.author}</span>
            </div>
            
            <div className="flex items-center gap-2 text-[#B3B3B3]">
              <Clock className="h-5 w-5 text-[#34A853]" />
              <span className="font-medium">{post.readTime} de lectura</span>
            </div>
          </div>

          {/* Tags mejorados */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-[#1E1E1E] text-[#34A853] px-4 py-2 rounded-full border border-[#34A853]/30 flex items-center gap-2 hover:bg-[#34A853]/10 transition-colors duration-300"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Barra de acciones */}
          <div className="flex items-center justify-between pt-6 border-t border-[#2a2a2a]">
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#34A853] transition-colors duration-300 group"
            >
              {copied ? (
                <>
                  <Check className="h-5 w-5 text-[#34A853]" />
                  <span className="font-medium text-[#34A853]">¡Enlace copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Compartir artículo</span>
                </>
              )}
            </button>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#B3B3B3]">¿Te resultó útil?</span>
              <button 
                id="like-button"
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${
                  hasLiked 
                    ? 'bg-[#34A853] border-[#34A853] text-white hover:bg-[#34A853]/80' 
                    : 'bg-[#1E1E1E] border-[#2a2a2a] hover:border-[#34A853]'
                }`}
              >
                <span className="text-lg">👍</span>
                <span className="text-sm font-medium">
                  Sí{likes > 0}
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Imagen destacada */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#2a2a2a]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMUUxRTFFO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMkEyQTJBO3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>

        {/* Contenido del artículo */}
        <motion.article
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Contenedor del contenido con estilos mejorados */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12 shadow-2xl border border-[#2a2a2a]">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
          </div>

          {/* Estilos CSS optimizados (extraídos a componente separado) */}
          <BlogPostStyles />
        </motion.article>

        {/* CTA al final del artículo */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-[#34A853] to-[#2a8644] rounded-2xl p-10 overflow-hidden">
            {/* Patrón de fondo decorativo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fillOpacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                ¿Te gustó este artículo?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl">
                En BethaLabs podemos ayudarte a implementar estas soluciones en tu negocio. 
                Agenda una consultoría gratuita y descubre cómo automatizar tus procesos o mejorar tu seguridad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#34A853] font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Solicitar consultoría gratuita
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Ver más artículos
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Artículos Relacionados (Dinámicos) */}
        <div className="max-w-4xl mx-auto">
          <RelatedPosts currentPost={post} allPosts={allPosts} />
        </div>

        {/* Navegación a otros artículos */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 pt-12 border-t border-[#2a2a2a]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-[#34A853]">📚</span>
            Sigue aprendiendo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/blog" 
              className="group bg-[#1E1E1E] p-6 rounded-xl border border-[#2a2a2a] hover:border-[#34A853] transition-all duration-300 hover:shadow-lg hover:shadow-[#34A853]/20"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#34A853] font-semibold text-sm">← ARTÍCULOS</span>
                <svg className="w-5 h-5 text-[#34A853] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
              <p className="text-white font-medium">Ver todos los artículos del blog</p>
            </Link>
            
            <Link 
              href="/#servicios" 
              className="group bg-[#1E1E1E] p-6 rounded-xl border border-[#2a2a2a] hover:border-[#34A853] transition-all duration-300 hover:shadow-lg hover:shadow-[#34A853]/20"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#34A853] font-semibold text-sm">SERVICIOS →</span>
                <svg className="w-5 h-5 text-[#34A853] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
              <p className="text-white font-medium">Descubre nuestros servicios</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
