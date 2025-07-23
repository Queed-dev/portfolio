import Image from "next/image";

const projects = [
  {
    title: "Plateforme SaaS B2B",
    description: "Développement d'une plateforme de gestion pour entreprises.",
    image: "/project1-placeholder.png",
  },
  {
    title: "Application mobile santé",
    description: "Design et développement d'une app de suivi santé.",
    image: "/project2-placeholder.png",
  },
  {
    title: "Refonte site e-commerce",
    description: "Modernisation d'une boutique en ligne pour une PME.",
    image: "/project3-placeholder.png",
  },
];

export default function Projects() {
  return (
    <section className="w-full py-12 flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Mes projets récents</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-[#1a2a2a] rounded-xl p-4 flex flex-col items-center gap-3 shadow-lg">
            <div className="w-full h-40 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
              {/* Remplace cette image par la tienne */}
              <Image src={project.image} alt={project.title} width={320} height={160} className="object-cover w-full h-full" />
            </div>
            <h3 className="font-semibold text-lg mt-2">{project.title}</h3>
            <p className="text-gray-400 text-sm text-center">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 