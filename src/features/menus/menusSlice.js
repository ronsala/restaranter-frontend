import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchMenus = createAsyncThunk(
  'menus/fetchMenus', 
  async () => {
    const menus = await fetch('http://localhost:3000/api/v1/menus')
    .then((res) => res.json());
    return menus
  }
)

const menusAdapter = createEntityAdapter({
  selectId: (menu) => menu.id,
})

export const menusSlice = createSlice({
  name: 'menu',
  // initialState,
  initialState: menusAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    setAllMenus: menusAdapter.setAll
  },
  extraReducers: {
    [fetchMenus.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchMenus.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      menusAdapter.setAll(state, action.payload.data)
    },
    [fetchMenus.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const {} = menusSlice.actions;

export const selectMenus = state => state.menus;

export const menusSelectors = menusAdapter.getSelectors(
  (state) => state.menus
)

export default menusSlice.reducer;
