const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

export const isPangram = input => {
  const inputArray = input.toLowerCase();
  return ALPHABET.every(letter => inputArray.includes(letter));
};
