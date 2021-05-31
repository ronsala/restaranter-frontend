import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchRestaurants, 
  selectAllRestaurants, 
} from './restaurantsSlice';
import RestaurantCard from "./RestaurantCard";

export const RestaurantsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  const restaurants = useSelector(state => selectAllRestaurants(state));
  let { status, error } = useSelector(state => state.restaurants);

  const restaurantsList = restaurants.map((restaurant) => {
    return <RestaurantCard key={restaurant.id} name={restaurant.attributes.name} street={restaurant.attributes.street} city={restaurant.attributes.city} state={restaurant.attributes.state} desc={ restaurant.attributes.desc } id={restaurant.id} />
  })

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
        <div>
          { restaurantsList }
        </div>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

export default RestaurantsContainer;