const factorializeRec = num => {
  return num <= 1 ?
    1 :
    num * factorializeRec(num - 1);
}
console.log('Should be 120 >', factorializeRec(5));

const factorializeFor = num => {
  let result = 1;
  for (let i = 1; i < num + 1; i++) {
    result *= i;
  }
  return result;
}
console.log('Should be 120 >', factorializeFor(5));