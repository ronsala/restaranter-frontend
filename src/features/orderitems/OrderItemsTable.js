import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import OrderItemQuantityBox from './OrderItemQuantityBox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: "bold"
  },
}));

export const OrderItemsTable= (props) => {
  const classes = useStyles();

  return (
    <div>
      <br></br>
      <br></br>
      <center>
        <Typography variant="h2">
          Review Your Order:
        </Typography>
      </center>
      <br></br>
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.container} aria-label="order items table">
          <TableBody>
            {props.orderitems.map((orderitem) => (
              <TableRow key={orderitem.attributes.name}>
                <TableCell>
                  <Typography className={classes.name} variant="subtitle2" >
                    {orderitem.attributes.name}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2">
                    {orderitem.attributes.desc}
                  </Typography>
                </TableCell>
                <TableCell align="right">${orderitem.attributes.price}</TableCell>
                <TableCell align="right">
                  <OrderItemQuantityBox orderitem={orderitem} />
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
  restaurant: PropTypes.array,
}

export default OrderItemsTable;