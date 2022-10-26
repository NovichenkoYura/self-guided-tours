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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={locations.tours.path} element={locations.tours.component} />
          <Route path={locations.subscribers.path} element={locations.subscribers.component} />
          <Route path={locations.subscription.path} element={locations.subscription.component} />
          <Route path={locations.messages.path} element={locations.messages.component} />
          <Route path={locations.saved.path} element={locations.saved.component} />
          <Route path={locations.becomeanowner.path} element={locations.becomeanowner.component} />
          <Route path={locations.registration.path} element={locations.registration.component} />
          <Route path={locations.login.path} element={locations.login.component} />
          <Route path={locations.wishlist.path} element={locations.wishlist.component} />
          <Route path={locations.basket.path} element={locations.basket.component} />
          <Route path={locations.notfoundpage.path} element={locations.notfoundpage.component} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
