"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProjectCompProp {
  image: string;
  name: string;
  description: string;
  tech: string[]; // use string array for tech names
  website_url?: string;
  github_link?: string;
  index?: number;
}

const ProjectComp = ({
  image,
  name,
  description,
  tech,
  website_url,
  github_link,
  index = 0,
}: ProjectCompProp) => {
  const [isHovered, setIsHovered] = useState(false);

  // Alternate between bg1.png, bg2.png, bg3.png, bg4.png
  const bgImage = `/bg${(index % 4) + 1}.png`;

  const handleClick = () => {
    if (website_url) {
      window.open(website_url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Image Box - Gray border like navbar profile */}
      <div className="relative mb-4">
        {/* Outer thin grey border with offset around image container */}
        <div className="absolute -inset-1.5 border border-gray-300 dark:border-neutral-800 rounded-[16px] pointer-events-none" />

        <div
          className="border border-gray-300 dark:border-neutral-800 rounded-xl pt-[8px] px-[8px] bg-gray-100 dark:bg-neutral-900 relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 transition-opacity duration-300 rounded-xl overflow-hidden"
            style={{
              opacity: isHovered ? 1 : 0,
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Image centered and touching bottom */}
          <div className="relative w-full h-48 overflow-hidden flex items-end px-6">
            <div
              className="relative w-full h-[75%] rounded-xl overflow-hidden transition-transform duration-300"
              style={{
                transform: isHovered ? "translateY(8px)" : "translateY(0)",
              }}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-top rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="space-y-2">
        {/* Title with Live Badge */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-400 text-xs font-medium">Live</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* View Project Link */}
        {website_url && (
          <a
            href={website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group pt-1"
          >
            <span className="text-sm font-medium">View Project</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectComp;
