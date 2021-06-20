import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  // const handleMenuButtonClick = (props.restaurant.id) => { 
  //   history.push(`/restaurants/${props.restaurant.id}`)
  // }

  return (
    <TableContainer className={classes.container}>
      <Table aria-label="restaurants table">
        <TableBody>
          {props.restaurants.map((restaurant) => (
            <TableRow key={restaurant.id}>
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
                <Button 
                  className={classes.button} 
                  color="secondary" 
                  onClick={() => { 
                    history.push(`/restaurants/${restaurant.id}`)
                    }
                  }
                  size="large" 
                  type="submit" 
                  variant="contained"
                >
                  Menu
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