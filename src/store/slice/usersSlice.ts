import { createSlice } from '@reduxjs/toolkit';

import { Nullable, UserSendType, UsersResponseType } from '../../types';
import { deleteUsers, getUsers, updateUsers } from '../thunk';

type InitStateType = {
  users: Nullable<UserSendType[]>;
};

export const initialState: InitStateType = { users: null };

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    cleanSlice: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UsersResponseType;
      state.users = payload.users;
    });

    builder.addCase(deleteUsers.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UsersResponseType;
      state.users = payload.users;
    });

    builder.addCase(updateUsers.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UsersResponseType;
      state.users = payload.users;
    });
  },
});

export const { cleanSlice } = usersSlice.actions;
