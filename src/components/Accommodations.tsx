"use client";

/*
================================================
SECCION ALOJAMIENTOS
================================================
*/

import { siteData } from "@/lib/siteData";
import AccommodationCard from "./AccommodationCard";

export default function Accommodations() {
  return (
    <section
      id="alojamientos"
      className="py-24 bg-gray-50 text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Nuestros Alojamientos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige la experiencia que mejor se adapta a ti y disfruta
            la naturaleza con comodidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {siteData.accommodations.map((item) => (
            <AccommodationCard
              key={item.id}
              accommodation={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
