import { Status } from 'enums';
import { InitStateUserAuthSliceType } from 'store/slice/userAuthSlice';

export const loadStateToken = (): InitStateUserAuthSliceType | undefined => {
  try {
    const tokenLocalStorage = localStorage.getItem('token');
    if (tokenLocalStorage === null) {
      return undefined;
    }
    const token = JSON.parse(tokenLocalStorage) as string;
    return {
      user: {
        token,
        status: Status.Active,
        updatedAt: '',
        timeLastLogin: '',
        name: '',
        email: '',
        _v: 1,
        _id: '',
        createdAt: '',
      },
    };
  } catch (err) {
    throw new Error('Error get to Local Storage token');
  }
};

export const saveState = (token: string): void => {
  try {
    localStorage.setItem('token', JSON.stringify(token));
  } catch {
    throw new Error('Error save token to Local Storage');
  }
};
