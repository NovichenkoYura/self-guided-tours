import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as LoginPerson } from '../img/loginPerson.svg';
import { ReactComponent as LoginLines } from '../img/loginLines.svg';
import { ReactComponent as Chosen } from '../img/hurt1_notfilled.svg';
import { ReactComponent as Basket } from '../img/shoppingCart.svg';
import { locations } from '../constants/locations';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');

const Layout = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <header>
        <NavLink to={locations.main.path} className={setActive}>
          Main
        </NavLink>
        <NavLink to={locations.tours.path} className={setActive}>
          Tours
        </NavLink>
        <NavLink to={locations.subscribers.path} className={setActive}>
          Subscribers
        </NavLink>
        <NavLink to={locations.subscription.path} className={setActive}>
          Subscriptions
        </NavLink>
        <NavLink to={locations.messages.path} className={setActive}>
          Messages
        </NavLink>
        <NavLink to={locations.saved.path} className={setActive}>
          Saved
        </NavLink>

        <NavLink to={locations.becomeanowner.path} className={setActive}>
          Become an owner
        </NavLink>
        <div onClick={() => setShowDropdown(!showDropdown)} className="dropdown__link">
          <div className="loginsvg__lines">
            <LoginLines className="login__person" width="20" height="20" />
          </div>
          <div className="loginsvg__person">
            <LoginPerson className="login__person" width="35" height="35" />
          </div>
        </div>
        {showDropdown && (
          <div className="dropdown__window">
            <NavLink to={locations.login.path} className="dropdown__item">
              Log in
            </NavLink>
            <NavLink to={locations.registration.path} className="dropdown__item">
              Sign up
            </NavLink>
          </div>
        )}
        <ul className="headerOrder__container">
          <li className="headerOrder__item">
            <NavLink to={locations.wishlist.path}>
              <Chosen className="headerOrder_svgwishlist" width="25" height="25" />
            </NavLink>
          </li>
          <li className="headerOrder__item">
            <NavLink to={locations.basket.path}>
              <Basket className="headerOrder_svgbasket" width="25" height="25" />
            </NavLink>
          </li>
        </ul>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container"></footer>
    </>
  );
};

export { Layout };
