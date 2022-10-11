import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');

const Layout = () => {
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
        <NavLink to="/settings" className={setActive}>
          Settings
        </NavLink>
        <NavLink to="/notfound" className={setActive}>
          NotFoundpage
        </NavLink>
        <NavLink to="/registration" className={setActive}>
          Registartion
        </NavLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">2022</footer>
    </>
  );
};

export { Layout };
