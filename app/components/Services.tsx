import { FaLaptopCode, FaMobileAlt, FaPalette, FaLightbulb } from "react-icons/fa";

export default function Services() {
  return (
    <section className="w-full py-12 flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Mes services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl">
        <div className="bg-[#1a2a2a] rounded-xl p-6 flex flex-col items-center text-center gap-3">
          <FaLaptopCode className="text-3xl text-green-400" />
          <h3 className="font-semibold text-lg">Développement Web</h3>
          <p className="text-gray-400 text-sm">Sites vitrines, applications web modernes et performantes.</p>
        </div>
        <div className="bg-[#1a2a2a] rounded-xl p-6 flex flex-col items-center text-center gap-3">
          <FaMobileAlt className="text-3xl text-green-400" />
          <h3 className="font-semibold text-lg">Design Mobile</h3>
          <p className="text-gray-400 text-sm">Interfaces mobiles intuitives et responsives.</p>
        </div>
        <div className="bg-[#1a2a2a] rounded-xl p-6 flex flex-col items-center text-center gap-3">
          <FaPalette className="text-3xl text-green-400" />
          <h3 className="font-semibold text-lg">Branding & Identité</h3>
          <p className="text-gray-400 text-sm">Création de logos, chartes graphiques et univers visuels.</p>
        </div>
        <div className="bg-[#1a2a2a] rounded-xl p-6 flex flex-col items-center text-center gap-3">
          <FaLightbulb className="text-3xl text-green-400" />
          <h3 className="font-semibold text-lg">Conseil UX/UI</h3>
          <p className="text-gray-400 text-sm">Optimisation de l'expérience utilisateur et accompagnement.</p>
        </div>
      </div>
    </section>
  );
} 