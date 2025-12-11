import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import StructuredDataClient from "@/components/structured-data-client"
import { getFeaturedPosts } from "@/lib/blog"
import type { Metadata } from "next"

// Dynamic imports para componentes below-fold (code splitting)
const Services = dynamic(() => import("@/components/services"), {
  loading: () => <div className="min-h-screen bg-[#121212]" />,
})
const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => <div className="min-h-screen bg-[#1A1A1A]" />,
})
const Blog = dynamic(() => import("@/components/blog"), {
  loading: () => <div className="min-h-[60vh] bg-[#121212]" />,
})
const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="min-h-screen bg-[#1A1A1A]" />,
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-32 bg-[#121212]" />,
})

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
      <StructuredDataClient />
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

