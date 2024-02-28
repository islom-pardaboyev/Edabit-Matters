// Example 1
// function bitwiseAND(num1, num2) {
//   return num1 & num2;
// }

// function bitwiseOR(num1, num2) {
//   return num1 | num2;
// }

// function bitwiseXOR(num1, num2) {
//   return num1 ^ num2;
// }

// Example 2
// function addUp(num) {
//   return (num * (num + 1)) / 2;
// }

// Example 3
// function addUp(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// Example 4
// function matchHouses(steps) {
//   if (steps === 0) {
//     return 0;
//   } else {
//     return 5 * steps + 1;
//   }
// }

// Example 5
// function shiftToLeft(x, y) {
//   return x * 2 ** y;
// }

// Example 6
// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// Example 6
// function timeForMilkAndCookies(date) {
//   return date.getMonth() === 11 && date.getDate() === 24;
// }

// Example 7
// function whichIsLarger(f, g) {
//   const resultF = f();
//   const resultG = g();

//   if (resultF > resultG) {
//     return "f";
//   } else if (resultF < resultG) {
//     return "g";
//   } else {
//     return "nothing";
//   }
// }

// Example 8
// function binary(decimal) {
//   return decimal.toString(2);
// }

// example 9
// function canNest(arr1, arr2) {
//   return (
//     Math.min(...arr1) > Math.min(...arr2) &&
//     Math.max(...arr1) < Math.max(...arr2)
//   );
// }

// example 10
// const REGEXP = /\d{2}\:\d{2}/;

// example 11
// const REGEXP = /red flag|blue flag/g;

// example 12
// let promise = new Promise((resolve, reject) =>
//   setTimeout(resolve, 1000, "edabit")
// );

// example 13
// function numberSquares(n) {
//   return (n * n * n) / 3 + (n * n) / 2 + n / 6;
// }

// example 14
// function seriesResistance(arr) {
//     let sum = arr.reduce((a, b) => a + b, 0);
//     return (sum > 1) ? sum + " ohms" : sum + " ohm";
// }

// example 15
// function largestSwap(num) {
//     let digit1 = Math.floor(num / 10);
//     let digit2 = num % 10;
//     let swapped = digit2 * 10 + digit1;
//     return num >= swapped; 
// }