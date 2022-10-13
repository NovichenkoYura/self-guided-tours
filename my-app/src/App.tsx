import React from 'react';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import { Main } from './pages/Main';
import { Explore } from './pages/Explore';
import { Subscribers } from './pages/Subscribers';
import { Subscriptions } from './pages/Subscriptions';
import { Messages } from './pages/Messages';
import { Saved } from './pages/Saved';
import { Settings } from './pages/Settings';
import { NotFoundpage } from './pages/NotFoundpage';
import { Registration } from './pages/Registration';

import { Layout } from './components/Layout';

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
          <Route path="settings" element={<Settings />} />
          <Route path="registration" element={<Registration />} />
          <Route path="log in" element={<Login />} />
          <Route path="*" element={<NotFoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
