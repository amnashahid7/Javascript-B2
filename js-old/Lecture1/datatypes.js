//  int age; // declaration
//  age=12; // initialization
//  int age= 12;


// DataType Number
let age= 12;
console.log(typeof age );


// DataType String
let name; // declaration
name = "John"; // initialization
console.log(name);

// DataType Boolean
let isActive = false; // declaration and initialization
console.log(isActive);


// DataType Undefined
let city;
console.log(city);
console.log(typeof city); // undefined, as it has not been initialized

// DataType Null
let country = null; // declaration and initialization
console.log(country,typeof country);
country = "India"; // reassigning a value
console.log(country,typeof country);// object, as null is considered an object in JavaScript

// DataType Symbol
let uniqueId = Symbol("id");
let anotherId = Symbol("id");
// let uniqueId = "5";
// let anotherId = 5;
console.log(uniqueId === anotherId); // false, as each symbol is unique



// DataType BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
let anotherBigNumber = BigInt(12345678901234567890);
console.log(anotherBigNumber, typeof anotherBigNumber); // bigint, as it is a large integer value




let a1= Number(2);
console.log(
a1, typeof a1
);

let a2= String("name");
console.log(
a2, typeof a2 );
let a3= Boolean(true);
console.log(
a3, typeof a3 );
