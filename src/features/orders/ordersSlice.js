import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchOrder = createAsyncThunk(
  'orders/fetchOrder', 
  async ({orderId}) => {
    const order = await fetch(`http://localhost:3000/api/v1/orders/${orderId}`)
    .then((res) => res.json());
    return order
  }
)

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders', 
  async (payload) => {
    const orders = await fetch(`http://localhost:3000/api/v1/restaurants/${payload}/orders`)
    .then((res) => res.json());
    return orders
  }
)

export const patchOrder = createAsyncThunk(
	'orders/patchOrder',
	async (payload) => {
		const order = await fetch(`http://localhost:3000/api/v1/orders/${payload.order_id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        order: {
          fulfilled: payload.fulfilled, 
        }
      }),
		})
    .then((res) => res.json());
    return order
  }
);

export const postOrder = createAsyncThunk(
	'orders/postOrder',
	async (payload) => {
		const order = await fetch(`http://localhost:3000/api/v1/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        order: {
          order_type: payload.state.order_type, 
          restaurant_id: payload.state.restaurant_id, 
          order_items: payload.order_items, 
          total: payload.total, 
        }
      }),
		})
    .then((res) => res.json());
    return order
  }
);

const ordersAdapter = createEntityAdapter({
  selectId: (order) => order.id
})

export const ordersSlice = createSlice({
  name: 'order',
  initialState: ordersAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    addManyOrders: ordersAdapter.addMany, 
    addOneOrder: ordersAdapter.addOne, 
    upsertOneOrder: ordersAdapter.upsertOne, 
  },
  extraReducers: {
    [fetchOrder.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchOrder.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      ordersAdapter.addOne(state, action.payload.data)
    },
    [fetchOrder.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [fetchOrders.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      ordersAdapter.addMany(state, action.payload.data)
    },
    [fetchOrders.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [patchOrder.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [patchOrder.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      ordersAdapter.upsertOne(state, action.payload.data)
    },
    [patchOrder.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [postOrder.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [postOrder.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      ordersAdapter.addOne(state, action.payload.data)
    },
    [postOrder.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export const {
  selectById: selectOrderById,
  selectIds: selectOrderIds,
  selectEntities: selectOrderEntities,
  selectAll: selectAllOrders,
  selectTotal: selectTotalOrders,
} = ordersAdapter.getSelectors((state) => state.orders)

export default ordersSlice.reducer;