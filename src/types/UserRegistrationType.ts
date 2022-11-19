import { UserLoginType } from 'types';

export type UserRegistrationType = UserLoginType & {
  name: string;
};
