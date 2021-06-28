import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import MenuContainer from '../menus/MenuContainer';
import { patchRestaurant } from './restaurantsSlice';

export const Restaurant = (props) => {
  const dispatch = useDispatch();

  const handleGoLiveButtonClick = () => {
    dispatch(patchRestaurant({restaurant_id: props.restaurant.id, live: true}))
  }

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
            { props.restaurant.attributes.live 
                ? <div></div>
                : <center>
                    <Button color="primary" size="large" variant="contained" type="submit" onClick={handleGoLiveButtonClick}>Go Live</Button>
                  </center>
            }
            <br></br>
            <Divider></Divider>
            <MenuContainer restaurantId={props.restaurant.id} live={props.restaurant.attributes.live} proprietorView={props.proprietorView} />
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
  proprietorView: PropTypes.bool,
}

export default Restaurant;