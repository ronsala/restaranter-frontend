import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const deleteMenu = createAsyncThunk(
	'restaurants/deleteRestaurant',
	async (payload) => {
		const result = await fetch(`http://localhost:3000/api/v1/menus/${payload}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
    .then((res) => res.json());
    return result
  }
);

export const fetchMenu = createAsyncThunk(
  'menus/fetchMenu', 
  async (restaurantId) => {
    const menu = await fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}/menus`)
    .then((res) => res.json());

    return menu
  }
)

export const patchMenu = createAsyncThunk(
	'restaurants/patchRestaurant',
	async (payload) => {
		const menu = await fetch(`http://localhost:3000/api/v1/menus/${payload.menu_id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        restaurant: {
          name: payload.name, 
          restaurant_id: payload.restaurant_id, 
        }
      }),
		})
    .then((res) => res.json());
    return menu
  }
);

export const postMenu = createAsyncThunk(
	'menus/postMenu',
	async (payload) => {
console.log('payload in postMenu:', payload);
		const menu = await fetch(`http://localhost:3000/api/v1/menus`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        menu: {
          name: payload.name, 
          restaurant_id: payload.restaurant_id, 
        }
      }),
		})
    .then((res) => res.json());
    return menu
  }
);

const menusAdapter = createEntityAdapter({
  selectId: (menu) => menu.id,
})

export const menusSlice = createSlice({
  name: 'menu',
  initialState: menusAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    addOneMenu: menusAdapter.addOne, 
    upsertOneRestaurant: menusAdapter.upsertOne, 
  },
  extraReducers: {
    [deleteMenu.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [deleteMenu.fulfilled]: (state, action) => {
      state.status = 'succeeded'
console.log('action in deleteRestaurant:', action);
      menusAdapter.removeOne(state, action.payload.data.id)
    },
    [deleteMenu.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [fetchMenu.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchMenu.fulfilled]: (state, action) => {
      state.status = 'succeeded'

      // Avoid an error when restaurant does not yet have a menu.
      if (action.payload.data) {
        menusAdapter.addOne(state, action.payload.data)
      }
    },
    [fetchMenu.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
    [patchMenu.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [patchMenu.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      menusAdapter.upsertOne(state, action.payload.data)
    },
    [patchMenu.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [postMenu.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [postMenu.fulfilled]: (state, action) => {
      state.newRestaurantId = action.payload.data.id
      state.status = 'succeeded'
      menusAdapter.addOne(state, action.payload.data)
    },
    [postMenu.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export const {
  selectById: selectMenuById,
  selectIds: selectMenuIds,
  selectEntities: selectMenuEntities,
  selectAll: selectAllMenus,
  selectTotal: selectTotalMenus,
} = menusAdapter.getSelectors((state) => state.menus)

export default menusSlice.reducer;
