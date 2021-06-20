import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchRestaurant, 
  selectRestaurantById, 
} from './restaurantsSlice';
import { Restaurant } from "./Restaurant";

export const RestaurantContainer = ({match}) => {
  let { restaurantId } = match.params

  const dispatch = useDispatch();

  let restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
  
  let { status, error } = useSelector(state => state.restaurants);

  useEffect(() => {
    if (!restaurant) {
      dispatch(fetchRestaurant(restaurantId))
    }
  }, [dispatch, restaurant, restaurantId])

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Still Loading...</div>)
    case 'succeeded':
      return (
        <div>
          <Restaurant restaurant={restaurant} />
        </div>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

RestaurantContainer.propTypes = {
  match: PropTypes.object.isRequired,
}

export default RestaurantContainer;