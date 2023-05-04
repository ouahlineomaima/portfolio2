import React from 'react'
import rocket from '../assets/img/Rocketship.png'
import settingAstronaut from '../assets/img/setting astronaute 200.png'
import projectsData from "../data/projects.json";
import { ProjectPlanet } from './ProjectPlanet';



function Projects() {
  const resolvedProjects = projectsData.projects
  return (
    <div className='text-white h-screen font-SpaceMono flex flex-col' id='projects'>
      <div className='flex-none flex h-10 justify-center pt-4'>
        <h1 className=' text-2xl 2xl:text-3xl uppercase'>My Projects </h1>
        <img src={rocket} alt="" />
      </div>
      <div className='md:flex md:flex-grow mt-10'>
        <img src={settingAstronaut} alt="" className='ml-12 px-4 animate-bounce h-1/2' />
        <div className='px-8 flex flex-wrap'>
          {resolvedProjects.map((project, index) => {
            return (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
                <ProjectPlanet 
                index = {index}
                {...project} />
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}
export default Projects;
