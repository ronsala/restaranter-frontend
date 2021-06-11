import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

export const RestaurantsTable = (props) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table aria-label="restaurants table">
        <TableBody>
          {props.restaurants.map((restaurant) => (
            <TableRow key={restaurant.attributes.name}>
              <TableCell className={classes.root}>
                <Typography className={classes.name} variant="subtitle1" >
                  {restaurant.attributes.name}
                </Typography>
              </TableCell>
              <TableCell className={classes.root}>
                {restaurant.attributes.street}, {restaurant.attributes.city}, {restaurant.attributes.state} 
              </TableCell>
              <TableCell align="left" className={classes.root}>
                <Typography variant="body2">
                  {restaurant.attributes.desc}
                </Typography>
              </TableCell>
              <TableCell className={classes.root}>
                <Button size="large" fullWidth={true} variant="contained" color="secondary" href={`restaurants/${restaurant.id}`}>
                  menu
                </Button>
              </TableCell>
            </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

RestaurantsTable.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default RestaurantsTable;