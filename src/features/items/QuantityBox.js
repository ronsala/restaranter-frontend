import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: theme.typography.pxToRem(50),
  },
  quantity: {
    margin: theme.spacing(1),
    width: '6ch',
  },
}));

const QuantityBox = () => {
  const [count, setCount] = useState(0)
  const classes = useStyles();

  const handleDecrementClick = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
    
  }
  
  return (
    <div>
      <Icon className={classes.icon} onClick={handleDecrementClick} color="primary">remove_circle</Icon>
      <Typography variant="srOnly">Remove one</Typography>
      <TextField className={classes.quantity} id="outlined-basic" variant="outlined" name="quantity_box" value={count}/>
      <Icon className={classes.icon} onClick={() => setCount(count + 1)} color="primary">add_circle</Icon>
      <Typography variant="srOnly">Add one</Typography>
    </div>
  )
}

export default QuantityBox;