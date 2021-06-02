import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from '../features/restaurants/restaurantsSlice'
import menusReducer from '../features/menus/menusSlice'
import sectionsReducer from '../features/sections/sectionsSlice'

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    menus: menusReducer,
    sections: sectionsReducer,
  },
});
