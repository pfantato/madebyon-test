import type { Countries } from '@/types';

/**
 * Given a country, return the country's phone code.
 * @param country - The country code of the user's phone number.
 * @returns The country phone code.
 */
const getCountryPhoneCode = (country: Countries): string => {
  const availableCountries = {
    us: '1',
    dk: '45',
    fr: '33',
    gb: '44',
    br: '55',
  };
  return availableCountries[country] || '55';
};

/**
 * It takes a string, removes all non-numeric characters, and returns the result.
 * @param number - The phone number to normalize.
 */
const normalizePhone = (number: string): string => number.replace(/[^\d]/g, '');

/**
 * It takes a country and a phone number, and returns an object with the normalized and formatted phone
 * number
 * @param number - The phone number to be formatted.
 */
export const getPhoneNumber = (
  country: Countries,
  number: string
): { normalized: string; formatted: string } => {
  const countryCode = getCountryPhoneCode(country);
  return {
    normalized: countryCode.concat(normalizePhone(number)),
    formatted: `+${countryCode} ${number}`,
  };
};
