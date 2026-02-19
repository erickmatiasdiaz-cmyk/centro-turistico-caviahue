"use client";

/*
================================================
CTA FINAL CON MENSAJE DE URGENCIA ELEGANTE
================================================

- Sin contador numérico
- Urgencia psicológica sutil
- Diseño premium
- Enfoque en conversión real
*/

import { siteData } from "@/lib/siteData";
import { Phone } from "lucide-react";

export default function CTASection() {

  const whatsappLink = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    `Hola, quiero consultar disponibilidad en ${siteData.name}`
  )}`;

  return (
    <section className="py-28 px-6 bg-gradient-to-r from-green-700 to-emerald-600 text-white relative overflow-hidden">

      <div className="max-w-6xl mx-auto text-center">

        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo para asegurar tu estadía?
        </h2>

        {/* Mensaje estratégico */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          La disponibilidad en fines de semana y temporada alta suele agotarse rápidamente.
          Consulta ahora y asegura tu fecha.
        </p>

        {/* Mensaje de urgencia visual */}
        <div className="inline-block bg-white/20 px-6 py-3 rounded-full font-semibold mb-10 backdrop-blur-md">
          Alta demanda en fechas próximas
        </div>

        {/* Botón principal */}
        <div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 hover:bg-gray-100 px-10 py-5 rounded-2xl text-lg font-semibold inline-flex items-center gap-3 transition shadow-2xl hover:scale-105 duration-300"
          >
            <Phone size={22} />
            Consultar disponibilidad ahora
          </a>
        </div>

        {/* Micro confianza */}
        <p className="mt-6 text-sm text-white/80">
          Respuesta rápida · Confirmación directa · Sin intermediarios
        </p>

      </div>

      {/* Efecto visual glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

    </section>
  );
}
