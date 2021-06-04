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
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SectionAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br></br>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            { props.section.attributes.name }
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ItemsContainer section={props.section} restaurant_id={props.restaurant_id} menu_id={props.menuId} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
