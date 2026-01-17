"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EXPERIENCES } from "../../data/experience.data";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 mt-24 min-h-[100vh]">
      <h2 className="text-4xl font-bold mb-10">Experience</h2>
      <p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Hands-on experience building real-world applications,
            collaborating in teams, and shipping production-ready features.
          </p>
      </p>

      <div className="space-y-6">
        {EXPERIENCES.map((exp, index) => {
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
                  <p className="font-medium text-lg">{exp.position}</p>
                  <p className="text-sm text-gray-500">
                    {exp.company} · {exp.duration}
                  </p>
                </div>

                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {/* Content */}
              {isOpen && (
                <div className="px-4 pb-4">
                  <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    {exp.details.map((point, i) => (
                      <li key={i} className="dark:text-gray-400 text-gray-600  flex flex-wrap items-center gap-2 font-medium" style={{ wordSpacing: '0.5rem' }}>{point}</li>
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
