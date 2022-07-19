import type { User } from '@/types';

export const byRegistered = ({ registered: { date } }: User): boolean => {
  if (!date) return false;
  const dateObj = new Date(date);
  return dateObj.getFullYear() > 2000 && dateObj.getFullYear() <= 2010;
};
