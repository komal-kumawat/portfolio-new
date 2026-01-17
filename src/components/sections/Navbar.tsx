"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "../ui/themeToggle";
import { Github, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen((v) => !v);

    const navItems = [
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },

        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },

    ];

    return (
        <nav
            className="
        flex flex-col gap-10   mx-auto px-2 py-2
      "
        >
            <div className="flex  justify-between">

                <div className="flex  gap-5">
                    <Image
                        src="/profile_pic.png"
                        width={100}
                        height={100}
                        alt="profile"
                        className="rounded-md cursor-pointer"

                    />
                    <div className="flex flex-col justify-between">
                        <div></div>
                        <div>
                            <h1 className="font-bold text-2xl cursor-default ">
                                Komal Kumawat
                            </h1>
                            <h3 className="dark:text-gray-400 text-gray-700 text-sm cursor-default">Full Stack Web Developer</h3>
                        </div>

                    </div>

                </div>



                <div className="flex items-start gap-2 font-mono">
                    <Link
                        href="https://github.com/komal-kumawat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              p-2 rounded-md
            text-gray-700 dark:text-gray-400
            hover:bg-gray-200 dark:hover:bg-gray-800
            transition
            "
                    >
                        <Github size={22} />
                    </Link>

                    <AnimatedThemeToggler
                        className="
            p-2 rounded-md
            text-gray-700 dark:text-gray-400
            hover:bg-gray-200 dark:hover:bg-gray-800
            transition
          "
                    />
                </div>




            </div>
        </nav>
    );
};

export default Navbar;
