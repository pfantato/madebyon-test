import type { Countries } from "@/types";

/**
 * It takes a country code and returns a flag emoji
 * @param {Countries} country - The country code of the country you want to get the flag for.
 * @returns A flag emoji based on the country code.
 */
export const getFlag = (country: Countries): string => {
  switch (country.toLowerCase()) {
    case 'us':
      return '🇺🇸';
    case 'dk':
      return '🇩🇰';
    case 'fr':
      return '🇫🇷';
    case 'gb':
      return '🇬🇧';
    case 'br':
      return '🇧🇷';
    default:
      return '🏳';
  }
}