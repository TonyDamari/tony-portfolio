import React from "react";
import TonyImg from "../assets/Profile.svg";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-img">
                <img src={TonyImg} alt="Profile" />
            </div>
            <div className="hero-text">
                <h1>Tony Damari</h1>
                <p>
                    Hi, I'm Tony. I am a Frontend Developer in Johannesburg, focused on web
                    development and web applications using current web technologies such as React, Node, Bootstrap and so on.
                    <br />
                    My goal is to gain enough experience to level up my skills and be a well rounded fullstack developer.
                </p>
                <div className="links">
                    <ul>
                        <li>
                            <a
                                href="https://github.com/TonyDamari"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/ConceptualLifeA"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="mailto:tony.damari@gmail.com">
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;
