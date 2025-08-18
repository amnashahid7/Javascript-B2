let string1 = "Heloo Student,amna,Student3 Student"
let string2 = "John Doe";

console.log(string1.charCodeAt(8));

console.log(string1.at(11));
console.log(string1[11]);

let subString= string1.substr(-14,4);
console.log(subString);
let subString1= string1.slice(1, 5);
console.log(subString1);



console.log(subString1.concat(" ",string2));


let trim1= "   Hello World   ";
console.log(trim1);
console.log(trim1.trimEnd());
let pad1= "hee0009";
console.log(pad1);
console.log(pad1.padEnd(12,"*"));






