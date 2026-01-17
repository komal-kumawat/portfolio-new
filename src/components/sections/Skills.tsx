"use client";

import { useState } from "react";
import Image from "next/image";
import { TECH_STACK } from "../../data/tech.data";

export default function Skills() {
  return (
    <section id="skills" className="mmx-auto px-10 my-24">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>

      

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {TECH_STACK.map((tech) => (
          <TechItem key={tech.key} tech={tech} />
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Tech item with tooltip (isolated) */
/* ---------------------------------- */

function TechItem({ tech }: { tech: any }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* Tooltip */}
      <div
        className={`
          absolute bottom-full mb-2
          left-1/2 -translate-x-1/2
          pointer-events-none
          transition-all duration-300 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
        `}
      >
        <div className="relative">
          {/* Tooltip box */}
          <div
            className="
              px-3 py-1.5 rounded-md text-sm font-medium
              bg-black text-white
              dark:bg-white dark:text-black
              shadow-md whitespace-nowrap
            "
          >
            {tech.title}
          </div>

          {/* Arrow */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2
              top-full
              w-0 h-0
              border-l-4 border-r-4 border-t-4
              border-l-transparent border-r-transparent
              border-t-black dark:border-t-white
            "
          />
        </div>
      </div>

      {/* Icon */}
      <a
        href={tech.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tech.title}
        className="
          flex items-center justify-center
          w-12 h-12
          border border-gray-200 dark:border-gray-700
          rounded-lg
          hover:bg-gray-100 dark:hover:bg-gray-800
          transition-colors
        "
      >
        {tech.lightIcon ? (
          <>
            <Image
              src={`/icons/${tech.lightIcon}`}
              alt={tech.title}
              width={28}
              height={28}
              className="block dark:hidden"
            />
            <Image
              src={`/icons/${tech.key}.svg`}
              alt={tech.title}
              width={28}
              height={28}
              className="hidden dark:block"
            />
          </>
        ) : (
          <Image
            src={`/icons/${tech.key}.svg`}
            alt={tech.title}
            width={28}
            height={28}
          />
        )}
      </a>
    </div>
  );
}
