import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import QuantityBox from './QuantityBox'

const useStyles = makeStyles((theme) => ({
  ordername: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function OrdersTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="orders table">
        <TableBody>
          {props.orders.map((order) => (
            <TableRow key={order.attributes.name}>
              <TableCell className={classes.ordername} component="th" scope="row">
                {order.attributes.name}
              </TableCell>
              <TableCell align="center">{order.attributes.desc}</TableCell>
              <TableCell align="right">${order.attributes.price}</TableCell>
              <TableCell align="right">
                <QuantityBox />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}
