import React, {useEffect} from 'react';
import $ from 'jquery';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import {icons} from '../data/icons.json';
import '../App.css';

export default function Splash(props){

  useEffect(() => {
    $('.hide').hide();
    icons.forEach((icon, index) => {
      $(`.${icon.name}`).delay(index * 1000).fadeIn(1000);
    })
  },[]);

  const iconList = icons.map((icon) => <Grid item xs={3} className={`hide ${icon.name}`}>
    <CardMedia
      component="img"
      alt={icon.name}
      width='100%'
      image={icon.url}
    />
  </Grid>);

  return (
    <Grid container spacing={3} justify="center">
      {iconList}
    </Grid>
  )
};