import { useContext } from 'react';

import { UserContext } from '@/contexts';
import { UserCard, UsersFilter } from '@/components';

export const UsersList = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      <UsersFilter />
      <div
        className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4'
        role='list'
      >
        {users?.map((user) => (
          <div
            key={user.login.uuid}
            className='flex flex-col items-center p-0'
          >
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </>
  );
};
