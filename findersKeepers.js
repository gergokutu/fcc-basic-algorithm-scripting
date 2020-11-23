// My 1st - for loop
// const findElement = (arr, func) => {
//   let num = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       num = arr[i];
//       break;
//     };
//   };

//   return num ? num : undefined;
// }

// Alt1 - for loop (2)
// function findElement(arr, func) {
//   let num = 0;

//   for (var i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }

//   return undefined;
// }

// Alt2 - find()
// const findElement = (arr, func) => arr.find(func);

// Alt3
const findElement = (arr, func) => arr[arr.map(func).indexOf(true)];

console.log('Should be 8 >',
  findElement([1, 3, 5, 9], num => num % 2 === 0)
);