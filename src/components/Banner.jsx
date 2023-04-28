import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen'

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Software engineer", "Full stack developer", "Mobile App developer", "UX/UI designer"];
    const [period, setPeriod] = useState(3000);

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
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='aligh-items-center'>
                    <Col xs={true} md={true} xl={true}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Welcome astronauts!</h2>
                                    <h2>I am omaima ouahline</h2>
                                    <h2>{`I am a `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software engineer", "Full stack developer", "Mobile App developer", "UX/UI designer"]'><span className="wrap">{text}</span></span></h2>
                                    <h2>Check my north star to know </h2>
                                    <h2>more about me</h2>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={true} md={true} xl={true}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div>blabla</div>
                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
export default Banner;
