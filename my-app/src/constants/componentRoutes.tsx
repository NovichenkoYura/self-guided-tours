import { Routes, Route, Link } from 'react-router-dom';
import { locations } from './locations';
import { Layout } from '../components/Layout';

export const ComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={locations.main.path} element={locations.main.component} />
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
      </Route>
    </Routes>
  );
};
