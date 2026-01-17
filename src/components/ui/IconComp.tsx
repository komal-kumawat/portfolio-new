"use client";

import { ReactNode, useState } from "react";

interface IconCompProps {
  name: string;
  icon: ReactNode;
  url: string;
}

const IconComp = ({ name, icon, url }: IconCompProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex items-center"
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
          <div className="px-3 py-1.5 rounded-md text-sm font-medium
            bg-black text-white dark:bg-white dark:text-black
            shadow-md whitespace-nowrap">
            {name}
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
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="
          inline-flex items-center justify-center
          p-2 rounded-md
          cursor-pointer
          hover:bg-gray-200 dark:hover:bg-gray-800
          transition-colors duration-200
        "
      >
        {icon}
      </a>
    </div>
  );
};

export default IconComp;
