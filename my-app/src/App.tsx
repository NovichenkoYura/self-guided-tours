import React from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';

import { ComponentRoutes } from './components/componentRoutes';
import { getToursThunk } from './store/usersSlice';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getToursThunk());
  }, []);
  return (
    <>
      <ComponentRoutes />
    </>
  );
};
