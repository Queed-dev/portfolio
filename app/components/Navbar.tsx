'use client';
import { useState } from "react";

const links = [
  { href: "#", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#101c1c]/90 backdrop-blur border-b border-[#1a2a2a]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo ou nom */}
        <a href="#" className="text-xl font-bold text-green-400">Wilky Syndick</a>
        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-green-400 transition font-medium">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-5 py-2 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300 transition">Contact</a>
        </div>
        {/* Mobile burger */}
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">
          <span className="w-6 h-0.5 bg-white rounded" />
          <span className="w-6 h-0.5 bg-white rounded" />
          <span className="w-6 h-0.5 bg-white rounded" />
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#101c1c] border-t border-[#1a2a2a] px-4 pb-4 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-green-400 transition font-medium" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300 transition" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
} 