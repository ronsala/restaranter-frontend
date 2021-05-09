import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../features/restaurants/restaurantsSlice'
import menusReducer from '../features/menus/menusSlice'

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    menus: menusReducer,
  },
});
