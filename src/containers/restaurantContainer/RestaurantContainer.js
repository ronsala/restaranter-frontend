import React from 'react';
import { 
} from '@reduxjs/toolkit';
import { Restaurant } from "../../features/restaurants/Restaurant";

// export const fetchRestaurants = createAsyncThunk(
//   'restaurants/fetchRestaurants', 
//   async () => {
//     const restaurants = await fetch('http://localhost:3000/api/v1/restaurants')
//     .then((res) => res.json());
//     return restaurants
//   }
// )

export const RestaurantContainer = () => {
  return (
    <div>
      <Restaurant />
    </div>
  )
}