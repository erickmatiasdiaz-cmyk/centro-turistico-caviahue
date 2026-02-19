"use client";

/*
================================================
COMPONENTE ALOJAMIENTO PROFESIONAL
================================================

Incluye:
- Validación obligatoria de fechas
- Validación de personas
- Cálculo automático de noches
- Mensaje WhatsApp dinámico real
*/

import { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { siteData } from "@/lib/siteData";

interface Accommodation {
  id: string;
  name: string;
  image: string;
  capacity: string;
  price: string;
  description: string;
  features: string[];
}

export default function AccommodationCard({
  accommodation,
}: {
  accommodation: Accommodation;
}) {

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [error, setError] = useState("");

  /*
  ===============================================
  CÁLCULO AUTOMÁTICO DE NOCHES
  ===============================================
  */

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diffTime = end.getTime() - start.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();

  /*
  ===============================================
  VALIDACIÓN ANTES DE ENVIAR
  ===============================================
  */

  const handleReserve = () => {

    if (!checkIn || !checkOut) {
      setError("Debes seleccionar fecha de entrada y salida.");
      return;
    }

    if (nights <= 0) {
      setError("La fecha de salida debe ser posterior a la de entrada.");
      return;
    }

    if (!guests || Number(guests) <= 0) {
      setError("Debes indicar la cantidad de personas.");
      return;
    }

    setError("");

    const message = `
Hola, quiero reservar:

Alojamiento: ${accommodation.name}
Capacidad: ${accommodation.capacity}
Precio base: ${accommodation.price}

Fecha entrada: ${checkIn}
Fecha salida: ${checkOut}
Noches: ${nights}
Personas: ${guests}

¿Está disponible?
    `;

    const whatsappLink = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">

      {/* Imagen */}
      <div className="relative h-72">
        <Image
          src={accommodation.image}
          alt={`Alojamiento ${accommodation.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
      </div>

      {/* Contenido */}
      <div className="p-6">

        <h3 className="text-2xl font-semibold mb-2">
          {accommodation.name}
        </h3>

        <p className="text-green-600 font-bold mb-4">
          {accommodation.price}
        </p>

        <ul className="text-sm space-y-1 mb-4 text-gray-600">
          {accommodation.features.map((feature, i) => (
            <li key={i}>• {feature}</li>
          ))}
        </ul>

        {/* Formulario */}
        <div className="space-y-3 mb-3">

          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="number"
            placeholder="Cantidad de personas"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

        </div>

        {/* Mostrar noches automáticamente */}
        {nights > 0 && (
          <p className="text-sm text-gray-600 mb-2">
            Estadía: <strong>{nights} noche(s)</strong>
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-sm text-red-600 mb-3">
            {error}
          </p>
        )}

        {/* Botón */}
        <button
          onClick={handleReserve}
          className="w-full flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition"
        >
          <Phone size={16} />
          Consultar disponibilidad
        </button>

      </div>
    </div>
  );
}
