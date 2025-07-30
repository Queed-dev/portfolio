export default function Skills() {
  const skills = [
    { name: "Penpot", value: 72 },
    { name: "Canva", value: 60 },
    { name: "Inkscape", value: 70 },
    { name: "Gimp", value: 65 },
    { name: "Libreoffice", value: 85 },
    { name: "Microsoft Office", value: 90 },
    { name: "Clickup", value: 80 },
    { name: "Javascript", value: 95 },
    { name: "Dart", value: 90 },
    { name: "Python", value: 88 },
    { name: "HTML 5", value: 99 },
    { name: "CSS 3", value: 90 },
    { name: "Java", value: 75 },
    { name: "PHP (< = 8.0)", value: 80 },
    { name: "MySQL", value: 85 },
    { name: "Oracle", value: 70 },
    { name: "MongoDB", value: 90 },
    { name: "MariaDB", value: 90 },
    { name: "ObjectBox", value: 70 },
    { name: "React", value: 95 },
    { name: "Flutter", value: 90 },
    { name: "Wordpress", value: 70 },
    { name: "Nextjs", value: 90 },
    { name: "NextUI", value: 90 },
    { name: "RadixUI", value: 60 },
    { name: "Aceternity UI", value: 70 },
    { name: "Electron js", value: 90 },
    { name: "Apache Cordova", value: 70 },
  ];
  return (
    <section id="skills" className="w-full py-12 flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-linear-120 from-orange-400 to-orange-600 bg-clip-text text-transparent">Compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="font-medium text-gray-200">{skill.name}</span>
              <span className="text-orange-400 font-bold">{skill.value}%</span>
            </div>
            <div className="w-full h-2 bg-[#1a2a2a] rounded-full">
              <div
                className="h-2 bg-orange-400 rounded-full transition-all"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 