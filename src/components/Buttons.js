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
    marginLeft: '5px', 
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
        onClick={() => props.handleEditButton(props.modelId)}
        size="large" 
        type="submit" 
        variant="contained"
      >
        Edit
      </Button>
      <Button 
        className={classes.button} 
        color="primary" 
        onClick={() => props.handleDeleteButton(props.modelId)}
        size="large" 
        type="submit" 
        variant="contained"
      >
        Delete
      </Button>
      <Button 
        className={classes.button} 
        color="secondary" 
        onClick={() => props.handleAddButton(props.modelId)}
        size="large" 
        type="submit" 
        variant="contained"
      >
        Add { props.child }
      </Button>
    </center>
  )
}

Buttons.propTypes = {
  handleAddButton: PropTypes.func, 
  handleDeleteButton: PropTypes.func, 
  handleEditButton: PropTypes.func, 
  modelId: PropTypes.number, 
  child: PropTypes.string, 
}

export default Buttons;