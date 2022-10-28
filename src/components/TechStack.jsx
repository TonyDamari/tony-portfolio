import React from 'react'
import html from '../assets/html5-logo-31819.png'
import reactImg from '../assets/react.png'
import NodeImg from '../assets/node.png'
import ExpressImg from '../assets/express.png'
import MongoImg from '../assets/mongodb.png'
import GithubImg from '../assets/github.png'
import NPMImg from '../assets/npm.png'
import FigmaImg from '../assets/figma.png'
import VScodeImg from '../assets/vscode.png'

const TechStack = () => {
  return (
      <section className="techstack">
          <h2>Tech Stack</h2>
          <div className="cards">
              <div className="card">
                  <img src={html} alt="HTML/CSS & JavaScript" />
                  <h3>HTML/CSS & JavaScript</h3>
              </div>
              <div className="card">
                  <img src={reactImg} alt="React" />
                  <h3>React</h3>
              </div>
              <div className="card">
                  <img src={NodeImg} alt="NodeJS" />
                  <h3>NodeJS</h3>
              </div>
              <div className="card">
                  <img src={ExpressImg} alt="ExpressJS" />
                  <h3>ExpressJS</h3>
              </div>
              <div className="card">
                  <img src={MongoImg} alt="MongoDB" />
                  <h3>MongoDB</h3>
              </div>
              <div className="card">
                  <img src={GithubImg} alt="Github" />
                  <h3>Github</h3>
              </div>
              <div className="card">
                  <img src={NPMImg} alt="NPM" />
                  <h3>NPM</h3>
              </div>
              <div className="card">
                  <img src={FigmaImg} alt="Figma" />
                  <h3>Figma</h3>
              </div>
              <div className="card">
                  <img src={VScodeImg} alt="VS Code" />
                  <h3>VS Code</h3>
              </div>
          </div>
    </section>
  )
}

export default TechStack