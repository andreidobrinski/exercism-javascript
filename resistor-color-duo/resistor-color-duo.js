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

const colorCode = color => COLORS.indexOf(color);

export const value = colors => {
  const firstNumber = colorCode(colors[0]);
  const secondNumber = colorCode(colors[1]);
  const stringValue = `${firstNumber}${secondNumber}`;
  return Number(stringValue);
};
