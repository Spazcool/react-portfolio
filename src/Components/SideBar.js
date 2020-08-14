import React from 'react';
import {Link} from "react-router-dom";
// import Link from './Link.js';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import UserIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import MoneyIcon from '@material-ui/icons/Money';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <MenuIcon onClick={toggleDrawer('left', true)}/>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <div
          className={clsx(classes.list, {
            [classes.fullList]: 'left' === 'top' || 'left' === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >

          <List>
            <Link
              className={classes.link}
              key='home'
              to='/'
            >
              <ListItem 
                button
              >
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
            </Link>
            <Link
              className={classes.link}
              key='about'
              to='/about'
            >
              <ListItem 
                button
              >
                <ListItemIcon><UserIcon /></ListItemIcon>
                <ListItemText primary='About Me' />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link
              className={classes.link}
              key='personal'
              to='/projects/personal'
            >
              <ListItem 
                button
              >
                <ListItemIcon><CodeIcon /></ListItemIcon>
                <ListItemText primary='Personal Projects' />
              </ListItem>
            </Link>
            <Link
              className={classes.link}
              key='freelance'
              to='/projects/freelance'
              >
              <ListItem 
                button
              >
                <ListItemIcon><MoneyIcon /></ListItemIcon>
                <ListItemText primary='Freelance Projects' />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
}