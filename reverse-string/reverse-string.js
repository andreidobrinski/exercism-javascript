export const reverseString = (input) => {
  const split = input.split('');
  const reversed = split.reverse();
  return reversed.join('');
};
