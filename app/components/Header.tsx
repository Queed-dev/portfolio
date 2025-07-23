import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between mt-6 gap-8 py-12">
      {/* Image de profil temporaire */}
      <div className="flex-shrink-0">
        <div className="w-120 h-120 rounded-full flex items-center justify-center overflow-hidden">
          {/* Remplace cette image par la tienne */}
          <Image src="/assets/self.png" alt="Photo de Wilky Syndick" width={480} height={480} />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <h1 className="text-3xl md:text-5xl font-bold">Je suis Wilky Syndick</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Designer produit & développeur web basé en France. J'aide les entreprises à créer des expériences numériques innovantes et efficaces.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#contact" className="px-6 py-2 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300 transition">Me contacter</a>
          <a href="#projects" className="px-6 py-2 rounded-full border border-green-400 text-green-400 font-semibold hover:bg-green-400 hover:text-black transition">Voir mes projets</a>
        </div>
      </div>
    </header>
  );
} 