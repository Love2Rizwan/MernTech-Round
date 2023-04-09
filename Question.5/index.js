//  Q.5. Write a program to display this pattern ?



//====================== Hollow downward Triangle Star Pattern triangle =================
let n = 6;
let string = "";

for (let i = n; i >= 1; i--) {
  // printing star
  for (let j = 0; j < i; j++) {
    if (i === n) {
      string += "*";
    } else {
      if (j == 0 || j == i - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);


//=====================  Hollow Triangle Star Pattern ========================
// let n = 6;
// let str = "";

// for (let i = 1; i <= n; i++) {
//?   // printing star
//   for (let j = 0; j < i; j++) {
//     if (i === n) {
//       str += "*";
//     } else {
//       if (j == 0 || j == i - 1) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   str += "\n";
// }
// console.log(str);