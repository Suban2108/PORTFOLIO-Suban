import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import LeetCode from "./components/LeetCode";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import ResumeViewer from "./components/ResumeViewer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <LeetCode />
        <Projects />
        <Certifications />
        <Education />
        <ResumeViewer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}