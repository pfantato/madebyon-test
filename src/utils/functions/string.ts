/**
 * It takes a string, normalizes it to NFD, and then replaces all diacritics with nothing
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
 * @param str - The string to be normalized.
 */
export const normalizeString = (str: string): string =>
  str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
