import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Accordian from './Components/Accordian.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
// import Project from './Components/Project.js';
import Splash from './Components/Splash.js';
import About from './Components/About.js';

import projectsJSON from './data/projects.json';

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

export default function App() {
  const links = [
    {route:'/', name:'Home'},
    {route:'/about', name: 'About'},
    {route:'/projects/personal', name: 'Personal Projects'},
    {route:'/projects/freelance', name: 'Freelance Projects'}
  ];

  const projects = (personal) => projectsJSON.projects
    .filter((project) => personal ? !project.professional : project.professional)
    .map((project) => project);

  return(
    <Router>
      <CssBaseline />
      <Header links={links}></Header>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects/personal">
          <Accordian projects={projects(true)}/>
        </Route>
        <Route path="/projects/freelance">
          <Accordian projects={projects(false)}/>
        </Route>
        <Route path="/">
          <Splash/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
 )
}




