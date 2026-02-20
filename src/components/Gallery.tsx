"use client";

/*
================================================
GALERÍA PREMIUM ESTILO HOTEL
================================================

- Lightbox elegante
- Overlay degradado
- Texto integrado en imagen
- Indicador de posición
- Diseño premium real
*/

import { useState } from "react";
import Image from "next/image";
import { siteData } from "@/lib/siteData";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % siteData.gallery.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + siteData.gallery.length) %
        siteData.gallery.length
    );
  };

  return (
    <section id="galeria" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Galería</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Descubre nuestros espacios y vive la experiencia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.gallery.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="group relative h-72 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* =============================
          MODAL PREMIUM
      ============================= */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative w-[90%] max-w-6xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen principal */}
            <Image
              src={siteData.gallery[selectedIndex].src}
              alt={siteData.gallery[selectedIndex].alt}
              fill
              className="object-cover rounded-3xl"
            />

            {/* Overlay degradado inferior */}
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl">
              <h3 className="text-3xl font-bold text-white mb-3">
                {siteData.gallery[selectedIndex].alt}
              </h3>
              <p className="text-gray-200 max-w-2xl">
                {siteData.gallery[selectedIndex].description}
              </p>
            </div>

            {/* Indicador */}
            <div className="absolute top-6 left-6 bg-black/40 text-white px-4 py-2 rounded-full text-sm">
              {selectedIndex + 1} / {siteData.gallery.length}
            </div>

            {/* Cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 bg-black/40 hover:bg-black/70 text-white px-4 py-2 rounded-full"
            >
              X
            </button>

            {/* Anterior */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white px-4 py-3 rounded-full"
            >
              &lt;
            </button>

            {/* Siguiente */}
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white px-4 py-3 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
