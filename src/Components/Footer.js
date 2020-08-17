import React, {useState} from 'react';
// import {Link} from "react-router-dom";
import Link from './Link.js';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';

import '../App.css';
const useStyles = makeStyles({
  footer: {
    bottom: 0,
    position: 'fixed',
    width: '100%',
  },
});

export default function Footer(props){
  const classes = useStyles();
  const [value, setValue] = useState('');

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.footer}
    >
      <BottomNavigationAction 
        component={Link}
        to="https://www.github.com/Spazcool"
        label="GitHub"
        icon={<GitHubIcon />} 
      />
      <BottomNavigationAction
        component={Link}
        to="https://www.linkedin.com/in/douglaswrightiii/"
        label="LinkedIn" 
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="https://twitter.com/SpazC00l"
        label="Twitter"
        icon={<TwitterIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="mailto:douglas.wrightiii@gmail.com?subject=I saw your site..."
        label="Gmail"
        icon={<EmailIcon />}
      />
    </BottomNavigation>
  )
};

// <a href="https://www.freecodecamp.com/spazcool" target="_blank"><i className="fab fa-free-code-camp"></i></a>
// <a href="../docs/2020CV.pdf" target="_blank"><i className="fa fa-file"></i></a>