"use client";

import { EXPERIENCES } from "../../data/experience.data";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className=" px-2 my-6">
      <div className="space-y-0">
        {EXPERIENCES.map((exp, index) => {
          return (
            <div key={index}>
              <div
                className="
                transition-all duration-200 py-4
              "
              >
                {/* Header */}
                <div className="w-full text-left flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    {/* Logo */}
                    <div className="border border-gray-300 dark:border-neutral-800 rounded-lg p-3 flex-shrink-0 w-16 h-16 flex items-center justify-center">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>

                    {/* Company & Position */}
                    <div>
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      <p className="text-base text-gray-600 dark:text-gray-400">
                        {exp.position}
                      </p>
                    </div>
                  </div>

                  {/* Date, Location */}
                  <div className="text-right">
                    <p className="text-base font-medium">{exp.duration}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-3 space-y-3">
                  {/* Details */}
                  <ul className="space-y-2">
                    {exp.details.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex"
                      >
                        <span className="mr-3 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pl-[16px]">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-950 text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200 dark:border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
