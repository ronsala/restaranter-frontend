import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/items/itemsSlice';
import menusReducer from '../features/menus/menusSlice';
import orderitemsReducer from '../features/orderitems/orderitemsSlice';
import ordersReducer from '../features/orders/ordersSlice';
import restaurantsReducer from '../features/restaurants/restaurantsSlice';
import sectionsReducer from '../features/sections/sectionsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    menus: menusReducer,
    orderitems: orderitemsReducer,
    orders: ordersReducer,
    restaurants: restaurantsReducer,
    sections: sectionsReducer,
    users: usersReducer,
  },
});

// Expose store when run in Cypress.
if (window.Cypress) {
  window.store = store
}