import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[800px]  flex flex-col  items-center m-auto text-gray-300">
      <Navbar />
      <main className="m-8 mt-30 dark:text-gray-300 text-gray-800">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />

        <About />
        <CTA />


      </main>
      <Footer />

    </div>
  );
}
