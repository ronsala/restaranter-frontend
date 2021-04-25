import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchMenus } from "./menuAPI";

const initialState = {
  menus: [],
  status: 'idle',
  error: null,
}

export const fetchMenus = createAsyncThunk('menu/fetchMenus', async () => {
  const response = await fetch('http://localhost:3000/api/v1/menus')
  // const data = await response.json()
  // return data
  return response.json()
})

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
    },
    [fetchMenus.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      debugger
      state.menu = state.menu.concat(action.payload.data)
    },
    [fetchMenus.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const { addMenu } = menusSlice.actions;

// export const selectMenuById = (state, menuId) => {
//   state.menu.find(menu => menu.id === menuId);
// };

export default menusSlice.reducer;
