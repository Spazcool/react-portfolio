import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WWWIcon from '@material-ui/icons/Language';
import CodeIcon from '@material-ui/icons/CodeOutlined';

import Link from './Link.js';
import Card from './Card.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    'margin-right': '1em',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  text: {
    'vertical-align': 'super',
  },
}));

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordians = props.projects.map((project) => 
    <Accordion
      key={project.url}
      expanded={expanded === project.imagePath}
      onChange={handleChange(project.imagePath)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography className={classes.heading}>{project.name}</Typography>
          </Grid>
         
          <Grid item xs={6} md={4}>
            <Typography className={classes.secondaryHeading}><Link to={project.url}><WWWIcon /></Link> <span className={classes.text}>site</span></Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography className={classes.secondaryHeading}><Link to={project.repo}><CodeIcon/></Link> <span className={classes.text}>repo</span></Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Card
          name={project.name}
          description={project.description}
          repo={project.repo}
          imagePath={project.imagePath}
          tech={project.tech}
          expanded={expanded}
        />
      </AccordionDetails>
    </Accordion>
  );

  return (
    <div className={classes.root}>
      {accordians}
    </div>
  );
}
