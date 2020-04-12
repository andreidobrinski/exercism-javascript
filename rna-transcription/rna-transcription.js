const conversion = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export const toRna = (input) => {
  const split = input.split('');
  const rnaArray = split.map(nucleotide => conversion[nucleotide]);
  return rnaArray.join('');
};
