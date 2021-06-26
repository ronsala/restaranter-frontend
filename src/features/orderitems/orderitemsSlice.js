import { 
  createAsyncThunk, 
  createSlice 
} from '@reduxjs/toolkit';

export const postOrderitem = createAsyncThunk(
	'orderitems/postOrderitem',
	async (payload) => {
		const orderitem = await fetch(`http://localhost:3000/api/v1/order_items`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        order_item: {
          item_id: payload.item_id, 
          restaurant_id: payload.restaurant_id, 
          count: payload.count, 
        }
      }),
		})
    .then((res) => res.json());
    return orderitem
  }
);

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

export const { addItemToOrderitems, deleteItemFromOrderitems } = orderitemsSlice.actions;

export default orderitemsSlice.reducer;