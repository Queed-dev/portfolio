import { Tabs } from "./ui/tabs";
import {Text} from "@radix-ui/themes";

type SkillData = {
  name: string;
  value: number;
  thumb: string;
  color: string|null;
};

export default function Skills() {
  const skills: Record<string, SkillData[]> = {
    "Bureautique":[
      { name: "Penpot", value: 72, thumb: '/icons/penpot.webp', color: "bg-white/80" },
      { name: "Canva", value: 60, thumb: '/icons/canva.avif', color: null },
      { name: "Inkscape", value: 70, thumb: '/icons/inkscape.png', color: "bg-white/80" },
      { name: "Gimp", value: 65, thumb: '/icons/gimp.png', color: "bg-white/80" },
      { name: "Libreoffice", value: 85, thumb: '/icons/libreoffice.webp', color: "bg-white/80" },
      { name: "Microsoft Office 365", value: 90, thumb: '/icons/ms365.webp', color: "bg-white/80" },
      { name: "Clickup", value: 80, thumb: '/icons/clickup.png', color: null },
    ],
    "Langage de programmation": [
      {name: "Javascript", value: 95, thumb: '/icons/js.png', color: null },
      { name: "Dart", value: 90, thumb: '/icons/dart.webp', color: null },
      { name: "Python", value: 88, thumb: '/icons/python.png', color: "bg-white/80" },
      { name: "HTML 5", value: 99, thumb: '/icons/html5.png', color: "bg-white/80" },
      { name: "CSS 3", value: 90, thumb: '/icons/css3.png', color: "bg-white/80" },
      { name: "Java", value: 75, thumb: '/icons/java.webp', color: null },
      { name: "PHP", value: 80, thumb: '/icons/php.png', color: null },
    ],
    "Base de données":[
      { name: "MySQL", value: 85, thumb: '/icons/mysql.png', color: "bg-white/80" },
      { name: "Oracle", value: 70, thumb: '/icons/oracle.avif', color: "bg-white/80" },
      { name: "MongoDB", value: 90, thumb: '/icons/mongodb.webp', color: "bg-white/80" },
      { name: "MariaDB", value: 90, thumb: '/icons/mariadb.png', color: "bg-white/80" },
      { name: "ObjectBox", value: 70, thumb: '/icons/objectbox.png', color: "bg-white/80" },
    ],
    "Frameworks":[
      { name: "React", value: 95, thumb: '/icons/react.png', color: "bg-white/80" },
      { name: "Flutter", value: 90, thumb: '/icons/flutter.png', color: "bg-white/80" },
      { name: "Wordpress", value: 70, thumb: '/icons/wordpress.png', color: "bg-white/80" },
      { name: "Nextjs", value: 90, thumb: '/icons/nextjs.png', color: "bg-white/80" },
      { name: "HeroUI", value: 90, thumb: '/icons/heroui.png', color: null },
      { name: "RadixUI", value: 60, thumb: '/icons/radixui.png', color: "bg-white/80" },
      { name: "Aceternity UI", value: 70, thumb: '/icons/aceternity.png', color: null },
      { name: "Electron js", value: 90, thumb: '/icons/electronjs.png', color: "bg-white/80" },
      { name: "Apache Cordova", value: 70, thumb: '/icons/cordova.png', color: "bg-white/80" },
  ]
};
  return (
    <section id="skills" className="w-full py-12 h-[140vh] md:h-[120vh] lg:h-[100vh] flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-white/80 bg-clip-text text-transparent">Compétences</h2>
      <div className="flex w-full h-[50vh] flex-col">
        <Tabs
          tabs={Object.keys(skills).map((category) => ({
            title: category,
            value: category,
            content: (
                <div className={"relative rounded-lg bg-gradient-to-br pt-2 from-[#134c63] to-[#000000] flex flex-col"}>
                  <h1 className={"py-3 px-4 font-semibold text-2xl text-white"}>{category}</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 w-full">
                    {skills[category].map((skill)=>(
                      <div key={skill.name} className="flex gap-6 p-3 items-center bg-white/20 rounded-xl">
                        <div className={`flex w-[50px] h-[50px] rounded-full ${skill.color != null ? skill.color + ' p-1' : ''} overflow-hidden flex justify-center items-center`}>
                          <div className={`w-[50px] h-[50px] rounded-full bg-center ${skill.color != null ? 'bg-contain bg-no-repeat' : 'bg-cover'}`}
                            style={{backgroundImage: `url(${skill.thumb})`}}
                          />
                        </div>
                        <div className="flex flex-6 flex-col gap-1">
                          <span className="text-white text-lg">
                            <Text>{skill.name}</Text>
                          </span>
                        </div>
                        <Text className={"flex flex-2 font-bold text-3xl text-white"}>
                          {skill.value}%
                        </Text>
                      </div>
                    ))}
                  </div>
              </div>
            )
          }))}
        />
      </div>
    </section>
  );
} 