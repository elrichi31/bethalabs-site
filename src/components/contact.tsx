"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section id="contacto" className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#34A853]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#34A853]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Tienes una idea o quieres colaborar?</h2>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto">
            BethaLabs no es una empresa de servicios, pero si tienes una idea interesante o un proyecto en el que
            podamos colaborar, ¡hablemos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#B3B3B3] mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#34A853] text-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#B3B3B3] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#34A853] text-white"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#B3B3B3] mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#34A853] text-white resize-none"
                  placeholder="Cuéntame sobre tu idea o proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-[#34A853] text-white font-medium rounded-md shadow-lg hover:bg-[#2a8644] transition-colors duration-300 flex justify-center items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar mensaje"
                )}
              </motion.button>

              {submitSuccess && (
                <motion.div
                  className="text-center text-[#34A853] mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ¡Mensaje enviado con éxito! Te responderé pronto.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1E1E1E] p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Conéctate conmigo</h3>
            <p className="text-[#B3B3B3] mb-8">
              También puedes encontrarme en las siguientes plataformas. No dudes en seguirme o enviarme un mensaje
              directo.
            </p>

            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center p-4 bg-[#121212] rounded-lg hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <Github className="h-6 w-6 text-white mr-4" />
                <div>
                  <h4 className="text-white font-medium">GitHub</h4>
                  <p className="text-[#B3B3B3] text-sm">@bethalabs</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center p-4 bg-[#121212] rounded-lg hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6 text-white mr-4" />
                <div>
                  <h4 className="text-white font-medium">LinkedIn</h4>
                  <p className="text-[#B3B3B3] text-sm">BethaLabs</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center p-4 bg-[#121212] rounded-lg hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <Twitter className="h-6 w-6 text-white mr-4" />
                <div>
                  <h4 className="text-white font-medium">Twitter</h4>
                  <p className="text-[#B3B3B3] text-sm">@bethalabs</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

