// Find the Longest Word in a String
// Alt 1
// function findLongestWordLength(str) {
//   let record = 0;
//   let i = 0;
//   let wordLength = 0;
//   while (true) {
//     wordLength = str.indexOf(' ', i) - (i);
//     if (str.indexOf(' ', i) === -1) {
//       wordLength = str.length - i;
//     }
//     i = i + (wordLength > 0 ? wordLength : wordLength * (-1)) + 1;
//     // OR...
//     // i += Math.abs(wordLength)+1;
//     if (wordLength > record) {
//       record = wordLength;
//     }
//     if (i > str.length) {
//       break;
//     }
//   }
//   return record;
// };

// Alt2
// function findLongestWordLength(str) {
//   return str.split(' ')
//     .reduce(function (x, y) {
//       return Math.max(x, y.length)
//     }, 0);
// }

// Alt3
// function findLongestWordLength(str) {
//   var words = str.split(' ');
//   var maxLength = 0;

//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }

//   return maxLength;
// }

// Alt4 - spread syntax
// const findLongestWordLength = str => Math.max(...str.split(" ").map(word => word.length));

// Alt5 - recursive
function findLongestWordLength(str) {
  //split the string into individual words
  //(important!!, you'll see why later)
  str = str.split(" ");

  //str only has 1 element left that is the longest element,
  //return the length of that element
  if (str.length == 1) {
    return str[0].length;
  }

  //if the first element's length is greater than the second element's (or equal)
  //remove the second element and recursively call the function)
  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestWordLength(str.join(" "));
  }

  //if the second element's length is greater thant the first element's start
  //call the function past the first element
  if (str[0].length <= str[1].length) {
    // from the first element to the last element inclusive.
    return findLongestWordLength(str.slice(1, str.length).join(" "));
  }
}

// My version
// const findLongestWordLength = str => {
//   const wordsArray = str.split(' ');
//   let length = 0;

//   wordsArray.map(word => {
//     length < word.length ?
//       length = word.length :
//       length;
//   })

//   return length;
// }

console.log('Should be 6 >',
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

