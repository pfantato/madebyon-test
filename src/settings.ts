export const options = {
  themes: ['dark', 'light'],
  sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
  flows: ['vertical', 'horizontal'],
} as const;

type Unlock<Obj> = {
  -readonly [Prop in keyof Obj]: Unlock<Obj[Prop]>;
};

export type Config = Unlock<typeof options>;
export type GetConfigValue<K extends keyof Config = keyof Config> =
  Config[K][number];

/**
 * The function normalize takes in three parameters: validValues, value, and defaultValue. The
 * defaultValue is set to the first value in the validValues array. The function checks if the value is
 * included in the validValues array. If it is not, the function returns the defaultValue. If it is,
 * the function returns the value.
 * @param options - An array of valid values.
 * @param value - The value to normalize.
 * @param [defaultValue] - The value to return if the value is not in the validValues array.
 * @returns If the value is not in the list of valid values, return the default value, otherwise return the
 * value.
 */
export const normalize = <
  Key extends keyof Config,
  AvailableValues = GetConfigValue<Key>
>(
  options: AvailableValues[],
  value: AvailableValues,
  defaultValue: AvailableValues = options[0]
) => {
  if (!options.includes(value)) return defaultValue;
  return value;
};
