import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchRestaurants, 
  selectAllRestaurants, 
} from './restaurantsSlice';
import RestaurantCard from "./RestaurantCard";
import Restaurant from "./Restaurant";

export const RestaurantsContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  const restaurants = useSelector(state => selectAllRestaurants(state));

  const restaurantsList = restaurants.map((restaurant) => {
    return <RestaurantCard key={restaurant.id} name={restaurant.attributes.name} street={restaurant.attributes.street} city={restaurant.attributes.city} state={restaurant.attributes.state} desc={ restaurant.attributes.desc } id={restaurant.id} />
  })

  return (
    <div>
      {/* {restaurant.attributes.name} */}
      <Switch>
        <Route path="/restaurants/:id" render={({match}) => (
          <Restaurant restaurant={restaurants.find(r => r.id === match.params.id)} />
        )} />
        <Route path="/restaurants">
          { restaurantsList }
        </Route>
      </Switch>
    </div>
  )
}

export default RestaurantsContainer;