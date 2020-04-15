const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

export const isPangram = input => {
  const inputArray = input.toLowerCase().split('');
  return ALPHABET.every(letter => inputArray.includes(letter));
};
