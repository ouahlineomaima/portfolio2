import React from 'react'
import rocket from '../assets/img/Rocketship.png'
import settingAstronaut from '../assets/img/setting astronaute 200.png'
import projectsData from "../data/projects.json";
import { ProjectPlanet } from './ProjectPlanet';

function Projects() {
  const resolvedProjects = projectsData.projects
  return (
    <div className='text-white font-SpaceMono flex flex-col border-b-2 sm:justify-center' id='projects'>
      <div className='flex-none flex h-10 justify-center pt-10 '>
        <h1 className=' text-2xl 2xl:text-3xl uppercase'>My Projects </h1>
        <img src={rocket} alt="" />
      </div>
      <div className='md:flex md:flex-grow mt-10 items-center sm:justify-center '>
        <img src={settingAstronaut} alt="" className='ml-12 sm:ml-[28%] md:h-[25vh] sm:max-h-[20vh] sm:mt-3 sm:mb-2 px-4 animate-bounce h-1/2 -z-10' />
        <div className='px-8 flex flex-wrap md:max-h-[75vh] '>
          {resolvedProjects.map((project, index) => {
            return (
              <div key={index} className="w-full md:w-1/2 sm:w-screen l:w-1/2 lg:w-1/3 mb-4 px-2">
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
