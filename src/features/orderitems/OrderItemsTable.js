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
import Button from '@material-ui/core/Button'
import { formatCurrency } from '../../helpers';

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
  checkoutButton: {
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

  const total = props.orderitems.reduce((acc, orderitem) => acc + orderitem.attributes.price * orderitem.count, 0)

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
          <Button className={classes.checkoutButton} size="small"  variant="contained" color="primary">
            checkout
          </Button>
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
  restaurant: PropTypes.array,
  orderitem: PropTypes.object,
}

export default OrderItemsTable;