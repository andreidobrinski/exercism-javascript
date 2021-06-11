export const rows = (input, triangle = [[1]]) => {
  if (input === 0) return [];
  if (input === 1) return triangle;

  let prevRow = triangle[triangle.length - 1];

  let currentRow = [1];

  for (let i = 1; i < prevRow.length; i++) {
    currentRow[i] = prevRow[i] + prevRow[i - 1];
  }
  currentRow.push(1);

  triangle.push(currentRow);

  return rows(input - 1, triangle);
};
