import { createContext } from 'react';

import { User } from '@/types';

export type UserContext = {
  users: User[];
  original: User[];
  setUsers: (users: User[]) => void;
};

const userContext: UserContext = {
  original: [],
  users: [],
  setUsers: (users: User[]): void => {},
};

export const UserContext = createContext(userContext);
