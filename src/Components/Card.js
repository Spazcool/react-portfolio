import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import '../App.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  float: {
    width: '50%',
    float: 'right',
  },
});

export default function ImgMediaCard(props) {
  const about = props.repo ? false : true;
  const matches = useMediaQuery('(max-width:800px)');
  const [path, setPath] = useState(`/react-portfolio/images/projects/${props.imagePath}/mobile.png`);
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    if(!about){
      if(matches){
        setMobile('mobile')
      }else{
        setMobile('desktop');
      }
      setPath(`/react-portfolio/images/projects/${props.imagePath}/${mobile}.png`);
    }
  },[matches, mobile, props.imagePath, about]);

  useEffect(() => {
    if(about){
      setPath(props.imagePath);
    }
  },[props.imagePath, about]);

  function showGif(bool) {
    if(!about){
      if(bool){
        setPath(`/react-portfolio/images/projects/${props.imagePath}/${mobile}.gif`)
      }else{
        setPath(`/react-portfolio/images/projects/${props.imagePath}/${mobile}.png`)
      }
    }
  }

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{props.name}</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={about ? 8 : 12}>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                todo list of tech to go here 
              </Typography> */}
            </Grid>
            <Grid item xs={12} md={about ? 4 : 12}>
              <CardMedia
                component="img"
                alt={props.name}
                width='100%'
                image={path}
                title={props.name}
                onMouseEnter={() => showGif(true)}
                onMouseLeave={() => showGif(false)}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}