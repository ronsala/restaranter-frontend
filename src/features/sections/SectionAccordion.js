import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ItemsContainer from '../items/ItemsContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  branch: {
    width: '75%'
  }
}));

export const SectionAccordion = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br></br>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.root}
        >
          <Typography variant="h2">
            { props.section.attributes.name }
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.root}>
          <ItemsContainer className={classes.branch} section={props.section} restaurant_id={props.restaurant_id} menu_id={props.menuId} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SectionAccordion;