/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    whiteSpace: 'nowrap', 
  }, 
  button: {
    marginLeft: '5%', 
  },
}))

const Buttons = (props) => {
  const classes = useStyles();

  return (
    <center className={classes.root}>
      <br></br>
      <Button 
        className={classes.button} 
        color="secondary" 
        onClick={() => props.handleEditButton(props.sectionId)}
        size="large" 
        type="submit" 
        variant="contained"
      >
        Edit
      </Button>
      <Button 
        className={classes.button} 
        color="primary" 
        onClick={() => props.handleDeleteButton(props.sectionId)}
        size="large" 
        type="submit" 
        variant="contained"
      >
        Delete
      </Button>
      <Button 
        className={classes.button} 
        color="secondary" 
        onClick={() => props.handleAddButton(props.sectionId)}
        size="large" 
        type="submit" 
        variant="contained"
      >
        Add item
      </Button>
    </center>
  )
}

Buttons.propTypes = {
  handleAddButton: PropTypes.func, 
  handleDeleteButton: PropTypes.func, 
  handleEditButton: PropTypes.func, 
  sectionId: PropTypes.number, 
}

export default Buttons;