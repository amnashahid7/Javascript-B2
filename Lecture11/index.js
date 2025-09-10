let num = 10;
for (let index = 1; index <= 10; index++) {
  console.log(`${num} * ${index} = ${num * index}`);
}

// conditions if else and switch

let userLogged = true;

if (userLogged === true) {
  console.log("welcome to dashboard");
} else {
  console.log("plaese login!");
}

let name = "al";
let logged = true;

if (logged && name) {
  console.log(`welcome ${name}`);
} else {
  console.log("please login");
}

let role = "buyer";

if (role === "admin") {
  console.log("welcome to admin dashboard");
} else if (role === "seller") {
  console.log("welcome to seller dashboard");
} else {
  console.log("please login");
}


switch (role) {
    case "admin":
        console.log("welcome to admin dashboard");
        break;
    case "seller":
        console.log("welcome to seller dashboard");
        break;
    case "buyer":
        console.log("welcome to buyer dashboard");
        break;
    default:
        console.log("Please Login");
        break;
}

// simple calculator using switch statement
let valuea=23;
let valueb=423;
let operator="-";

