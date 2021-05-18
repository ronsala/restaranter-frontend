import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { restaurantSelectors, fetchRestaurants } from '../../containers/restaurantContainer/restaurantContainerSlice';

export const Restaurant = () => {

  const dispatch = useDispatch();

  debugger


  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  const restaurants = useSelector(restaurantSelectors.selectAll);

  return (
    <div>
      { (typeof restaurants[0] !== 'undefined') ? (
        <h1>{ restaurants[0].attributes.name }</h1> 
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
