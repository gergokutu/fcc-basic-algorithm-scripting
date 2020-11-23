// Return a string
// All the words should start with a capital letter
// My 1st
// const titleCase = str => {
//   const arrayOfWords = str.toLowerCase().split(' ');

//   const capitalizedWordsArray = arrayOfWords.map(word => {
//     const lettersArray = word.split('');
//     lettersArray[0] = lettersArray[0].toUpperCase();
//     return lettersArray.join('');
//   });

//   return capitalizedWordsArray.join(' ');
// };

// Alt1 - modify replaceAt on String.prototype
// Do not use fat arrow in the method modifier!!!
// String.prototype.replaceAt = function (index, character) {
//   return (
//     this.substr(0, index) + character + this.substr(index + character.length)
//   );
// };

// const titleCase = str => {
//   var newTitle = str.split(" ");
//   var updatedTitle = [];
//   for (var key in newTitle) {
//     updatedTitle[key] = newTitle[key]
//       .toLowerCase()
//       .replaceAt(0, newTitle[key].charAt(0).toUpperCase());
//   }
//   return updatedTitle.join(" ");
// };

// Alt2 - replace
// function titleCase(str) {
//   var convertToArray = str.toLowerCase().split(" ");

//   var result = convertToArray.map(function (val) {
//     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//   });

//   return result.join(" ");
// };

// My 2nd - replace + regex
// const titleCase = str => {
//   const lowerCase = str.toLowerCase();
//   // (^|\s)\S > Beginning of any whitespace followd by a non-whitespace char
//   const myRegex = /(^|\s)\S/g;
//   return lowerCase.replace(myRegex, match => match.toUpperCase());
// };

// Alt3 - refactor my 2nd
// If () used instead of {}
// Function body can be multilined
// But you do not need the return keyword
// const titleCase = str => {
//   return str...
// };
const titleCase = str => (
  str
    .toLowerCase()
    .replace(/(^|\s)\S/g, match => match.toUpperCase())
);

console.log('Should be Short and Stout! >',
  titleCase('sHoRt AnD sToUt!')
);