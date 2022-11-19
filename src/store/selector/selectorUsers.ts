import { AppRootStore } from 'store';
import { DataType, Nullable } from 'types';
import { changeDataUserForTable } from 'utils/changeDataUserForTable';

export const selectorUsers = (state: AppRootStore): Nullable<DataType[]> =>
  state.users.users ? changeDataUserForTable(state.users.users) : null;
