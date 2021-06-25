import React from 'react';
import { PropTypes } from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import MenuContainer from '../menus/MenuContainer';

export const Restaurant = (props) => {
  return (
    <div>
      { (props && props.restaurant.attributes.name) ? 
        (
          <div>
            <Typography variant="h1">
              { props.restaurant.attributes.name }
            </Typography>
            <Typography variant="subtitle1">
              { props.restaurant.attributes.street }, { props.restaurant.attributes.city }, { props.restaurant.attributes.state }
            </Typography>
            { props.buttons }
            <br></br>
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
  buttons: PropTypes.node, 
}

export default Restaurant;