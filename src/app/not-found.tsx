import Link from "next/link"
import { ArrowLeft, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-[#34A853] font-bold text-2xl mb-2">BethaLabs</h1>
          <div className="w-20 h-1 bg-[#34A853] mx-auto rounded-full"></div>
        </div>

        {/* 404 Grande */}
        <div className="mb-8">
          <h2 className="text-[120px] md:text-[180px] font-bold text-white leading-none mb-4" style={{ fontFamily: 'var(--titleFont), sans-serif' }}>
            404
          </h2>
          <div className="inline-block px-6 py-2 bg-[#34A853]/10 border border-[#34A853]/30 rounded-full">
            <p className="text-[#34A853] font-medium">Página no encontrada</p>
          </div>
        </div>

        {/* Mensaje */}
        <div className="mb-12">
          <p className="text-[#B3B3B3] text-lg mb-2">
            Parece que esta página se automatizó y desapareció 🤖
          </p>
          <p className="text-[#B3B3B3]">
            La URL que buscas no existe o fue movida a otra ubicación.
          </p>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-2 bg-[#34A853] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2d8e45] transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Home className="w-5 h-5" />
            Ir al Inicio
          </Link>

          <Link
            href="/blog"
            className="group flex items-center gap-2 bg-[#1E1E1E] text-white px-8 py-4 rounded-full font-medium border border-[#2A2A2A] hover:border-[#34A853] transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Search className="w-5 h-5" />
            Ver Blog
          </Link>
        </div>

        {/* Enlaces rápidos */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A]">
          <p className="text-[#B3B3B3] text-sm mb-4">Enlaces útiles:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/#servicios" className="text-[#34A853] hover:underline">
              Servicios
            </Link>
            <span className="text-[#2A2A2A]">•</span>
            <Link href="/#proyectos" className="text-[#34A853] hover:underline">
              Casos de Estudio
            </Link>
            <span className="text-[#2A2A2A]">•</span>
            <Link href="/#contacto" className="text-[#34A853] hover:underline">
              Contacto
            </Link>
            <span className="text-[#2A2A2A]">•</span>
            <a href="mailto:bethalabs.dev@gmail.com" className="text-[#34A853] hover:underline">
              Email
            </a>
          </div>
        </div>

        {/* Decoración de fondo */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#34A853]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#34A853]/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  )
}
