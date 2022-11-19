import { DataType, UserSendType } from 'types';
import { formattedDate } from 'utils';

export const changeDataUserForTable = (users: UserSendType[]): DataType[] =>
  users.map(user => ({
    // eslint-disable-next-line no-underscore-dangle
    key: user._id,
    name: user.name,
    email: user.email,
    createTime: formattedDate(user.createdAt),
    lastLoginTime: formattedDate(user.timeLastLogin),
    status: user.status,
  }));
