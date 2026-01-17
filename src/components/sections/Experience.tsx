"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EXPERIENCES } from "../../data/experience.data";
import DashedDivider from "../ui/DashedDivider";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="mx-auto px-10 my-24">


      <div className="space-y-6">
        {EXPERIENCES.map((exp, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="
                rounded-lg 
                transition-all duration-200
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
                  <ul className="list-disc space-y-3 text-sm">
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
