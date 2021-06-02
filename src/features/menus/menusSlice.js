import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchMenu = createAsyncThunk(
  'menus/fetchMenu', 
  async (restaurantId) => {
    const menu = await fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}/menus`)
    .then((res) => res.json());
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

export const {
  selectById: selectMenuById,
  selectIds: selectMenuIds,
  selectEntities: selectMenuEntities,
  selectAll: selectAllMenus,
  selectTotal: selectTotalMenus,
} = menusAdapter.getSelectors((state) => state.menus)

export default menusSlice.reducer;
