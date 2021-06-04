import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: theme.typography.pxToRem(50),
  },
  itemname: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  quantity: {
    margin: theme.spacing(1),
    width: '8ch',
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
                <Icon className={classes.icon} color="primary">remove_circle</Icon>
                <Typography variant="srOnly">Remove one</Typography>
                <TextField className={classes.quantity} id="outlined-basic" variant="outlined" />
                <Icon className={classes.icon} color="primary">add_circle</Icon>
                <Typography variant="srOnly">Add one</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}
