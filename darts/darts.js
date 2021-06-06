export const score = (x, y) => {
  const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  switch (true) {
    case distance > 10:
      return 0;
    case distance > 5:
      return 1;
    case distance > 1:
      return 5;
    default:
      return 10;
  }
};
