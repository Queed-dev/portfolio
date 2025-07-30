"use client";
import {useState} from "react";
import Image from "next/image";

const projects = [
  {
    title: "Akademy",
    description: "C'est une plateforme de gestion scolaire en ligne.",
    image: "/projects/portfolio.png",
    type: "website",
    status: "held",
    utils: ["Javascript", "PHP", "HTML 5", "MariaDB", "CSS 3"]
  },
  {
    title: "Queed platform",
    description: "C'est la plateforme de gestion du startup Queed.",
    image: "/projects/queed.png",
    type: "website",
    status: "production",
    utils: ["Nextjs", "NextUi", "Tailwind", "Mongodb"]
  },
  {
    title: "Pwatik",
    description: "Modernisation d'une boutique en ligne pour une PME.",
    image: "/projects/portfolio.png",
    type: "website",
    status: "closed",
    utils: ["Javascript", "jQuery", "PHP", "HTML 5", "MySQL", "CSS 3"]
  },
  {
    title: "Notebik",
    description: "Système de messagerie instantané cross-platform",
    image: "/projects/notebik.jpg",
    type: "application",
    status: "development",
    utils: ["Dart/Flutter", "Rust", "ObjectBox"]
  },
  {
    title: "Wilky Syndick Portfolio",
    description: "Mon portfolio présentant mes travaux",
    image: "/projects/portfolio.png",
    type: "website",
    status: "complete",
    utils: ["Nextjs", "Radix Ui", "Aceternity", "Tailwind"]
  }
];

function WebsitePreview({image, url} : {image: string, url?: string}){
  return (
    <div className="flex flex-col overflow-hidden w-full h-full rounded-lg bg-slate-100">
      <div className="flex justify-between px-4 py-2 items-center h-10">
        <div className="w-[20px] h-[20px] bg-slate-200 rounded-full"/>
        <div className="w-[50%] h-[20px] bg-slate-200 rounded-md"></div>
        <div className="flex gap-2">
          <div className="w-[20px] h-[20px] bg-slate-200 rounded-full"/>
          <div className="w-[20px] h-[20px] bg-slate-200 rounded-full"/>
          <div className="w-[20px] h-[20px] bg-slate-200 rounded-full"/>
        </div>
      </div>
      <div className="w-full h-full overflow-y-auto">
        <Image src={image} width={960} height={1600} alt=""/>
      </div>
    </div>
  )
}

function ApplicationPreview({image}: {image: string}){
  return (
    <div className="flex transform-3d rotate-x-12 w-[152px] h-[320px] md:w-[220px] md:h-[480px] rounded-xl md:rounded-3xl relative bg-slate-600 p-0.5 relative">
      <div className="absolute flex justify-center items-center w-[12px] h-[12px] bg-black z-10 rounded-full translate-x-[-50%] left-[50%]  top-[10px]">
        <div className="w-[5px] h-[5px] bg-slate-800 relative rounded-full"/>
      </div>
      <div className="flex w-full h-full overflow-hidden rounded-xl md:rounded-3xl relative bg-slate-300">
        <Image src={image} width={250} height={1600} alt=""/>
      </div>
      <div className="w-[30%] h-[3px] bg-black absolute bottom-[10px] rounded-full left-[50%] translate-x-[-50%]"/>
    </div>
  )
}

export default function Projects() {
  const [currentProject, setProject] = useState(projects[0]);
  return (
    <section id="projects" className="w-full py-12 flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-linear-120 from-orange-400 to-orange-600 bg-clip-text text-transparent">Mes projets récents</h2>
      <div className="flex flex-2/3 flex-col gap-2 md:flex-row w-full">
        <div className="flex w-full px-1 md:px-8">
            <div className={`w-full sticky top-10 ${currentProject.type == 'website' ? 'h-[25vh]' : 'h-[50vh]'} md:h-[70vh] flex justify-center`}>
              {currentProject.type == "website" && <WebsitePreview image={currentProject.image}/>}
              {currentProject.type == "application" && <ApplicationPreview image={currentProject.image}/>}
            </div>
        </div>
        <div className="flex flex-1/3 flex-col gap-2 w-full max-w-5xl">
          {projects.map((project, idx) => (
          <div className="w-full flex flex-col gap-2 relative cursor-pointer">
            <div key={idx} className={`p-2 rounded-md ${currentProject.title == project.title ? "bg-[#1a2a2a]" : ""}`}
              onClick={()=>{
                setProject(project);
              }}
            >
              {currentProject.title == project.title && <div className="w-[1px] h-[1px] bg-white absolute rounded-full top-[50%] left-[-1em]" style={{boxShadow: '0 0 8px 6px white'}}/>}
              <h3 className={` ${currentProject.title == project.title ? 'text-white text-lg': 'text-slate-200/50 text-md'}`}>{project.title}</h3>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
} 