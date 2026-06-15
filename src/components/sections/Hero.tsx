"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="min-h-screen relative overflow-hidden pt-24 pb-12 sm:pb-16 lg:pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00AEEF]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00FFFF]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00AEEF]/10 to-[#00FFFF]/10 border border-[#00AEEF]/30 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse"></span>
              <span className="text-sm font-medium text-[#00AEEF]">Transformación Digital 2024</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="heading-lg">
              Transformamos Instituciones y Empresas mediante{" "}
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#00FFFF] bg-clip-text text-transparent">
                Tecnología Inteligente
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Consultoría especializada en Moodle LMS, Odoo ERP, Ciberseguridad, Inteligencia Artificial y Desarrollo de Software. Más de 15 años transformando negocios.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contacto" className="btn-primary group flex items-center justify-center gap-2">
                Solicitar Consultoría
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/servicios" className="btn-secondary flex items-center justify-center">
                Ver Servicios
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { label: "Años", value: "15+" },
                { label: "Proyectos", value: "50+" },
                { label: "Usuarios", value: "5K+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#00FFFF]">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="relative h-96 lg:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/20 to-[#00FFFF]/20 rounded-2xl backdrop-blur-sm border border-[#00AEEF]/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-gray-400">Fotografía profesional</p>
                <p className="text-sm text-gray-500">Agregar /public/images/yosmarvi.png</p>
              </div>
            </div>

            {/* Animated elements */}
            <motion.div
              animate={{ float: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-10 w-20 h-20 bg-[#00AEEF]/10 rounded-lg border border-[#00AEEF]/30"
            ></motion.div>
            <motion.div
              animate={{ float: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.2 }}
              className="absolute bottom-10 left-10 w-16 h-16 bg-[#00FFFF]/10 rounded-full border border-[#00FFFF]/30"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
