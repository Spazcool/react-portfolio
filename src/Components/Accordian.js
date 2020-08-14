import React from 'react';
import Link from './Link.js';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from './Card.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
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
        <Typography className={classes.heading}>{project.name}</Typography>
        <Typography className={classes.secondaryHeading}><Link to={project.url}>{project.url}</Link></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Card
          name={project.name}
          description={project.description}
          repo={project.repo}
          imagePath={project.imagePath}
        />
        {/* // <Typography>{project.description}</Typography>
        // <Typography>{project.repo}</Typography>
        // <Typography><img src={`/images/projects/${project.imagePath}/mobile.png`} alt={project.name}/></Typography> */}
      </AccordionDetails>
    </Accordion>
  );

  return (
    <div className={classes.root}>
      {accordians}
    </div>
  );
}
