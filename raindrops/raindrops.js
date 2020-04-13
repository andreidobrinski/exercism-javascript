export const convert = input => {
  let output = [];
  if (input % 3 === 0) {
    output.push('Pling');
  }
  if (input % 5 === 0) {
    output.push('Plang');
  }
  if (input % 7 === 0) {
    output.push('Plong');
  }
  
  if (output.length) {
    return output.join('');
  } else {
    return `${input}`;
  }
};
