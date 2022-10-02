import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/user_context';

const PrivateRoute2 = () => {
  const { currentUser } = useUserContext();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate
      replace
      to={{
        pathname: '/login',
        // state: { from: rest.path },
      }}
    />
  );
};
export default PrivateRoute2;
