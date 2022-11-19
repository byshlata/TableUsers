import React, { ReactElement } from 'react';

import 'antd/dist/antd.css';

import { Button, Typography } from 'antd';

import style from './UserBadge.module.sass';

const { Text } = Typography;

type UserBadgeType = {
  callback: () => void;
  disable: boolean;
  name: string;
};

export const UserBadge = ({ callback, disable, name }: UserBadgeType): ReactElement => {
  const onClick = (): void => {
    callback();
  };

  return (
    <div className={style.block}>
      <div className={style.item}>
        <Text mark>{name}</Text>
        <Button type="primary" disabled={disable} onClick={onClick}>
          Logout
        </Button>
      </div>
    </div>
  );
};
