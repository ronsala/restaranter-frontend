import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

// const initialState = {
//   menus: [],
//   status: 'idle',
//   error: null,
// }

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
// debugger
// export const {
//   selectById: selectMenuById,
// } = menusAdapter.getSelectors((state) => state.menus)

export const menusSlice = createSlice({
  name: 'menu',
  // initialState,
  initialState: menusAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    setAllMenus: menusAdapter.setAll
    // addMenu: (state, action) => {
    //   state.push(action.payload)
    // }
  },
  extraReducers: {
    [fetchMenus.pending]: (state, action) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchMenus.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      menusAdapter.setAll(state, action.payload.data)
      // Add any fetched menus to the array
      // state.menus = state.menus.concat(action.payload.data)
    },
    [fetchMenus.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const { addMenu } = menusSlice.actions;

export const selectMenus = state => state.menus;

export const menusSelectors = menusAdapter.getSelectors(
  (state) => state.menus
)

// console.log('menusSelectors:', menusSelectors);

export default menusSlice.reducer;

export const selectMenuById = (state, menuId) => {
  // debugger
  // state.menus.find(menu => menu.id === menuId);
};