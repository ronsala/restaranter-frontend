import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { 
  createSlice,
  createEntityAdapter,
  createAsyncThunk 
} from '@reduxjs/toolkit';

// const dispatch = useDispatch()

// const restaurantsAdapter = createEntityAdapter({
//   selectId: (restaurant) => restaurant.id,
// })

// export const restaurantsSlice = createSlice({
//   name: 'restaurants',
//   // initialState: restaurantsAdapter.getInitialState({
//   //   status: 'idle'
//   // }),
//   initialState: {
//     status: 'idle',
//     restaurants: [],
//   },
//   reducers: {
//     setAllRestaurants: restaurantsAdapter.setAll(state, action.payload.restaurants),
//     fetchRestaurants: restaurantsAdapter.setAll(state, action.payload.restaurants)
//   },
//   extraReducers: {
//     [fetchRestaurants.pending]: (state) => {
//       state.status = 'loading'
//       state.error = null
//     },
//     [fetchRestaurants.fulfilled]: (state, action) => {
//       state.status = 'succeeded'
//       restaurantsAdapter.setAll(state, action.payload.data)
//     },
//     [fetchRestaurants.rejected]: (state, action) => {
//       state.status = 'failed'
//       state.error = action.payload
//     },
//   },
// })

// export const { setAllRestaurants } = restaurantsSlice.actions;

// export const restaurantsSelectors = restaurantsAdapter.getSelectors(
//   (state) => state.restaurants
// )

// export default restaurantsSlice.reducer;

// First, define the reducer and action creators via `createSlice`
const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    loading: 'idle',
    restaurants: [],
  },
  reducers: {
    restaurantsLoading(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    restaurantsReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.restaurants = action.payload
      }
    },
  },
})

// Destructure and export the plain action creators
export const { restaurantsLoading, restaurantsReceived } = restaurantsSlice.actions

// Define a thunk that dispatches those action creators
const fetchRestaurants = () => async (dispatch) => {
  dispatch(restaurantsLoading())
  const response = await fetch('http://localhost:3000/api/v1/restaurants') 
  dispatch(restaurantsReceived(response.data))
}

const reducer = restaurantsSlice.reducer
export default reducer

// export const fetchRestaurants = createAsyncThunk(
//   'restaurants/fetchRestaurants', 
//   async () => {
//     const restaurants = await fetch('http://localhost:3000/api/v1/restaurants')
//     .then((res) => res.json());
//     // return restaurants
//     return restaurants
//   }
// )