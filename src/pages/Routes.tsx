import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from 'enums';
import { Login, Page404, Register, Users } from 'pages';
import { selectorUserAuthName } from 'store';

export const Routers = (): ReactElement | null => {
  const isAuth = useSelector(selectorUserAuthName);

  const LOGIN = <Navigate to={`${Path.Login}`} />;
  const USERS = <Navigate to={`${Path.Users}`} />;

  return (
    <Routes>
      <Route path={`${Path.Other}`} element={<Page404 />} />
      <Route path={`${Path.Root}`} element={isAuth ? USERS : LOGIN} />
      <Route path={`${Path.Users}`} element={isAuth ? <Users /> : LOGIN} />
      <Route path={`${Path.Register}`} element={isAuth ? USERS : <Register />} />
      <Route path={`${Path.Login}`} element={isAuth ? USERS : <Login />} />
    </Routes>
  );
};
