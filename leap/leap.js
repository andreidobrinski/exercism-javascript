// must be divisible by 4
// not divisible by 100 unless also divisible by 400

export const isLeap = year => {
  if (year % 400 === 0) return true;
  if (year % 4 !== 0) return false;
  if (year % 100 === 0) return false;
  return true;
};
