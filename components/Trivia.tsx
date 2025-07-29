export default function Trivia() {
  return (
    <section className="w-full py-12 flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Quelques chiffres</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-[#1a2a2a] rounded-xl p-6 flex flex-col items-center text-center gap-2 shadow">
          <span className="text-4xl font-bold text-green-400">+60%</span>
          <span className="text-gray-300">Clients satisfaits</span>
        </div>
        <div className="bg-[#1a2a2a] rounded-xl p-6 flex flex-col items-center text-center gap-2 shadow">
          <span className="text-4xl font-bold text-green-400">+80%</span>
          <span className="text-gray-300">Projets livrés à temps</span>
        </div>
        <div className="bg-[#1a2a2a] rounded-xl p-6 flex flex-col items-center text-center gap-2 shadow">
          <span className="text-4xl font-bold text-green-400">5 ans</span>
          <span className="text-gray-300">d'expérience</span>
        </div>
      </div>
    </section>
  );
} 