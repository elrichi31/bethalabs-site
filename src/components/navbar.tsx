"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { MotionDiv } from "@/lib/motion"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import LanguageSelector from "./language-selector"
import { useAnimationsEnabled } from "@/contexts/animation-context"

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const { language } = useLanguage()
    const t = translations[language].navbar

    const navLinks = [
        { name: t.home, href: "/" },
        { name: t.services, href: "/#servicios" },
        { name: t.cases, href: "/#proyectos" },
        { name: t.blog, href: "/#blog" },
        { name: t.contact, href: "/#contacto" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const animationsEnabled = useAnimationsEnabled()

    return (
        <header className={`fixed z-50 w-full overflow-hidden`}>
            <div className="container mx-auto px-3 sm:px-4 my-4">
                <MotionDiv
                    className={`flex justify-between items-center md:justify-center  md:items-center `}
                    initial={animationsEnabled ? { y: -5, opacity: 0 } : undefined}
                    animate={animationsEnabled ? { y: scrolled ? 0 : -5, opacity: 1 } : undefined}
                    transition={animationsEnabled ? { duration: 0.3, ease: "easeOut" } : undefined}
                >
                    <div className={`flex space-x-0 md:space-x-10 items-center bg-black backdrop-blur-sm rounded-full px-6 py-3 ${scrolled ? "shadow-lg" : ""}`}
                    style={{
                        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.2)",
                    }}
                    >
                        <MotionDiv
                            className={`flex items-center`}
                            initial={animationsEnabled ? { opacity: 0, x: -20 } : undefined}
                            animate={animationsEnabled ? { opacity: 1, x: 0 } : undefined}
                            transition={animationsEnabled ? { duration: 0.5 } : undefined}
                        >
                            <a href="/" className="flex items-center space-x-2">
                                <Image 
                                    src="/logo.avif" 
                                    alt="BethaLabs Logo" 
                                    width={30} 
                                    height={30}
                                    priority={true}
                                    loading="eager"
                                    className="mr-2 hover:scale-110 transition-transform duration-300" 
                                />
                                <span className="text-white font-bold text-lg">BethaLabs</span>
                            </a>
                        </MotionDiv>
                        <MotionDiv
                            className="hidden md:flex space-x-6"
                            initial={animationsEnabled ? { opacity: 0 } : undefined}
                            animate={animationsEnabled ? { opacity: 1 } : undefined}
                            transition={animationsEnabled ? { duration: 0.5 } : undefined}
                        >
                            {navLinks.map((link, index) => (
                                <NavLink key={link.name} {...link} index={index} />
                            ))}
                        </MotionDiv>

                        {/* Language Selector - Desktop */}
                        <div className="hidden md:block">
                            <LanguageSelector />
                        </div>
                    </div>

                    {/* Language Selector - Mobile */}
                    <div className="md:hidden flex items-center gap-3">
                        <LanguageSelector />
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="text-gray-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </MotionDiv>
            </div>

            {mobileMenuOpen && (
                <MotionDiv
                    className="md:hidden mt-2 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-lg"
                    initial={animationsEnabled ? { opacity: 0, height: 0 } : undefined}
                    animate={animationsEnabled ? { opacity: 1, height: 'auto' } : undefined}
                    transition={animationsEnabled ? { duration: 0.3 } : undefined}
                    style={{
                        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-white hover:text-white rounded-full hover:bg-[#34A853] px-4 py-3 transition-colors duration-200 font-medium rounded-lg"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </MotionDiv>
            )}
        </header>
    )
}

function NavLink({ name, href, index }: { name: string; href: string; index: number }) {
    const pathname = usePathname()
    // Solo marcar activo en páginas específicas (como /blog), no en página principal con secciones
    const isActive = pathname !== '/' && (
        (href.startsWith('/blog') && pathname.startsWith('/blog')) ||
        (href !== '/' && !href.startsWith('/#') && pathname === href)
    )
    
    const animationsEnabled = useAnimationsEnabled()

    return (
        <MotionDiv
            initial={animationsEnabled ? { opacity: 0, y: -10 } : undefined}
            animate={animationsEnabled ? { opacity: 1, y: 0 } : undefined}
            transition={animationsEnabled ? { duration: 0.3, delay: index * 0.1 } : undefined}
        >
            <Link 
                href={href} 
                className={`text-white transition-all duration-200 font-medium rounded-full px-4 py-3 ${
                    isActive 
                        ? 'bg-[#34A853]' 
                        : 'hover:bg-[#34A853]'
                }`}
            >
                {name}
            </Link>
        </MotionDiv>
    )
}

