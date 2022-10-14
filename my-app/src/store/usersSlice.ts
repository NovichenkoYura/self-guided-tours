import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  token?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
}

interface UsersState {
  list: User[];
  isFetching: boolean;
  currentPage: number;
  perPage: number;
  totalQtyComments: number;
}

const initialState: UsersState = {
  list: [],
  isFetching: false,
  currentPage: 1,
  perPage: 3,
  totalQtyComments: 0
};

export const getUsersThunk = createAsyncThunk('users/getUsers', async () => {
  const response = await axios.get('http://localhost:3001/users');

  const data = await response.data;
  return data;
});

export const addUsersThunk = createAsyncThunk(
  'user/Users',
  async ({ token, firstname, lastname, email, password }: User) => {
    const user = {
      token: token,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    };
    const response = await axios.post('http://localhost:3001/users', user);
    const data = await response.data;
    return data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.list = action.payload;
      state.isFetching = false;
    });
    builder.addCase(addUsersThunk.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(addUsersThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.list.push(action.payload);
      state.isFetching = false;
      state.totalQtyComments = state.totalQtyComments + 1;
    });
  },

  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    }
  }
});

export const { setCurrentPage } = usersSlice.actions;
export default usersSlice.reducer;
