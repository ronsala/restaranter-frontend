import {
  configureStore,
  createSelector,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import menusReducer from '../features/menus/menusSlice'

export const store = configureStore({
  reducer: {
    menus: menusReducer,
  },
});
