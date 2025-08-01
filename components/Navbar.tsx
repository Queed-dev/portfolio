'use client';
import { useState } from "react";
import {Text, Button} from "@radix-ui/themes";

const links = [
  { href: "#", label: "Accueil" },
  { href: "#skills", label: "Compétences" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-50 h-[65px] backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="text-xl md:text-2xl font-bold mix-blend-difference text-orange-400">
          Wilky Syndick
        </a>
        <div className="hidden md:flex gap-8 items-center bg-[#192c2c]/70 p-3 px-6 rounded-full">
          {links.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-100 hover:text-primary transition font-medium">
                <Text>{link.label}</Text>
              </a>
          ))}
        </div>
        <div className={"w-10"}/>
        {/*<a href="#contact" className="hidden md:inline-block">*/}
        {/*  <Button color="orange" radius="full" className="p-4 hidden md:flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-[#033] text-white font-semibold hover:bg-green-300 transition">*/}
        {/*    Download my CV*/}
        {/*  </Button>*/}
        {/*</a>*/}
        <button className="md:hidden relative z-10 cursor-pointer bg-[#333] p-3 rounded-full flex flex-col gap-1" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">
          <span className={`w-6 h-0.5 ${open ? 'translate-y-[0.4em] rotate-45' : 'rotate-0'} duration-300 bg-white rounded`}/>
          <span className={`w-6 h-0.5 ${open ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'} duration-300 bg-white rounded`}/>
          <span className={`w-6 h-0.5 ${open ? '-translate-y-[0.3em] -rotate-45' : 'rotate-0'} duration-300 bg-white rounded`}/>
        </button>
      </div>
      {/* Mobile menu */}
      {
        <div className={`md:hidden overflow-hidden ${open ? 'h-[300px]' : 'h-[0px]'}  duration-300 bg-[#101c1c]/80 rounded-br-xl pt-[${open ? '60px' : '0px'}] -mt-[60px] rounded-bl-xl px-4 ${open ? 'pb-4' : 'pb-0'} flex flex-col gap-4`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-green-400 transition font-medium" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      }
    </nav>
  );
} 