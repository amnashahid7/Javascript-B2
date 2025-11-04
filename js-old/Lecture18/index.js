let data = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];

let sum = data.reduce((acc, num) => {
  acc = acc + num;
  return acc;
}, 1);

console.log(sum);

let sum1 = 0;
for (let index = 0; index < data.length; index++) {
  sum1 += data[index];
}
console.log('helo', sum1);

let users = [
  { name: 'ahmed', numbers: [123, 432, 345, 221] },
  { name: 'raza', numbers: [213, 321, 342, 345] },
  { name: 'shafqat', numbers: [123, 433, 111, 211] },
  { name: 'ali', numbers: [322, 111, 121, 92] },
];
let total = 1500;

users
  .map((user) => {
    let sum = user.numbers.reduce((acc, num) => {
      acc = acc + num;
      return acc;
    });
    let Grade = 'A+';

    console.log(`name: ${user.name} numbers: ${sum} Grade: ${Grade}`);
    return `name: ${user.name} numbers: ${sum} Grade: ${Grade}`;
  })
  .filter((user) => {
    return user.numbers > total;
  });
