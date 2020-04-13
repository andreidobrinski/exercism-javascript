const conversion = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export const toRna = input =>
  [...input]
    .map(nucleotide => conversion[nucleotide])
    .join('');
