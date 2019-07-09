const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const value = colors => {
  const firstNumber = COLORS.indexOf(colors[0]);
  const secondNumber = COLORS.indexOf(colors[1]);
  const stringValue = `${firstNumber}${secondNumber}`;
  return Number(stringValue);
};
