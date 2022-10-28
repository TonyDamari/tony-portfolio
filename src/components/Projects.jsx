import React from "react";

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                <div className="project">
                    <div className="project-link">
                        <h3>
                            <a href="https://camming-desk.up.railway.app/">
                                Camming Desk
                            </a>
                        </h3>
                    </div>
                    <div className="project-description">
                        <h2>Camming Desk</h2>
                        <p>A ticketing system that is made using the MERN stack.</p>
                        <small>MERN</small>
                    </div>
                </div>
                <div className="project">
                    <div className="project-link">
                        <h3>
                            <a href="https://tonydamari.github.io/odin-admin-dashboard/">
                                Dashboard
                            </a>
                        </h3>
                    </div>
                    <div className="project-description">
                    <h2>Dashboard</h2>
                        <p>An example of a dashboard</p>
                        <small>HTML, CSS </small>
                    </div>
                </div>
                <div className="project">
                    <div className="project-link">
                        <h3>
                            <a href="https://tonydamari.github.io/odin-rock-paper-scissors/">
                                Rock Paper Scissors Game
                            </a>
                        </h3>
                    </div>
                    <div className="project-description">
                        <h2>Rock Paper Scissors Game</h2>
                        <p>A game built using vanilla JS.</p>
                        <small>HTML, CSS JS</small>
                    </div>
                </div>
                <div className="project">
                    <div className="project-link">
                        <h3>
                            <a href="https://tonydamari.github.io/odin-sign-up-form/">
                                Sign Up Form
                            </a>
                        </h3>
                    </div>
                    <div className="project-description">
                    <h2>Sign Up Form</h2>
                        <p>Basic sign up form.</p>
                        <small>HTML, CSS JS</small>
                    </div>
                </div>
                <div className="project">
                    <div className="project-link">
                        <h3>
                            <a href="https://tonydamari.github.io/odin-todo-app/">
                                To Do
                            </a>
                        </h3>
                    </div>
                    <div className="project-description">
                        <h2>To Do App</h2>
                        <p>The age old todo list that performs basic CRUD functionality built using React.</p>
                        <small>React</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
