"use client";

/*
================================================
SECCIÓN POLÍTICAS & HORARIOS - VERSIÓN PREMIUM
================================================

Objetivo:
- Reducir fricción
- Aumentar confianza
- Claridad absoluta
*/

import { siteData } from "@/lib/siteData";
import { Clock, CreditCard, ShieldCheck } from "lucide-react";

export default function Policies() {
  return (
    <section id="politicas" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Políticas y Horarios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Información importante para asegurar una experiencia clara y sin inconvenientes.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Horarios */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="mb-5 text-green-600">
              <Clock size={32} />
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Horarios
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>Check-in: Desde las 15:00 hrs</li>
              <li>Check-out: Hasta las 12:00 hrs</li>
            </ul>
          </div>

          {/* Pagos */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="mb-5 text-green-600">
              <CreditCard size={32} />
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Pagos
            </h3>

            <ul className="space-y-3 text-gray-600">
              {siteData.policies.payment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Cancelaciones */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="mb-5 text-green-600">
              <ShieldCheck size={32} />
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Cancelaciones
            </h3>

            <ul className="space-y-3 text-gray-600">
              {siteData.policies.cancellation.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bloque confianza extra */}
        <div className="mt-20 text-center bg-green-50 p-10 rounded-3xl border border-green-100">
          <p className="text-lg font-semibold text-green-800 flex justify-center items-center gap-6 flex-wrap">
            <span>✔ Confirmación directa por WhatsApp</span>
            <span>✔ Sin comisiones externas</span>
            <span>✔ Atención personalizada</span>
          </p>
        </div>

      </div>
    </section>
  );
}
