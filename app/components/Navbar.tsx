"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Accueil", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">Hair Lounge</div>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-600 hover:text-purple-600 transition font-medium text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-sm font-semibold"
          >
            Prendre RDV
          </a>
        </div>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        open ? "max-h-96 border-t border-gray-100" : "max-h-0"
      }`}>
        <div className="px-6 py-4 flex flex-col gap-4 bg-white">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-600 hover:text-purple-600 transition font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition font-semibold text-center"
            onClick={() => setOpen(false)}
          >
            Prendre RDV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;