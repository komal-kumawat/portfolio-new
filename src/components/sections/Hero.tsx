"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
    const [displayProfile, setDisplayProfile] = useState(false);

    return (
        <div className="flex flex-col gap-10 m-2">

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
                    <Button name="MongoDB" iconPath="/icons/mongo.svg" url="https://www.mongodb.com/"></Button>. Passionate about UI/UX design and creating seamless user experiences.</span>

            </div>
        </div>
    );
};

export default Hero;
