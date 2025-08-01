import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision";
import { Timeline } from "@/components/ui/timeline";
import TimelineItem  from "@/components/ui/timeline-item";
import Wave1 from "@/svg/react/wave1";
import Wave2 from "@/svg/react/wave2";
import {default as worksExperience} from "@/datas/works-journey.json";
import WorkJourney from "@/components/types/work-journey";

export default function Home() {
  return (
      <div className={"w-[100vw] min-h-screen overflow-x-hidden"}>
          <BackgroundBeamsWithCollision className={"w-[100vw]"}>
            <div className="w-[100vw] overflow-x-hidden bg-linear-to-b from-[#ffffff] via-[#134c63] to-[#000000] font-sans">
                <div className="relative z-20">
                    <Navbar />
                    <Header />
                    {/*<Flex direction={"column"}>*/}
                      <div className="w-full mb-[-0.5em] h-[60px] flex items-end">
                        <Wave1 className="text-[#192c2c] fill-current"/>
                      </div>
                      <Timeline
                        theme="orange"
                        header={
                          <div className="pt-9 px-6 md:px-10">
                            <h2 className="text-lg md:text-4xl mb-2 text-semibold text-white dark:text-white max-w-4xl">
                                Journal des modifications de mon parcours professionnel
                            </h2>
                            <p className="w-full text-neutral-400 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                                Depuis ma deuxième année d’université,
                                j’ai été activement impliqué dans divers projets et rôles, allant du travail indépendant à l’enseignement.
                            </p>
                            <p className="w-full text-neutral-400 pt-4">
                                Voici une chronologie de mon voyage :
                            </p>
                          </div>
                        }
                        data={ worksExperience.map((work : WorkJourney)=>({
                          title: work.period,
                          content: (
                              <TimelineItem
                                  fonction={work.position}
                                  town={work.town}
                                  responsibilities={work.responsibilities}
                              />
                          ),
                      }))}/>
                      <div className="w-full mt-[-0.5em] h-[60px] flex items-start">
                        <Wave2 className="text-[#192c2c] fill-current"/>
                      </div>
                    {/*</Flex>*/}
                    <div className="w-full px-6 md:px-3">
                      {/* <Trivia /> */}
                      <Skills key={'skills'}/>
                    </div>
                    <Services key={'services'}/>
                    <div className="w-full px-6 md:px-3">
                      <About key={'about'}/>
                      {/* <Workflow /> */}
                      <Projects key={'projects'} />
                      <Contact key={'contact'}/>
                    </div>
                </div>
            </div>
          </BackgroundBeamsWithCollision>
      </div>
  );
}
