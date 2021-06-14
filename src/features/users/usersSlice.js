import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const editUser = createAsyncThunk(
	'users/editUser',
	async (payload) => {
    console.log('payload:', payload);
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
    console.log('user:', user);
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
)

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
    addOneUser: usersAdapter.addOne
  },
  extraReducers: {
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
  },
})

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state) => state.users)

// export const userSelector = (state) => state.users;

export default usersSlice.reducer;
