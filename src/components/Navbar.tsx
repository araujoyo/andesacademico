"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A192F]/80 backdrop-blur-md border-b border-[#00AEEF]/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/andesasotipo.jpg"
              alt="Andes Académico logo"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <div className="hidden sm:block leading-tight">
              <strong className="block text-sm text-white">Andes Académico</strong>
              <span className="text-xs text-gray-400">Transformación Digital</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-medium text-white hover:text-[#00AEEF] transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contacto" className="hidden md:inline-block btn-primary">
              Solicitar Consultoría
            </Link>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/10">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} className="md:hidden overflow-hidden">
          <div className="py-4 space-y-2">
            {NAVIGATION.map((item) => (
              <Link key={item.name} href={item.href} className="block px-4 py-2 text-white hover:text-[#00AEEF] rounded-lg">
                {item.name}
              </Link>
            ))}
            <Link href="/contacto" className="block px-4 py-2 btn-primary text-center">
              Solicitar Consultoría
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
