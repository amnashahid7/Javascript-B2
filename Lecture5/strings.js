let firstName= "abc";
let lastName= "xyz"; 
console.log(" my first name is "+firstName + " " +"my last name is " +lastName);
// backticks
//string interpolation
console.log(`my name is ${firstName} and last name is ${lastName}  `);

let newString= new String("hello world");
console.log(newString.length);
console.log(newString[7]); // Accessing first character

// h :0
// e:1
// l :2

// l:3 
// o :4
//  "":5
// w 6
// o 7
// r 8
// l 9
// d 10
// console.log(firstName.concat(lastName));

console.log(newString.__proto__);

console.log(newString.toUpperCase());
console.log(newString.charAt(8));
console.log(newString.indexOf("d"));







