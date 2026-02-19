"use client";

import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function Footer() {
  const whatsappLink = `https://wa.me/${siteData.whatsappNumber}?text=Hola%20quiero%20reservar%20en%20${encodeURIComponent(
    siteData.name
  )}`;

  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 text-gray-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* MARCA */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {siteData.name}
            </h3>
            <p className="text-gray-400 mb-6">
              Vive una experiencia única en contacto con la naturaleza.
              Atención directa, sin intermediarios.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition shadow-lg"
            >
              <Phone size={18} />
              Reservar por WhatsApp
            </a>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contacto
            </h4>

            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+{siteData.whatsappNumber}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>{siteData.location.address}</span>
              </div>
            </div>
          </div>

          {/* REDES */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Síguenos
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition"
              >
                <Facebook size={18} />
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              Atención personalizada y confirmación directa.
            </p>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {siteData.name}.  
          Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
