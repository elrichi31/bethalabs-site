"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Zap, Globe, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const reduceMotion = useReducedMotion();

  // Palabras que rotan en el título
  const [wordIndex, setWordIndex] = useState(0);
  const rotatingWords = useMemo(
    () => language === 'es' 
      ? ["landing pages", "e-commerce", "automatizaciones", "chatbots", "sitios web"]
      : ["landing pages", "e-commerce", "automations", "chatbots", "websites"],
    [language]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Animación simple respetando preferencias del usuario
  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  const stats = [
    { value: "50+", label: t.stats.projects },
    { value: "24/7", label: t.stats.support },
    { value: "100%", label: t.stats.satisfaction },
  ];

  const features = [
    { icon: Globe, label: t.features.websites },
    { icon: Zap, label: t.features.automation },
    { icon: TrendingUp, label: t.features.results },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Fondo con gradiente radial */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(52, 168, 83, 0.2), transparent 70%)",
          }}
        />
        {/* Segundo gradiente inferior */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(52, 168, 83, 0.1), transparent 60%)",
          }}
        />
      </div>

      {/* Glow orbs decorativos - luces verdes degradadas */}
      <div
        className="absolute top-20 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(52, 168, 83, 0.25) 0%, rgba(52, 168, 83, 0.05) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(52, 168, 83, 0.2) 0%, rgba(52, 168, 83, 0.03) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(52, 168, 83, 0.08) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge superior */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-[#34A853]/30 bg-[#34A853]/5 text-xs text-[#B3B3B3] backdrop-blur-sm"
          >
            <Zap className="w-3 h-3 text-[#34A853]" aria-hidden />
            <span>{t.badge}</span>
          </motion.div>

          {/* Título principal con palabras rotativas */}
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5"
          >
            {t.title}{" "}
            <span className="relative inline-flex w-full justify-center overflow-hidden h-[1.2em] md:h-[1.15em]">
              {rotatingWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="absolute text-[#34A853]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    wordIndex === index
                      ? { y: 0, opacity: 1 }
                      : { y: wordIndex > index ? -50 : 50, opacity: 0 }
                  }
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15,
                    duration: 0.5 
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base md:text-lg text-[#B3B3B3] mb-8 max-w-xl mx-auto"
          >
            {t.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#34A853] text-white text-sm font-semibold rounded-full shadow-lg shadow-[#34A853]/25 hover:shadow-[#34A853]/40 hover:bg-[#2a8644] transition-all duration-300"
            >
              {t.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#333] text-white text-sm font-medium rounded-full hover:bg-[#1E1E1E] hover:border-[#444] transition-all duration-300"
            >
              {t.ctaSecondary}
            </a>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1A1A1A]/80 border border-[#2A2A2A] rounded-full text-xs backdrop-blur-sm hover:border-[#34A853] transition-colors duration-300"
              >
                <feature.icon className="w-3 h-3 text-[#34A853]" aria-hidden />
                <span className="text-[#B3B3B3]">{feature.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex items-center justify-center gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-[#666]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
