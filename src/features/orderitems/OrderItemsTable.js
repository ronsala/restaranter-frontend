import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import uuid from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { formatCurrency } from '../../helpers';
import { postOrder } from '../orders/ordersSlice';
import { postOrderitem } from './orderitemsSlice';

// const date = new Date();
// const mm = date.getMonth();
// const dd = date.getDate();
// const yyyy = date.getFullYear();
// const hh = date.getHours();
// const mn = date.getMinutes();

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '12rem'
  },
  button: {
    margin: '0.5rem',
    width: '80%',
  },
  header: {
    color: '#fff',
    backgroundColor: '#000',
  },
  // date: {
  //   margin: '1rem',
  // },
}));

export const OrderItemsTable= (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const total = props.orderitems.reduce((acc, orderitem) => acc + orderitem.attributes.price * orderitem.count, 0)

  const [state, setState] = useState({
    order_type: 'dine in', 
    // orderitems: props.orderitems, 
    proceed: false, 
    restaurant_id: props.restaurantId, 
    total: total, 
    // uuid: uuid(), 
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  const handleCheckoutButtonClick = () => {
    dispatch(postOrder(state))
    props.orderitems.map(orderitem => {
      console.log('orderitem in handleCheckoutButtonClick:', orderitem);
      dispatch(postOrderitem(orderitem))    
    })
    history.push(`/your_order`)
  }

  return (
    <div>
      <TableContainer className={classes.container} component={Paper}>
      <center>
        <Typography className={classes.header} variant="h3">
          CHECK
        </Typography>
          <Typography className={classes.total} variant="h6">
            Total: {formatCurrency(total)}
          </Typography>
          { state.proceed
              ? <div>
                  <br></br>
                  <FormControl 
                    component="fieldset"
                  >
                    <FormLabel 
                      component="legend">
                        <strong>Choose Order Type:</strong>
                    </FormLabel>
                    <RadioGroup 
                      aria-label="order type" 
                      defaultValue="dine in"
                      name="order_type" 
                      onChange={handleChange} 
                      value={state.order_type} 
                    >
                      <FormControlLabel 
                        control={<Radio />} 
                        label="Dine In" 
                        value="dine in" 
                      />
                      <FormControlLabel 
                        control={<Radio />} 
                        label="Pick Up" 
                        value="pick up" 
                      />
                    </RadioGroup>
                  </FormControl>
                  <Button 
                    className={classes.button} 
                    color="primary"
                    onClick={handleCheckoutButtonClick} 
                    size="small" 
                    variant="contained" 
                  >
                    checkout
                  </Button>
                </div>
              : <Button 
                  className={classes.button} 
                  color="secondary"
                  onClick={() => {
                    setState({
                      ...state,
                      proceed: true
                    })
                  }}
                  size="small"  
                  variant="contained"
                >
                  proceed
                </Button>
          }


        {/* <Typography className={classes.date}>
          {mm}/{dd}/{yyyy} {hh}:{mn}
        </Typography> */}
        <Divider></Divider>
      </center>
        <Table className={classes.container} aria-label="order items table">
          <TableBody>
            {props.orderitems.map((orderitem) => (
              <TableRow key={orderitem.attributes.name}>
                <TableCell>
                  <Typography variant="body2">
                    {orderitem.attributes.name}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2">
                    {formatCurrency(orderitem.attributes.price)} X {orderitem.count} 
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

OrderItemsTable.propTypes = {
  orderitems: PropTypes.array,
  restaurantId: PropTypes.number,
}

export default OrderItemsTable;