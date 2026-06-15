"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import Link from "next/link";

export function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-padding bg-[#0A192F]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-md mb-4">Portafolio de Proyectos</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Proyectos destacados que demuestran nuestra experiencia y capacidad
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PORTFOLIO_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/30 to-[#00FFFF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-[#00AEEF]/20 to-[#00FFFF]/20 border border-[#00AEEF]/30 rounded-xl flex items-center justify-center overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-2">🎯</div>
                  <p className="text-gray-300 font-medium">{item.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] border border-[#00AEEF]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#00FFFF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/portafolio" className="btn-secondary">
            Ver Todos los Proyectos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
