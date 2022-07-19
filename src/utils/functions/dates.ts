import formatDistance from 'date-fns/formatDistance';

/**
 * It takes a date and returns a human-readable string of how long ago that date was
 * Reference: https://date-fns.org/v2.28.0/docs/formatDistance
 * @param date - The date to be formatted.
 */
export const humanizeDate = (date: string): string =>
  formatDistance(new Date(date), new Date(), { includeSeconds: true });
