import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const deleteItem = createAsyncThunk(
	'items/deleteItem',
	async (payload) => {
		const result = await fetch(`http://localhost:3000/api/v1/items/${payload}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
    .then((res) => res.json());
    return result
  }
);

export const fetchItems = createAsyncThunk(
  'items/fetchItems', 
  async ({restaurantId, menuId, sectionId}) => {
    const items = await fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}/menus/${menuId}/sections/${sectionId}/items`)
    .then((res) => res.json());
    return items
  }
)

export const patchItem = createAsyncThunk(
	'items/patchItem',
	async (payload) => {
console.log('payload in patchItems:', payload);
		const item = await fetch(`http://localhost:3000/api/v1/items/${payload.item_id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        item: {
          name: payload.name, 
          desc: payload.desc, 
          price: payload.price, 
          menu_id: payload.menu_id, 
        }
      }),
		})
    .then((res) => res.json());
    return item
  }
);

export const postItem = createAsyncThunk(
	'sections/postItem',
	async (payload) => {
		const item = await fetch(`http://localhost:3000/api/v1/items`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        item: {
          name: payload.name, 
          desc: payload.desc, 
          price: payload.price, 
          section_id: payload.section_id, 
        }
      }),
		})
    .then((res) => res.json());
    return item
  }
);

const itemsAdapter = createEntityAdapter({
  selectId: (item) => item.id
})

export const itemsSlice = createSlice({
  name: 'item',
  initialState: itemsAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    addManyItems: itemsAdapter.addMany, 
    addOneItem: itemsAdapter.addOne, 
    upsertOneItem: itemsAdapter.upsertOne, 
  },
  extraReducers: {
    [deleteItem.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [deleteItem.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      itemsAdapter.removeOne(state, action.payload.data.id)
    },
    [deleteItem.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [fetchItems.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      itemsAdapter.addMany(state, action.payload.data)
    },
    [fetchItems.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [patchItem.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [patchItem.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      itemsAdapter.upsertOne(state, action.payload.data)
    },
    [patchItem.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [postItem.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [postItem.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      itemsAdapter.addOne(state, action.payload.data)
    },
    [postItem.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export const {
  selectById: selectItemById,
  selectIds: selectItemIds,
  selectEntities: selectItemEntities,
  selectAll: selectAllItems,
  selectTotal: selectTotalItems,
} = itemsAdapter.getSelectors((state) => state.items)

export default itemsSlice.reducer;
