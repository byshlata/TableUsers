import type { ColumnsType } from 'antd/es/table';

import { DataType } from 'types';

export const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Time create account',
    dataIndex: 'createTime',
  },
  {
    title: 'Time last login',
    dataIndex: 'lastLoginTime',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
