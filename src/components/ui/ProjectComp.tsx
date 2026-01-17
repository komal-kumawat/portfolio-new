"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { Github, Globe } from "lucide-react";
import { HoverBorderGradient } from "./hover-border-gradient";

interface ProjectCompProp {
  image: string;
  name: string;
  description: string;
  tech: string[]; // use string array for tech names
  website_url?: string;
  github_link?: string;
}

const ProjectComp = ({
  image,
  name,
  description,
  tech,
  website_url,
  github_link,
}: ProjectCompProp) => {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden flex flex-col">
        
      {/* Project Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Title + Links */}
      <div className="flex items-center justify-between px-4 py-3 ">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
          {name}
        </h3>

        <div className="flex gap-2">
          {website_url && (
            <a
              href={website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              <Globe size={18} />
            </a>
          )}
          {github_link && (
            <a
              href={github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="px-4 pb-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
        {description}
      </p>

      {/* Tech badges */}
      <div className="px-4 pb-4 flex flex-wrap gap-2">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectComp;
