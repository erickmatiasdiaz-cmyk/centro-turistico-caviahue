"use client";

/*
======================================
HERO PREMIUM CON SLIDER + KEN BURNS
======================================

- Slider automático
- Fade elegante
- Zoom cinematográfico suave
- Overlay oscuro
- Indicadores interactivos
*/

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteData } from "@/lib/siteData";

export default function Hero() {
  const images = siteData.heroImages;
  const [current, setCurrent] = useState(0);

  /*
    Cambio automático cada 6 segundos
  */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Slider imágenes */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current
              ? "opacity-100 z-0"
              : "opacity-0 z-0"
          }`}
        >
          <Image
          src={img}
          alt="Hero"
          fill
          priority={index === 0} // Solo la primera imagen es prioridad
          quality={85} // Optimización equilibrada
          sizes="100vw"
          className={`
          object-cover
          transition-transform
          duration-[6000ms]
          ease-linear
          ${index === current ? "scale-110" : "scale-100"}
          `}
/>

        </div>
      ))}

      {/* Overlay oscuro premium */}
      <div className="absolute inset-0 bg-black/50 backdrop-brightness-75 z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {siteData.heroTitle}
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          {siteData.heroSubtitle}
        </p>

        <a
          href="#reservar"
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-semibold transition shadow-xl"
        >
          Reservar ahora
        </a>

      </div>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === current
                ? "bg-white"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
