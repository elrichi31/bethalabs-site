import BlogPage from "@/components/blog/blog-page"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getAllPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog de Desarrollo Web y Automatización en Ecuador | BethaLabs",
  description:
    "Guías prácticas sobre desarrollo web con Next.js, automatización con n8n, chatbots WhatsApp y transformación digital para PyMEs. Aprende a hacer crecer tu negocio online.",
  keywords: [
    "blog desarrollo web Ecuador",
    "tutoriales Next.js español",
    "automatización PyMEs",
    "tutoriales n8n español",
    "chatbots WhatsApp",
    "landing pages Ecuador",
    "integración WhatsApp CRM",
    "e-commerce Ecuador",
    "transformación digital Ecuador"
  ],
  alternates: {
    canonical: 'https://www.bethalabs.com/blog',
  },
  openGraph: {
    title: 'Blog de Desarrollo Web y Automatización | BethaLabs Ecuador',
    description: 'Guías prácticas, tutoriales y recursos sobre desarrollo web y automatización para PyMEs ecuatorianas',
    url: 'https://www.bethalabs.com/blog',
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
