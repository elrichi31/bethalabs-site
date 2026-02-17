import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Obtener idioma de la cookie
  const cookieLanguage = request.cookies.get('language')?.value
  
  // Si no hay cookie, detectar del header Accept-Language
  if (!cookieLanguage) {
    const acceptLanguage = request.headers.get('accept-language')
    const browserLang = acceptLanguage?.split(',')[0]?.toLowerCase() || 'es'
    
    // Determinar idioma (solo soportamos 'es' y 'en')
    const language = browserLang.startsWith('es') ? 'es' : 'en'
    
    // Crear respuesta con cookie
    const response = NextResponse.next()
    response.cookies.set('language', language, {
      maxAge: 60 * 60 * 24 * 365, // 1 año
      path: '/',
      sameSite: 'lax',
    })
    
    return response
  }
  
  return NextResponse.next()
}

// Configurar en qué rutas se ejecuta el proxy
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)).*)',
  ],
}
