"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { FloatingCards } from "@/components/floating-cards";

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const shouldReduceMotion = useReducedMotion();

  const [wordIndex, setWordIndex] = useState(0);
  const [prevWordIndex, setPrevWordIndex] = useState(0);
  const [enableWordTransitions, setEnableWordTransitions] = useState(false);
  const [enableWordRotation, setEnableWordRotation] = useState(false);

  const rotatingWords = useMemo(
    () =>
      language === "es"
        ? ["landing pages", "e-commerce", "automatizaciones", "chatbots", "sitios web"]
        : ["landing pages", "e-commerce", "automations", "chatbots", "websites"],
    [language]
  );

  useEffect(() => {
    setWordIndex(0);
    setPrevWordIndex(0);
  }, [language]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setEnableWordTransitions(false);
      setEnableWordRotation(false);
      return;
    }

    setEnableWordTransitions(false);
    setEnableWordRotation(false);

    const raf = requestAnimationFrame(() => setEnableWordTransitions(true));
    const timeoutId = window.setTimeout(() => setEnableWordRotation(true), 850);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeoutId);
    };
  }, [shouldReduceMotion, language]);

  useEffect(() => {
    if (!enableWordRotation) return;
    const interval = window.setInterval(() => {
      setWordIndex((prev) => {
        setPrevWordIndex(prev);
        return (prev + 1) % rotatingWords.length;
      });
    }, 2500);

    return () => window.clearInterval(interval);
  }, [enableWordRotation, rotatingWords.length]);

  const badgeText = language === "es" ? "Disponible 24/7" : "Available 24/7";
  const socialLabel = language === "es" ? "Clientes satisfechos" : "Satisfied clients";

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#121212]">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,168,83,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(52,168,83,0.55) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Animated Blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] bg-[#34A853]/18 rounded-full blur-[110px] mix-blend-screen pointer-events-none"
        animate={
          shouldReduceMotion ? undefined : { x: [0, 20, -10, 0], y: [0, -30, 10, 0], scale: [1, 1.08, 0.98, 1] }
        }
        transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] bg-[#34A853]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        animate={
          shouldReduceMotion ? undefined : { x: [0, -18, 10, 0], y: [0, 24, -12, 0], scale: [1, 0.97, 1.07, 1] }
        }
        transition={shouldReduceMotion ? undefined : { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        style={{ willChange: "transform" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#34A853]/30 bg-[#34A853]/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34A853]" />
              </span>
              <span className="text-xs font-semibold text-[#B3B3B3] uppercase tracking-wider">{badgeText}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.06, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
            >
              {t.title}
              <br />
              <span className="relative inline-flex items-baseline overflow-hidden h-[1.15em] w-[18ch] sm:w-[20ch]">
                {rotatingWords.map((word, index) => {
                  const transitionClass = enableWordTransitions
                    ? "transition-all duration-500 ease-out"
                    : "transition-none";

                  const positionClass =
                    index === wordIndex
                      ? "opacity-100 translate-y-0"
                      : !enableWordRotation
                        ? "opacity-0 translate-y-0"
                        : index === prevWordIndex
                          ? "opacity-0 -translate-y-8"
                          : "opacity-0 translate-y-8";

                  return (
                    <span
                      key={word}
                      className={`absolute inset-x-0 will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400 ${transitionClass} ${positionClass}`}
                    >
                      {word}
                    </span>
                  );
                })}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.14, ease: "easeOut" }}
              className="text-lg text-[#B3B3B3] max-w-xl leading-relaxed"
            >
              {t.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <a
                className="group inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#34A853] text-white rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-[#34A853]/30 hover:bg-[#2a8644]"
                href="#contacto"
              >
                {t.ctaPrimary}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-transparent border border-[#333] text-white rounded-full font-semibold hover:bg-[#1E1E1E] hover:border-[#444] transition-all"
                href="#servicios"
              >
                {t.ctaSecondary}
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.28, ease: "easeOut" }}
              className="pt-8 flex items-center gap-8 border-t border-white/10 w-full justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#121212] bg-[#1E1E1E] flex items-center justify-center text-xs font-bold text-white">
                  ST
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#121212] bg-[#262626] flex items-center justify-center text-xs font-bold text-white">
                  NM
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#121212] bg-[#303030] flex items-center justify-center text-xs font-bold text-white">
                  EM
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#121212] bg-[#1A1A1A] flex items-center justify-center text-xs font-bold text-[#B3B3B3]">
                  +50
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-[#34A853] text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Zap key={i} className="w-4 h-4" aria-hidden />
                  ))}
                </div>
                <span className="text-xs font-medium text-[#B3B3B3]">{socialLabel}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Floating Cards */}
          <FloatingCards />
        </div>
      </div>
    </section>
  );
}
