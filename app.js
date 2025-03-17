/////////////////////
// 1st Part: FizzBuzz
/////////////////////

// const numbers = 100;

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

// for (let i = 1; i <= numbers; i++) {
//   switch (true) {
//     case i % 3 === 0 && i % 5 === 0:
//       console.log("FizBuz");
//       break;
//     case i % 3 === 0:
//       console.log("Fizz");
//       break;
//     case i % 5 === 0:
//       console.log("Buzz");
//       break;
//     default:
//       console.log(i);
//   }
// }

//////////////////////
// 2nd Part: Prime Time
/////////////////////

const n = 10;

for (let i = 1; i <= n; i++) {
  let currNum = i;
  //   console.log(currNum);
  while (true) {
    currNum++;
    let primeNum = true;

    if (currNum <= 1) {
      primeNum = false;
    } else if (currNum <= 3) {
      primeNum = true;
    } else if (currNum % 2 === 0 || currNum % 3 === 0) {
      primeNum = false;
    } else {
      // Got hint from stack Overflow for this part.
      for (let j = 3; j * j <= currNum; j += 3) {
        if (currNum % j === 0 || (currNum % i) + 2 === 0) {
          primeNum = false;
          break;
        }
      }
    }
    if (primeNum) {
      console.log(`${i}\n\ next Prime number is: ${currNum}`);
      break;
    }
  }
}
