import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-12 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
      <div className="flex-shrink-0">
        <div className="relative w-50 h-50 md:w-100 md:h-100 rounded-full flex items-center justify-center overflow-hidden ">
          <div className="absolute w-full h-full bg-linear-120 from-orange-300 via-orange-700 via-indigo-800 to-purple-700"/>
          <div className="absolute w-full h-full scale-85 rounded-full bg-[#041f2a]"/>
          <div className="absolute bg-no-repeat relative z-[1] w-full h-full" style={{
            backgroundImage: 'url(/assets/self.png)',
            backgroundPosition: '50% -10%',
            backgroundSize: '180%'
          }}/>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-bold bg-linear-120 from-orange-400 to-orange-600 bg-clip-text text-transparent">À propos de moi</h2>
        <p className="text-gray-300 text-base">
          Experienced Web Developer with over 6 years of expertise in both client-side and
          server-side programming. Highly creative and deeply focused on enhancing user
          experience, he is committed to developing innovative and optimized solutions.
          Passionate about sharing acquired knowledge, he enjoys mentoring and teaching.
          His background in stock management has strengthened his conflict resolution skills,
          teamwork abilities, and adaptability to a fast-paced environment.
        </p>
        <ul className="flex gap-8 mt-2 text-sm text-gray-400">
          <li><span className="font-bold text-orange-400">6+</span> années d'expérience</li>
          {/* <li><span className="font-bold text-orange-400">20+</span> clients satisfaits</li>
          <li><span className="font-bold text-orange-400">30+</span> projets réalisés</li> */}
        </ul>
      </div>
    </section>
  );
} 