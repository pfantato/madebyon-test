import React, { useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { Search } from '@/components';
import { useDebounce, useFocus } from '@/hooks';

type Filter<List extends any[]> = React.PropsWithChildren<{
  label?: string;
  placeholder?: string;
  filterFn: (value: string) => unknown;
}>;

export const Filter = <List extends any[]>({
  label,
  filterFn,
  placeholder,
}: Filter<List>) => {
  const [filter, setFilter] = useState<string>();
  const [inputRef, setInputFocus] = useFocus();

  const debouncedSearch = useDebounce(filter, 300);

  const updateFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(value);
  };

  useHotkeys(
    '/',
    () => {
      const prev = filter;
      setInputFocus();
      setFilter(prev);
    },
    { keyup: true }
  );

  useEffect(() => {
    filterFn(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className='flex flex-col mt-16 mb-10'>
      {label && <label htmlFor='list-filter'>{label}</label>}
      <Search
        ref={inputRef}
        id='list-filter'
        className='placeholder:font-light placeholder:text-black-300'
        placeholder={placeholder}
        onChange={updateFilter}
      />
      <span
        className='mt-2 visible peer-focus:invisible text-cornflower-blue-700 text-base inline-flex items-baseline font-display font-light opacity-80
      dark:text-cornflower-blue'
      >
        Press{' '}
        <pre
          className='
            text-red-700 bg-rose-100 px-1 mx-1 rounded-sm py-px border border-red-700 text-sm
            dark:bg-red-800 dark:text-red-200 dark:border-red-200
          '
        >
          /
        </pre>{' '}
        to focus the search input.
      </span>
    </div>
  );
};
