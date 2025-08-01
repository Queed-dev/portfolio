import { Tabs } from "./ui/tabs";
import {Text} from "@radix-ui/themes";
import {default as skills} from "@/datas/skills.json";

type SkillData = {
  name: string;
  value: number;
  thumb: string;
  color: string|null;
};

export default function Skills() {
  // const skills: Record<string, SkillData[]> = ;
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
                    {(skills as Record<string, SkillData[]>)[category].map((skill)=>(
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