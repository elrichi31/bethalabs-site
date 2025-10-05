"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Code } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Manejo del mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Manejo del tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Función para calcular el movimiento de los íconos flotantes
  const calculateTranslate = (axis: "x" | "y", factor = 20) => {
    if (windowSize.width === 0 || windowSize.height === 0) return 0;
    const value = axis === "x" ? mousePosition.x : mousePosition.y;
    const maxValue = axis === "x" ? windowSize.width : windowSize.height;
    return (value / maxValue - 0.5) * factor;
  };

  return (
    <section className="relative py-40 md:py-38 lg:py-68 overflow-hidden">
      {/* Fondo estático con los "+" */}
      <div className="absolute -inset-[10px] opacity-15 pointer-events-none">
        <div
          className="absolute -inset-[10px]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2334A853' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
            <h2 className="text-[#34A853] font-bold text-lg mb-2">BethaLabs</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Transformando tu negocio con{" "}
              <span className="text-[#34A853]">automatizaciones inteligentes</span> y{" "}
              <span className="text-[#34A853]">seguridad digital</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-[#B3B3B3] mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Potenciamos pequeñas y medianas empresas con soluciones técnicas que optimizan procesos y protegen tus datos
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex justify-center space-x-4">
            <motion.a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 bg-[#34A853] text-white font-medium rounded-full shadow-lg hover:bg-[#2a8644] transition-colors duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(52, 168, 83, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar demo gratuita
            </motion.a>
            <motion.a
              href="#servicios"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-[#34A853] text-[#34A853] font-medium rounded-full hover:bg-[#34A853] hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver nuestros servicios
            </motion.a>
          </motion.div>
        </div>

        {/* Íconos flotantes animados en las esquinas */}
        <motion.div
          className="absolute top-10 left-10"
          animate={{ x: calculateTranslate("x", -15), y: calculateTranslate("y", -15) }}
          transition={{ ease: "linear", duration: 0.2 }}
        >
          <Shield className="text-[#34A853] opacity-100" size={48} />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10"
          animate={{ x: calculateTranslate("x", 15), y: calculateTranslate("y", 15) }}
          transition={{ ease: "linear", duration: 0.2 }}
        >
          <Code className="text-[#34A853] opacity-100" size={48} />
        </motion.div>
      </div>
    </section>
  );
}
