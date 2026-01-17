"use client"
import React, { useState } from 'react'
import { PROJECTS } from '@/data/project.data'
import ProjectComp from '../ui/ProjectComp';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
    const [showAll, setShowAll] = useState<Boolean>(false);
    return (
        <div id='projects' className='mx-auto '
        >
            <div className='grid grid-cols-1 lg:grid-cols-2 m-2 gap-5 w-full'>
                {
                    (showAll ? PROJECTS : PROJECTS.slice(0, 4)).map((project, idx) => (

                        <ProjectComp name={project.title} image={project.image} website_url={project.live} github_link={project.github} description={project.description} tech={project.technologies} />
                    ))
                }

            </div>


            {PROJECTS.length > 4 && (
                <div className="flex justify-center mt-8 sm:mt-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group inline-flex items-center gap-2
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
      text-gray-400
    "
                    >
                        {showAll ? "Show Less" : "Show More"}
                        {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>
            )}
        </div>
    )
}

export default Projects
