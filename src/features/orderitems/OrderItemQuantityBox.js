import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import { addItemToOrderitems, deleteItemFromOrderitems } from './orderitemsSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    whiteSpace: 'nowrap',
  },
  icon: {
    fontSize: theme.typography.pxToRem(60),
    cursor: 'pointer'
  },
  quantity: {
    margin: theme.spacing(1),
    width: '6ch',
  },
}));

const OrderItemQuantityBox = (props) => {
  console.log('props in OrderItemQuantityBox:', props);
  const [reviewCount, setCount] = useState(props.orderitem.count)
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDecrementClick = () => {
    if (reviewCount >= 1) {
      setCount(reviewCount - 1)
    }
  }

  const handleIncrementClick = () => {
    setCount(reviewCount + 1)
  }

  useEffect(() => {
    // Prevent 'Object is not extensible' errors.
    const orderitem = JSON.parse(JSON.stringify(props.orderitem))
    
    orderitem["count"] = reviewCount
    console.log('orderitem:', orderitem);

    // Remove item with old count.
    dispatch(deleteItemFromOrderitems(orderitem))

    // Add item with new count.
    dispatch(addItemToOrderitems(orderitem))
  }, [reviewCount, dispatch])
  
  return (
    <div className={classes.root}>
      <RemoveCircleIcon className={classes.icon} onClick={handleDecrementClick} color="primary">
        <Typography variant="srOnly">Remove one</Typography>
      </RemoveCircleIcon>
      <TextField className={classes.quantity} id="outlined-basic" variant="outlined" name="order_items_quantity_box" value={reviewCount}/>
      <AddCircleIcon className={classes.icon} onClick={handleIncrementClick} color="primary">
        <Typography variant="srOnly">Add one</Typography>
      </AddCircleIcon>
    </div>
  )
}

export default OrderItemQuantityBox;