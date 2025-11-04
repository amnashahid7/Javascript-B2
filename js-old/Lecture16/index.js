function myFunc(text) {
  console.log('simple func', text);
}

// myFunc1('jaja');

let myFunc1 = function (text) {
  console.log('hoistied func', text);
  myFunc('helli');
};

let arrowFunc = (text) => {
  console.log(text, 'from errow');
  myFunc1('hellloo');
};

arrowFunc('heheheh');

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

for (const num of array) {
  console.log('for...of', num);
  console.log(num * num);
}

let todos = ['create landing page', 'wash bike'];

function addTodo(text) {

}

function deleteTodo(index) {}

function editTodo(index, text) {}

addTodo('create form');
deleteTodo(2);
editTodo(1,"wash car")

console.log('All final Todos', todos);
