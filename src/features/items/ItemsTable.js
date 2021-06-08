import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import QuantityBox from './QuantityBox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '150%'
  },
  name: {
    fontWeight: "bold",
  },
}));

export const ItemsTable = (props) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table aria-label="items table">
        <TableBody>
          {props.items.map((item) => (
            <TableRow key={item.attributes.name}>
              <TableCell>
                <Typography className={classes.name} variant="subtitle2" >
                  {item.attributes.name}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body2">
                  {item.attributes.desc}
                </Typography>
              </TableCell>
              <TableCell align="right">${item.attributes.price}</TableCell>
              <TableCell align="right">
                <QuantityBox item={item} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ItemsTable.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemsTable;