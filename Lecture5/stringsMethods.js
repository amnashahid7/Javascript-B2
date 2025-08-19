let string1 = "Heloo Student ,amna, Student3 Student"
let string2 = "John Doe";

// console.log(string1.charCodeAt(8));

// console.log(string1.at(11));
// console.log(string1[11]);

let subString= string1.substr(-14,4);
// console.log(subString);
let subString1= string1.slice(1, 5);
// console.log(subString1);



// console.log(subString1.concat(" ",string2));


let trim1= "   Hello World   ";
// console.log(trim1);
// console.log(trim1.trimEnd());
let pad1= "hee0009";
// console.log(pad1);
// console.log(pad1.padEnd(12,"*"));


let str = "Apple, Banana, Kiwi";
// let part = str.substr(7);
let part = str.substr(7,6);
console.log(part); // Outputs: Banana
console.log(str.slice(7, 13)); // Outputs: Banana
console.log(str.substring(7, 13)); // Outputs: Banana

console.log(string1);

// console.log(string1.replace("Student", "teacher"));
// console.log(string1.replaceAll("Student", "teacher"));


let arr=[1,2,3,4,5,6,7,8,9];
let arr2=["amna","abdullah","ali","sara"];
let arr3=["amna",2,"ali",["amna",2,"ali"],true];


console.log(string1.split(" ")); // Splitting by space
// console.log(string1.split(",")); // Splitting by comma



let text = "Hello world!";
let result = text.repeat(0);
console.log(result);














