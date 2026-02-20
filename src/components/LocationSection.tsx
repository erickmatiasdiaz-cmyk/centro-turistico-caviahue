"use client";

/*
================================================
SECCIÓN UBICACIÓN PREMIUM
================================================

Incluye:
- Layout en 2 columnas
- Texto estratégico que vende ubicación
- Mapa embebido estilizado
- Botón directo a Google Maps
*/

import { MapPin } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ========================================
            COLUMNA IZQUIERDA - TEXTO
        ======================================== */}
        <div>

          {/* Título */}
          <h2 className="text-4xl font-bold mb-6 text-black">
            Ubicación privilegiada
          </h2>

          {/* Dirección */}
          <p className="text-gray-600 mb-6 flex items-center gap-2">
            <MapPin size={18} className="text-green-600" />
            {siteData.location.address}
          </p>

          {/* Descripción estratégica */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Nos encontramos en un entorno natural ideal para el descanso,
            con fácil acceso vehicular y cercanía a rutas turísticas
            y atractivos de la zona.
          </p>

          {/* Beneficios rápidos */}
          <ul className="space-y-3 text-gray-700 mb-10">
            <li>✓ Fácil acceso en vehículo</li>
            <li>✓ Entorno tranquilo y seguro</li>
            <li>✓ Cercano a ríos y senderos</li>
            <li>✓ A minutos del centro</li>
          </ul>

          {/* Botón Google Maps */}
          <a
            href={siteData.location.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition shadow-lg"
          >
            Ver en Google Maps
          </a>
        </div>

        {/* ========================================
            COLUMNA DERECHA - MAPA
        ======================================== */}
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl">

          {/* Mapa embebido */}
          <iframe
            src={siteData.location.embedUrl}
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          />

          {/* Overlay sutil para estilo */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}





