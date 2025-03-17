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

// const n = 10;

// for (let i = 1; i <= n; i++) {
//   let currNum = i;
//   //   console.log(currNum);
//   while (true) {
//     currNum++;
//     let primeNum = true;

//     if (currNum <= 1) {
//       primeNum = false;
//     } else if (currNum <= 3) {
//       primeNum = true;
//     } else if (currNum % 2 === 0 || currNum % 3 === 0) {
//       primeNum = false;
//     } else {
//       // Got hint from stack Overflow for this part.
//       for (let j = 3; j * j <= currNum; j += 3) {
//         if (currNum % j === 0 || (currNum % i) + 2 === 0) {
//           primeNum = false;
//           break;
//         }
//       }
//     }
//     if (primeNum) {
//       console.log(`${i}\n\ next Prime number is: ${currNum}`);
//       break;
//     }
//   }
// }

///////////////////////////
// 3rd Part: Feeling Loopy!
//////////////////////////

// const data =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19,32\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// const separatedLine = data.split("\n");

// for (let i = 0; i < separatedLine.length; i++) {
//   let word = separatedLine[i];
//   let cells = word.split(",");
//   if (cells.length === 4) {
//     console.log(cells[0], cells[1], cells[2], cells[3]);
//   }
// }

// // with Try and catch method!
// // i put more cells in 3rd row to test my error handling

const data2 =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080,0.45\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

const separatedLine2 = data2.split("\n");

for (let i = 0; i < separatedLine2.length; i++) {
  try {
    let word = separatedLine2[i];
    let rows = word.split(",");
    if (rows.length === 4) {
      console.log(rows[0], rows[1], rows[2], rows[3]);
    } else {
      throw new Error(`Number of cells not match ${i + 1}`);
    }
  } catch (err) {
    console.log(err);
  }
}
