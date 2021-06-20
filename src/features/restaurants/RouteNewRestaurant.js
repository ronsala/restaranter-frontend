/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const RouteNewRestaurant = () => {

  const history = useHistory();

  let newRestaurantId = useSelector(state => state.restaurants.newRestaurantId);

  useEffect(() => {
    if (newRestaurantId) {
      history.push(`/restaurants/${newRestaurantId}`)
    }
  }, [history, newRestaurantId])

  return (
    <div>Here { newRestaurantId }</div>  
  )
}

export default RouteNewRestaurant;