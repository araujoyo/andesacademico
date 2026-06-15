"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const specialties = ["Inteligencia artificial", "Moodle", "Odoo"];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="page-grid absolute inset-0 -z-20" />
      <div className="absolute left-[12%] top-36 -z-10 size-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-[8%] -z-10 size-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-200">
            <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_#53e6d8]" />
            Consultoría y desarrollo para Latinoamérica
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Convierto la tecnología en{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              soluciones que avanzan.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Acompaño a organizaciones y equipos a transformar sus ideas en
            experiencias digitales claras, útiles y sostenibles.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Construyamos algo
              <ArrowUpRight size={18} />
            </Link>
            <Link
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Ver mi enfoque
              <ArrowDown size={18} />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {specialties.map((specialty) => (
              <span
                key={specialty}
                className="inline-flex items-center gap-2 text-sm text-slate-300"
              >
                <CheckCircle2 size={16} className="text-cyan-300" />
                {specialty}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-300/20 to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="size-2.5 rounded-full bg-cyan-300" />
                <span className="size-2.5 rounded-full bg-violet-400" />
                <span className="size-2.5 rounded-full bg-blue-400" />
              </div>
              <span className="font-mono text-xs text-slate-500">
                ANDES / 2026
              </span>
            </div>

            <div className="grid aspect-square place-items-center rounded-3xl border border-white/10 bg-[#091827]">
              <div className="relative grid size-52 place-items-center">
                <div className="absolute inset-0 rotate-12 rounded-[3rem] border border-cyan-300/20" />
                <div className="absolute inset-5 -rotate-6 rounded-[2.5rem] border border-violet-400/30" />
                <div className="grid size-32 place-items-center rounded-[2rem] bg-gradient-to-br from-cyan-300 to-violet-400 text-4xl font-black text-slate-950 shadow-[0_0_60px_rgb(83_230_216_/_25%)]">
                  AA
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Mi propósito
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Simplificar lo complejo.
                </p>
              </div>
              <span className="text-right text-xs leading-5 text-slate-500">
                Estrategia
                <br />
                Diseño · Código
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
