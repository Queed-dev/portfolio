import Image from "next/image";
import React from "react";
import Blob1 from "@/svg/react/blob1";
import {Text} from "@radix-ui/themes";
import {FlipWords} from "@/components/ui/flip-words";

export default function Header() {
  return (
    <header className="w-full min-h-[100vh] flex flex-col md:flex-row items-center justify-between gap-8 py-12">
      {/* Image de profil temporaire */}
        <div className="flex-shrink-0">
            <div className="relative w-90 ml-[-1em] md:ml-0 h-80 md:w-120 rounded-full md:h-120 flex items-end justify-center overflow-hidden">
                <div className="absolute top-0 md:top-3">
                    <Blob1 className=" text-orange-300 fill-current"/>
                </div>
                <div className="bg-cover relative z-[1] w-full h-full bg-bottom" style={{
                  backgroundImage: 'url(/assets/self.png)'
                }}/>
                {/* <Image className={'z-1 w-[720px] h-[400px]'} src="/assets/self.png" alt="Photo de Wilky Syndick" width={960} height={960}/> */}
            </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <h1 className="bg-gradient-to-r from-orange-400 to-[#033] text-transparent bg-clip-text text-5xl md:text-5xl font-bold">
          Je suis Wilky,
        </h1>
        <div className="h-[130px] md:h-[170px] flex items-center">
          <Text className="font-bold px-6 md:px-0 text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
              <FlipWords words={[
                  "Je suis un web designer,",
                  "Je suis un développeur web,",
                  "Qui se soucie de votre projet,",
                  "Qui aime enseigner,",
                  "Qui aime apprendre et innover !",
              ]}/>
          </Text>
        </div>
        <p>
            {/*<Text className={"text-lg md:text-xl text-gray-300 max-w-xl"}>*/}
            {/*    Designer produit & développeur web basé en Haiti.*/}
            {/*    J'aide les entreprises à créer des expériences numériques innovantes et efficaces.*/}
            {/*</Text>*/}
        </p>
        <div className="flex gap-4 mt-4 relative z-10">
          <a href="#contact" className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-[#033] text-white font-semibold">
            Me contacter
          </a>
          <a href="#projects" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full group bg-gradient-to-r from-orange-400 to-pink-600">
            <span className="relative px-6 py-2 transition-all ease-out bg-white text-black rounded-full group-hover:bg-opacity-0">
              Voir mes projets
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}