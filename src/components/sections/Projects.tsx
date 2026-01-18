"use client";
import React, { useState } from "react";
import { PROJECTS } from "@/data/project.data";
import ProjectComp from "../ui/ProjectComp";
import { ChevronDown, ChevronUp } from "lucide-react";

const Projects = () => {
  const [showAll, setShowAll] = useState<Boolean>(false);

  const initialProjects = PROJECTS.slice(0, 4);
  const additionalProjects = PROJECTS.slice(4);

  return (
    <div id="projects" className="px-2  my-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 w-full">
        {initialProjects.map((project, idx) => (
          <ProjectComp
            key={idx}
            index={idx}
            name={project.title}
            image={project.image}
            website_url={project.live}
            github_link={project.github}
            description={project.description}
            tech={project.technologies}
          />
        ))}
      </div>

      {/* Additional projects with smooth drawer animation */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full transition-all duration-700 ease-in-out origin-top"
        style={{
          maxHeight: showAll ? "5000px" : "0px",
          opacity: showAll ? 1 : 0,
          marginTop: showAll ? "20px" : "0px",
          transform: showAll ? "scaleY(1)" : "scaleY(0)",
          overflow: "hidden",
        }}
      >
        {additionalProjects.map((project, idx) => (
          <ProjectComp
            key={idx + 4}
            index={idx + 4}
            name={project.title}
            image={project.image}
            website_url={project.live}
            github_link={project.github}
            description={project.description}
            tech={project.technologies}
          />
        ))}
      </div>

      {PROJECTS.length > 4 && (
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-1.5
      px-3.5 py-1.5
      text-xs
      rounded-lg
      border border-neutral-300 dark:border-neutral-700
      bg-white dark:bg-neutral-900
      text-neutral-900 dark:text-neutral-200
      shadow-sm
      hover:shadow-md
      hover:-translate-y-[1px]
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600
      text-gray-400
    "
          >
            {showAll ? "Show Less" : "Show More"}
            {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
