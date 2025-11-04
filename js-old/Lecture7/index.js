// console.log(Math.min(1,2,3,-1,-5,0));
// console.log(Math.max(1,2,3,-1,-5,0));


// console.log(Math.random()+1);


let min=10;
let max=100;


let randomNumber= Math.floor(Math.random()*(max-min)+min)

// console.log(randomNumber);


// HOMEWORK generate random number between 40 to 65


// console.log(Date());
let date= new Date();
// console.log(date)
// console.log(date.toLocaleString());
// console.log(date.toDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());



// let createNewDate=new Date("2020-12-5");
let createNewDate=new Date(2020,11,5);
// console.log(createNewDate);
// console.log(createNewDate.toLocaleString());
// console.log(createNewDate.toString());


let newDate=Date.now();
console.log(newDate/24/60/60/1000); //days since 1970
console.log(newDate/60/60/1000); //hours since 1970
console.log(newDate/60/1000); //minutes since 1970
console.log(newDate/1000); //seconds since 1970
console.log(newDate); //milliseconds since 1970







