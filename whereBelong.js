// My 1st
// const getIndexToIns = (arr, num) => {
//   arr.sort((a, b) => a - b);

//   // Not necessary if we return arr.length at the end
//   // if (!arr.length) return 0;
//   // if (arr.length === 1) return arr[0] > num ? 0 : 1;
//   // if (arr[arr.length - 1] < num) return arr.length;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) return i;
//   };

//   return arr.length
// }

// Alt1
// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   var times = arr.length; // runs the for loop once for each thing in the array
//   var count = 0;
//   for (var i = 0; i < times; i++) {
//     if (num > arr[i]) {
//       count++;
//     }
//   } // counts how many array numbers are smaller than num
//   return count; // the above equals num's position in a sorted array
// }

// Alt2 - same logic with while
// function getIndexToIns(arr, num) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });

//   var i = 0;
//   while (num > arr[i]) {
//     i++;
//   }

//   return i;
// }

// Alt3 - nice > push, sort, indexOf
// function getIndexToIns(arr, num) {
//   arr.push(num);
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   return arr.indexOf(num);
// }

// Alt4
// function getIndexToIns(arr, num) {
//   // sort and find right index
//   var index = arr
//     .sort((curr, next) => curr - next)
//     .findIndex(currNum => num <= currNum);
//   // console.log('index:', index);
//   // console.log('arr.length:', arr.length)
//   // Returns proper answer
//   return index === -1 ? arr.length : index;
// }

// Alt5 - start with concat
// function getIndexToIns(arr, num) {
//   return arr
//     .concat(num)
//     .sort((a, b) => a - b)
//     .indexOf(num);
// }

// Alt6 - very clever
const getIndexToIns = (arr, num) => arr.filter(val => num > val).length;

console.log('Should be 2 >', getIndexToIns([5, 3, 20, 3], 5));