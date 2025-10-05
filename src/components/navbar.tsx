"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Casos", href: "/#proyectos" },
    { name: "Blog", href: "/#blog" },
    { name: "Contacto", href: "/#contacto" },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed z-50 w-full`}>
            <div className="container mx-auto px-4 my-4">
                <div
                    className={`flex justify-between items-center md:justify-center  md:items-center `}
            
                >
                    <div className={`flex space-x-0 md:space-x-10 items-center bg-black backdrop-blur-sm rounded-full px-6 py-3 ${scrolled ? "shadow-lg" : ""}`}
                    style={{
                        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.2)",
                    }}
                    >
                        <motion.div
                            className={`flex items-center`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <a href="/" className="flex items-center space-x-2">
                                <Image src="/logo.png" alt="BethaLabs Logo" width={30} height={30} className="mr-2" />
                                <span className="text-white font-bold text-lg">BethaLabs</span>
                            </a>
                        </motion.div>
                        <motion.nav
                            className={`hidden md:flex space-x-6`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {navLinks.map((link, index) => (
                                <NavLink key={link.name} {...link} index={index} />
                            ))}
                        </motion.nav>

                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
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
                </div>
            </div>

            {mobileMenuOpen && (
                <motion.div
                    className="md:hidden mt-2 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
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
                </motion.div>
            )}
        </header>
    )
}

function NavLink({ name, href, index }: { name: string; href: string; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
        >
            <Link href={href} className="text-white hover:text- transition-colors duration-200 font-medium rounded-full hover:bg-[#34A853] px-4 py-3">
                {name}
            </Link>
        </motion.div>
    )
}

