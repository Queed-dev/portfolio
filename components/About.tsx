import Image from "next/image";

export default function About() {
  return (
    <section className="w-full py-12 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
      {/* Image temporaire */}
      <div className="flex-shrink-0">
        <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden ">
          {/* Remplace cette image par la tienne */}
          <Image className="object-cover" src="/assets/self.png" alt="Wilky Syndick" width={480} height={480} />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-bold bg-linear-120 from-orange-400 to-orange-600 bg-clip-text text-transparent">À propos de moi</h2>
        <p className="text-gray-300 text-base">
          Passionné par le design et le développement, j'accompagne les entreprises et startups dans la création de produits digitaux innovants depuis plus de 5 ans.
        </p>
        <ul className="flex gap-8 mt-2 text-sm text-gray-400">
          <li><span className="font-bold text-green-400">5+</span> années d'expérience</li>
          <li><span className="font-bold text-green-400">20+</span> clients satisfaits</li>
          <li><span className="font-bold text-green-400">30+</span> projets réalisés</li>
        </ul>
      </div>
    </section>
  );
} 