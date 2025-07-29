export default function Workflow() {
  const steps = [
    { title: "Découverte", desc: "Compréhension des besoins et objectifs du client." },
    { title: "Design", desc: "Création des maquettes et prototypes interactifs." },
    { title: "Développement", desc: "Mise en place technique et intégration." },
    { title: "Livraison", desc: "Remise du projet finalisé et accompagnement." },
  ];
  return (
    <section className="w-full py-12 flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Mon workflow</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-[#1a2a2a] rounded-xl p-6 flex flex-col items-center text-center gap-3 shadow">
            <span className="text-3xl font-bold text-green-400">{idx + 1}</span>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 