import { useId, forwardRef } from 'react';
import { Icon } from './icon';

type Props = Omit<React.HTMLAttributes<HTMLInputElement>, 'type'>;

export const Search = forwardRef<HTMLInputElement, Props>(
  ({ id: _id, placeholder: _placeholder, onChange }, ref) => {
    const id = _id || useId();
    const placeholder = _placeholder || 'Start typing to search...';
    return (
      <div className='relative'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <Icon icon='ri/RiSearchLine' />
        </span>

        <input
          ref={ref}
          id={id}
          type='search'
          className='w-full py-3 pl-10 pr-4 accent-cornflower-blue text-cornflower-blue-900 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
);
