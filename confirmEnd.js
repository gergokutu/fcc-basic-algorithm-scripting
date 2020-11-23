// My 1st - endWith()
// const confirmEnding = (str, target) => str.endsWith(target);

// My 2nd - slice()
const confirmEnding = (str, target) => {
  return str.slice([-target.length]) === target ?
    true :
    false;
};

console.log("Should be true >", confirmEnding("Bastian", "n"));