import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Container from '@material-ui/core/Container';
import Accordian from './Components/Accordian.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Splash from './Components/Splash.js';
import About from './Components/About.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import './App.css';

import projectsJSON from './data/projects.json';

const useStyles = makeStyles({
  container: {
    'margin-top': '6em',
    'margin-bottom': '5em',
  },
});

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function App() {
  const classes = useStyles();
  const projects = (personal) => projectsJSON.projects
    .filter((project) => personal ? !project.professional : project.professional)
    .map((project) => project);

  return(
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header/>
        <Switch>
          <Route path="/react-portfolio/about">
            <Container className={classes.container}>
              <About />
            </Container>
          </Route>
          <Route path="/react-portfolio/projects/personal">
            <Container className={classes.container}>
              <Accordian projects={projects(true)}/>
            </Container>
          </Route>
          <Route path="/react-portfolio/projects/freelance">
            <Container className={classes.container}>
              <Accordian projects={projects(false)}/>
            </Container>
          </Route>
          <Route path="/react-portfolio">
            <Container className={classes.container}>
              <Splash/>
            </Container>
          </Route>
        </Switch>

        <Footer/>
      </Router>
    </ThemeProvider>
 )
}




