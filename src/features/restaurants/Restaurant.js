import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuContainer from '../menus/MenuContainer';
// import OrderItemsContainer from '../orderitems/OrderItemsContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    color: '#000',
    textAlign: 'center',
  },
}))

export const Restaurant = (props) => {
  const classes = useStyles();
  
  // const menu = (page) => {
  //   switch (page) {
  //     case 'menu':
  //       return <MenuContainer restaurantId={props.restaurant.id}/>
      // case 'orderitems':
        // return <OrderItemsContainer restaurantId={props.restaurant.id}/>
  //     default:
  //       return <MenuContainer restaurantId={props.restaurant.id}/>
  //   }
  // }

console.log('props in Restaurant:', props);

  return (
    <div>
      { (props && props.restaurant.attributes.name) ? 
        (
          <div>
            <Typography className={classes.root} variant="h1">
              { props.restaurant.attributes.name }
            </Typography>
            <Typography className={classes.root} variant="subtitle1">
              { props.restaurant.attributes.street }, { props.restaurant.attributes.city }, { props.restaurant.attributes.state }
            </Typography>
            <Divider></Divider>
            <MenuContainer restaurantId={props.restaurant.id} showOrderItems={props.restaurant.attributes.live} />
          </div>
        ) : 
        (<p>Loading...</p>)
      }
    </div>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.object,
  page: PropTypes.string
}

export default Restaurant;