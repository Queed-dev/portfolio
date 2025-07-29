'use client';
import { useState } from "react";
import {Text, Button} from "@radix-ui/themes";

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
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="text-2xl font-bold mix-blend-difference text-orange-400">
          Wilky Syndick
        </a>
        <div className="hidden md:flex gap-8 items-center bg-[#dcdcdc]/80 p-3 px-6 rounded-full">
          {links.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-800 hover:text-primary transition font-medium">
                <Text>{link.label}</Text>
              </a>
          ))}
        </div>
        <a href="#contact">
          <Button color="orange" radius="full" className="p-4 hidden md:flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-[#033] text-white font-semibold hover:bg-green-300 transition">
            Download my CV
          </Button>
        </a>
        {/* Mobile burger */}
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">
          <span className="w-6 h-0.5 bg-white rounded"/>
          <span className="w-6 h-0.5 bg-white rounded"/>
          <span className="w-6 h-0.5 bg-white rounded"/>
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