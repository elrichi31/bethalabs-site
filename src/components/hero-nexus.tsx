"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

function HeroGridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{
        WebkitMaskImage:
          "radial-gradient(ellipse at 55% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 82%)",
        maskImage:
          "radial-gradient(ellipse at 55% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 82%)",
      }}
    >
      <defs>
        <pattern id="betha-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#34A853"
            strokeWidth="0.6"
            opacity="0.25"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#betha-hero-grid)" />
    </svg>
  );
}

function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}

function CodeCard({ title }: { title: string }) {
  return (
    <motion.div
      className="absolute top-[12%] right-[10%] w-72"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <GlassCard className="p-4 shadow-[#34A853]/10 rotate-[-2deg]">
        <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="text-xs text-[#B3B3B3] ml-auto font-mono">{title}</span>
        </div>
        <div className="space-y-1 font-mono text-xs">
          <div className="text-[#666]">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">stack</span> = {"{"}
          </div>
          <div className="pl-4 text-[#34A853]">
            web: <span className="text-blue-400">&quot;Next.js&quot;</span>,
          </div>
          <div className="pl-4 text-[#34A853]">
            flows: <span className="text-blue-400">&quot;n8n&quot;</span>,
          </div>
          <div className="pl-4 text-[#34A853]">
            speed: <span className="text-orange-400">&quot;fast&quot;</span>
          </div>
          <div className="text-[#666]">{"}"}</div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function GrowthCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      className="absolute top-[44%] left-[10%] w-64"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
    >
      <GlassCard className="p-5 rotate-[2deg]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-[#B3B3B3]">{label}</span>
          <span className="text-[#34A853] bg-[#34A853]/10 px-2 py-0.5 rounded text-xs font-bold">
            {value}
          </span>
        </div>
        <div className="h-24 flex items-end justify-between gap-1">
          <div className="w-1/6 bg-[#34A853]/15 rounded-t h-[40%]" />
          <div className="w-1/6 bg-[#34A853]/25 rounded-t h-[60%]" />
          <div className="w-1/6 bg-[#34A853]/30 rounded-t h-[50%]" />
          <div className="w-1/6 bg-[#34A853]/45 rounded-t h-[80%]" />
          <div className="w-1/6 bg-[#34A853] rounded-t h-[100%] shadow-[0_0_15px_rgba(52,168,83,0.35)]" />
        </div>
      </GlassCard>
    </motion.div>
  );
}

function StatusCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      className="absolute bottom-[18%] right-[16%]"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
    >
      <GlassCard className="px-4 py-3 flex items-center gap-3">
        <div className="relative">
          <div className="w-3 h-3 bg-[#34A853] rounded-full" />
          <div className="absolute inset-0 w-3 h-3 bg-[#34A853] rounded-full animate-ping opacity-60" />
        </div>
        <div>
          <div className="text-[11px] text-[#666] uppercase tracking-wide">{label}</div>
          <div className="text-sm font-bold text-white">{value}</div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function DecorativeCircles() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-white/5 rounded-full" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-dashed border-white/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-[#34A853]/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}

export default function HeroNexus() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [mounted, setMounted] = useState(false);

  const [wordIndex, setWordIndex] = useState(0);
  const rotatingWords = useMemo(
    () =>
      language === "es"
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

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-16 overflow-hidden">
      {/* Background grid (very subtle) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52, 168, 83, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 168, 83, 0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[380px] h-[380px] md:w-[520px] md:h-[520px] bg-[#34A853]/16 rounded-full blur-[100px] pointer-events-none"
        animate={{
          x: [0, 28, 0],
          y: [0, -40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[380px] h-[380px] md:w-[520px] md:h-[520px] bg-[#34A853]/10 rounded-full blur-[110px] pointer-events-none"
        animate={{
          x: [0, -22, 0],
          y: [0, 22, 0],
          scale: [1, 0.94, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#34A853]/30 bg-[#34A853]/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34A853]" />
              </span>
              <span className="text-xs font-semibold text-[#34A853] uppercase tracking-wider">
                {t.badge}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <span className="text-white">{t.title}</span>{" "}
              <span className="relative inline-flex justify-center lg:justify-start overflow-hidden h-[1.15em] align-bottom">
                {mounted ? (
                  rotatingWords.map((word, index) => (
                    <span
                      key={index}
                      className={`absolute text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400 transition-all duration-500 ease-in-out ${
                        wordIndex === index
                          ? "opacity-100 translate-y-0"
                          : wordIndex > index
                          ? "opacity-0 -translate-y-full"
                          : "opacity-0 translate-y-full"
                      }`}
                    >
                      {word}
                    </span>
                  ))
                ) : (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-emerald-400">
                    {rotatingWords[0]}
                  </span>
                )}
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-[#B3B3B3] max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              {t.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <a
                href="#contacto"
                className="group relative px-8 py-4 bg-[#34A853] text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-14px_rgba(52,168,83,0.55)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-2">
                  {t.ctaPrimary}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 bg-transparent border border-white/10 text-white rounded-xl font-semibold hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
              >
                {t.ctaSecondary}
              </a>
            </motion.div>

            {/* Keep only existing copy: reuse stats labels */}
            <motion.div
              className="pt-8 flex flex-wrap items-center gap-6 border-t border-white/10 w-full justify-center lg:justify-start"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-white">50+</div>
                <div className="text-xs text-[#666]">{t.stats.projects}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-white">24/7</div>
                <div className="text-xs text-[#666]">{t.stats.support}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-xs text-[#666]">{t.stats.satisfaction}</div>
              </div>
            </motion.div>
          </div>

          {/* Right (desktop only) */}
          <div className="relative h-[560px] w-full hidden lg:block overflow-hidden">
            {/* Soft vignette to avoid the right side looking empty */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-transparent via-[#121212]/35 to-[#121212]/80" />

            <HeroGridPattern />
            <DecorativeCircles />
            <CodeCard title="config.json" />
            <GrowthCard label={t.features.results} value="100%" />
            <StatusCard label={t.stats.support} value="24/7" />
          </div>
        </div>
      </div>
    </section>
  );
}
