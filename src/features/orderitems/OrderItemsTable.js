import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { formatCurrency } from '../../helpers'

const useStyles = makeStyles((theme) => ({
  total: {
    margin: '1rem',
  },
}));

export const OrderItemsTable= (props) => {
  const classes = useStyles();

  const total = props.orderitems.reduce((acc, orderitem) => acc + orderitem.attributes.price * orderitem.count, 0)

  return (
    <div>
      <TableContainer className={classes.container} component={Paper}>
      <center>
        <Typography variant="h4">
          Your Order:
        </Typography>
        <Divider></Divider>
      </center>
        <Table className={classes.container} aria-label="order items table">
          <TableBody>
            {props.orderitems.map((orderitem) => (
              <TableRow key={orderitem.attributes.name}>
                <TableCell>
                  {orderitem.attributes.name}
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(orderitem.attributes.price)} X {orderitem.count} 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography className={classes.total} variant="h6">
          Total: {formatCurrency(total)}
        </Typography>
      </TableContainer>
    </div>
  );
}

OrderItemsTable.propTypes = {
  orderitems: PropTypes.array,
  restaurant: PropTypes.array,
  orderitem: PropTypes.object,
}

export default OrderItemsTable;