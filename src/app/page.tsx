import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import DottedBackground from "@/components/ui/DottedBackground";
import DashedDivider from "@/components/ui/DashedDivider";
import VerticalPageBorders from "@/components/ui/VerticalDashedDivider";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div className="top-0 max-w-2xl mx-auto dark:text-gray-300 text-gray-800 relative z-10 min-h-screen px-4">
      <VerticalPageBorders />

      {/* <DashedDivider /> */}
      <DottedBackground />
      <DashedDivider />
      <Navbar />
      <DashedDivider />

      <Hero />
      <DashedDivider />
      <h1 className="text-xl font-bold m-2">Experience</h1>

      <DashedDivider />

      <Experience />
      <DashedDivider />
      <h1 className="text-xl font-bold m-2">Projects</h1>

      <DashedDivider />

      <Projects />

      <DashedDivider />
      <h1 className="text-xl font-bold m-2">Education</h1>

      <DashedDivider />
      <Education />
      <DashedDivider />
      <h1 className="text-xl font-bold m-2">Skills & Tech.</h1>

      <DashedDivider />

      <Skills />
      <DashedDivider />

      <Footer />
      <DashedDivider />
      <DottedBackground />
    </div>
  );
}
