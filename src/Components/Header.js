import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';

export default function Header(props){
  const links = props.links.map((prop) => <li><Link to={prop.route}>{prop.name}</Link></li>);
  return (
    <nav>
      <ul>
        {links}
      </ul>
    </nav>
  )
};


