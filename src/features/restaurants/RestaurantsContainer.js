import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurants, restaurantsSelectors } from './restaurantsSlice';
import { 
} from '@reduxjs/toolkit';
// import { Restaurant } from "./Restaurant";



export const RestaurantsContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  const restaurants = useSelector(restaurantsSelectors.selectAll);

  return (
    <div>
      <p>Restaurants Container</p>
      {/* <Restaurant restaurants={null}/> */}
      { (typeof restaurants[0] !== 'undefined') ? (
        <h1>{ restaurants[0].attributes.name }</h1> 
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default RestaurantsContainer;