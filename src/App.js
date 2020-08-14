import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Accordian from './Components/Accordian.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Splash from './Components/Splash.js';
import About from './Components/About.js';

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import projectsJSON from './data/projects.json';

// export const Container = styled.div`
  // display: flex;
  // min-height: 100vh;
  // flex-direction: column;
// `;

const useStyles = makeStyles({
  container: {
    'margin-top': '6em',
    'margin-bottom': '5em',
    'border': '2px dotted red',

    // display: 'flex',
    // 'min-height': '83vh',
    // 'flex-direction': 'column',
  },
});

export default function App() {
  const classes = useStyles();
  const projects = (personal) => projectsJSON.projects
    .filter((project) => personal ? !project.professional : project.professional)
    .map((project) => project);

  return(
    <Router>
      <CssBaseline />
      <Header/>
      <Switch>
        <Route path="/about">
          <Container className={classes.container}>
            <About />
          </Container>
        </Route>
        <Route path="/projects/personal">
          <Container className={classes.container}>
            <Accordian projects={projects(true)}/>
          </Container>
        </Route>
        <Route path="/projects/freelance">
          <Container className={classes.container}>
            <Accordian projects={projects(false)}/>
          </Container>
        </Route>
        <Route path="/">
          <Container className={classes.container}>
            <Splash/>
          </Container>
        </Route>
      </Switch>

      <Footer/>
    </Router>
 )
}




