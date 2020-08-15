import React from 'react';
import {Link} from "react-router-dom";

import Card from './Card.js';

import '../App.css';

export default function About(props){
  return (
    <Card
      name='Douglas Wright'
      imagePath='/images/face.jpg'
      description={<div><p>For me, Frontend Development is a great opportunity. At the heart of it is pure creation. It can be messy and rushed, or focused and painfully slow, but it's always taking nothing but an idea and finding the appropriate route and tools to bring that to a finished product. I love that. From nothing, something.</p>
      <p>Please have a look at my <Link key='personal' to='/projects/personal'>personal</Link> or <Link key='freelance' to='/projects/freelance'>freelance</Link> projects, each one includes a link to both its deployed site as well as its own repo on GitHub, should you want to peek at the code. Feel free to contact me if you like what you see.</p>
      <p>Or, to put it in a way recruiters will appreciate: Full-stack web developer with QA experience. Skills honed in Protractor, Node, RSpec, MongoDB, AWS OpsWorks, GhostInspector, Google Analytics, Postman & Git, with strengths in bug hunting and working as an independent part of an Agile team. As a Software QA Engineer, I have regularly written E2E and Integrations tests, as well as contributing to the application frontend. Additionally, I have uncovered vulnerabilities within the app, including XSS Attack & script injection. Passionate about problem solving and seeking out edge cases. Genuinely interested in the field, I have gone from self-taught to on-job training to completing a 6-month long Full-Stack Coding Bootcamp. Fascinated by the promise of computer science scaled to solve global projects. My technical background coupled with my internal drive to understand the tools provided and the problems at hand, make me a strong addition to any development team.</p></div>}
    />
  )
};