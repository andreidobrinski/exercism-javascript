export class Matrix {
  constructor(input) {
    this.input = input;
    const rowStrings = input.split('\n');
    this.rowArray = rowStrings.map(string => string.split(' ').map(Number));
  }

  get rows() {
    return this.rowArray;
  }

  get columns() {
    return this.rowArray[0].map((_, index) => this.rowArray.map(row => row[index]));
  }
}
