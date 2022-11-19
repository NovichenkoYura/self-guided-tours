import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/apiConfig';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notificationMessages } from '../constants/notificationMessages';
import { endpoints } from '../api/endpoints';

interface User {
  token?: string;
  firstName?: string;
  lastName?: string;
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
  firstName: '',
  lastName: '',
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
  async ({ token, firstName, lastName, email, password, basketId, wishListId }: User) => {
    const user = {
      token: token,
      firstName: firstName,
      lastName: lastName,
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
    data.forEach((profile: User) => {
      if (profile.email === email && profile.password === password) {
        dataUser.email = profile.email;
        dataUser.password = profile.password;
        dataUser.token = profile.token;
        dataUser.firstName = profile.firstName;
        dataUser.lastName = profile.lastName;
      }
    });
    if (!dataUser.email) {
      throw new Error('Required');
    }
    return dataUser;
  }
);

export const addToBasketThunk = createAsyncThunk(
  'users/addToBasket',
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

export const addToWishListThunk = createAsyncThunk(
  'users/addToWishList',
  async (id: number, { getState }: any) => {
    const store = getState().users;
    const response = await instance.patch(endpoints.user.replace(':id', String(id)), {
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
      toast(notificationMessages.register.success);
    });
    builder.addCase(addUsersThunk.rejected, (state) => {
      state.isFetching = false;
      toast(notificationMessages.register.error);
    });

    builder.addCase(loginThunk.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.token = action.payload.token;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.password = action.payload.password;
      state.email = action.payload.email;
      state.isFetching = false;
      state.isAuth = true;
      localStorage.setItem('token', String(action.payload.token));
      toast(notificationMessages.login.success);

      // get title fot toast from notificationMessages.ts
      // add notification where necessary
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.isFetching = false;
      console.log('er');
      toast(notificationMessages.login.error);
    });

    builder.addCase(addToBasketThunk.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(addToBasketThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.basketId = action.payload.basketId;
      state.isFetching = false;
    });
    builder.addCase(addToBasketThunk.rejected, () => {
      alert('the good is not in the basket');
    });

    builder.addCase(addToWishListThunk.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(addToWishListThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.wishListId = action.payload.wishListId;
      state.isFetching = false;
    });
    builder.addCase(addToWishListThunk.rejected, () => {
      alert('the good is not in the WishList');
    });
  },

  reducers: {}
});

// export const {  } = usersSlice.actions;
export default usersSlice.reducer;
