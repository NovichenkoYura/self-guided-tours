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

const token = localStorage.getItem('token');
alert(document.cookie);
// console.log(getCookie(token));

export const instance = axios.create({
  headers: token
    ? {
        Authorization: `Bearer ${token}`
      }
    : undefined
});

export const getUsersThunk = createAsyncThunk('users/getUsers', async () => {
  const response = await instance.get('http://localhost:3001/users');

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
    const response = await instance.post('http://localhost:3001/users', user);
    const data = await response.data;
    return data;
  }
);

export const loginThunk = createAsyncThunk(
  'users/loginUsers',
  async ({ email, password }: User) => {
    const response = await instance.get('http://localhost:3001/users');
    const data = await response.data;
    const dataUser: User = {};
    data.forEach((profile: any) => {
      if (profile.email === email && profile.password === password) {
        dataUser.email = profile.email;
        dataUser.password = profile.password;
        dataUser.token = profile.token;
        dataUser.firstname = profile.firstname;
        dataUser.lastname = profile.lastname;
      }
    });
    return dataUser;
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
      state.lastname = action.payload.lastname;
      state.password = action.payload.password;
      state.email = action.payload.email;
      state.isFetching = false;
      document.cookie = 'token = action.payload.token';
      localStorage.token = action.payload.token;
      // localStorage.setItem('token', action.payload.token);
    });
  },

  reducers: {}
});

// export const {} = usersSlice.actions;
export default usersSlice.reducer;
