import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const deleteUser = createAsyncThunk(
	'users/deleteUser',
	async (payload) => {
		const result = await fetch(`http://localhost:3000/api/v1/users/${payload.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
    .then((res) => res.json());
    return result
  }
);

export const editUser = createAsyncThunk(
	'users/editUser',
	async (payload) => {
		const user = await fetch(`http://localhost:3000/api/v1/users/${payload.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        user: {
          first_name: payload.first_name, 
          last_name: payload.last_name, 
          email: payload.email, 
          street: payload.street, 
          city: payload.city,  
          state: payload.state,  
          password: payload.password, 
        }
      }),
		})
    .then((res) => res.json());
    return user
  }
);

export const fetchUser = createAsyncThunk(
  'users/fetchUser', 
  async (userId, { dispatch }) => {
    const user = await fetch(`http://localhost:3000/api/v1/users/${userId}`)
    .then((res) => res.json());
    return user
  }
);

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (payload) => {
    const user = await fetch(`http://localhost:3000/api/v1/login`, {
      method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        user: {
          email: payload.email, 
          password: payload.password, 
        }
      }),
    })
    .then((res) => res.json());

    return user
  }
);

export const signupUser = createAsyncThunk(
	'users/signupUser',
	async (payload) => {
		const user = await fetch(`http://localhost:3000/api/v1/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        user: {
          first_name: payload.first_name, 
          last_name: payload.last_name, 
          email: payload.email, 
          street: payload.street, 
          city: payload.city,  
          state: payload.state,  
          password: payload.password, 
        }
      }),
		})
    .then((res) => res.json());
    return user
  }
);

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id
})

export const usersSlice = createSlice({
  name: 'user',
  initialState: usersAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    addOneUser: usersAdapter.addOne, 
    upsertOneUser: usersAdapter.upsertOne, 
    removeOneUser: usersAdapter.removeOne, 
    removeAllUsers: usersAdapter.removeAll, 
    setStatusIdle: {
      reducer(state, { payload }) {
        return {
          ...state,
          status: payload,
        }
      }
    },
    deleteCurrentUserId: 
      (state) => {
        state.currentUserId = ''
    }, 
  },
  extraReducers: {
    [deleteUser.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      usersAdapter.removeOne(state, action.payload.data.id)
    },
    [deleteUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [editUser.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [editUser.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      usersAdapter.upsertOne(state, action.payload.data)
    },
    [editUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [fetchUser.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      usersAdapter.addOne(state, action.payload.data)
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [loginUser.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.currentUserId = action.payload.data.id
      usersAdapter.addOne(state, action.payload.data)
    },
    [loginUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [signupUser.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [signupUser.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      usersAdapter.addOne(state, action.payload.data)
    },
    [signupUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export const {
  deleteCurrentUserId,
  removeAllUsers,
  setStatusIdle, 
} = usersSlice.actions;

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state) => state.users)

export default usersSlice.reducer;