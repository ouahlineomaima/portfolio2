import { useState, useEffect } from "react";
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen'
import { Link } from "react-router-dom";
import NorthStar from '../assets/img/North Star 500.png'
import home from '../assets/img/home.png'
import projects from '../assets/img/projects.png'
import skills from '../assets/img/skills.png'
import resume from '../assets/img/resume.png'
import contact from '../assets/img/contact.png'

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Software engineer", "Full stack developer", "Mobile App developer", "UX/UI designer"];
    const [period, setPeriod] = useState(3000);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(75);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    useEffect(() => {
        const northStar = document.getElementById('NorthStar');
        const homeLink = document.getElementById('home');
        homeLink.style.top = "10px"
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            if (window.scrollY > document.getElementById('home').offsetHeight) {
                setActiveLink('projects');
            }
            if (window.scrollY + 70 < document.getElementById('home').offsetHeight) {
                setActiveLink('home');
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

        
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const handleHomeClick = () => {
        window.scrollTo({ top: document.getElementById("home").offsetTop, behavior: 'smooth' });
        setActiveLink('home');
    }
    const handleProjectsClick = () => {
        setActiveLink('projects');
        window.scrollTo({ top: document.getElementById("project").offsetTop, behavior: 'smooth' });

    }
    const handleContactClick = () => {
        window.scrollTo({ top: document.getElementById("contact").offsetTop, behavior: 'smooth' });
        setActiveLink('contact');
    }
    const handleSkillsClick = () => {
        window.scrollTo({ top: document.getElementById("skills").offsetTop, behavior: 'smooth' });
        setActiveLink('skills');
    }
    const handleResumeClick = () => {
        window.scrollTo({ top: document.getElementById("resume").offsetTop, behavior: 'smooth' });
        setActiveLink('resume');
    }


    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='aligh-items-center'>
                    <Col xs={12} md={5} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Welcome astronauts!</h2>
                                    <h2>I am omaima ouahline</h2>
                                    <h2>{`I am a `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software engineer", "Full stack developer", "Mobile App developer", "UX/UI designer"]'><span className="wrap">{text}</span></span></h2>
                                    <h2>Check my north star to know more about me </h2>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={7} xl={7}>
                        <div className='north-star-component'>
                            <img src={NorthStar} alt="northstar" className='north-star-img' id='NorthStar' />
                            <section className="nav-section">
                                <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                                    <Container>
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="ms-auto">
                                                <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link home' : 'navbar-link home'} id='home' onClick={() => handleHomeClick()}> <img src={home} alt="home" />
                                                </Nav.Link>
                                                <Nav.Link as={Link} to="/projects" className={activeLink === 'projects' ? 'active navbar-link projects' : 'navbar-link projects'} onClick={() => handleProjectsClick()}><img src={projects} alt="projects" /></Nav.Link>
                                                <Nav.Link as={Link} to="/projects" className={activeLink === 'skills' ? 'active navbar-link skills' : 'navbar-link skills'} onClick={() => handleSkillsClick()}><img src={skills} alt="skills" /></Nav.Link>
                                                <Nav.Link as={Link} to="/projects" className={activeLink === 'contact' ? 'active navbar-link contact' : 'navbar-link contact'} onClick={() => handleContactClick()}><img src={contact} alt="contact" /></Nav.Link>
                                                <Nav.Link as={Link} to="/projects" className={activeLink === 'resume' ? 'active navbar-link resume' : 'navbar-link resume'} onClick={() => handleResumeClick()}><img src={resume} alt="resume" /></Nav.Link>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </section>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
export default Banner;
