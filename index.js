
var name = "Kim";

let age = "22";

const PI = 3.1416;

let isStudent = parseInt(age) < 25;
console.log("Is student:", isStudent); 


let person = {
  name: "Kim",
  age: age,
  address: {
    street: "179 - A San Gabriel St",
    city: "Davao",
    zip: "8000"
  },
  contact: {
    email: "kimpapagayo0@gmail.com",
    phone: "09638331876"
  }
};
console.log("kimpapagayo0@gmail.com:", person);


let colors = ["red", "blue", "green", "blue", "yellow"];
console.log("Colors array:", colors);

let words = ["apple", "banana", "grape", "kiwi"];
let transformed = [];

for (let i = 0; i < words.length; i++) {
  let reversed = "";
  for (let j = words[i].length - 1; j >= 0; j--) {
    reversed += words[i][j];
  }
  transformed.push(reversed.toUpperCase());
}

console.log("Transformed words:", transformed);



let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let evenAndAbove20 = [];

for (let num of numbers) {
  if (num % 2 === 0 && num > 20) {
    evenAndAbove20.push(num);
  }
}

console.log(`Found ${evenAndAbove20.length} numbers: [${evenAndAbove20.join(", ")}]`);
