import { Nav, NavItem } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
const SharedLayout = () => {
  return (
    <>
      <Nav>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/movies"> Movies </NavItem>
      </Nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
