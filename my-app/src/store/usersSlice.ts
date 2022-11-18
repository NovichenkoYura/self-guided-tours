import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { string } from 'yup';
import { instance } from '../api/apiConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notificationMessages } from '../constants/notificationMessages';
import { endpoints } from '../api/endpoints';

interface User {
  token?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  basketId: number[];
  wishListId: number[];
}

interface UsersState extends User {
  list: User[];
  isFetching: boolean;
  isAuth: boolean;
}

const initialState: UsersState = {
  list: [],
  isFetching: false,
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  token: '',
  basketId: [],
  isAuth: false,
  wishListId: []
};

export const getUsersThunk = createAsyncThunk('users/getUsers', async () => {
  const response = await instance.get(endpoints.users);

  const data = await response.data;
  return data;
});

export const getToursThunk = createAsyncThunk('tours/getTours', async () => {
  const response = await instance.get(endpoints.tours);
  const data = await response.data;
  return data;
});

export const addUsersThunk = createAsyncThunk(
  'users/addUsers',
  async ({ token, firstname, lastname, email, password, basketId, wishListId }: User) => {
    const user = {
      token: token,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      basketId: basketId,
      wishListId: wishListId
    };
    const response = await instance.post(endpoints.users, user);
    const data = await response.data;
    return data;
  }
);

export const loginThunk = createAsyncThunk(
  'users/loginUsers',
  async ({ email, password }: Pick<User, 'email' | 'password'>) => {
    const response = await instance.get(endpoints.users);
    const data = await response.data;
    const dataUser = {} as User;
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

export const addtoBasketThunk = createAsyncThunk(
  'users/addtoBasket',
  async (id: number, { getState }: any) => {
    const store = getState().users;
    const response = await instance.patch(endpoints.user.replace(':id', String(id)), {
      ...store,
      basketId: [...store.basketId, id]
    });
    const data = await response.data;
    return data;
  }
);

export const addtoWishListThunk = createAsyncThunk(
  'users/addtoWishList',
  async (id: number, { getState }: any) => {
    const store = getState().users;
    const response = await instance.patch('http://localhost:3001/users/1', {
      ...store,
      wishListId: [...store.wishListId, id]
    });
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
    builder.addCase(getUsersThunk.rejected, (state) => {
      state.isFetching = false;
    });

    builder.addCase(addUsersThunk.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(addUsersThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.list.push(action.payload);
      state.isFetching = false;
    });
    builder.addCase(addUsersThunk.rejected, (state) => {
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
      state.isAuth = true;
      localStorage.setItem('token', String(action.payload.token));
      toast(notificationMessages.login.success)
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.isFetching = false;
      toast(notificationMessages.login.error)
    });

    // builder.addCase(addtoBasketThunk.pending, () => {
    // });
    builder.addCase(addtoBasketThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.basketId = action.payload.basketId;
      state.isFetching = false;
    });
    // builder.addCase(addtoBasketThunk.rejected, () => {
    // });

    // builder.addCase(addtoWishListThunk.pending, () => {
    // });
    builder.addCase(addtoWishListThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.wishListId = action.payload.wishListId;
      state.isFetching = false;
    });
    // builder.addCase(addtoWishListThunk.rejected, () => {
    // });
  },

  reducers: {}
});

// export const {  } = usersSlice.actions;
export default usersSlice.reducer;
