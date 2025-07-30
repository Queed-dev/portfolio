import { FaLaptopCode, FaMobileAlt, FaPalette, FaLightbulb } from "react-icons/fa";
import ServiceBox from "./ui/service-box";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const servicesData = [
  {
    service: "Web Developement",
    description: "Création de sites web modernes et responsives, adaptés à vos besoins.",
    image: "/assets/web-dev.jpg"
  },
  {
    service: "Mobile App Development",
    description: "Développement d'applications mobiles performantes pour Android et iOS.",
    image: "/assets/mobile-dev.jpg"
  },
  {
    service: "UI/UX Design",
    description: "Conception d'interfaces utilisateur intuitives et esthétiques.",
    image: "/assets/uxdesign.webp"
  },
  {
    service: "Consulting IT",
    description: "Conseils stratégiques pour optimiser vos systèmes informatiques.",
    image: "/assets/it.jpg"
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full h-[80vh] overflow-x-hidden py-12 flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold bg-linear-120 from-orange-400 to-orange-600 bg-clip-text text-transparent">Mes services</h2>
      <StickyScroll
          contentClassName={"items-start pt-5"}
        content={servicesData.map((service, index) => ({
          title: service.service,
          description: service.description,
          content: (
            <Image className="rounded-xl" src={service.image} alt={service.service} layout="responsive" width={500} height={256}/>
          )
        }))}
      />
    </section>
  );
} 