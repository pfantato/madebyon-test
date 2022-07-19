import React, { useContext, useEffect, useState } from 'react';

import { Filter } from '@/components';
import { UserContext } from '@/contexts';
import { byName } from '@/utils';

import type { User } from '@/types';

type Filter<List extends []> = React.PropsWithChildren<{
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  values: List;
}>;
export const UsersFilter = () => {
  const { users, setUsers, original } = useContext(UserContext);

  const [filter, setFilter] = useState<string>();

  const filterUsers = () => {
    const filterFn = () => {
      if (!filter || !users) return original;
      return original.filter((user) => byName(user, filter));
    }
    const result = filterFn();
    typeof setUsers === 'function' && setUsers(result);
  };

  useEffect(() => {
    filterUsers();
  }, [filter])

  return (
    <div className='users-list-filter'>
      <Filter<User[]>
        filterFn={setFilter}
        label='Filter users by name:'
        placeholder='Start typing to search users by name'
      />
      {/* <label htmlFor='list-filter'>:</label>
      <Search
        id='list-filter'
        className='filter-input'
        placeholder=''
        onChange={updateFilter}
      /> */}
    </div>
  );
};
