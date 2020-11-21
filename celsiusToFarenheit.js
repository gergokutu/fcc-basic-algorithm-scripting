// Convert Celsius to Fahrenheit
// F = C * 9/5 + 32

// const convertToF = celsius => {
//   let fahrenheit = celsius * 9 / 5 + 32;
//   return fahrenheit;
// }

const convertToF = celsius => celsius * 9 / 5 + 32;

console.log('Should be 86 >', convertToF(30));