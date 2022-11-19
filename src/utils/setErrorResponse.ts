import { Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { logout } from 'store';

export const setErrorResponse = (
  e: any,
  rejectWithValue: Function,
  dispatch: Dispatch,
): Function => {
  const err = e as Error | AxiosError<{ error: string }>;
  if (axios.isAxiosError(err)) {
    if (err.response?.data?.auth === false) {
      dispatch(logout());
    }
    const error = err.response?.data ? err.response.data.message : err.message;
    return rejectWithValue(error);
  }
  if (e instanceof Error) {
    return rejectWithValue(err.message);
  }
  return rejectWithValue(err);
};
