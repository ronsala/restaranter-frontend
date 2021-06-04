import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  itemname: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function BasicTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="items table">
        <TableBody>
          {props.items.map((item) => (
            <TableRow key={item.attributes.name}>
              <TableCell className={classes.itemname} component="th" scope="row">
                {item.attributes.name}
              </TableCell>
              <TableCell align="center">{item.attributes.desc}</TableCell>
              <TableCell align="right">${item.attributes.price}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary">
                  Add
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}
