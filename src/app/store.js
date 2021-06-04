import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from '../features/restaurants/restaurantsSlice'
import menusReducer from '../features/menus/menusSlice'
import sectionsReducer from '../features/sections/sectionsSlice'
import itemsReducer from '../features/items/itemsSlice'
import ordersReducer from '../features/orders/ordersSlice'

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    menus: menusReducer,
    sections: sectionsReducer,
    items: itemsReducer,
    orders: ordersReducer,
  },
});
