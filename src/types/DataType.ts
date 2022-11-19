import React from 'react';

import { StatusType } from 'types';

export type DataType = {
  key: React.Key;
  name: string;
  email: string;
  createTime: string;
  lastLoginTime: string;
  status: StatusType;
};
