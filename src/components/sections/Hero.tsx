"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { FileText, Github, Linkedin, Mail, Send } from "lucide-react";
import IconComp from "../ui/IconComp";
import { Twitter } from "lucide-react";

const Hero = () => {
    const [displayProfile, setDisplayProfile] = useState(false);

    return (
        <div className="flex flex-col gap-10 m-3 h-[100vh]">

            <div className="flex items-center gap-3">
                <Image
                    src="/profile_pic.png"
                    width={100}
                    height={100}
                    alt="profile"
                    className="rounded-full cursor-pointer"
                    onMouseEnter={() => setDisplayProfile(true)}
                    onMouseLeave={() => setDisplayProfile(false)}
                />

                <div
                    className={`
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${displayProfile ? "opacity-100 max-w-[200px] translate-x-0" : "opacity-0 max-w-0 -translate-x-2"}
        `}
                >
                    <span className="whitespace-nowrap font-semibold">
                        KOMAL KUMAWAT
                    </span>
                </div>

            </div>
            <div className="m-2 flex flex-col gap-5" >
                <h1 className="text-4xl font-bold  ">
                    Hi, I'm Komal —  <span className="text-gray-500">A Full Stack web developer.</span>
                </h1>
                <span className="text-gray-500 flex flex-wrap items-center gap-2" style={{ wordSpacing: '0.5rem' }}>I build interactive web apps using
                    <Button name="Typescript" iconPath="/icons/typescript.svg" url="https://www.typescriptlang.org/">
                    </Button>
                    ,
                    <Button name="React" iconPath="/icons/react.svg" url="https://react.dev/">
                    </Button>
                    ,
                    <Button name="NextJs" iconPath="/icons/nextjs-light.svg" url="https://nextjs.org/">
                    </Button>

                    and
                    <Button name="MongoDB" iconPath="/icons/mongo.svg" url="https://www.mongodb.com/"></Button>. Passionate about UI/UX design and creating seamless user experiences.
                    From idea to deployment, I love building products that feel fast, intuitive, and reliable.</span>

            </div>
            <div className="flex flex-wrap gap-4 mx-4 ">
                {/* Resume Button */}
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      group inline-flex items-center gap-2
      px-5 py-2.5
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
                    <FileText
                        size={18}
                        className="transition-transform duration-300 group-hover:scale-110 text-gray-400"
                    />
                    <span className="font-medium text-gray-400">Resume</span>
                </a>

                {/* GitHub Button */}
                <a
                    href="#footer"
                    className="
      group inline-flex items-center gap-2
      px-5 py-2.5
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
                    <Send
                        size={18}
                        className="transition-transform duration-300 group-hover:scale-110 text-gray-400"
                    />
                    <span className="font-medium text-gray-400">Connect Now</span>
                </a>
            </div>

            <div className="flex mx-5 gap-2 items-center">
                <IconComp name="Github" url="https://github.com/komal-kumawat" icon={<Github size={22} className="text-gray-400" />
                } />
                <IconComp name="LinkedIn" url="https://www.linkedin.com/in/komal-kumawat-7032662a0/" icon={<Linkedin size={22} className="text-gray-400" />
                } />
                <IconComp name="Twitter" url="https://x.com/KomalKumawat112" icon={<Twitter size={22} className="text-gray-400" />
                } />
                <IconComp name="Mail" url="mailto:kumawatkomal17122004@gmail.com" icon={<Mail size={22} className="text-gray-400" />
                } />


            </div>




        </div>
    );
};

export default Hero;
