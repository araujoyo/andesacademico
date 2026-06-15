"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import {
  BookOpen,
  BarChart3,
  Shield,
  Code,
  Brain,
  Zap,
} from "lucide-react";

const iconMap: Record<string, any> = {
  BookOpen,
  BarChart3,
  Shield,
  Code,
  Brain,
  Zap,
};

export function ServicesSection() {
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
    <section className="section-padding bg-gradient-to-b from-transparent via-[#0A192F]/50 to-[#0A192F]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-md mb-4">Nuestros Servicios</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Soluciones integrales adaptadas a tus necesidades de transformación digital
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                ></div>

                {/* Card */}
                <div className="relative glass-effect-dark p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {Icon && <Icon className="text-white" size={24} />}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#00AEEF] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-[#00FFFF] mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
