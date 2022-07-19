import type { User } from '@/types';

import { normalizeString } from '@/utils';

/**
 * A function that takes two arguments, the first being an object with a name property, and
 * the second being a string. The function returns a boolean value.
 *
 * @param { name: { first, last } } - the object with name property that has 'first' and 'last' attributes.
 * @param filter - the filter string
 * @returns true if the filter matches the first or last name of the person
 */
export const byName = ({ name }: User, filter: string): boolean => {
  if (!filter || !name) return false;

  return filter.split(' ').every((searchPartial) => {
    return Object.values(name).some((namePartial) => {
      if(!searchPartial || !namePartial) return false;
      const pattern = new RegExp(normalizeString(searchPartial), 'gi');
      const normalized = normalizeString(namePartial);
      return pattern.test(normalized);
    });
  });
};
