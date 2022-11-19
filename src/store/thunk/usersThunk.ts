import { createAsyncThunk } from '@reduxjs/toolkit';

import { usersAPI } from 'api';
import { AppRootStore } from 'store/store';
import { UsersIdType, UsersUpdateType } from 'types';
import { setErrorResponse } from 'utils';

export const getUsers = createAsyncThunk(
  'usersSlice/getUsers',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const state = getState() as AppRootStore;
      return await usersAPI.getUsers(state.userAuth.user?.token || '');
    } catch (e) {
      return setErrorResponse(e, rejectWithValue, dispatch);
    }
  },
);

export const deleteUsers = createAsyncThunk(
  'usersSlice/deleteUsers',
  async (payload: UsersIdType, { rejectWithValue, dispatch, getState }) => {
    try {
      const state = getState() as AppRootStore;
      return await usersAPI.deleteUser(payload, state.userAuth.user?.token || '');
    } catch (e) {
      return setErrorResponse(e, rejectWithValue, dispatch);
    }
  },
);

export const updateUsers = createAsyncThunk(
  'usersSlice/updateUsers',
  async (payload: UsersUpdateType, { rejectWithValue, dispatch, getState }) => {
    try {
      const state = getState() as AppRootStore;

      return await usersAPI.updateUser(payload, state.userAuth.user?.token || '');
    } catch (e) {
      return setErrorResponse(e, rejectWithValue, dispatch);
    }
  },
);
