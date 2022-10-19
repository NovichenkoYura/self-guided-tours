import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as LoginPerson } from '../img/loginPerson.svg';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');

const Layout = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>
          Main
        </NavLink>
        <NavLink to="/explore" className={setActive}>
          Explore
        </NavLink>
        <NavLink to="/subscribers" className={setActive}>
          Subscribers
        </NavLink>
        <NavLink to="/subscription/" className={setActive}>
          Subscriptions
        </NavLink>
        <NavLink to="/messages" className={setActive}>
          Messages
        </NavLink>
        <NavLink to="/saved" className={setActive}>
          Saved
        </NavLink>
        <NavLink to="/notfound" className={setActive}>
          NotFoundpage
        </NavLink>
        <NavLink to="/becomeanowner" className={setActive}>
          Become an owner
        </NavLink>
        {/* <NavLink to="/registration" className={setActive}>
          Sign up
        </NavLink>
        <NavLink to="/log in" className={setActive}>
          Log in
        </NavLink> */}
        <div onClick={() => setShowDropdown(!showDropdown)} className="dropdown__link">
          <div className="dropdown__relative">
            <LoginPerson className="login__person" width="35" height="35" />
          </div>
        </div>
        {showDropdown && (
          <div className="dropdown__window">
            <NavLink to="/log in" className="dropdown__item">
              Log in
            </NavLink>
            <NavLink to="/registration" className="dropdown__item">
              Sign up
            </NavLink>
          </div>
        )}
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container"></footer>
    </>
  );
};

export { Layout };
