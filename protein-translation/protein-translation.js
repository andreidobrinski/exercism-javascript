export const translate = RNA => {
  let protein = [];

  if (!RNA) return protein;

  let stopSequence = false;

  const translateCodon = codon => {
    switch (codon) {
      case 'AUG':
        return protein.push('Methionine');
      case 'UUU':
      case 'UUC':
        return protein.push('Phenylalanine');
      case 'UUA':
      case 'UUG':
        return protein.push('Leucine');
      case 'UCU':
      case 'UCC':
      case 'UCA':
      case 'UCG':
        return protein.push('Serine');
      case 'UAU':
      case 'UAC':
        return protein.push('Tyrosine');
      case 'UGU':
      case 'UGC':
        return protein.push('Cysteine');
      case 'UGG':
        return protein.push('Tryptophan');
      case 'UAA':
      case 'UAG':
      case 'UGA':
        return stopSequence = true;
      default:
        throw new Error('Invalid codon');
    }
  }

  let activeCodon = [];

  for (let i = 0; i <= RNA.length; i++) {
    activeCodon.push(RNA.charAt(i));
    if (activeCodon.length === 3) {
      if (stopSequence) return protein;
      translateCodon(activeCodon.join(""));
      activeCodon = [];
    }
  }

  return protein;
};
