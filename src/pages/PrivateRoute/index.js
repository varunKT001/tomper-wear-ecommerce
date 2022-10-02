import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../../context/user_context';

const PrivateRoute = () => {
  const { currentUser } = useUserContext();
  const location = useLocation();

  return currentUser ? (
    <Navigate replace to={location.state?.from ?? '/'} />
  ) : (
    <Outlet />
  );
  // rest.path === '/login' ||
  //   rest.path === '/register' ||
  //   rest.path === '/forgot-password' ||
  //   rest.path === '/reset-password';
};
export default PrivateRoute;
