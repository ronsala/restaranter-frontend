import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

// export const fetchOrders = createAsyncThunk(
//   'orders/fetchOrders', 
//   async ({restaurantId, menuId, sectionId}) => {
//     const orders = await fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}/menus/${menuId}/sections/${sectionId}/orders`)
//     .then((res) => res.json());
//     return orders
//   }
// )

const ordersAdapter = createEntityAdapter({
  selectId: (order) => order.id
})

export const ordersSlice = createSlice({
  name: 'order',
  initialState: ordersAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    addManyOrders: ordersAdapter.addMany
  },
  extraReducers: {
    // [fetchOrders.pending]: (state) => {
    //   state.status = 'loading'
    //   state.error = null
    // },
    // [fetchOrders.fulfilled]: (state, action) => {
    //   state.status = 'succeeded'
    //   ordersAdapter.addMany(state, action.payload.data)
    // },
    // [fetchOrders.rejected]: (state, action) => {
    //   state.status = 'failed'
    //   state.error = action.error.message
    // },
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
