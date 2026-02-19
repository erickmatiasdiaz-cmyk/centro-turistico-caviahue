"use client";

/*
  ======================================
  HEADER CON:
  - Scroll Spy
  - Fondo dinámico
  - Menú responsive
  - Scroll Progress Bar
  ======================================
*/

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const whatsappLink = `https://wa.me/${siteData.whatsappNumber}`;

  const navLinks = [
    { label: "Alojamientos", href: "alojamientos" },
    { label: "Servicios", href: "extras" },
     { label: "Galería", href: "galeria" },
    { label: "Ubicación", href: "ubicacion" },
    { label: "Reservar", href: "reservar" },
    { label: "Cafetería", href: "cafeteria" },
    { label: "Políticas", href: "politicas" },
  ];

  /*
    Detecta:
    - Fondo dinámico
    - Sección activa
    - Progreso scroll
  */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setScrolled(scrollTop > 50);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[60]">
        <div
          className="h-full bg-green-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.JPG"
              alt={siteData.name}
              width={45}
              height={45}
            />
            <span className="text-white font-semibold hidden sm:block">
              {siteData.name}
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-white">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.href}`}
                className={`transition ${
                  activeSection === link.href
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden lg:block">
            <a
              href={whatsappLink}
              target="_blank"
              className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl flex items-center gap-2 transition text-white"
            >
              <Phone size={16} />
              {siteData.phoneDisplay}
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-black text-white px-6 py-6 space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.href}`}
                onClick={() => setMobileOpen(false)}
                className={`block text-lg ${
                  activeSection === link.href
                    ? "text-green-400"
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              className="bg-green-600 px-6 py-3 rounded-xl flex items-center gap-2 justify-center"
            >
              <Phone size={16} />
              WhatsApp
            </a>
          </div>
        )}
      </header>
    </>
  );
}
