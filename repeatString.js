// My 1st - recursive
const repeatStringNumTimes = (str, num) => {
  if (num < 1) return "";
  return str + repeatStringNumTimes(str, num - 1);
}

// Alt2 - recursive ver2
// function repeatStringNumTimes(str, num) {
//   if (num < 1) {
//     return "";
//   } else if (num === 1) {
//     return str;
//   } else {
//     return str + repeatStringNumTimes(str, num - 1);
//   }
// }

// Alt3 - recursive 3
// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
// }

// My 2nd - for loop
// const repeatStringNumTimes = (str, num) => {
//   const result = [];

//   for (let i = 0; i < num; i++) {
//     result.push(str);
//   };

//   return result.join("");
// }

// Alt1 - while loop
// function repeatStringNumTimes(str, num) {
//   var accumulatedStr = "";

//   while (num > 0) {
//     accumulatedStr += str;
//     num--;
//   }

//   return accumulatedStr;
// }

// My 3rd - with repeat()
// const repeatStringNumTimes = (str, num) => {
//   return str.repeat(num);
// }

console.log("Should be abcabcabc >", repeatStringNumTimes("abc", 3));