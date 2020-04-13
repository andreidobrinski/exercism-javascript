const ALLERGIES = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats',
};

export class Allergies {
  constructor(number) {
    this.allergiesList = [];
    this.number = number;
    if (number > 255) {
      this.number = number % 256
    }
    Object.keys(ALLERGIES).reverse().forEach(value => {
      if (this.number >= value) {
        this.allergiesList.push(ALLERGIES[value]);
        this.number = this.number - value;
      }
    });
  }

  list() {
    return this.allergiesList.reverse();
  }

  allergicTo(item) {
    return this.allergiesList.includes(item);
  }
}
