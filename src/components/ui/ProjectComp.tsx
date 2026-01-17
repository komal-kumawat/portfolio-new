import React, { ReactNode } from 'react'

interface ProjectCompProp {
    image:string,
    name:string,
    description:string,
    tech: [ReactNode],
    website_url:string , 
    github_link:string
}

const ProjectComp = ({image , name , description , tech , website_url , github_link}:ProjectCompProp) => {
  return (
    <div>
      
    </div>
  )
}

export default ProjectComp
