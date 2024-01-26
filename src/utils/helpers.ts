import formatter from 'format-number';

/**
 * Formats a number with a specified prefix.
 *
 * @remarks
 * Uses the `formatter` function internally to apply formatting.
 *
 * @param prefix - The string to prepend to the formatted number. Defaults to '$'.
 * @param number - The number to be formatted. Defaults to 0.
 *
 * @returns A string representing the formatted number with the prefix.
 */
export const formatNumber = (number = 0, prefix?: string) => {
  return formatter({ prefix })(number);
};
