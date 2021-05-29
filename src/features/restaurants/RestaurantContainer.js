import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchRestaurant, 
  selectRestaurantById, 
} from './restaurantsSlice';
import Restaurant from "./Restaurant";

export const RestaurantContainer = ({match}) => {
  const { restaurantId } = match.params
  const dispatch = useDispatch();
  let restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

  useEffect(() => {
    if (!restaurant) {
      dispatch(fetchRestaurant(restaurantId))
    }
  }, [dispatch, restaurant, restaurantId])

  return (
    <div>
      <p>RestaurantContainer</p>
      { restaurant && restaurant.attributes.name }
    </div>
  )


}