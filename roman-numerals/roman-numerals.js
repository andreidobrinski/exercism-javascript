// conversions
// M: 1000,
// CM: 900,
// D: 500,
// CD: 400,
// C: 100,
// XC: 90,
// L: 50,
// XL: 40,
// X: 10,
// IX: 9,
// V: 5,
// IV: 4,
// I: 1,

const onesConversion = {
  one: 'I',
  five: 'V',
  ten: 'X',
};

const tensConversion = {
  one: 'X',
  five: 'L',
  ten: 'C',
};

const hundredsConversion = {
  one: 'C',
  five: 'D',
  ten: 'M'
};

const convertDigit = (input, key) => {
  if (input < 4) return key.one.repeat(input);
  if (input === 4) return `${key.one}${key.five}`;
  if (input === 5) return key.five;
  if (input > 5 && input < 9) return `${key.five}${key.one.repeat(input - 5)}`;
  if (input === 9) return `${key.one}${key.ten}`;
};

const getConversionKey = arrayLength => {
  switch (arrayLength) {
    case 3:
      return hundredsConversion;
    case 2:
      return tensConversion;
    case 1:
      return onesConversion;
  }
}

export const toRoman = input => {
  let output = [];
  const stringArray = input.toString().split('');

  while (stringArray.length) {
    const number = parseInt(stringArray[0]);
    if (stringArray.length === 4) {
      output.push('M'.repeat(number));
      stringArray.shift();
      continue;
    }
    output.push(convertDigit(number, getConversionKey(stringArray.length)));
    stringArray.shift();
  }

  return output.join('');
};
