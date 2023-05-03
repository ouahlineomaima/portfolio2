import React from 'react'
import rocket from '../assets/img/Rocketship.png'
import settingAstronaut from '../assets/img/setting astronaute 200.png'



 function Projects() {
  return (
    <div className='text-white h-screen font-SpaceMono flex flex-col' id='projects'>
      <div className='flex-none flex h-10 justify-center pt-4'>
        <h1 className=' text-2xl 2xl:text-3xl uppercase'>My Projects </h1>
        <img src={rocket} alt="" />
      </div>
      <div className='flex flex-grow mt-10'>
        <img src={settingAstronaut} alt="" className='ml-12 animate-bounce h-1/2'/>
      </div>
      
    </div>
  )
}
export default Projects;
