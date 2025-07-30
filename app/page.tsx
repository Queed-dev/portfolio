import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Trivia from "../components/Trivia";
import Skills from "../components/Skills";
import Workflow from "../components/Workflow";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision";
import { Timeline } from "@/components/ui/timeline";
import TimelineItem  from "@/components/ui/timeline-item";
import Wave1 from "@/svg/react/wave1";
import Wave2 from "@/svg/react/wave2";
import { Flex } from "@radix-ui/themes";

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
                        data={[
                          {
                            title: "Novembre 2024 — À nos jours",
                            content:
                            <TimelineItem
                              fonction="Enseignant en informatique chez Haiti EdTech"
                              town="Cap-Haïtien"
                              responsibilities={[
                                "Préparer des cours appropriés.",
                                "Dispenser des cours d'informatique dans les établissements des différents partenaires de l’entreprise."
                              ]}
                            />
                          },
                          {
                            title: "Mars 2022 — Août 2024",
                            content: <TimelineItem
                              fonction="Assistant SAP à M.A.S Akansyel"
                              town="Caracol"
                              responsibilities={[
                                "Gestion des stocks via le système ERP SAP (Systems, Applications, and Products)",
                                "Réconcilier le stock physique et le stock système afin d’éviter les écarts et les déficits financiers.",
                                "Superviser les audits de stock pour l’usine"
                              ]}
                            />
                          },
                          {
                            title: "Septembre 2020 — Juillet 2021",
                            content: <TimelineItem
                              fonction="Assistant enseignant en programmation Python chez Royal Linx Team du Collège Saint-Joseph de Cap-Haïtien"
                              town="Cap-Haïtien"
                              responsibilities={[
                                "Apporter des connaissances et compétences à l’équipe en programmation Python",
                                "Assister les étudiants dans leurs projets de programmation"
                              ]}
                            />
                          },
                          {
                            title: "Août 2018 — Octobre 2020",
                            content: <TimelineItem
                              fonction="Développeur web chez PwAtik"
                              town="Cap-Haïtien"
                              responsibilities={[
                                "Apporter des connaissances et compétences à l’équipe en programmation Python",
                                "Assister les étudiants dans leurs projets de programmation"
                              ]}
                            />
                          }
                        ]}
                      />
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
