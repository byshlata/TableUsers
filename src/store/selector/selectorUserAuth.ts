import { AppRootStore } from 'store';

export const selectorUserAuthName = (state: AppRootStore): string | undefined =>
  state.userAuth.user?.name;
