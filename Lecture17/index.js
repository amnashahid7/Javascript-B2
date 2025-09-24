//map
let data = [1, 2, 3, 4, 5, 2, 3, 4, 6, 7, 8, 8, 8, 8];
// data.map((num, index) => {
//   console.log('number', num);
//   console.log('index', index);
// });

//filter
let filterdData = data.filter((num, index) => {
  console.log(num < 8);
  console.log('index:', index);
  return num === 8;
});
console.log(filterdData);

//reduce

const users = [
  { name: 'Alice', scores: [10, 20, 30] },
  { name: 'Bob', scores: [5, 15, 25] },
  { name: 'Charlie', scores: [20, 30, 40] },
];

console.log(users[0].name);

users.map((user) => {
  console.log(`name: ${user.name} averageScore: ${user.scores}`);
});

const words = ['level', 'world', 'radar', 'hello', 'madam', 'test'];
