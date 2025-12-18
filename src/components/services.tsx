"use client"

import { motion } from "framer-motion"
import { Zap, Globe, TrendingUp, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language].services

  const services = [
    {
      id: 1,
      icon: Zap,
      name: t.bethaflow.name,
      title: t.bethaflow.title,
      description: t.bethaflow.description,
      features: t.bethaflow.features,
      benefits: t.bethaflow.benefits,
      featuresTitle: t.bethaflow.featuresTitle,
      benefitsTitle: t.bethaflow.benefitsTitle
    },
    {
      id: 2,
      icon: Globe,
      name: t.bethaweb.name,
      title: t.bethaweb.title,
      description: t.bethaweb.description,
      features: t.bethaweb.features,
      benefits: t.bethaweb.benefits,
      featuresTitle: t.bethaweb.featuresTitle,
      benefitsTitle: t.bethaweb.benefitsTitle
    }
  ]

  const methodology = t.methodology.steps
  return (
    <>
      {/* Servicios */}
      <section id="servicios" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {(() => {
                const parts = t.title.split(" ")
                const first = parts.shift() || ""
                const rest = parts.join(" ")
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-[#1E1E1E] rounded-lg p-8 shadow-xl hover:shadow-2xl hover:shadow-[#34A853]/5 transition-shadow duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-[#34A853]/20 p-3 rounded-lg mr-4">
                    <service.icon className="text-[#34A853] h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400 text-sm font-bold">{service.name}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{service.title}</h3>
                  </div>
                </div>

                <p className="text-[#B3B3B3] mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">{service.featuresTitle}</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-[#B3B3B3]">
                        <CheckCircle className="text-[#34A853] h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">{service.benefitsTitle}</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-[#B3B3B3]">
                        <TrendingUp className="text-[#34A853] h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {(() => {
                const parts = t.methodology.title.split(" ")
                const first = parts.shift() || ""
                const rest = parts.join(" ")
                return (
                  <>
                    <span className="text-white">{first} </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400">{rest}</span>
                  </>
                )
              })()}
            </h2>
            <p className="text-[#B3B3B3] max-w-2xl mx-auto">
              {t.methodology.subtitle}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {methodology.map((item, index) => (
              <motion.div
                key={index}
                className="relative mb-8 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-[#34A853]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#34A853] font-bold text-xl">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#1E1E1E] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[#B3B3B3]">{item.description}</p>
                  </div>
                </div>
                {index < methodology.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-[#34A853]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
