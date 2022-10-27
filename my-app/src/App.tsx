import React from 'react';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import { Main } from './pages/Main';

import { locations } from '../src/constants/locations';

import { Subscribers } from './pages/Subscribers';
import { Subscriptions } from './pages/Subscriptions';
import { Messages } from './pages/Messages';
import { Saved } from './pages/Saved';
import { BecomeAnOwner } from './pages/BecomeAnOwner';
import { NotFoundpage } from './pages/NotFoundpage';
import { Registration } from './pages/Registration';

import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Wishlist } from './pages/Wishlist';
import { Basket } from './pages/Basket';
import { ComponentRoutes } from './constants/componentRoutes';

function App() {
  return (
    <>
      <ComponentRoutes />
    </>
  );
}

export default App;
