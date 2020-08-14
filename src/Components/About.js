import React from 'react';
import '../App.css';

export default function About(props){
  return (
    <main className="mdl-layout__content">
    <div className="mdl-grid blocks">
        <div className="card-event mdl-card mdl-shadow--2dp mdl-cell mdl-cell--6-col mdl-cell--12-col-phone project-card" >
            <div className="timeBlock mdl-cell mdl-cell--12-col mdl-cell--12-col-phone" >
                <h4 >Douglas Wright</h4>
            </div>
            <div className="mdl-card__actions mdl-card--border center-items">
                <div className="description">
                    <p><img src='/images/face.jpg' id="aboutFace" alt='doug'/>For me, Frontend Development is a great opportunity. At the heart of it is pure creation. It can be messy and rushed, or focused and painfully slow, but it's always taking nothing but an idea and finding the appropriate route and tools to bring that to a finished product. I love that. From nothing, something.</p>
                    <p>Please have a look at my <a href="/projects.html">personal</a> or <a href="/professional.html">freelance</a> projects, each one includes a link to both its deployed site as well as its own repo on GitHub, should you want to peek at the code. Feel free to contact me if you like what you see.</p>
                    <p>Or, to put it in a way recruiters will appreciate: Full-stack web developer with QA experience. Skills honed in Protractor, Node, RSpec, MongoDB, AWS OpsWorks, GhostInspector, Google Analytics, Postman & Git, with strengths in bug hunting and working as an independent part of an Agile team. As a Software QA Engineer, I have regularly written E2E and Integrations tests, as well as contributing to the application frontend. Additionally, I have uncovered vulnerabilities within the app, including XSS Attack & script injection. Passionate about problem solving and seeking out edge cases. Genuinely interested in the field, I have gone from self-taught to on-job training to completing a 6-month long Full-Stack Coding Bootcamp. Fascinated by the promise of computer science scaled to solve global projects. My technical background coupled with my internal drive to understand the tools provided and the problems at hand, make me a strong addition to any development team.</p>
                    <div className="links">
                        <a href="https://github.com/Spazcool" target="_blank"><i className="fab fa-github-square"></i></a>
                        <a href="https://www.linkedin.com/in/douglaswrightiii/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/SpazC00l" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="mailto:douglas.wrightiii@gmail.com?subject=I saw your site..." target="_blank"><i className="fas fa-envelope"></i></a>
                        <a href="https://www.freecodecamp.com/spazcool" target="_blank"><i className="fab fa-free-code-camp"></i></a>
                        <a href="../docs/2020CV.pdf" target="_blank"><i className="fa fa-file"></i></a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

  )
};