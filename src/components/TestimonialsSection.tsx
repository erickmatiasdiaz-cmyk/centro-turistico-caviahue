"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function TestimonialsSection() {
  return (
    <section id="resenas" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Lo que dicen nuestros visitantes
          </h2>
          <p className="text-gray-500">
            Experiencias reales de quienes ya vivieron Caviahue.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {siteData.testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-green-500 hover:shadow-2xl transition duration-300"
            >
              {/* Header usuario */}
              <div className="flex items-center gap-4 mb-6">

                {/* Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Nombre + Fecha */}
                <div>
                  <p className="font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.date} · {item.stay}
                  </p>
                </div>
              </div>

              {/* Estrellas */}
              <div className="flex mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-green-500 fill-green-500"
                  />
                ))}
              </div>

              {/* Comentario */}
              <p className="text-gray-600 leading-relaxed">
                "{item.comment}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
