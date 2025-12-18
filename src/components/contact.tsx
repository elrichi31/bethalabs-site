"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)

    // Lazy load emailjs solo cuando se envía el formulario
    const { default: emailjs } = await import('@emailjs/browser')

    // EmailJS configuration
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    // Validar que las variables de entorno existan
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS no está configurado correctamente')
      setSubmitError(true)
      setIsSubmitting(false)
      setTimeout(() => setSubmitError(false), 5000)
      return
    }

    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        publicKey
      )

      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", company: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setIsSubmitting(false)
      setSubmitError(true)
      setTimeout(() => setSubmitError(false), 5000)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Decorative elements - hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-[#34A853]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-[#34A853]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {(() => {
              const title = translations[language].contact.title || 'Contacto'
              const parts = title.split(' ')
              const first = parts.shift() || ''
              const rest = parts.join(' ')
              return (
                <>
                  <span className="text-white">{first} </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400">{rest}</span>
                </>
              )
            })()}
          </h2>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">{t.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#B3B3B3] mb-1">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#34A853] text-white"
                  placeholder={t.form.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#B3B3B3] mb-1">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#34A853] text-white"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#B3B3B3] mb-1">
                  {t.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#34A853] text-white"
                  placeholder={t.form.company}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#B3B3B3] mb-1">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#34A853] text-white resize-none"
                  placeholder={t.form.message}
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
                    {t.form.sending}
                  </span>
                ) : (
                  t.form.submit
                )}
              </motion.button>

              {submitSuccess && (
                <motion.div
                  className="text-center text-[#34A853] mt-4 p-4 bg-[#34A853]/10 rounded-lg border border-[#34A853]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ✅ {t.form.success}
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  className="text-center text-red-400 mt-4 p-4 bg-red-400/10 rounded-lg border border-red-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ❌ {t.form.error}
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
            <h3 className="text-2xl font-bold text-white mb-6">{t.infoTitle}</h3>
            <p className="text-[#B3B3B3] mb-8">
              {t.socialTitle}
            </p>

            <div className="space-y-4">
              <div className="flex items-start p-4 bg-[#121212] rounded-lg">
                <div className="bg-[#34A853]/20 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-[#34A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">{t.email}</h4>
                  <p className="text-[#34A853] text-sm">bethalabs.dev@gmail.com</p>
                </div>
              </div>

              <a
                href="https://github.com/bethalabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-[#121212] rounded-lg hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <Github className="h-6 w-6 text-white mr-4" />
                <div>
                  <h4 className="text-white font-medium">GitHub</h4>
                  <p className="text-[#B3B3B3] text-sm">@bethalabs</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/bethalabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-[#121212] rounded-lg hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6 text-white mr-4" />
                <div>
                  <h4 className="text-white font-medium">LinkedIn</h4>
                  <p className="text-[#B3B3B3] text-sm">BethaLabs</p>
                </div>
              </a>

              <a
                href="https://twitter.com/bethalabs"
                target="_blank"
                rel="noopener noreferrer"
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

