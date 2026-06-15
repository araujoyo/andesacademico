"use client";

import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Crear mensaje para WhatsApp
    const mensaje = `*Consulta de ANDES ACADÉMICO*
    
Nombre: ${formData.nombre}
Correo: ${formData.correo}
Teléfono: ${formData.telefono}
Empresa: ${formData.empresa}

Mensaje:
${formData.mensaje}`;

    // Codificar el mensaje
    const mensajeEncoded = encodeURIComponent(mensaje);

    // Redirigir a WhatsApp
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}?text=${mensajeEncoded}`,
      "_blank"
    );

    // Resetear formulario
    setFormData({ nombre: "", correo: "", telefono: "", empresa: "", mensaje: "" });
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[600px] pt-32 pb-12 px-4 flex items-center">
        <div className="container-custom w-full">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6">Contacto</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deseas transformar tu institución o empresa? ¡Estamos aquí para ayudarte!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <h2 className="heading-md">Información de Contacto</h2>

              {/* Email */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-[#00AEEF]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#00AEEF]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-gray-400 hover:text-[#00AEEF] transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-[#00AEEF]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#00AEEF]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Teléfono</h3>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-gray-400 hover:text-[#00AEEF] transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-500 transition-colors"
                  >
                    {SITE_CONFIG.whatsapp}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Respuesta inmediata</p>
                </div>
              </div>

              {/* CTA Card */}
              <div className="glass-effect-dark p-8 rounded-xl border-[#00FFFF]/30 bg-gradient-to-br from-[#00AEEF]/10 to-[#00FFFF]/10">
                <h3 className="font-bold mb-3">Respuesta Rápida</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Si prefieres comunicarte por WhatsApp, recibirás respuesta en menos de 2 horas hábiles.
                </p>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hola, deseo una consultoría con Andes Académico.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Contactar por WhatsApp
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="glass-effect-dark p-8 rounded-xl space-y-6">
                <h2 className="heading-sm">Envíanos un Mensaje</h2>

                {/* Nombre */}
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00AEEF] focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Correo *</label>
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00AEEF] focus:outline-none transition-colors"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    placeholder="+57 3XX XXXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00AEEF] focus:outline-none transition-colors"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label className="block text-sm font-medium mb-2">Empresa *</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    placeholder="Nombre de tu empresa"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00AEEF] focus:outline-none transition-colors"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje *</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00AEEF] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={18} />
                  {loading ? "Enviando..." : "Enviar por WhatsApp"}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar, te redirigiremos a WhatsApp para continuar la conversación.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
