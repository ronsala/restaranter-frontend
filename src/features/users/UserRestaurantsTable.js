import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

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

export const UserRestaurantsTable = (props) => {
  const classes = useStyles();
  const history = useHistory();

console.log('props:', props);

  let { restaurants } = props

  const originalRestaurants = [...restaurants]

  const [state, setState] = useState({
    restaurants: originalRestaurants, 
    sorted: true, 
  })

console.log('state.sorted in body:', state.sorted);

  // let restaurants = props.restaurants

  const handleSortRestaurantsButtonClick = () => {
    setState(state => ({
      ...state,
      sorted: !state.sorted
    }))
console.log('state.sorted in handleSortRestaurantsButtonClick body:', state.sorted);

    if (state.sorted) {
console.log('state.sorted in handleSortRestaurantsButtonClick if:', state.sorted);
console.log('in if')
      restaurants = props.restaurants.sort((a, b) => {
        if (Object.values(a.attributes.name) < Object.values(b.attributes.name)) {
          return -1;
        } else {
          return 1;
        }
      })
console.log('restaurants:', restaurants);
    } else {
console.log('in else')
      restaurants = props.restaurants.sort((a, b) => {
        if (Object.values(a.id) < Object.values(b.id)) {
          return -1;
        } else {
          return 1;
        }
      })
      setState(state => ({
        ...state,
        restaurants: restaurants
      }))
console.log('props.restaurants:', props.restaurants);
console.log('originalRestaurants:', originalRestaurants);
restaurants = originalRestaurants
console.log('restaurants:', restaurants);
console.log('state.restaurants:', state.restaurants);
    }
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h3">
            View My Restaurants
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer className={classes.container}>
            <Table aria-label="restaurants table">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Button 
                      color="secondary" 
                      onClick={handleSortRestaurantsButtonClick}
                      size="small" 
                      type="submit" 
                      variant="contained"
                    >
                      {state.sorted
                        ? 'Sort By Restaurant Name'
                        : 'Sort By Creation Date'
                      }
                    </Button> 
                  </TableCell>
                </TableRow>
                {restaurants.map((restaurant) => (
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
                    <TableCell className={classes.root}>
                      <Button 
                        className={classes.button} 
                        color="primary" 
                        onClick={() => { 
                          history.push(`/restaurants/${restaurant.id}/orders`)
                          }
                        }
                        size="large" 
                        type="submit" 
                        variant="contained"
                      >
                        Orders
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

UserRestaurantsTable.propTypes = {
  handleSortRestaurantsButtonClick: PropTypes.func,
  restaurants: PropTypes.array.isRequired,
};

export default UserRestaurantsTable;