import { configureStore } from '@reduxjs/toolkit';

import { appSlice } from './slice/appSlice';
import { userAuthSlice } from './slice/userAuthSlice';
import { usersSlice } from './slice/usersSlice';

import { loadStateToken, saveState } from 'utils/saveLocalStorage';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    userAuth: userAuthSlice.reducer,
    users: usersSlice.reducer,
  },
  preloadedState: {
    userAuth: loadStateToken(),
  },
});

store.subscribe(() => {
  saveState(store.getState().userAuth.user?.token || '');
});

export type AppRootStore = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
