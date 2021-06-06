import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    whiteSpace: 'nowrap',
  },
  icon: {
    fontSize: theme.typography.pxToRem(60),
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
    <div className={classes.root}>
      <RemoveCircleIcon className={classes.icon} onClick={handleDecrementClick} color="primary">
        <Typography variant="srOnly">Remove one</Typography>
      </RemoveCircleIcon>
      <TextField className={classes.quantity} id="outlined-basic" variant="outlined" name="quantity_box" value={count}/>
      <AddCircleIcon className={classes.icon} onClick={() => setCount(count + 1)} color="primary">
        <Typography variant="srOnly">Add one</Typography>
      </AddCircleIcon>
    </div>
  )
}

export default QuantityBox;