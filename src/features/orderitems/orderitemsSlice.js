import { useDispatch } from 'react-redux';
import { 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const orderitemsAdapter = createEntityAdapter({
  selectId: (orderitem) => orderitem.id
})

const initialState = []

export const orderitemsSlice = createSlice({
  name: 'orderitem',
  // initialState: orderitemsAdapter.getInitialState(),
  initialState: initialState,
  reducers: {
    //  addItemToOrderitems: orderitemsAdapter.addOne
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
