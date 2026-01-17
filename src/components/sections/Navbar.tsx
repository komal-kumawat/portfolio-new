"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "../ui/themeToggle";
import { Github, Menu, X } from "lucide-react";

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
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },

    ];

    return (
        <nav
            className="
        fixed top-0 left-1/2 -translate-x-1/2
        w-full max-w-[700px]
        z-50
        backdrop-blur-sm
        px-4 py-3
      "
        >
            <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center cursor-pointer">
                    <motion.img
                        key={mounted ? theme : "default"}
                        src={
                            !mounted
                                ? "/logo-light.svg"
                                : theme === "dark"
                                    ? "/logo-dark.svg"
                                    : "/logo-light.svg"
                        }
                        alt="komal logo"
                        className="w-25 h-auto "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </Link>
                <div className="flex items-center gap-2 font-mono">
                    <Link
                        href="https://github.com/komal-kumawat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              p-2 rounded-md
            text-gray-700 dark:text-gray-300
            hover:bg-gray-200 dark:hover:bg-gray-800
            transition
            "
                    >
                        <Github size={20} />
                    </Link>

                    <AnimatedThemeToggler
                        className="
            p-2 rounded-md
            text-gray-700 dark:text-gray-300
            hover:bg-gray-200 dark:hover:bg-gray-800
            transition
          "
                    />

                    <button
                        onClick={toggleMenu}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        className="p-2 rounded-md
            text-gray-700 dark:text-gray-300
            hover:bg-gray-200 dark:hover:bg-gray-800
            transition"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>


            </div>
            {isOpen && (
                <div className="bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
                    <div className="flex flex-col items-center space-y-5 py-10">
                        {navItems.map((item) =>

                            <Link
                                key={item.name}
                                href={item.href}
                                className="transition-colors text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        )
                        }
                        <Link
                            href="#footer"
                            className="rounded-full border px-6 py-1.5 transition-colors bg-gray-900 text-white border-gray-900 hover:bg-white hover:text-black dark:bg-gray-100 dark:text-black dark:border-gray-100 dark:hover:bg-black dark:hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Connect
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
