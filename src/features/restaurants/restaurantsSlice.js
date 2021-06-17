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

export const postRestaurant = createAsyncThunk(
	'restaurants/postRestaurant',
	async (payload) => {
		const restaurant = await fetch(`http://localhost:3000/api/v1/restaurants`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        restaurant: {
          name: payload.name, 
          street: payload.street, 
          city: payload.city, 
          state: payload.state,
          desc: payload.desc, 
          user_id: payload.user_id, 
        }
      }),
		})
    .then((res) => res.json());
console.log('restaurant in postRestaurant:', restaurant);
    return restaurant
  }
);

const restaurantsAdapter = createEntityAdapter({
    selectId: (restaurant) => restaurant.id
  }
)

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
    [postRestaurant.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [postRestaurant.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      restaurantsAdapter.addOne(state, action.payload.data)
    },
    [postRestaurant.rejected]: (state, action) => {
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
