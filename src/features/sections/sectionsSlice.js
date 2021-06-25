import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const deleteSection = createAsyncThunk(
	'restaurants/deleteRestaurant',
	async (payload) => {
		const result = await fetch(`http://localhost:3000/api/v1/sections/${payload}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
    .then((res) => res.json());
    return result
  }
);

export const fetchSections = createAsyncThunk(
  'sections/fetchSections', 
  async ({restaurantId, menuId}) => {
    const sections = await fetch(`http://localhost:3000/api/v1/restaurants/${restaurantId}/menus/${menuId}/sections`)
    .then((res) => res.json());
    return sections
  }
);

export const patchSection = createAsyncThunk(
	'sections/patchSection',
	async (payload) => {
		const section = await fetch(`http://localhost:3000/api/v1/sections/${payload.section_id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        section: {
          name: payload.name, 
        }
      }),
		})
    .then((res) => res.json());
    return section
  }
);

export const postSection = createAsyncThunk(
	'sections/postSection',
	async (payload) => {
		const section = await fetch(`http://localhost:3000/api/v1/sections`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        section: {
          name: payload.name, 
          menu_id: payload.menu_id, 
        }
      }),
		})
    .then((res) => res.json());
    return section
  }
);

const sectionsAdapter = createEntityAdapter({
  selectId: (section) => section.id
})

export const sectionsSlice = createSlice({
  name: 'section',
  initialState: sectionsAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    addManySections: sectionsAdapter.addMany, 
    addOneSection: sectionsAdapter.addOne, 
    upsertOneSection: sectionsAdapter.upsertOne, 
  },
  extraReducers: {
    [deleteSection.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [deleteSection.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      sectionsAdapter.removeOne(state, action.payload.data.id)
    },
    [deleteSection.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [fetchSections.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchSections.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      sectionsAdapter.addMany(state, action.payload.data)
    },
    [fetchSections.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [patchSection.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [patchSection.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      sectionsAdapter.upsertOne(state, action.payload.data)
    },
    [patchSection.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [postSection.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [postSection.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      sectionsAdapter.addOne(state, action.payload.data)
    },
    [postSection.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export const {
  selectById: selectSectionById,
  selectIds: selectSectionIds,
  selectEntities: selectSectionEntities,
  selectAll: selectAllSections,
  selectTotal: selectTotalSections,
} = sectionsAdapter.getSelectors((state) => state.sections)

export default sectionsSlice.reducer;
