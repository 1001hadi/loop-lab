// 1st Part: FizzBuzz

let numbers = 100;

// for (let i = 1; i <= numbers; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizBuz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // FizzBuzz with switch

for (let i = 1; i <= numbers; i++) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      console.log("FizBuz");
      break;
    case i % 3 === 0:
      console.log("Fizz");
      break;
    case i % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(i);
  }
}
