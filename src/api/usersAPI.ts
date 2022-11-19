import { API_CONFIG } from 'api';
import { Path } from 'enums';
import { UsersIdType, UsersResponseType, UsersUpdateType } from 'types';

export const usersAPI = {
  getUsers: async (token: string) => {
    const res = await API_CONFIG.get<UsersResponseType>(`${Path.Users}`, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  },

  deleteUser: async (payload: UsersIdType, token: string) => {
    const res = await API_CONFIG.delete<UsersIdType>(`${Path.Users}`, {
      data: payload,
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  },

  updateUser: async (payload: UsersUpdateType, token: string) => {
    const res = await API_CONFIG.post<UsersResponseType>(`${Path.Users}`, payload, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  },
};
