// let a = 9;
// let b = 1;
// let op = "/";

// switch (op) {
//   case "+":
//     console.log(a + b);

//     break;
//   case "-":
//     console.log(a - b);

//     break;
//   case "*":
//     console.log(a * b);

//     break;
//   case "/":
//     if (b <= 0) {
//       console.log("b must be greater then 0");
//     } else {
//       console.log(a / b);
//     }

//     break;

//   default:
//     console.log("invalid op");

//     break;
// }

for (let index = 0; index < 10; index++) {
  //   console.log(index);
  if (index === 5) {
    break;
  }
}
for (let index = 0; index < 10; index++) {
  if (index === 5) {
    continue;
  }
  //   console.log(index);
}

// nested loops

for (let index = 0; index <= 10; index++) {
  console.log(index);

  for (let index = 11; index <= 20; index++) {
    console.log("heklele");
    if (index === 15) {
      break;
    }
  }
}

// *
// **
// ***
// ****
// *****
// function nestedLoop(arr){
//    outter:for(let i = 0; i < arr.length; i++){

//      console.log([i]);

//     inner:for(let j = 0; j < arr.length; j++){

//        return([j]);

//      }

//    }

// }

// console.log(nestedLoop(10));
