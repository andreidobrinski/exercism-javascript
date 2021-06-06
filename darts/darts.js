const DISTANCE_TO_SCORE = {
  miss: 0,
  outer: 1,
  middle: 5,
  inner: 10,
};

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
