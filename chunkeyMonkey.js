// My 1st - recursive with splice, concat
// Splice modifies the original array!
const chunkArrayInGroups = (arr, size) => {
  if (arr.length <= size) return [arr];
  else {
    return [arr.splice(0, size)].concat(
      chunkArrayInGroups(arr, size)
    );
  };
};

// Alt1 - recursive with slice, concat
// Slice does not modify the original array!
// function chunkArrayInGroups(arr, size) {
//   if (arr.length <= size) {
//     return [arr];
//   } else {
//     return [arr.slice(0, size)].concat(
//       chunkArrayInGroups(arr.slice(size), size)
//     );
//   };
// };

// My 2nd - with for loop
// const chunkArrayInGroups = (arr, size) => {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   };

//   return newArr;
// };

// Alt3 - my 2nd logic with while loop
// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var newArr = [];
//   var i = 0;

//   while (i < arr.length) {
//     newArr.push(arr.slice(i, i + size));
//     i += size;
//   };

//   return newArr;
// };

// Alt4 - while and splice
// No need to track an index because
// Splice modifies the original array
// function chunkArrayInGroups(arr, size) {
//   var newArr = [];
//   while (arr.length) {
//     newArr.push(arr.splice(0, size));
//   };
//   return newArr;
// }

// Alt3 - most elementary, for loop
// function chunkArrayInGroups(arr, size) {
//   var temp = [];
//   var result = [];

//   for (var a = 0; a < arr.length; a++) {
//     if (a % size !== size - 1) temp.push(arr[a]);
//     else {
//       temp.push(arr[a]);
//       result.push(temp);
//       temp = [];
//     };
//   };

//   if (temp.length !== 0) result.push(temp);
//   return result;
// }

console.log('Should be [["a", "b"], ["c", "d"]] >',
  chunkArrayInGroups(["a", "b", "c", "d"], 2)
);