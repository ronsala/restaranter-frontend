import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { restaurantsSelectors } from './restaurantsSlice';
// import { fetchRestaurants } from './RestaurantsContainer';
// import styles from './Restaurant.module.css';

export const Restaurant = () => {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchRestaurants())
  // }, [dispatch])

  const restaurants = useSelector(restaurantsSelectors.selectAll);

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
