let obj = {};
obj.name1 = "ahmed";
obj.age1 = 23;
obj.role1 = "admin";

// console.log(obj);

let newObj = {
  name: "ahmed",
  age: 23,
  role: "student",
  result: {
    math: { paperA: 78, paperB: 80 },
    english: 88,
    urdu: 88,
  },
};

// console.log(newObj.age);
// console.log(newObj);
// console.log(newObj.result.math.paperB);

let fullObj = { ...obj, ...newObj };
// console.log(fullObj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.keys(newObj));
// console.log(Object.keys(newObj.result.math));
// console.log(Object.values(newObj.result));

// console.log(Object.entries(obj));
// console.log(Object.entries(newObj.result));

// delete obj.age1;
// console.log(obj);

let { paperA, paperB } = newObj.result.math;

console.log(paperA);
