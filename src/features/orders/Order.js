import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography';
import { formatCurrency } from '../../helpers';

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

const date = new Date(props?.order.attributes.created_at);
  const mm = date.getMonth();
  const dd = date.getDate();
  const yyyy = date.getFullYear();
  const hh = date.getHours();
  const mn = date.getMinutes();

  return (
    <div>
      { (props && props.order) 
          ? (<div>
              <Paper>
                <Typography variant="h1">
                  Your Order
                </Typography>
                <Typography variant="subtitle1">
                  Order Id: { props.order.id }
                </Typography>
                <Typography variant="subtitle1">
                  Placed: {mm}/{dd}/{yyyy} {hh}:{mn}
                </Typography>
                <Typography variant="subtitle1">
                  Restaurant: { props.restaurant.attributes.name }, { props.restaurant.attributes.street }, { props.restaurant.attributes.city }, { props.restaurant.attributes.state }
                </Typography>
                <br></br>
                <Divider></Divider>
                <Typography variant="h6">
                  Items: 
                </Typography> 
                <TableContainer className={classes.container}>
                  <Table aria-label="restaurants table">
                    <TableBody>
                      { props.order.attributes.order_items.map((order_item) => (
                        <TableRow key={order_item.id}>
                          <TableCell className={classes.root}>
                            <Typography className={classes.name} variant="subtitle1" >
                              {order_item.attributes.name}
                            </Typography>
                          </TableCell>
                          <TableCell className={classes.root}>
                            <Typography className={classes.name} variant="subtitle1" >
                              {formatCurrency(order_item.attributes.price)}
                            </Typography>
                          </TableCell>
                          <TableCell className={classes.root}>
                            <Typography className={classes.name} variant="subtitle1" >
                              X {order_item.count}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                </Paper>
              </div>
            ) : 
        (<p>Loading...</p>)
      }
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.object,
  restaurant: PropTypes.object, 
  buttons: PropTypes.node, 
}

export default Order;