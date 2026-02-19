"use client";

/*
================================================
SECCIÓN CONFIANZA
================================================

Incluye:
- Ubicación
- Mapa
- Reseñas

La galería fue separada correctamente.
*/

import { siteData } from "@/lib/siteData";

export default function TrustSection() {
  return (
    <section id="ubicacion" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* ========================
            UBICACIÓN
        ======================== */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Ubicación
          </h2>

          <p className="text-center text-gray-600 mb-8">
            {siteData.location.address}
          </p>

          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src={siteData.location.embedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>

        {/* ========================
            RESEÑAS
        ======================== */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Lo que dicen nuestros visitantes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {siteData.testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition"
              >
                <p className="text-gray-600 mb-6">
                  "{item.comment}"
                </p>
                <p className="font-semibold">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
