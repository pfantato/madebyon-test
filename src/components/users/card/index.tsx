import { UserAvatar } from '@/components';
import { UserInfo } from './info';

import type { User } from '@/types';

type Props = {
  user: User;
};

export const UserCard: React.FunctionComponent<Props> = ({ user }: Props) => {
  const { uuid } = user.login;

  return (
    <div
      id={uuid}
      className='
        max-w-sm w-full mx-auto overflow-hidden rounded-xl
        border-2 bg-white shadow-lg dark:bg-heavy-metal-400 hover:border-cornflower-blue-300
        dark:border-cornflower-blue-900 dark:hover:border-cornflower-blue-300
        transition-colors duration-200 transform group
      '
    >
      <UserAvatar {...user} />
      <UserInfo {...user} />
    </div>
  );
};
