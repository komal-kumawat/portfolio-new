import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="
        w-full
        py-6
        text-center
        text-sm
        text-gray-600 dark:text-gray-400
        flex flex-col items-center gap-1
      "
    >
      <p>
        Designed & Developed by{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-200">
          Komal
        </span>
      </p>

      <p className="text-xs">
        © 2026 · All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
