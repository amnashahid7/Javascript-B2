let data = ["ahmed", "jalil", "usman"];
let data2 = ["ali", "raza", "shafqat"];
let data3 = [121, 4534, 4923];

let datanew = data.concat(data2);
console.log(datanew);

let nesteddata = [
  "ahmed",
  ["ali", 12, "shafqat", ["ali", "raza", "shafqat"]],
  [1222, 292, 9191],
  "usman",
];
console.log(nesteddata[2]);


let newarraydata = nesteddata.flat(Infinity);
console.log(newarraydata);

// spread operator
// =...
let alldata = [...data, ...data2, ...data3];
console.log(alldata);

let fname = "ahmed";
let lname = "raza";
let lastname = "sahid";

console.log(Array.from(fname));

console.log(Array.of(fname, lname, lastname));

// object

let result = ["jalil", 1200, "ahmed", 1100];
let result1 = [
  { name: "jalil", number: 1200, grade: "A+", name1: "jalil" },
  { name: "ahmed", number: 1100 },
  { name: "shafqat", number: 1300 },
];

console.log(result1[0].name);
