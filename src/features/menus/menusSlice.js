import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchMenu = createAsyncThunk(
  'menus/fetchMenu', 
  async (restaurantId, { dispatch }) => {
    const response = await fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}/menus`)
    console.log('(response) => response.json()):', (response) => response.json())
    return response.data
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
    setAllMenus: menusAdapter.setAll
  },
  extraReducers: {
    [fetchMenu.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchMenu.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      menusAdapter.setAll(state, action.payload.data)
    },
    [fetchMenu.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

// export const {} = menusSlice.actions;

// export const menusSelectors = menusAdapter.getSelectors(
//   (state) => state.menus
// )

export const {
  selectById: selectMenuById,
  selectIds: selectMenuIds,
  selectEntities: selectMenuEntities,
  selectAll: selectAllMenus,
  selectTotal: selectTotalMenus,
} = menusAdapter.getSelectors((state) => state.restaurants)

export default menusSlice.reducer;
