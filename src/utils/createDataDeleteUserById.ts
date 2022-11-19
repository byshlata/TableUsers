import React from 'react';

import { UsersIdType } from 'types';

export const createDataDeleteUserById = (id: React.Key[]): UsersIdType => ({
  id: id.map(element => element.toString()),
});
