import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const initialState = {
  menus: [],
  status: 'idle',
  error: null,
}

export const fetchMenus = createAsyncThunk(
  'menus/fetchMenus', 
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/menus')
    return response.json()
  }
)

const menusAdapter = createEntityAdapter();

// export const {
//   selectById: selectMenuById,
// } = menusAdapter.getSelectors((state) => state.menus)

export const menusSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addMenu: (state, action) => {
      state.push(action.payload)
    }
  },
  extraReducers: {
    [fetchMenus.pending]: (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchMenus.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      // debugger
      state.menus = state.menus.concat(action.payload.data)
    },
    [fetchMenus.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const { addMenu } = menusSlice.actions;

export const selectMenus = state => state.menus;

// console.log('state.menus in menuSlice.js:', state.menus);

export default menusSlice.reducer;

export const selectMenuById = (state, menuId) => {
  // debugger
  // state.menus.find(menu => menu.id === menuId);
};