export default function Skills() {
  const skills = [
    { name: "Figma", value: 98 },
    { name: "React", value: 95 },
    { name: "Next.js", value: 92 },
    { name: "Tailwind CSS", value: 90 },
    { name: "Adobe XD", value: 86 },
    { name: "TypeScript", value: 89 },
  ];
  return (
    <section className="w-full py-12 flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="font-medium text-gray-200">{skill.name}</span>
              <span className="text-green-400 font-bold">{skill.value}%</span>
            </div>
            <div className="w-full h-2 bg-[#1a2a2a] rounded-full">
              <div
                className="h-2 bg-green-400 rounded-full transition-all"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 