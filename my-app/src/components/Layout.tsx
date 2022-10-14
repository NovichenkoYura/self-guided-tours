import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');

interface layoutProps {
  active?: boolean;
}

const Layout: React.FC<layoutProps> = () => {
  const [modalActive, setModalActive] = useState(true);
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
        <NavLink
          to="/registration"
          className={setActive}
          active={modalActive}
          setActive={setModalActive}
          onClick={() => setModalActive(true)}>
          Sign up
        </NavLink>
        <NavLink to="/log in" className={setActive}>
          Log in
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
