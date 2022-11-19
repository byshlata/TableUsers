import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthAPI } from 'api/authAPI';
import { AppRootStore } from 'store/store';
import { UserLoginType, UserRegistrationType, UserResponseType } from 'types';
import { setErrorResponse } from 'utils';

export const createAccount = createAsyncThunk(
  'userAuthSlice/createAccount',
  async (
    payload: UserRegistrationType,
    { rejectWithValue, dispatch },
  ): Promise<UserResponseType | Function> => {
    try {
      return await AuthAPI.register(payload);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue, dispatch);
    }
  },
);

export const loginAccount = createAsyncThunk(
  'userAuthSlice/loginAccount',
  async (
    payload: UserLoginType,
    { rejectWithValue, dispatch },
  ): Promise<UserResponseType | Function> => {
    try {
      return await AuthAPI.login(payload);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue, dispatch);
    }
  },
);

export const auth = createAsyncThunk(
  'userAuthSlice/auth',
  async (
    _,
    { rejectWithValue, dispatch, getState },
  ): Promise<UserResponseType | Function> => {
    try {
      const state = getState() as AppRootStore;
      const token = state.userAuth.user?.token || '';
      return await AuthAPI.auth(token);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue, dispatch);
    }
  },
);
