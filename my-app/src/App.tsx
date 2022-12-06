import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { useAppDispatch } from './app/hooks';

import { ComponentRoutes } from './components/componentRoutes';
import { getToursThunk } from './store/toursSlice';
import { Loader } from './components/common/Loader';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getToursThunk());
  }, []);

  return (
    <>
      <ComponentRoutes />
      <ToastContainer />
      <Loader />
      {/* here must be loader in separated component (common)*/}
    </>
  );
};
