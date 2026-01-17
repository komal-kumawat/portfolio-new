import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='max-w-4xl mx-auto px-4 my-24' id='about'>
            <div>
                <h2 className='text-4xl font-bold mb-10'>About</h2>
            </div>
            <div>
                <Image src="/profile_pic.png" width={200} height={200} alt='Komal profile pic' className='rounded-md my-5'></Image>
                <h1 className='text-2xl font-semibold mb-5'>Komal Kumawat</h1>
                <p

                    className="dark:text-gray-400 text-gray-600 flex flex-wrap items-center gap-2 font-medium" style={{ wordSpacing: '0.5rem' }}
                >
                    Hi, I’m <span className="font-bold dark:text-gray-300 ">Komal Kumawat</span> — a passionate{" "}
                    <span className="font-semibold">Software Developer</span> with strong expertise
                    in crafting scalable, intuitive, and modern web applications. I love turning
                    ideas into impactful digital solutions through clean code, thoughtful design,
                    and innovative problem-solving.<br></br><br></br>
                    I specialize in building efficient front-end experiences with React and
                    seamless back-end systems using Node.js and MongoDB. I’m driven by curiosity,
                    collaboration, and the pursuit of excellence — continuously learning, building,
                    and evolving to create products that inspire and empower users.
                </p>
                <h3 className='flex items-center font-bold mt-5 text-xl'>BUILD | INNOVATE | INSPIRE</h3>

            </div>

        </div>
    )
}

export default About
