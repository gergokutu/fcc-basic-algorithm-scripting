// My 1st - slice()
// const truncateString = (str, num) => {
//   return str.length > num ?
//     str.slice(0, num) + "..." :
//     str;
// };

// My 2nd - without slice() method
const truncateString = (str, num) => {
  if (str.length > num) {
    const stringStart = [];

    for (let i = 0; i < num; i++) {
      stringStart.push(str[i]);
    };

    return stringStart.join("") + "...";
  } else {
    return str;
  };
};

console.log("Should be A-tisket... >",
  truncateString("A-tisket a-tasket A green and yellow basket", 8)
);