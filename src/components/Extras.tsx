"use client";

/*
================================================
SECCIÓN EXTRAS - VERSIÓN PREMIUM
================================================

- Imagen protagonista
- Overlay elegante
- Hover cinematográfico
- CTA integrado
- Sensación experiencia
*/

import Image from "next/image";
import { Phone } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function Extras() {
  return (
    <section id="extras" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Servicios y Experiencias
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Complementa tu estadía con experiencias únicas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {siteData.extras.map((extra) => {

            const message = `
Hola, quiero consultar por:

Servicio: ${extra.title}
Precio: ${extra.price}

¿Está disponible?
            `;

            const whatsappLink = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
              message
            )}`;

            return (
              <div
                key={extra.id}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Imagen */}
                <div className="relative h-80">
                  <Image
                    src={extra.image}
                    alt={`Servicio ${extra.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
                </div>

                {/* Contenido sobre imagen */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">

                  <h3 className="text-2xl font-semibold mb-2">
                    {extra.title}
                  </h3>

                  <p className="mb-3 opacity-90">
                    {extra.description}
                  </p>

                  <p className="text-green-400 font-bold mb-4">
                    {extra.price}
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl transition"
                  >
                    <Phone size={16} />
                    Consultar
                  </a>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}


