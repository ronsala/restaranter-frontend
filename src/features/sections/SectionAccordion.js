import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ItemsContainer from '../items/ItemsContainer';
import { fetchItems } from '../items/itemsSlice';

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

  const dispatch = useDispatch();

  useEffect(() => {
    if (props && props.section) {
      dispatch(fetchItems({restaurantId: props.restaurant_id, menuId: props.menuId, sectionId: props.section.id}))
    }
  // }, [dispatch, props])
  }, [dispatch])

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

SectionAccordion.propTypes = {
  section: PropTypes.object.isRequired,
  restaurant_id: PropTypes.number.isRequired,
  menuId: PropTypes.number.isRequired,
  menu_id: PropTypes.object
}

export default SectionAccordion;