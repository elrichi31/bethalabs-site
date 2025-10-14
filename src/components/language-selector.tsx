"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Globe } from "lucide-react";
import { memo } from "react";

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2" role="navigation" aria-label="Language selector">
      <Globe className="text-[#34A853] h-4 w-4" aria-hidden="true" />
      <div className="flex bg-[#1E1E1E] rounded-full p-1">
        <motion.button
          onClick={() => setLanguage("es")}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
            language === "es"
              ? "bg-[#34A853] text-white"
              : "text-[#B3B3B3] hover:text-white"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Cambiar a Español"
          aria-current={language === "es" ? "true" : "false"}
        >
          ES
        </motion.button>
        <motion.button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
            language === "en"
              ? "bg-[#34A853] text-white"
              : "text-[#B3B3B3] hover:text-white"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Switch to English"
          aria-current={language === "en" ? "true" : "false"}
        >
          EN
        </motion.button>
      </div>
    </div>
  );
}

// Memoizar para evitar re-renders innecesarios
export default memo(LanguageSelector);
