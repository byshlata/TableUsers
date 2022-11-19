import React, { ReactElement, useEffect, useState } from 'react';

import { DeleteFilled, LockFilled, UnlockFilled } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { useSelector } from 'react-redux';

import { columns } from './data/tableHeader';

import { Status } from 'enums';
import { useAppDispatch } from 'hooks';
import {
  deleteUsers,
  getUsers,
  selectorIsProgress,
  selectorUsers,
  updateUsers,
} from 'store';
import { createDataDeleteUserById } from 'utils';

export const Users = (): ReactElement => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectorUsers);
  const isLoading = useSelector(selectorIsProgress);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]): void => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const onBlockUsers = (): void => {
    const usersId = createDataDeleteUserById(selectedRowKeys);
    dispatch(updateUsers({ ...usersId, data: Status.Block }));
  };
  const onUnblockUsers = (): void => {
    const usersId = createDataDeleteUserById(selectedRowKeys);
    dispatch(updateUsers({ ...usersId, data: Status.Active }));
  };
  const onDeleteUsers = (): void => {
    const usersId = createDataDeleteUserById(selectedRowKeys);
    dispatch(deleteUsers(usersId));
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={onBlockUsers}
          icon={<LockFilled />}
          disabled={!hasSelected}
          loading={isLoading}
        >
          Block users
        </Button>
        <Button
          type="primary"
          onClick={onUnblockUsers}
          icon={<UnlockFilled />}
          disabled={!hasSelected}
          loading={isLoading}
        >
          Unblock users
        </Button>
        <Button
          type="primary"
          onClick={onDeleteUsers}
          icon={<DeleteFilled />}
          disabled={!hasSelected}
          loading={isLoading}
        >
          Delete users
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        bordered
        loading={isLoading}
        columns={columns}
        dataSource={users || undefined}
      />
    </div>
  );
};
