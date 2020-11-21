// Return Largest Numbers in Arrays
// Alt1
// function largestOfFour(arr) {
//   var results = [];
//   for (var n = 0; n < arr.length; n++) {
//     var largestNumber = arr[n][0];
//     for (var sb = 1; sb < arr[n].length; sb++) {
//       if (arr[n][sb] > largestNumber) {
//         largestNumber = arr[n][sb];
//       }
//     }

//     results[n] = largestNumber;
//   }

//   return results;
// }

// Alt2 - declarative 1
// function largestOfFour(arr) {
//   return arr.map(group => {
//     return group.reduce((prev, current) => {
//       return current > prev ? current : prev;
//     });
//   });
// }

// Alt3 - recursive
// const largestOfFour = (arr, finalArr = []) => {
//   return !arr.length
//     ? finalArr
//     : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
// }

// My 1st
// const largestOfFour = arr => {
//   const resultArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     resultArr.push(Math.max(...arr[i]));
//   };

//   return resultArr;
// }

// My 2nd - same as declarative 2 by fcc
const largestOfFour = arr => arr.map(numberGroup => Math.max(...numberGroup));

// My 3rd
// const largestOfFour = arr => {
//   const resultArr = [];
//   arr.reduce((_, curr) => resultArr.push(Math.max(...curr)), []);
//   return resultArr;
// }

console.log('Should be: [5, 27, 39, 1001] >',
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);