let num = 23;

let students = ["ahmed", "ali", "shafqat"];

for (let index = 0; index < students.length; index++) {
  console.log(students[index]);
}

const students = [
  {
    name: "Ali Khan",
    rollNumber: 101,
    result: "Pass",
    books: [1001, 1002, 1003, 1004, 1005],
  },
  {
    name: "Sara Ahmed",
    rollNumber: 102,
    result: "Pass",
    books: [1006, 1007, 1008, 1009, 1010],
  },
  {
    name: "Bilal Hussain",
    rollNumber: 103,
    result: "Fail",
    books: [1011, 1012, 1013, 1014, 1015],
  },
  {
    name: "Ayesha Noor",
    rollNumber: 104,
    result: "Pass",
    books: [1016, 1017, 1018, 1019, 1020],
  },
  {
    name: "Omar Farooq",
    rollNumber: 105,
    result: "Pass",
    books: [1021, 1022, 1023, 1024, 1025],
  },
  {
    name: "Hina Malik",
    rollNumber: 106,
    result: "Fail",
    books: [1026, 1027, 1028, 1029, 1030],
  },
  {
    name: "Usman Raza",
    rollNumber: 107,
    result: "Pass",
    books: [1031, 1032, 1033, 1034, 1035],
  },
  {
    name: "Fatima Ali",
    rollNumber: 108,
    result: "Pass",
    books: [1036, 1037, 1038, 1039, 1040],
  },
  {
    name: "Hamza Tariq",
    rollNumber: 109,
    result: "Fail",
    books: [1041, 1042, 1043, 1044, 1045],
  },
  {
    name: "Maryam Iqbal",
    rollNumber: 110,
    result: "Pass",
    books: [1046, 1047, 1048, 1049, 1050],
  },
];

for (let index = 0; index < students.length; index++) {
  
  console.log(`roll No:${students[index].rollNumber}: total marks:${sum}`);
}



let booksss = [1046, 1047, 1048, 1049, 1050];
let sum = 0;

for (let index = 0; index < booksss.length; index++) {
  sum += booksss[index];
  console.log(sum);
}

let books = students[index].books;
let sum = 0;

for (let index = 0; index < books.length; index++) {
  sum += books[index];
}