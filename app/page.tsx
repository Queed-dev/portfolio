import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Trivia from "./components/Trivia";
import Skills from "./components/Skills";
import Workflow from "./components/Workflow";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101c1c] text-white font-sans">
      <Navbar />
      <Header />
      <Trivia />
      <Services />
      <Skills />
      <About />
      <Workflow />
      <Projects />
      <Contact />
    </div>
  );
}
