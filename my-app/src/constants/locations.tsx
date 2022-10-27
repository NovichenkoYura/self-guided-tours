import { Basket } from '../pages/Basket';
import { BecomeAnOwner } from '../pages/BecomeAnOwner';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main';
import { Messages } from '../pages/Messages';
import { Registration } from '../pages/Registration';
import { Saved } from '../pages/Saved';
import { Subscribers } from '../pages/Subscribers';
import { Subscriptions } from '../pages/Subscriptions';
import { Tours } from '../pages/Tours';
import { Wishlist } from '../pages/Wishlist';

export const locations = {
  main: { path: '/main', component: <Main /> },
  tours: { path: '/path', component: <Tours /> },
  subscribers: { path: '/subscribers', component: <Subscribers /> },
  subscription: { path: '/subscription', component: <Subscriptions /> },
  messages: { path: '/messages', component: <Messages /> },
  saved: { path: '/saved', component: <Saved /> },
  becomeanowner: { path: '/becomeanowner', component: <BecomeAnOwner /> },
  registration: { path: '/registration', component: <Registration /> },
  login: { path: '/log in', component: <Login /> },
  wishlist: { path: '/wishlist', component: <Wishlist /> },
  basket: { path: '/basket', component: <Basket /> }
};
