// Alt1 - procedural
// function mutation(arr) {
//   var test = arr[1].toLowerCase();
//   var target = arr[0].toLowerCase();
//   for (var i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;
//   }
//   return true;
// }

// Alt2 - declarative
// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split("")
//     .every(function (letter) {
//       return arr[0].toLowerCase().indexOf(letter) != -1;
//     });
// }

// Alt3 - recursive
function mutation([target, test], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([target, test], i + 1);
}


console.log("Should be true >", mutation(["zyxwvutsqrponmlkjihgfedcba", "qrstu"]));