import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import { addItemToOrderitems, deleteItemFromOrderitems } from '../orderitems/orderitemsSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    whiteSpace: 'nowrap',
  },
  icon: {
    fontSize: theme.typography.pxToRem(30),
    cursor: 'pointer',
    margin: theme.spacing(0),
  },
  quantity: {
    margin: theme.spacing(1),
    width: '6ch',
  },
}));

export const QuantityBox = (props) => {
  const [count, setCount] = useState(0)
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDecrementClick = () => {
    if (count >= 2) {
      setCount(count - 1)
    }

    if (count === 1) {
       setCount(count - 1)
       dispatch(deleteItemFromOrderitems(props.item)) 
    }
  }

  const handleIncrementClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    // Prevent 'Object is not extensible' errors.
    const orderitem = JSON.parse(JSON.stringify(props.item))
    orderitem["count"] = count

    if (count > 0) {
      // Remove item with old count.
      dispatch(deleteItemFromOrderitems(orderitem))
  
      // Add item with new count.
      dispatch(addItemToOrderitems(orderitem))
    }
      // `props.item` is not included in dependency array because doing so would set up an infinite loop.
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])
  
  return (
    <div className={classes.root}>
      <RemoveCircleIcon className={classes.icon} onClick={handleDecrementClick} color="primary">
        <Typography variant="srOnly">Remove one</Typography>
      </RemoveCircleIcon>
      <TextField className={classes.quantity} id={props.item.id} variant="outlined" name="quantity_box" value={count}/>
      <AddCircleIcon className={classes.icon} id='add-circle-icon' onClick={handleIncrementClick} color="primary">
        <Typography variant="srOnly">Add one</Typography>
      </AddCircleIcon>
    </div>
  )
}

QuantityBox.propTypes = {
  item: PropTypes.object.isRequired,
};

export default QuantityBox;