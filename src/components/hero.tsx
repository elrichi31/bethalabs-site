"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Globe, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [mounted, setMounted] = useState(false);
  
  // Scroll animations
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  // Palabras que rotan en el título
  const [wordIndex, setWordIndex] = useState(0);
  const rotatingWords = useMemo(
    () => language === 'es' 
      ? ["landing pages", "e-commerce", "automatizaciones", "chatbots", "sitios web"]
      : ["landing pages", "e-commerce", "automations", "chatbots", "websites"],
    [language]
  );

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

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
    <section className="relative min-h-[100vh] md:min-h-[110vh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Fondo con gradiente radial mejorado */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradiente principal superior */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(52, 168, 83, 0.2), transparent 60%)",
          }}
        />
        {/* Gradiente secundario inferior */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(52, 168, 83, 0.08), transparent 50%)",
          }}
        />
      </div>

      {/* Grid pattern de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(52, 168, 83, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(52, 168, 83, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Glow orbs animados - responsive */}
      <motion.div
        className="absolute top-10 left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none opacity-60 md:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(52, 168, 83, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none opacity-50 md:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(52, 168, 83, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles - solo desktop */}
      <div className="hidden md:block absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#34A853] rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              opacity: 0.4 + (i * 0.1),
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Líneas decorativas animadas - solo desktop */}
      <div className="hidden lg:block absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#34A853]/30 to-transparent"
          animate={{ x: ["-100%", "400%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-2/3 right-0 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#34A853]/20 to-transparent"
          animate={{ x: ["400%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Contenido principal */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full"
        style={{ opacity, y, scale }}
      >
        <div className="max-w-3xl mx-auto text-center px-2">
          {/* Badge superior - sin animación para renderizado inmediato */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-[#34A853]/30 bg-[#34A853]/5 text-xs text-[#B3B3B3] backdrop-blur-sm">
            <Zap className="w-3 h-3 text-[#34A853]" aria-hidden />
            <span>{t.badge}</span>
          </div>

          {/* Título principal - visible inmediatamente sin animación para mejor FCP */}
          <h1 className="hero-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            {t.title}{" "}
            <span className="relative inline-flex w-full justify-center overflow-hidden h-[1.2em] md:h-[1.15em]">
              {mounted ? (
                rotatingWords.map((word, index) => (
                  <span
                    key={index}
                    className={`absolute text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400 transition-all duration-500 ease-in-out ${
                      wordIndex === index 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : wordIndex > index 
                          ? 'opacity-0 -translate-y-12 scale-95' 
                          : 'opacity-0 translate-y-12 scale-95'
                    }`}
                  >
                    {word}
                  </span>
                ))
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400">{rotatingWords[0]}</span>
              )}
            </span>
          </h1>

          {/* Descripción - Sin animación para LCP instantáneo */}
          <p className="hero-text text-xl md:text-xl text-[#B3B3B3] mb-10 max-w-2xl mx-auto">
            {t.description}
          </p>

          {/* CTAs - visible inmediatamente */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
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
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1A]/80 border border-[#2A2A2A] rounded-full text-sm md:text-base backdrop-blur-sm hover:border-[#34A853] transition-colors duration-300"
              >
                <feature.icon className="w-4 h-4 text-[#34A853]" aria-hidden />
                <span className="text-[#B3B3B3]">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-10 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-2xl lg:text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-base md:text-base text-[#666]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
