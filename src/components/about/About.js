import React from 'react';
import './About.css';
import {BiUser} from 'react-icons/bi';
import animationData1 from "../../lotties/dev1.json";
import { Player } from '@lottiefiles/react-lottie-player';
const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                    <Player
                  className="name"
                  autoplay
                  loop
                  src={animationData1}
                  alt="image"
                  style={{ height: "20rem",   backgroundColor: "rgba(77, 181, 255, 0.6)" }}
                ></Player>
                    </div>
                </div>
                <div className="about__content">
                    <p>
                        I completed my Bachelor of Engineering in Electronics and Communication Engineering.
                        I am passionate about technology and love to learn new things. So, I
                        decided to level up my skills and shortly after that, I enrolled
                        myself in a full-stack development course. I started to learn
                        full-stack with joy. I have a strong passion for both front-end and
                        back-end development. I love to learn and I am always looking to
                        learn and experiment with new technologies! This is how an Engineering in Electronics and Communication Engineer turned into a full-stack developer.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;