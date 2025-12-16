"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export function FloatingCards() {
  const { language } = useLanguage();

  const statusLabel = language === "es" ? "Estado" : "Status";
  const statusValue = language === "es" ? "Operativo" : "Operational";

  const efficiencyLabel = language === "es" ? "Eficiencia" : "Efficiency";
  const efficiencyBadge = language === "es" ? "Mejoras" : "Upgrades";

  return (
    <div
      className="relative h-[560px] w-full hidden lg:block"
      style={{ perspective: "1000px" }}
      aria-hidden
    >
      {/* Background Grid SVG */}
      <svg
        className="absolute top-0 right-0 w-full h-full opacity-[0.12] pointer-events-none"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="betha-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#34A853" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#betha-grid)" />
      </svg>

      {/* Code Card */}
      <motion.div
        className="absolute top-[10%] right-[10%] w-72 bg-[#1E1E1E]/70 backdrop-blur-md border border-[#2A2A2A] rounded-2xl p-4 z-20 shadow-2xl shadow-black/30"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: "rotate(-2deg)" }}
      >
        <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
          <span className="text-xs text-[#B3B3B3] ml-auto font-mono">betha.json</span>
        </div>
        <div className="space-y-1 font-mono text-xs">
          <div className="text-[#B3B3B3]">
            <span className="text-white">const</span> <span className="text-[#34A853]">stack</span> = {"{"}
          </div>
          <div className="pl-4 text-[#B3B3B3]">
            web: <span className="text-white">&quot;BethaWeb&quot;</span>,
          </div>
          <div className="pl-4 text-[#B3B3B3]">
            automation: <span className="text-white">&quot;BethaFlow&quot;</span>,
          </div>
          <div className="pl-4 text-[#B3B3B3]">
            seo: <span className="text-[#34A853]">true</span>,
          </div>
          <div className="pl-4 text-[#B3B3B3]">
            speed: <span className="text-white">&quot;fast&quot;</span>
          </div>
          <div className="text-[#B3B3B3]">{"};"}</div>
        </div>
      </motion.div>

      {/* Chart Card */}
      <motion.div
        className="absolute top-[38%] left-[5%] w-64 bg-[#1E1E1E]/70 backdrop-blur-md border border-[#2A2A2A] rounded-2xl p-5 z-30 shadow-2xl shadow-black/30"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        style={{ transform: "rotate(2deg)" }}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-white">{efficiencyLabel}</span>
          <span className="text-[#34A853] bg-[#34A853]/10 px-2 py-0.5 rounded text-xs font-bold">
            {efficiencyBadge}
          </span>
        </div>
        <div className="h-24 flex items-end justify-between gap-1">
          <div className="w-1/6 bg-[#34A853]/10 rounded-t h-[35%]" />
          <div className="w-1/6 bg-[#34A853]/15 rounded-t h-[55%]" />
          <div className="w-1/6 bg-[#34A853]/20 rounded-t h-[45%]" />
          <div className="w-1/6 bg-[#34A853]/30 rounded-t h-[75%]" />
          <div className="w-1/6 bg-[#34A853] rounded-t h-[100%] shadow-[0_0_15px_rgba(52,168,83,0.35)]" />
        </div>
      </motion.div>

      {/* Status Card */}
      <motion.div
        className="absolute bottom-[15%] right-[20%] bg-[#1E1E1E]/70 backdrop-blur-md border border-[#2A2A2A] rounded-2xl px-4 py-3 flex items-center gap-3 z-20 shadow-xl shadow-black/30"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      >
        <div className="relative">
          <div className="w-3 h-3 bg-[#34A853] rounded-full" />
          <div className="animate-ping absolute inset-0 w-3 h-3 bg-[#34A853] rounded-full opacity-60" />
        </div>
        <div>
          <div className="text-xs text-[#B3B3B3] uppercase tracking-wide">{statusLabel}</div>
          <div className="text-sm font-bold text-white">{statusValue}</div>
        </div>
      </motion.div>

      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-white/5 rounded-full z-0" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-dashed border-white/10 rounded-full z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
