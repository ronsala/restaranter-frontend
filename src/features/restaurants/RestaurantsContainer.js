import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurants, restaurantsSelectors } from './restaurantsSlice';
import RestaurantCard from "./RestaurantCard";



export const RestaurantsContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  const restaurants = useSelector(restaurantsSelectors.selectAll);

  const restaurantsList = restaurants.map((restaurant) => {
    return <RestaurantCard key={restaurant.id} name={restaurant.attributes.name} street={restaurant.attributes.street} city={restaurant.attributes.city} state={restaurant.attributes.state} desc={ restaurant.attributes.desc } id={restaurant.id} />
  })

  return (
    <div>
      { restaurantsList }
    </div>
  )
}

export default RestaurantsContainer;