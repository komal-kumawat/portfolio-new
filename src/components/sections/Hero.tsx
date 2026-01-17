"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { FileText, Github, Linkedin, Mail, X } from "lucide-react";
import IconComp from "../ui/IconComp";
import { Twitter } from "lucide-react";
import { AnimatedThemeToggler } from "../ui/themeToggle";
import {FaXTwitter} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si"; 
const Hero = () => {

    return (
        <div className="flex flex-col gap-2   mx-auto px-2 py-2">


            <div className="m-2 flex flex-col gap-2" >

                <span className="dark:text-gray-400 text-gray-600  flex flex-wrap items-center  text-sm" style={{ wordSpacing: '0.5rem' }}>
                    Hey, I'm Komal Kumawat, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.

                </span>
                <span className="dark:text-gray-400 text-gray-600  flex flex-wrap items-center  text-sm" style={{ wordSpacing: '0.5rem' }}>

                    Tech stack isn't my concern, I'm flexible with whatever the project needs, though I prefer modern frameworks and tools. I'm always open for new opportunities to learn and grow.

                </span>
            </div>
            <div className="flex flex-wrap gap-4 mx-2 ">
                {/* Resume Button */}
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      group inline-flex items-center gap-2
       p-2.5
      rounded-xl
      border border-neutral-300 dark:border-neutral-700
      bg-white dark:bg-neutral-900
      text-neutral-700 dark:text-neutral-200
      shadow-sm
      hover:shadow-md
      hover:-translate-y-[1px]
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600
    "
                >
                    <FileText
                        size={18}
                        className="transition-transform duration-300 group-hover:scale-110 dark:text-gray-400 text-gray-600"
                    />
                    <span className="text-sm dark:text-gray-400 text-gray-600">Resume</span>
                </a>

                <a
                    href="mailto:kumawatkomal17122004@gmail.com"
                    className="
      group inline-flex items-center gap-2
       p-2.5
      rounded-xl
      border border-neutral-300 dark:border-neutral-700
      bg-white dark:bg-neutral-900
      text-neutral-900 dark:text-neutral-200
      shadow-sm
      hover:shadow-md
      hover:-translate-y-[1px]
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600
    "
                >
                    <Mail
                        size={18}
                        className="transition-transform duration-300 group-hover:scale-110 dark:text-gray-400 text-gray-600"
                    />
                    <span className="text-sm dark:text-gray-400 text-gray-600">Send an email</span>
                </a>
            </div>

            <div className="flex m-2 gap-2 items-center">
                <Button name="Github" url="https://github.com/komal-kumawat" icon={<Github size={18} className="dark:text-gray-400 text-gray-700" />
                } />
                <Button name="LinkedIn" url="https://www.linkedin.com/in/komal-kumawat-7032662a0/" icon={<Linkedin size={18} className="dark:text-gray-400 text-gray-700" />
                } />
                <Button name="Twitter" url="https://x.com/KomalKumawat112" icon={<FaXTwitter size={18} className="dark:text-gray-400 text-gray-700" />
                } />
                <Button name="Mail" url="mailto:kumawatkomal17122004@gmail.com" icon={<Mail size={18} className="dark:text-gray-400 text-gray-700" />
                } />
                <Button name="Leetcode" url="https://leetcode.com/u/komal_kumawat" icon={<SiLeetcode size={18} className="dark:text-gray-400 text-gray-700" />
                } />


            </div>

            

        </div>
    );
};

export default Hero;
