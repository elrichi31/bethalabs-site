import BlogPage from "@/components/blog/blog-page"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getAllPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog de Automatización y Ciberseguridad en Ecuador | BethaLabs",
  description:
    "Guías prácticas sobre automatización con n8n, Make, ciberseguridad para PyMEs ecuatorianas, integración de sistemas y transformación digital. Aprende a optimizar tu negocio.",
  keywords: [
    "blog automatización Ecuador",
    "ciberseguridad PyMEs",
    "tutoriales n8n español",
    "guías Make automatización",
    "seguridad digital Ecuador",
    "integración WhatsApp CRM",
    "facturación automática",
    "transformación digital Ecuador",
    "buenas prácticas IT"
  ],
  alternates: {
    canonical: 'https://bethalabs.com/blog',
  },
  openGraph: {
    title: 'Blog de Automatización y Ciberseguridad | BethaLabs Ecuador',
    description: 'Guías prácticas, casos de éxito y recursos sobre automatización y ciberseguridad para PyMEs ecuatorianas',
    url: 'https://bethalabs.com/blog',
    type: 'website',
    locale: 'es_EC',
  },
}

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <BlogPage posts={posts} />
      <Footer />
    </main>
  )
}
