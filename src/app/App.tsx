import React, { ReactElement, useEffect, useState } from 'react';

import { message } from 'antd';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';

import mainStyle from '../styles/container.module.sass';

import style from './App.module.sass';

import { Progress, UserBadge } from 'components';
import { END_LOADING } from 'components/progress/data/data';
import { useAppDispatch } from 'hooks';
import { Routers } from 'pages';
import {
  auth,
  logout,
  selectorErrorMessage,
  selectorIsAuthRequest,
  selectorIsLoadingApp,
  selectorIsProgress,
  selectorUserAuthName,
  startApp,
} from 'store';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();
  const isAuthRequest = useSelector(selectorIsAuthRequest);
  const isLoadingApp = useSelector(selectorIsLoadingApp);
  const isLoading = useSelector(selectorIsProgress);
  const isAuth = useSelector(selectorUserAuthName);
  const errorMessage = useSelector(selectorErrorMessage);
  const nameUserAuth = useSelector(selectorUserAuthName);

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent > END_LOADING && isAuthRequest) {
      dispatch(startApp());
    }
  }, [percent]);

  useEffect(() => {
    dispatch(auth());
  }, []);

  useEffect(() => {
    if (errorMessage) {
      message.error(errorMessage);
    }
  }, [errorMessage]);

  const onLogout = (): void => {
    dispatch(logout());
  };

  return (
    <div className={style.appWrapper}>
      <div className={style.header}>
        {isAuth ? (
          <UserBadge name={nameUserAuth || ''} disable={isLoading} callback={onLogout} />
        ) : null}
      </div>
      <div className={mainStyle.mainContainer}>
        <div className={mainStyle.container}>
          {isLoadingApp ? (
            <Routers />
          ) : (
            <Progress percent={percent} setPercent={setPercent} />
          )}
        </div>
      </div>
      <div className={style.footer} />
    </div>
  );
};
