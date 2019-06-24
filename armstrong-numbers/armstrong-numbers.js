export const validate = number => {
  const stringArray = Array.from(number.toString());
  const numbers = stringArray.map(item => Number(item));
  const sum = numbers.reduce((acc, val) => {
    return acc + Math.pow(val, numbers.length)
  }, 0);

  if (sum === number) return true;

  return false;
};
