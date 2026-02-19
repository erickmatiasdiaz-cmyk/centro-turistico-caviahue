"use client";

/*
================================================
SECCIÓN CÓMO RESERVAR - VERSIÓN PREMIUM
================================================

Mejoras:
- Fondo con gradiente profundo
- Timeline visual elegante
- Cards con efecto glass
- CTA dominante
- Micro copy de confianza
*/

import { siteData } from "@/lib/siteData";
import { Phone } from "lucide-react";

export default function HowToBook() {

  const whatsappLink = `https://wa.me/${siteData.whatsappNumber}?text=Hola%20quiero%20reservar%20en%20${encodeURIComponent(
    siteData.name
  )}`;

  return (
    <section
      id="reservar"
      className="relative py-32 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white overflow-hidden"
    >

      {/* Glow decorativo sutil */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-green-600/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-green-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        {/* =========================
            TÍTULO
        ========================= */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Reserva en 4 pasos simples
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Un proceso rápido, claro y sin complicaciones.
            Atención directa por WhatsApp.
          </p>
        </div>

        {/* =========================
            TIMELINE
        ========================= */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">

          {/* Línea horizontal en desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gray-700" />

          {siteData.bookingSteps.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl text-center hover:scale-105 transition duration-500 shadow-xl"
            >

              {/* Número flotante */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold shadow-lg">
                {item.step}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* =========================
            CTA FINAL
        ========================= */}
        <div className="text-center">

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-10 py-5 rounded-2xl text-xl font-semibold inline-flex items-center gap-4 transition shadow-2xl hover:shadow-green-600/40"
          >
            <Phone size={22} />
            Consultar disponibilidad ahora
          </a>

          <p className="mt-6 text-gray-400 text-sm">
            Respuesta rápida • Confirmación directa • Sin intermediarios
          </p>

        </div>

      </div>
    </section>
  );
}
