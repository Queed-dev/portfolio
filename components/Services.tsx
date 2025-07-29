import { FaLaptopCode, FaMobileAlt, FaPalette, FaLightbulb } from "react-icons/fa";
import ServiceBox from "./ui/service-box";

export default function Services() {
  return (
    <section className="w-full py-12 flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-linear-120 from-orange-400 to-orange-600 bg-clip-text text-transparent">Mes services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl">
        <ServiceBox
          icon={<FaLaptopCode className="text-3xl text-orange-400" />}
          title="Développement Web"
          description="Sites vitrines, applications web modernes et performantes."
        />
        <ServiceBox
          icon={<FaMobileAlt className="text-3xl text-orange-400" />}
          title="Design Mobile"
          description="Interfaces mobiles intuitives et responsives."
        />
        <ServiceBox
          icon={<FaPalette className="text-3xl text-orange-400" />}
          title="Branding & Identité"
          description="Création de logos, chartes graphiques et univers visuels."
        />
        <ServiceBox
          icon={<FaLightbulb className="text-3xl text-orange-400" />}
          title="Conseil UX/UI"
          description="Optimisation de l'expérience utilisateur et accompagnement."
        />
      </div>
    </section>
  );
} 