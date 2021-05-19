import React from 'react';
import { 
} from '@reduxjs/toolkit';
import { Restaurant } from "./Restaurant";

export const RestaurantsContainer = () => {
  return (
    <div>
      <Restaurant restaurants={null}/>
    </div>
  )
}

export default RestaurantsContainer;