"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-[#0A192F] to-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-96 lg:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/20 to-[#00FFFF]/20 rounded-2xl backdrop-blur-sm border border-[#00AEEF]/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💼</div>
                  <p className="text-gray-400">Foto profesional</p>
                </div>
              </div>

              <motion.div
                animate={{ float: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-[#00AEEF]/10 rounded-lg border border-[#00AEEF]/30"
              ></motion.div>
              <motion.div
                animate={{ float: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 0.3 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#00FFFF]/10 rounded-full border border-[#00FFFF]/30"
              ></motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="heading-md mb-4">Nosotros</h2>
              <p className="text-gray-300 text-lg">
                Más de 15 años de experiencia transformando instituciones educativas y empresas mediante soluciones tecnológicas innovadoras y de clase mundial.
              </p>
            </div>

            {/* Expertise */}
            <div className="space-y-4">
              {[
                { title: "Moodle LMS", desc: "Implementación y optimización de plataformas educativas" },
                { title: "Odoo ERP", desc: "Gestión empresarial integral y escalable" },
                { title: "Ciberseguridad", desc: "Protección avanzada de activos digitales" },
                {
                  title: "Arquitectura de Software",
                  desc: "Diseño de soluciones robustas y escalables",
                },
                {
                  title: "Transformación Digital",
                  desc: "Modernización completa de procesos empresariales",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#00FFFF] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0A192F] font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/nosotros" className="btn-primary inline-flex items-center gap-2">
              Conocer Más →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
