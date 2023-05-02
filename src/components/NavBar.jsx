import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';
import earth from '../assets/img/Earth.png'
import rocket from '../assets/img/Rocketship.png'
import fallingStar from '../assets/img/Falling star.png'
import astronaut from '../assets/img/Astronaut.png'
import satellite from '../assets/img/Satellite 1.png'

function NavBar() {
  const [hidden, setHidden] = useState(true);
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('banner');

  const handleNav = () => {
    setNav(!nav)
  }
  const onUpdateActiveLink = (value) => {
    const element = document.getElementById(value)
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      setActiveLink(value);
    }

  }

  useEffect(() => {
    const onScroll = () => {
      const banner = document.getElementById('banner')
      const projects = document.getElementById('projects')
      const skills = document.getElementById('skills')
      const resume = document.getElementById('resume')
      const contact = document.getElementById('contact')
  
      let activeLink;
      let hidden;
  
      switch(true) {
        case window.scrollY > banner.offsetHeight + banner.offsetTop && window.scrollY < projects.offsetTop + projects.offsetHeight:
          activeLink = 'projects';
          hidden = false;
          console.log('projects', activeLink);
          break;
  
        case window.scrollY > projects.offsetTop + projects.offsetHeight && window.scrollY < skills.offsetTop + skills.offsetHeight:
          activeLink = 'skills';
          hidden = false;
          console.log('skills', activeLink);
          break;
  
        case window.scrollY > skills.offsetTop + skills.offsetHeight && window.scrollY < resume.offsetTop + resume.offsetHeight:
          activeLink = 'resume';
          hidden = false;
          console.log('resume', activeLink);
          break;
  
        case window.scrollY > resume.offsetTop + resume.offsetHeight && window.scrollY < contact.offsetTop + contact.offsetHeight:
          activeLink = 'contact';
          hidden = false;
          console.log('contact', activeLink);
          break;
  
        case window.scrollY < banner.offsetTop + contact.offsetHeight:
          activeLink = 'banner';
          hidden = true;
          console.log('banner', activeLink);
          break;
  
        default:
          activeLink = '';
          hidden = false;
          console.log('footer', activeLink);
      }
  
      setActiveLink(activeLink);
      setHidden(hidden);
    }
  
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  
  }, [])

  return (
    <div className={hidden ? 'flex justify-between items-center h-16 w-full sticky top-0 font-SpaceMono mx-auto px-4 text-white ease-out duration-500 bg-[#060508] opacity-90' : 'flex justify-between items-center h-16 w-full sticky top-0 font-SpaceMono  mx-auto  px-4 text-white bg-[#060508] opacity-90 ease-in-out duration-500'}>
      <h1 className='w-full text-2xl font-bold'><Typewriter
                    words={['OMAIMA OUAHLINE']}
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={3000}
                /></h1>
      <ul className={hidden
        ? 'flex hidden' : 'hidden md:flex mr-10'}>
        <li className='py-4 px-5'>
          <Link to="/home" className='flex items-center' onClick={() => onUpdateActiveLink('banner')}>
            <img src={earth} alt="" className='px-2' />
            <span className={activeLink === 'banner' ? 'border-b-2' : ''}>Home</span>
          </Link></li>
        <li className='py-4 px-5'>
          <Link to="/projects" className='flex items-center' onClick={() => onUpdateActiveLink('projects')}>
          <img src={rocket} alt="" className='px-2' />
          <span className={activeLink === 'projects' ? 'border-b-2' : ''}>Projects</span>
        </Link></li>
        <li className='py-4 px-5'>
          <Link to="/skills" className='flex items-center' onClick={() => onUpdateActiveLink('skills')}>
          <img src={fallingStar} alt="" className='px-2' />
          <span className={activeLink === 'skills' ? 'border-b-2' : ''}>Skills</span>
        </Link></li>
        <li className='py-4 px-5'>
          <Link to="/resume" className='flex items-center' onClick={() => onUpdateActiveLink('resume')}>
          <img src={astronaut} alt="" className='px-2' />
          <span className={activeLink === 'resume' ? 'border-b-2' : ''}>Resume</span>
        </Link></li>
        <li className='py-4 px-5'>
          <Link to="/contact" className='flex items-center' onClick={() => onUpdateActiveLink('contact')}>
          <img src={satellite} alt="" className='px-2' />
          <span className={activeLink === 'contact' ? 'border-b-2' : ''}>Contact</span>
        </Link></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1C0620] ease-in-out duration-500 md:hidden ' : 'fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500 border-r-gray-900 bg-[#1C0620] '}>
        <h1 className='w-full text-2xl font-bold m-4'>omaima ouahline</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600'>
            <Link to="/home" className='flex items-center'>
              <img src={earth} alt="" className='px-2' />
              <span className={activeLink === 'banner' ? 'border-b-2' : ''}>Home</span>
            </Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to="/projects" className='flex items-center'>
              <img src={rocket} alt="" className='px-2' />
              <span className={activeLink === 'projects' ? 'border-b-2' : ''}>Projects</span>
            </Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to="/skills" className='flex items-center'>
              <img src={fallingStar} alt="" className='px-2' />
              <span className={activeLink === 'skills' ? 'border-b-2' : ''}>Skills</span>
            </Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to="/resume" className='flex items-center'>
              <img src={astronaut} alt="" className='px-2' />
              <span className={activeLink === 'resume' ? 'border-b-2' : ''}>Resume</span>
            </Link>
          </li>
          <li className='p-4 '>
            <Link to="/contact" className='flex items-center'>
              <img src={satellite} alt="" className='px-2' />
              <span className={activeLink === 'contact' ? 'border-b-2' : ''}>Contact</span>
            </Link>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default NavBar;
