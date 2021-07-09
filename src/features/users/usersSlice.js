/* eslint-disable no-debugger */
import { 
  createAsyncThunk, 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const deleteUser = createAsyncThunk(
	'users/deleteUser',
	async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/users/${payload.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      let json = response.json();

      if (response.ok === true) {
        return json;
      } else {
        return rejectWithValue(`${response.status} ${response.statusText}`)
      }
    } catch (err) {
      return rejectWithValue(`${err}`)
    }
  }
);

export const editUser = createAsyncThunk(
	'users/editUser',
	async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/users/${payload.id}`, {
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

      let json = response.json();

      if (response.ok === true) {
        return json;
      } else {
        return rejectWithValue(`${response.status} ${response.statusText}`)
      }
    } catch (err) {
      return rejectWithValue(`${err}`)
    }
  }
);

export const fetchUser = createAsyncThunk(
  'users/fetchUser', 
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/users/${userId}`)
      let json = response.json();

      if (response.ok === true) {
        return json;
      } else {
        return rejectWithValue(`${response.status} ${response.statusText}`)
      }
    } catch (err) {
      return rejectWithValue(`${err}`)
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/login`, {
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

      let json = response.json();

      if (response.ok === true) {
        return json;
      } else {
        return rejectWithValue(`${response.status} ${response.statusText}`)
      }
    } catch (err) {
      return rejectWithValue(`${err}`)
    }
  }
);

export const signupUser = createAsyncThunk(
	'users/signupUser',
	async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/users`, {
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

      let json = response.json();

      if (response.ok === true) {
        return json;
      } else {
        return rejectWithValue(`${response.status} ${response.statusText}`)
      }
    } catch (err) {
      return rejectWithValue(`${err}`)
    }
  }
)

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
      state.error = action.payload
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
      state.error = action.payload
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
      state.error = action.payload
    },
    [loginUser.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      usersAdapter.addOne(state, action.payload.data)
    },
    [loginUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
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
      state.error = action.payload
    },
  },
})

export const {
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