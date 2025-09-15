// const students = [
//   {
//     name: "Ali Khan",
//     rollNumber: 101,
//     result: "Pass",
//     books: [1001, 1002, 1003, 1004, 1005],
//   },
//   {
//     name: "Sara Ahmed",
//     rollNumber: 102,
//     result: "Pass",
//     books: [1006, 1007, 1008, 1009, 1010],
//   },
//   {
//     name: "Bilal Hussain",
//     rollNumber: 103,
//     result: "Fail",
//     books: [1011, 1012, 1013, 1014, 1015],
//   },
//   {
//     name: "Ayesha Noor",
//     rollNumber: 104,
//     result: "Pass",
//     books: [1016, 1017, 1018, 1019, 1020],
//   },
// ];

// for (let index = 0; index < students.length; index++) {

//   let booksNumbers = students[index].books;
//   let sum = 0;
//   for (let indexinner = 0; indexinner < booksNumbers.length; indexinner++) {
//     sum = sum + booksNumbers[indexinner];
//   }

//   let rollNumber = students[index].rollNumber;
//   console.log(`roll No: ${rollNumber}: total marks: ${sum}`);
// }

let userLogin = true;
let name = "";

if (!userLogin) {
  console.log(`welcome ${name}`);
} else {
  console.log("please login");
}

let books = [1001, 1002, 1003, 1004, 1005];
let names = ["ALI", "ahmed", "jalil", "jalil", "raza"];
console.log(books.indexOf(1005));
console.log(names.indexOf("jalil"));

console.log(names.lastIndexOf("jalil"));

console.log(names.includes("ahmed1"));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());

const fruits1 = ["Banana1", "Orange1", "Apple1", "Mango1"];

console.log(fruits1.toSorted());
console.log(fruits1.toReversed());

let books1 = [10012, 1002, 10034, 1004, 1005];

console.log(books1.toSorted());
console.log(books1.toReversed());
