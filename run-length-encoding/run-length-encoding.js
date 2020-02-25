export const encode = input => {
  if (input === '') return '';

  const inputArray = input.split('');
  let temp = {
    letter: null,
    count: 1,
  };
  let outputArray = [];

  for (let letter of inputArray) {
    if (temp.letter === null) {
      temp.letter = letter;
      continue;
    }
    if (temp.letter === letter) {
      temp.count++;
      continue;
    }
    if (temp.letter !== letter) {
      if (temp.count === 1) {
        outputArray.push(temp.letter);
      }
      if (temp.count > 1) {
        outputArray.push(`${temp.count}${temp.letter}`);
        temp.count = 1;
      }
      temp.letter = letter;
    }
  }

  const lastLetter = temp.count === 1 ? temp.letter : `${temp.count}${temp.letter}`;

  const output = outputArray.join('').concat(lastLetter);

  return output;
};

export const decode = input => {
  if (input === '') return '';

  const inputArray = input.split('');

  let tempNumber = [];
  let outputArray = [];

  for (let element of inputArray) {
    const parsedElement = parseInt(element);
    if (Number.isInteger(parsedElement)) {
      tempNumber.push(parsedElement);
      continue;
    }
    if (tempNumber.length) {
      const repeats = parseInt(tempNumber.join(''));
      outputArray.push(element.repeat(repeats));
      tempNumber = [];
      continue;
    }
    outputArray.push(element);
  }

  return outputArray.join('');
};
