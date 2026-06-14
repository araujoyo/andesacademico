"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-white"
        >
          Transformamos Empresas con
          <span className="text-cyan-400"> IA</span>,
          <span className="text-purple-500"> Moodle</span>,
          <span className="text-blue-500"> Odoo</span>
        </motion.h1>

        <p className="mt-8 text-xl text-gray-300">
          Consultoría especializada en Transformación Digital para
          Latinoamérica.
        </p>

        <button
          type="button"
          className="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black"
        >
          Solicitar Diagnóstico
        </button>
      </div>
    </section>
  );
}
