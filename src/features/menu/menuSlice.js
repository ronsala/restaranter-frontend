import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

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

export const { addMenu, getMenus, getMenusSuccess, getMenusFailure } = menuSlice.actions

export default menuSlice.reducer
