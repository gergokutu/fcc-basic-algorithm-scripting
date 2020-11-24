// My 1st - with the bang-bang operator
const bouncer = arr => arr.filter(item => !!item === true);

// My 2nd - with built-in Boolean function
// Passes back a boolean value
// const bouncer = arr => arr.filter(Boolean);

// Alt1 - for and push
// function bouncer(arr) {
//   let newArray = [];

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]) newArray.push(arr[i]);
//   }

//   return newArray;
// };

// Alt 2 - with built-in Boolean function
// function bouncer(arr) {
//   return arr.filter(Boolean);
// };

console.log("Should be [ 7, 'ate', 9 ]",
  bouncer([7, "ate", "", false, 9])
);