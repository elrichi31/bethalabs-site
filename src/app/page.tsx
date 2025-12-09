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
  title: "BethaLabs | Desarrollo Web y Automatización Ecuador",
  description:
    "Desarrollo web profesional y automatizaciones con n8n para PyMEs en Ecuador y Latinoamérica. Landing pages, e-commerce, chatbots WhatsApp.",
  keywords: [
    "desarrollo web Ecuador",
    "diseño web Quito",
    "landing pages Ecuador",
    "automatización PyMEs",
    "n8n español",
    "Make automatización",
    "e-commerce Ecuador",
    "páginas web profesionales",
    "chatbots WhatsApp",
    "automatización Latinoamérica",
    "BethaLabs",
    "transformación digital",
    "sitios web para negocios",
    "integración WhatsApp CRM",
    "desarrollo web PyMEs"
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

