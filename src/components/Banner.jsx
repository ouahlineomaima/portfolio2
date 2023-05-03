import { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";
import NorthStar from '../assets/img/North Star 500.png'
import earth from '../assets/img/Earth.png'
import rocket from '../assets/img/Rocketship.png'
import fallingStar from '../assets/img/Falling star.png'
import astronaut from '../assets/img/Astronaut.png'
import satellite from '../assets/img/Satellite 1.png'

function Banner() {
    const onUpdateActiveLink = (value) => {
        const element = document.getElementById(value)
        if (element) {
            window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
    }
    return (
        <section className='h-screen bg-cover bg-no-repeat bg-center font-SpaceMono md:flex md:justify-between' id='banner'>
            <div className="text-white px-12 mt-10 font-bold md:w-1/2">
                <h1 className="text-xl md:text-2xl w-full pb-3">Welcome astronauts!</h1>
                <h1 className="text-xl md:text-2xl w-full py-3">I am omaima ouahline</h1>
                <h1 className="text-xl md:text-2xl w-full py-3">I am a <span> <Typewriter
                    words={['Software engineer', 'Full stack developer', 'Mobile app developer', 'UX/UI designer']}
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></span></h1>
                <h1 className="text-2xl lg::text-2xl w-full pt-3 flex">Check the north star to start your journey!</h1>
            </div>
            <div className="mt-28 md:w-1/2 relative" >
                <img src={NorthStar} alt="" className="w-[500] h-[268] pr-2" />
                <ul className='flex text-white w-[500] h-[268] ml-3 absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-opacity duration-300 hover:opacity-100' >
                    <li className='py-4 px-5'>
                        <Link to="/home" className='flex items-center absolute -top-8 -left-4' onClick={() => onUpdateActiveLink('banner')}>
                            <img src={earth} alt="" className='px-2' />
                            <span className=''>HOME</span>
                        </Link></li>
                    <li className='py-4 px-5'>
                        <Link to="/projects" className='flex items-center absolute -top-6 left-44' onClick={() => onUpdateActiveLink('projects')}>
                            <img src={rocket} alt="" className='px-2' />
                            <span className=''>PROJECTS</span>
                        </Link></li>
                    <li className='py-4 px-5'>
                        <Link to="/skills" className='flex items-center absolute top-28 left-[28rem]' onClick={() => onUpdateActiveLink('skills')}>
                            <img src={fallingStar} alt="" className='px-2' />
                            <span className=''>SKILLS</span>
                        </Link></li>
                    <li className='py-4 px-5'>
                        <Link to="/resume" className='flex items-center absolute top-64 left-60' onClick={() => onUpdateActiveLink('resume')}>
                            <img src={astronaut} alt="" className='px-2' />
                            <span className=''>RESUME</span>
                        </Link></li>
                    <li className='py-4 px-5'>
                        <Link to="/contact" className='flex items-center absolute top-72 left-96' onClick={() => onUpdateActiveLink('contact')}>
                            <img src={satellite} alt="" className='px-2' />
                            <span className=''>CONTACT</span>
                        </Link></li>
                </ul>
                
            </div>


        </section>
    )
}
export default Banner;
