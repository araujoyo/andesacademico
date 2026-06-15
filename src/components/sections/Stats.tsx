"use client";

import { motion } from "framer-motion";
import { STATISTICS } from "@/lib/constants";

export function StatsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="section-padding bg-[#0A192F]">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATISTICS.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="glass-effect-dark p-8 rounded-xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl font-bold bg-gradient-to-r from-[#00AEEF] to-[#00FFFF] bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                  {stat.label.includes("%") ? "%" : "+"}
                </motion.div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
