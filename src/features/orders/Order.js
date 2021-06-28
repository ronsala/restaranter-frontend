import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography';
import { formatCurrency } from '../../helpers';
import {patchOrder} from './ordersSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
  },
  container: {
    padding: '2rem',
  },
  name: {
    fontWeight: "bold",
  },
}));

export const Order = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const date = new Date(props?.order.attributes.created_at);
  const mm = date.getMonth();
  const dd = date.getDate();
  const yyyy = date.getFullYear();
  const hh = ('0' + date.getHours()).slice(-2);
  const mn = ('0' + date.getMinutes()).slice(-2);

  const handleMarkFulfilledButtonClick = (orderId) => {
    dispatch(patchOrder({order_id: orderId, fulfilled: true}))
    alert('Order fulfilled')
    history.goBack()
  }

  return (
    <div>
      { (props && props.order) 
          ? (<div>
              <Paper>
                <Typography variant="h1">
                  Order #{ props.order.id }
                </Typography>
                <Typography variant="subtitle1">
                  Restaurant: { props.restaurant.attributes.name }, { props.restaurant.attributes.street }, { props.restaurant.attributes.city }, { props.restaurant.attributes.state }
                </Typography>
                <Typography variant="subtitle1">
                  Placed: {mm}/{dd}/{yyyy} {hh}:{mn}
                </Typography>
                <Typography variant="subtitle1">
                  Order Type: { props.order.attributes.order_type }
                </Typography>
                <br></br>
                <Divider></Divider>
                <br></br>
                <Typography variant="h6">
                  Items: 
                </Typography> 
                <TableContainer className={classes.container}>
                  <Table aria-label="restaurants table">
                    <TableBody>
                      { props.order.attributes.order_items.map((order_item) => (
                        <TableRow key={order_item.id}>
                          <TableCell className={classes.root}>
                            <Typography>
                            </Typography>
                          </TableCell>
                          <TableCell className={classes.root}>
                            <Typography className={classes.name} >
                              {order_item.attributes.name}
                            </Typography>
                          </TableCell>
                          <TableCell className={classes.root}>
                            <Typography>
                              {formatCurrency(order_item.attributes.price)}
                            </Typography>
                          </TableCell>
                          <TableCell className={classes.root}>
                            <Typography>
                              X {order_item.count}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Typography variant="h6">
                  Order Total: { formatCurrency(props.order.attributes.total) }
                </Typography>
                { props.order.attributes.fulfilled || props.restaurant.attributes.user_id !== parseInt(props.currentUserId)
                    ? <div></div>
                    : (<div>
                        <center>
                          <br></br>
                          <Button color="primary" variant="contained" size="large" onClick={() => handleMarkFulfilledButtonClick(props.order.id)}>Mark Fulfilled</Button>
                          <br></br>
                        </center>
                      </div>)
                }
                <br></br>
              </Paper>
            </div>) 
          : (<p>Loading...</p>)
      }
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.object,
  restaurant: PropTypes.object, 
  total: PropTypes.number, 
  buttons: PropTypes.node, 
  currentUserId: PropTypes.string, 
}

export default Order;