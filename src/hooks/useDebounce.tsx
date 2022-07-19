import { useState, useEffect } from 'react';

/**
 * useDebounce is a hook that returns a debounced version of the value passed in as an argument, which delays the
 * returned value for the specified number of milliseconds.
 *
 * @param value - The value to be debounced
 * @param delay - The delay in milliseconds for the debounce.
 * @returns A debounced value.
 */
export const useDebounce = (value, delay) => {
  // State for debounced value
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    // Cancel the timeout if value is updated
    return () => {
      clearTimeout(handler);
    };
    // Only re-call effect if value or delay changes
  }, [value, delay]);

  return debounced;
};
