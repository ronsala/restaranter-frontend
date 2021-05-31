import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants', 
  async () => {
    const restaurants = await fetch('http://localhost:3000/api/v1/restaurants')
    .then((res) => res.json());
    return restaurants
  }
)

export const fetchRestaurant = createAsyncThunk(
  'restaurants/fetchRestaurant', 
  async (restaurantId, { dispatch }) => {
    const restaurant = await fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}`)
    .then((res) => res.json());
    return restaurant
  }
)

const restaurantsAdapter = createEntityAdapter({
  selectId: (restaurant) => restaurant.id
})

export const restaurantsSlice = createSlice({
  name: 'restaurant',
  initialState: restaurantsAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    setAllRestaurants: restaurantsAdapter.setAll,
    addOneRestaurant: restaurantsAdapter.addOne
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
      state.error = action.error.message
    },
    [fetchRestaurant.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchRestaurant.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      restaurantsAdapter.addOne(state, action.payload.data)
    },
    [fetchRestaurant.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export const {
  selectById: selectRestaurantById,
  selectIds: selectRestaurantIds,
  selectEntities: selectRestaurantEntities,
  selectAll: selectAllRestaurants,
  selectTotal: selectTotalRestaurants,
} = restaurantsAdapter.getSelectors((state) => state.restaurants)

export default restaurantsSlice.reducer;
