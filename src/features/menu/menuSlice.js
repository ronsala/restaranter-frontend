import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchMenus } from "./menuAPI";

export const fetchMenus = createAsyncThunk('menu/fetchMenus', async () => {
  const response = await fetch('http://localhost:3000/api/v1/menus')
  return response.menu
})

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    loading: false,
    hasErrors: false,
    menus: []
  },
  reducers: {
    addMenu: (state, action) => {
      state.push(action.payload)
    },
    getMenus: state => {
      state.loading = true
    },
    getMenusSuccess: (state, { payload }) => {
      state.menu = payload
      state.loading = false
      state.hasErrors = false
    },
    getMenusFailure: state => {
      state.loading = false
      state.hasErrors = true
    }
  },
})

export const { addMenu, getMenus, getMenusSuccess, getMenusFailure } = menuSlice.actions;

// export const selectMenuById = (state, menuId) => {
//   state.menu.find(menu => menu.id === menuId);
// };

export default menuSlice.reducer;
