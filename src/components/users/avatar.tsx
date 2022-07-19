import ReactCountryFlag from 'react-country-flag';


import { options, normalize } from '@/settings';
import { Avatar, Icon } from '@/components';
import { copyToClipboard } from '@/utils';

import type { Config } from '@/settings';
import type { User } from '@/types';

const { sizes } = options as Config;

type Props = Partial<User> & {
  size?: 'sm' | 'md' | 'lg';
};

export const UserAvatar: React.FunctionComponent<Props> = ({
  size,
  login,
  picture,
  name,
  nat,
}) => {
  const avatarSize = normalize<'sizes'>(sizes, size, 'lg');
  const { uuid } = login;
  return (
    <>
      <div className='flex justify-center pt-8 relative bg-cornflower-blue dark:bg-cornflower-blue-800'>
        <Avatar id={uuid} size={avatarSize} picture={picture} name={name} />
        <span className='absolute left-1/2 transform -translate-x-1/2 -bottom-4 bg-white rounded-full w-8 h-8 flex justify-center items-center text-xl'>
          <ReactCountryFlag countryCode={nat} svg />
        </span>
      </div>
      <div className='flex items-center justify-center px-6 py-6 pb-4 bg-gray-900 text-white'>
        <Icon icon='ri/RiAtFill' />
        <span
          className='text-lg font-semibold text-white'
          onClick={() => copyToClipboard(login.username)}
        >
          {login.username}
        </span>
      </div>
    </>
  );
};
