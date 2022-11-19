import { createSlice } from '@reduxjs/toolkit';

import { Nullable, UserAuthType, UserResponseType } from '../../types';
import { auth, createAccount, loginAccount } from '../thunk/userAuthThunk';

export type InitStateUserAuthSliceType = {
  user: Nullable<UserAuthType>;
};

export const initialStateUserAuthSlice: InitStateUserAuthSliceType = { user: null };

export const userAuthSlice = createSlice({
  name: 'userAuthSlice',
  initialState: initialStateUserAuthSlice,
  reducers: {
    logout: () => initialStateUserAuthSlice,
  },
  extraReducers: builder => {
    builder.addCase(createAccount.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserResponseType;
      state.user = payload.user;
    });

    builder.addCase(loginAccount.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserResponseType;
      state.user = payload.user;
    });

    builder.addCase(auth.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserResponseType;
      state.user = payload.user;
    });
  },
});

export const { logout } = userAuthSlice.actions;
