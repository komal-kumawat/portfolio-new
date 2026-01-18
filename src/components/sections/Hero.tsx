"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { FileText, Github, Linkedin, Mail, X } from "lucide-react";
import IconComp from "../ui/IconComp";
import { Twitter } from "lucide-react";
import { AnimatedThemeToggler } from "../ui/themeToggle";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
const Hero = () => {
  return (
    <div className="flex flex-col gap-6 mx-auto px-4 py-6 max-w-4xl">
      <div className="flex flex-col gap-4">
        <p className="dark:text-gray-300 text-gray-600 leading-relaxed text-base">
          Hey, I'm Komal Kumawat, a full stack developer who loves building
          clean, modern websites and apps where design, functionality, and even
          the smallest details matter, with a focus on making products that are
          both practical and visually satisfying.
        </p>
        <p className="dark:text-gray-300 text-gray-600 leading-relaxed text-base">
          Tech stack isn't my concern, I'm flexible with whatever the project
          needs, though I prefer modern frameworks and tools. I'm always open
          for new opportunities to learn and grow.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
        >
          <FileText
            size={18}
            className="transition-transform duration-300 group-hover:scale-110 text-gray-600 dark:text-gray-400"
          />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Resume
          </span>
        </a>

        <a
          href="mailto:kumawatkomal17122004@gmail.com"
          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
        >
          <Mail
            size={18}
            className="transition-transform duration-300 group-hover:scale-110 text-gray-600 dark:text-gray-400"
          />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Send an email
          </span>
        </a>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <Button
          name="Github"
          url="https://github.com/komal-kumawat"
          icon={
            <Github size={18} className="dark:text-gray-400 text-gray-700" />
          }
        />
        <Button
          name="LinkedIn"
          url="https://www.linkedin.com/in/komal-kumawat-7032662a0/"
          icon={
            <Linkedin size={18} className="dark:text-gray-400 text-gray-700" />
          }
        />
        <Button
          name="Twitter"
          url="https://x.com/KomalKumawat112"
          icon={
            <FaXTwitter
              size={18}
              className="dark:text-gray-400 text-gray-700"
            />
          }
        />
        <Button
          name="Mail"
          url="mailto:kumawatkomal17122004@gmail.com"
          icon={<Mail size={18} className="dark:text-gray-400 text-gray-700" />}
        />
        <Button
          name="Leetcode"
          url="https://leetcode.com/u/komal_kumawat"
          icon={
            <SiLeetcode
              size={18}
              className="dark:text-gray-400 text-gray-700"
            />
          }
        />
      </div>
    </div>
  );
};

export default Hero;
