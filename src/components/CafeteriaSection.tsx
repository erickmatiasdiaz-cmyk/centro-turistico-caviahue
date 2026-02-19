"use client";

/*
================================================
SECCIÓN CAFETERÍA BOUTIQUE
================================================

Incluye:
- Carrusel automático
- WhatsApp personalizado
- ID para navegación desde Header (#cafeteria)
- Diseño premium alineado al resto del sitio
*/

import { useEffect, useState } from "react";
import Image from "next/image";
import { Coffee, Phone } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function CafeteriaSection() {

  /* ======================================
     IMÁGENES DEL CARRUSEL
  ====================================== */

  const images = [
    "/cafeteria.png",
    "/cafeteria.png",
    "/cafeteria.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambio automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* ======================================
     WHATSAPP PERSONALIZADO CAFETERÍA
  ====================================== */

  // Aseguramos que el número esté limpio
  const whatsappNumber = siteData.whatsappNumber
    .replace("+", "")
    .replace(/\s/g, "");

  const message =
    "Hola 👋\n\n" +
    `Quiero reservar una mesa en la Cafetería Boutique de ${siteData.name}.\n\n` +
    "📅 Fecha:\n" +
    "⏰ Hora aproximada:\n" +
    "👥 Cantidad de personas:\n\n" +
    "¿Está disponible?";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  /* ======================================
     RENDER
  ====================================== */

  return (
    <section
      id="cafeteria"   // 🔥 ESTE ES EL ID PARA EL MENÚ
      className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* =========================
            COLUMNA CARRUSEL
        ========================= */}
        <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">

          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Cafetería Boutique"
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Overlay elegante */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* =========================
            COLUMNA CONTENIDO
        ========================= */}
        <div>

          <div className="flex items-center gap-3 mb-4 text-green-600">
            <Coffee size={24} />
            <span className="font-semibold uppercase tracking-wide text-sm">
              Experiencia Gastronómica
            </span>
          </div>

          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Nuestra Cafetería Boutique
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Disfruta café de especialidad, repostería artesanal y un ambiente
            acogedor rodeado de naturaleza. Ideal para huéspedes y visitantes.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>✔ Abierto todos los días de 09:00 a 20:00 hrs</li>
            <li>✔ Café de especialidad</li>
            <li>✔ Desayunos y brunch</li>
            <li>✔ Opciones dulces y saladas</li>
            <li>✔ Espacio ideal para relajarse o trabajar</li>
          </ul>

          {/* BOTÓN WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
          >
            <Phone size={20} />
            Reservar mesa por WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}
