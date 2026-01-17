"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EXPERIENCES } from "../../data/experience.data";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 my-24">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">Experience</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
        Hands-on experience building real-world applications, collaborating in
        teams, and shipping production-ready features.
      </p>

      <div className="space-y-6">
        {EXPERIENCES.map((exp, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="
                border border-gray-200 dark:border-gray-700 
                rounded-lg 
                transition-all duration-200
                hover:border-gray-400 dark:hover:border-gray-500
              "
            >
              {/* Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="
                  w-full text-left
                  flex justify-between items-center
                  p-5
                  focus:outline-none
                "
              >
                <div>
                  <p className="font-semibold text-lg">
                    {exp.position}
                  </p>
                  <p className="text-sm text-gray-500">
                    {exp.company} · {exp.duration}
                  </p>
                </div>

                {isOpen ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </button>

              {/* Content */}
              {isOpen && (
                <div className="px-5 pb-5">
                  <ul className="list-disc pl-5 space-y-3 text-sm">
                    {exp.details.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed"
                        style={{ wordSpacing: "0.4rem" }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
