"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EDUCATION } from "../../data/education.data";

export default function Education() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="education" className="mx-auto px-10 my-24">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6">Education</h2>

      
      {/* Cards */}
      <div className="space-y-6">
        {EDUCATION.map((edu, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              {/* Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="
                  w-full text-left
                  flex justify-between items-center
                  p-4
                "
              >
                <div>
                  <p className="font-medium text-lg">
                    {edu.position}
                  </p>
                  <p className="text-sm text-gray-500">
                    {edu.company} · {edu.duration}
                  </p>
                </div>

                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {/* Content */}
              {isOpen && (
                <div className="px-4 pb-4">
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    {edu.details?.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-400 font-medium"
                        style={{ wordSpacing: "0.5rem" }}
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
