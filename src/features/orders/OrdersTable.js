/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes, { array } from 'prop-types';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  important: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const OrdersTable = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleViewButtonClick = (orderId) => {
    history.push(`/orders/${orderId}`)
  }

  return (
    <div>
      <Typography variant="h1">
        {props.restaurant.attributes.name} Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="orders table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.important}>Order Id</TableCell>
              <TableCell className={classes.important} align="center">Total</TableCell>
              <TableCell className={classes.important} align="center">Fulfilled?</TableCell>
              <TableCell className={classes.important} align="center"></TableCell>
              </TableRow>
            </TableHead>
          <TableBody>
            {props.orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className={classes.important} component="th" scope="row">
                  {order.id}
                </TableCell>
                <TableCell align="center">
                  {order.attributes.total}
                </TableCell>
                <TableCell align="center">
                  {order.attributes.fulfilled
                    ? <div>Yes</div>
                    : <div>No</div>
                  }
                </TableCell>
                <TableCell align="center">
                  <Button color="secondary" variant="contained" onClick={() => handleViewButtonClick(order.id)}>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    );
}

OrdersTable.propTypes = {
  orders: PropTypes.array, 
  restaurant: PropTypes.object, 
}

export default OrdersTable;