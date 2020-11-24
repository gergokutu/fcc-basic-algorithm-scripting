// My 1st
const frankenSplice = (arr1, arr2, n) => {
  const arr = [...arr2];
  arr.splice(n, 0, ...arr1);
  return arr;
};

// Alt1
// function frankenSplice(arr1, arr2, n) {
//   let localArray = arr2.slice();

//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     n++;
//   };

//   return localArray;
// };

// Alt2
// function frankenSplice(arr1, arr2, n) {
//   let localArr = arr2.slice();
//   localArr.splice(n, 0, ...arr1);
//   return localArr;
// };

console.log('Should be [ 4, 1, 2, 3, 5, 6 ] >',
  frankenSplice([1, 2, 3], [4, 5, 6], 1)
);