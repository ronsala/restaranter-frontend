import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchRestaurant, 
  selectRestaurantById, 
} from './restaurantsSlice';
import Restaurant from "./Restaurant";

export const RestaurantContainer = ({match}) => {
  const { restaurantId } = match.params

  let restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!restaurant) {
      dispatch(fetchRestaurant(restaurantId))
    }
  }, [dispatch])

  return (
    <div>
      <p>RestaurantContainer</p>
      { restaurant && restaurant.attributes.name }
    </div>
  )


}