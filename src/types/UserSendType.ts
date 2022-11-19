import { StatusType } from './StatusType';

export type UserSendType = {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  timeLastLogin: string;
  status: StatusType;
  _v: number;
};
