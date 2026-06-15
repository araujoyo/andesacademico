"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NAVIGATION, SITE_CONFIG, SOCIAL_MEDIA } from "@/lib/constants";
import { FaFacebook, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const iconMap: Record<string, any> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  youtube: FaYoutube,
  facebook: FaFacebook,
};

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#0A192F] border-t border-[#00AEEF]/20">
      <div className="container-custom py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00AEEF] to-[#00FFFF] bg-clip-text text-transparent mb-4">
              ANDES
            </h3>
            <p className="text-gray-400 text-sm mb-6">{SITE_CONFIG.slogan}</p>
            {/* Social Links */}
            <div className="flex gap-4">
              {SOCIAL_MEDIA.map((social) => {
                const Icon = iconMap[social.icon] || FaLinkedin;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#00AEEF]/20 flex items-center justify-center transition-colors"
                  >
                    <Icon size={18} className="text-[#00AEEF]" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#00AEEF] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/servicios#moodle" className="hover:text-[#00AEEF] transition-colors">
                  Moodle LMS
                </Link>
              </li>
              <li>
                <Link href="/servicios#odoo" className="hover:text-[#00AEEF] transition-colors">
                  Odoo ERP
                </Link>
              </li>
              <li>
                <Link href="/servicios#ciberseguridad" className="hover:text-[#00AEEF] transition-colors">
                  Ciberseguridad
                </Link>
              </li>
              <li>
                <Link href="/servicios#desarrollo" className="hover:text-[#00AEEF] transition-colors">
                  Desarrollo de Software
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6">Contacto</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Email</p>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-300 hover:text-[#00AEEF] transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Teléfono</p>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-300 hover:text-[#00AEEF] transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div>
                <p className="text-gray-500 mb-2">WhatsApp</p>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 ANDES ACADÉMICO. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="hover:text-[#00AEEF] transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-[#00AEEF] transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
