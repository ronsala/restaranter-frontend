import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: [],
  reducers: {
    addMenu: (state, action) => {
      state.push(action.payload)
    }
  },
})

export const { addMenu } = menuSlice.actions

export default menuSlice.reducer