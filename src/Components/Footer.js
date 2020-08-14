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
  //  'margin-top': 'calc(5% + 60px)',
    bottom: 0,
    position: 'fixed',
    width: '100%',
    'background-color': 'red',
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

    // <footer className="mdl-mini-footer">
    //   <ul className="mdl-mini-footer__link-list">
    //     <li><a href="https://github.com/Spazcool"><i className="fab fa-github-square"></i> GitHub</a></li>
    //     <li><a href="https://www.linkedin.com/in/douglaswrightiii/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
    //     <li><a href="https://twitter.com/SpazC00l"><i className="fab fa-twitter"></i> Twitter</a></li>
    //     <li><a href="mailto:douglas.wrightiii@gmail.com?subject=I saw your site..."><i className="fas fa-envelope"></i> Gmail</a></li>
    //   </ul>
    //   <div className="mdl-mini-footer__right-section">
    //     <a href='https://www.spazcool.com'><img src='../imgs/favicons/index.ico'/></a>
    //   </div>
    // </footer>