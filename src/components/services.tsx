"use client"

import { motion } from "framer-motion"
import { Zap, Shield, TrendingUp, CheckCircle } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Zap,
    name: "BethaFlow",
    title: "Automatizaciones inteligentes",
    description: "Diseñamos flujos automáticos entre tus herramientas para que tu equipo se enfoque en lo importante.",
    features: [
      "Integraciones personalizadas con n8n o Python",
      "Automatización de reportes y notificaciones",
      "Sincronización de datos en tiempo real",
      "Mantenimiento y escalado continuo"
    ],
    benefits: [
      "Ahorro de tiempo y reducción de errores",
      "Procesos más eficientes sin intervención manual",
      "Mejores decisiones con datos conectados"
    ]
  },
  {
    id: 2,
    icon: Shield,
    name: "BethaSecure",
    title: "Consultoría de Ciberseguridad",
    description: "Protegemos tu negocio con auditorías, configuraciones seguras y asesoramiento continuo.",
    features: [
      "Auditorías de seguridad (PCs, red, contraseñas)",
      "Detección y limpieza de malware",
      "Configuración de copias de seguridad",
      "Asesoramiento en buenas prácticas digitales"
    ],
    benefits: [
      "Tranquilidad ante amenazas digitales",
      "Menor riesgo de pérdida de datos",
      "Confianza para usar tecnología sin temor"
    ]
  }
]

const methodology = [
  {
    step: "01",
    title: "Diagnóstico y descubrimiento",
    description: "Nos reunimos contigo para entender tus operaciones, herramientas actuales y puntos de dolor."
  },
  {
    step: "02",
    title: "Propuesta a medida",
    description: "Creamos una solución personalizada con roadmap claro y entregables definidos."
  },
  {
    step: "03",
    title: "Implementación & pruebas",
    description: "Desarrollamos, testeamos y validamos cada parte del proyecto con comunicación transparente."
  },
  {
    step: "04",
    title: "Entrega & capacitación",
    description: "Te entregamos documentación, capacitación básica y acompañamiento inicial."
  },
  {
    step: "05",
    title: "Soporte y escalado",
    description: "Ofrecemos mantenimiento opcional, mejoras continuas o auditorías periódicas."
  }
]

export default function Services() {
  return (
    <>
      {/* Servicios */}
      <section id="servicios" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
            <p className="text-[#B3B3B3] max-w-2xl mx-auto">
              Soluciones técnicas diseñadas para PyMEs que quieren crecer con tecnología confiable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-[#1E1E1E] rounded-lg p-8 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-[#34A853]/20 p-3 rounded-lg mr-4">
                    <service.icon className="text-[#34A853] h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-[#34A853] text-sm font-semibold">{service.name}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{service.title}</h3>
                  </div>
                </div>

                <p className="text-[#B3B3B3] mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Qué hacemos:</h4>
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
                  <h4 className="text-white font-semibold mb-3">Beneficios para ti:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cómo trabajamos</h2>
            <p className="text-[#B3B3B3] max-w-2xl mx-auto">
              Nuestra metodología garantiza entregas puntuales y resultados medibles
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
