const truncateString = (str, num) => {
  return str.length > num ?
    str.slice(0, num) + "..." :
    str;
}

console.log("Should be A-tisket... >",
  truncateString("A-tisket a-tasket A green and yellow basket", 8)
);