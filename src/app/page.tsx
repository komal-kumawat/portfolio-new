import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import DottedBackground from "@/components/ui/DottedBackground";
import DashedDivider from "@/components/ui/DashedDivider";
import VerticalPageBorders from "@/components/ui/VerticalDashedDivider";

export default function Home() {
  return (
      <div className="top-0 max-w-2xl mx-auto dark:text-gray-300 text-gray-800 relative z-10 min-h-screen px-4">

      <VerticalPageBorders/>


        {/* <DashedDivider /> */}
        <DottedBackground />
        <DashedDivider />

        <Hero />
        <DashedDivider />

        <Projects />
        <DashedDivider />

        <Experience />
        <DashedDivider />

        <Education />
        <DashedDivider />

        <Skills />
        <DashedDivider />

        <About />
        <DashedDivider />

        <Footer />
        <DashedDivider />
        <DottedBackground />
    </div>
  );
}
