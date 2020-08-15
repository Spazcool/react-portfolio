import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
  const [path, setPath] = useState(`/images/projects/${props.imagePath}/mobile.png`);

  useEffect(() => {
    if(!props.repo){
      setPath(props.imagePath);
    }
  },[])

  function showGif(bool) {
    if(bool){
      setPath(`/images/projects/${props.imagePath}/mobile.gif`)
    }else{
      setPath(`/images/projects/${props.imagePath}/mobile.png`)
    }
  }

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{props.name}</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
              {/* 
              todo add a tech description
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography> */}
            </Grid>
            <Grid item xs={12} md={4}>
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