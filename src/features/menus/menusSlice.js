import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';

export const fetchMenu = createAsyncThunk(
  'menus/fetchMenu', 
  async (restaurantId, { dispatch }) => {
    const menu = await fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}/menus`)
    .then((res) => res.json());
    
   console.log('menu:', menu);

    return menu
  }
)

const menusAdapter = createEntityAdapter({
  selectId: (menu) => menu.id,
})

export const menusSlice = createSlice({
  name: 'menu',
  initialState: menusAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    addOneMenu: menusAdapter.addOne
  },
  extraReducers: {
    [fetchMenu.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchMenu.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      menusAdapter.addOne(state, action.payload.data)
    },
    [fetchMenu.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

// export const menusSelectors = menusAdapter.getSelectors((state) => state.restaurants.menus)

// console.log('menusSelectors:', menusSelectors);

export const {
  selectById: selectMenuById,
  selectIds: selectMenuIds,
  selectEntities: selectMenuEntities,
  selectAll: selectAllMenus,
  selectTotal: selectTotalMenus,
} = menusAdapter.getSelectors((state) => state.menus)

// export const selectMenuByRestaurantId = createSelector(
//   selectAllMenus,
//   state => state.menus
// )
export const selectMenuByRestaurantId = (state, restaurantId) => {
  if (state.menus.ids.length !== 0) {
    console.log('state.menus.ids.length:', state.menus.ids.length);
    console.log('state.menus.entities:', state.menus.entities);
    const menusArray = Object.entries(state.menus.entities);
    console.log('menusArray:', menusArray);
    const menu = menusArray.filter(menu => menu.attributes.restaurant_id === restaurantId)
    console.log('menu:', menu);
    return menu;
  }
}

export default menusSlice.reducer;
