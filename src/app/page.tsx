import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"
import { getFeaturedPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BethaLabs | Automatización y Ciberseguridad Ecuador",
  description:
    "Automatización con n8n/Make y ciberseguridad para PyMEs en Ecuador y Latinoamérica. Servicios remotos y presenciales.",
  keywords: [
    "automatización PyMEs",
    "ciberseguridad empresarial", 
    "n8n español",
    "Make automatización",
    "consultoría IT remota",
    "automatización Latinoamérica",
    "BethaLabs",
    "transformación digital",
    "automatización empresarial",
    "protección de datos",
    "facturación automática",
    "integración WhatsApp CRM",
    "servicios IT Ecuador",
    "consultoría tecnológica"
  ],
  alternates: {
    canonical: 'https://www.bethalabs.com/',
  },
}

export default async function Home() {
  const featuredPosts = await getFeaturedPosts(3)

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <StructuredData />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blog posts={featuredPosts} />
      <Contact />
      <Footer />
    </main>
  )
}

