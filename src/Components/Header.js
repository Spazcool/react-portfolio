import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import SideBar from './SideBar.js';

import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props){
  const classes = useStyles();
  
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <SideBar props={props}/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {/* todo swap out my name for location */}
          Douglas Wright
        </Typography>
      </Toolbar>
    </AppBar>
  )
};


