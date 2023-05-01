import { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter'
/* import backgroundImage from '../assets/img/bg-img.png'; */
import { Link } from "react-router-dom";
import NorthStar from '../assets/img/North Star 500.png'
import earth from '../assets/img/Earth.png'
import rocket from '../assets/img/Rocketship.png'
import fallingStar from '../assets/img/Falling star.png'
import astronaut from '../assets/img/Astronaut.png'
import satellite from '../assets/img/Satellite 1.png'

function Banner() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const onUpdateActiveLink = (value) => {
        const element = document.getElementById(value)
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
          setActiveLink(value);
        }
    
      }
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            if (window.scrollY > document.getElementById('banner').offsetHeight) {
                setActiveLink('projects');
            }
            if (window.scrollY + 70 < document.getElementById('banner').offsetHeight) {
                setActiveLink('home');
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);


    }, [])


    return (
        <section className='h-screen bg-cover bg-no-repeat bg-center font-SpaceMono flex justify-between' id='banner'>
            <div className="text-white px-12 mt-28 font-bold w-1/2">
                <h1 className="text-xl md:text-2xl w-full pb-3">Welcome astronauts!</h1>
                <h1 className="text-xl md:text-2xl w-full py-3">I am omaima ouahline</h1>
                <h1 className="text-xl md:text-2xl w-full py-3">I am a <span> <Typewriter
                    words={['Software engineer', 'Full stack developer', 'Mobile app developer', 'UX/UI designer']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></span></h1>
                <h1 className="text-xl lg::text-2xl w-full pt-3">Check my north star to know more about me</h1>
            </div>
            <div className="mt-28 w-1/2">
                <img src={NorthStar} alt="" className="w-[500] h-[268]" />
                <ul className='flex text-white w-[500] h-[268]'>
                    <li className='py-4 px-5'>
                        <Link to="/home" className='flex items-center' onClick={() => onUpdateActiveLink('banner')}>
                            <img src={earth} alt="" className='px-2' />
                            <span className=''>Home</span>
                        </Link></li>
                    <li className='py-4 px-5'>
                        <Link to="/projects" className='flex items-center' onClick={() => onUpdateActiveLink('projects')}>
                            <img src={rocket} alt="" className='px-2' />
                            <span className=''>Projects</span>
                        </Link></li>
                    <li className='py-4 px-5'>
                        <Link to="/skills" className='flex items-center' onClick={() => onUpdateActiveLink('skills')}>
                            <img src={fallingStar} alt="" className='px-2' />
                            <span className=''>Skills</span>
                        </Link></li>
                    <li className='py-4 px-5'>
                        <Link to="/resume" className='flex items-center' onClick={() => onUpdateActiveLink('resume')}>
                            <img src={astronaut} alt="" className='px-2' />
                            <span className=''>Resume</span>
                        </Link></li>
                    <li className='py-4 px-5'>
                        <Link to="/contact" className='flex items-center' onClick={() => onUpdateActiveLink('contact')}>
                            <img src={satellite} alt="" className='px-2' />
                            <span className=''>Contact</span>
                        </Link></li>
                </ul>
            </div>


        </section>
    )
}
export default Banner;
