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
  token?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
}

const initialState: UsersState = {
  list: [],
  isFetching: false,
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  token: ''
};

export const getUsersThunk = createAsyncThunk('users/getUsers', async () => {
  const response = await axios.get('http://localhost:3001/users');

  const data = await response.data;
  return data;
});

export const addUsersThunk = createAsyncThunk(
  'users/addUsers',
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

export const loginThunk = createAsyncThunk(
  'users/loginUsers',
  async ({ email, password }: User) => {
    const response = await axios.get('http://localhost:3001/users');
    const data = await response.data;
    data.forEach((profile: any) => {
      if (profile.email === email && profile.password === password)
        // console.log(profile.email, profile.password, profile.token);
        return profile.email, profile.password, profile.token;
    });
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
    });
    builder.addCase(loginThunk.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.token = action.payload.token;
      state.firstname = action.payload.firstname;
      console.log(action.payload);
      state.isFetching = false;
    });
  },

  reducers: {}
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
