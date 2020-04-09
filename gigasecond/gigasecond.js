//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECOND_IN_MS = Math.pow(10,9) * 1000;

export const gigasecond = (start) => {
  const endTime = start.getTime() + GIGASECOND_IN_MS;

  return new Date(endTime);
};
