import planet1 from '../assets/img/planets/planet 1.png'
import planet2 from '../assets/img/planets/planet 2.png'
import planet3 from '../assets/img/planets/planet 3.png'
import planet4 from '../assets/img/planets/planet 4.png'
import planet5 from '../assets/img/planets/planet 5.png'
import { Link } from 'react-router-dom'

export const ProjectPlanet = ({ index, id, title, shortDescription, description, tools, time }) => {
    const planets = [planet1, planet3, planet2, planet4, planet5]
    console.log(id)

    return (
        <Link to={`/projects/${id}`} className='flex py-4 font-SpaceMono mx-8' >
            <img src={planets[index % planets.length]} alt="" className='px-2 md:px-3 spin '  />
            <div className='px-2 border-l-2 flex-shrink-0'>
                <h2 className='text-lg md:text-lg uppercase'>{title}</h2>
                <h3 className='text-lg md:'>{shortDescription}</h3>
                <h3 className='md:text-sm'>{tools}</h3>
                <h3 className='md:text-sm'>{time}</h3>  
            </div>
        </Link>
    );
};
