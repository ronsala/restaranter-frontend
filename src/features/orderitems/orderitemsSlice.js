import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const orderitemsSlice = createSlice({
  name: 'orderitem',
  initialState: initialState,
  reducers: {
    deleteItemFromOrderitems: {
      reducer(state, { payload }) {
        return state.filter(item => item.id !== payload.id)
      }
    },
    addItemToOrderitems: {
      reducer(state, { payload }) {
        state.push(payload)
      }
    },
  },
})

export const { addItemToOrderitems, deleteItemFromOrderitems} = orderitemsSlice.actions;

export default orderitemsSlice.reducer;