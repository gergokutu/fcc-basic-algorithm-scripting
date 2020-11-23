// My 1st - endsWith()
// const confirmEnding = (str, target) => str.endsWith(target);

// My 2nd - slice()
// const confirmEnding = (str, target) => {
//   return str.slice(-target.length) === target
// };

// Alt1 - slice() 2
// const confirmEnding = (str, target) => {
//   return str.slice(str.length - target.length) === target
// };

// My 3rd - regex
const confirmEnding = (str, target) => {
  const myRegex = new RegExp(target + "$", "i");
  return myRegex.test(str);

  // return new RegExp(target + "$", "i").test(str)
};

console.log("Should be true >", confirmEnding("Bastian", "n"));