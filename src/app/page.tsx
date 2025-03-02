import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BethaLabs | Ciberseguridad y Desarrollo Web",
  description:
    "BethaLabs - Explorando Ciberseguridad y Desarrollo Web. Proyectos, investigaciones y pensamientos sobre tecnología.",
  keywords: ["ciberseguridad", "desarrollo web", "tecnología", "BethaLabs", "proyectos"],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}

