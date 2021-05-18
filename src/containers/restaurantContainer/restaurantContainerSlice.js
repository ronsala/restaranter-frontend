import { 
  createSlice,
  createEntityAdapter,
  createAsyncThunk 
} from '@reduxjs/toolkit';

export const fetchRestaurants = createAsyncThunk(
  'restaurantContainer/fetchRestaurant', 
  async () => {
    const restaurants = await fetch('http://localhost:3000/api/v1/restaurants')
    .then((res) => res.json());
     return restaurants
  }
)

const restaurantsAdapter = createEntityAdapter({
  selectId: (restaurant) => restaurant.id,
})

export const restaurantContainerSlice = createSlice({
  name: 'restaurant',
  initialState: restaurantsAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    setAllRestaurants: restaurantsAdapter.setAll
  },
  extraReducers: {
    [fetchRestaurants.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchRestaurants.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      restaurantsAdapter.setAll(state, action.payload.data)
    },
    [fetchRestaurants.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const {} = restaurantContainerSlice.actions;

export const restaurantSelectors = restaurantsAdapter.getSelectors(
  (state) => state.restaurants
)

export default restaurantContainerSlice.reducer;