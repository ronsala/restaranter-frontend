import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk(
  'items/fetchItems', 
  async ({restaurantId, menuId, sectionId}) => {
    const items = await fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}/menus/${menuId}/sections/${sectionId}/items`)
    .then((res) => res.json());
    return items
  }
)

const itemsAdapter = createEntityAdapter({
  selectId: (item) => item.id
})

export const itemsSlice = createSlice({
  name: 'item',
  initialState: itemsAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    addManyItems: itemsAdapter.addMany
  },
  extraReducers: {
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
