import React from 'react';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import { Main } from './pages/Main';
import { Explore } from './pages/Explore';
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
          <Route path="explore" element={<Explore />} />
          <Route path="subscribers" element={<Subscribers />} />
          <Route path="subscription/*" element={<Subscriptions />} />
          <Route path="messages" element={<Messages />} />
          <Route path="saved" element={<Saved />} />
          <Route path="becomeanowner" element={<BecomeAnOwner />} />
          <Route path="registration" element={<Registration />} />
          <Route path="log in" element={<Login />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="basket" element={<Basket />} />
          <Route path="*" element={<NotFoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
