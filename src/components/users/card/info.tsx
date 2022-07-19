import { Icon } from '@/components';
import { getPhoneNumber, humanizeDate } from '@/utils';

import type { User } from '@/types';

export const UserInfo: React.FunctionComponent<User> = ({
  nat,
  cell,
  phone,
  registered,
  location,
  email,
  name,
}) => {
  const phoneNumber = getPhoneNumber(nat, phone);
  const mobileNumber = getPhoneNumber(nat, cell);
  const memberSince = humanizeDate(registered.date);

  return (
    <>
      <div className='px-6 py-4'>
        <h1 className='text-xl font-semibold truncate text-gray-800 dark:text-white'>
          {name.first} {name.last}
        </h1>

        <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200'>
          <Icon icon='ri/RiMapPinUserFill' size='1.5rem' />
          <p className='px-2 text-sm'>
            {location.city}, {location.country}
          </p>
        </div>

        <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200 hover:cursor-pointer'>
          <Icon icon='ri/RiMailFill' size='1.5rem' />
          <a href={`mailto:${email}`} className='px-2 text-sm'>
            {email}
          </a>
        </div>

        <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200 hover:cursor-pointer'>
          <Icon icon='ri/RiPhoneFill' size='1.5rem' />
          <a href={`tel:${phoneNumber.normalized}`} className='px-2 text-sm'>
            {phoneNumber.formatted}
          </a>
        </div>

        <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200 hover:cursor-pointer'>
          <Icon icon='ri/RiWhatsappFill' size='1.5rem' />
          <a
            href={`https://api.whatsapp.com/send?phone=${mobileNumber.normalized}`}
            className='px-2 text-sm'
          >
            {mobileNumber.formatted}
          </a>
        </div>

        <div className='flex items-center justify-center mt-4 text-gray-400 dark:text-gray-200'>
          {/* <Icon icon='ri/RiAccountCircleFill' size='1.5rem' /> */}
          <p className='px-2 text-xs'>Registered {memberSince} ago</p>
        </div>
      </div>
    </>
  );
};
