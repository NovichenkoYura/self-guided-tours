import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import toursReducer from './toursSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    tours: toursReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
