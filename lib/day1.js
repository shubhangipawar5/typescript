"use strict";
// //console.log("hi")   /// execute on terminal->  node <filename>  ex node day1.js
// npm init
// npm i typescript
// npx tsc --init --rootdir src --outdir lib
//create src and lib folder
// npm init -y
// npx  tsc --watch
console.log("Hi");
// static typing 
// Explicit
let x = 10; // better 
//Implicit
let y = "chinmay";
// boolean , number and string
let isAdult = true;
console.log(isAdult);
let numberOne = 23;
console.log(numberOne);
let firstName = "chinmay";
console.log(firstName);
function addition(x, y) {
    return x + y;
}
let num = addition(12, 12);
console.log(num);
// any
let lastName = true;
console.log(lastName);
// Array ====>
let numbers = [11, 22, 33, 4, 55, 66, 77];
let names = ['chinmay', "sarika", "poorva"];
console.log(numbers);
console.log(names);
// Tuple
let twoNumber = [1, 3];
twoNumber.push(12);
console.log(twoNumber);
let axis = [12, 3];
let [x1, y1] = axis;
console.log(x1, y1);
// objects 
// let obj = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:12
// }
let isAdult2 = [true, false, true, false];
// object with typescript
let person = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 12
};
// let amol:Person = {
//     age:12,
//     firstName:"ninad",
//     lastName:"deshapnde"
// }
// we can pass type to function as wwll
function getObject() {
    return {
        age: 12,
        firstName: "ninad",
        lastName: "deshapnde"
    };
}
let amol = getObject();
// update 
// person.firstName = 1
// type pageUser = {
//     "id": number,
//     "email":string,
//     "first_name":string,
//     "last_name":string,
//     "avatar":string
// }
// function 
function additionC(x, y) {
    return x + y;
}
let h = additionC(12, 13);
console.log(h);
function printFullName(firstName, lastName) {
    return firstName + lastName;
}
let fullName = printFullName("chinmay", "deshpande");
console.log(fullName);
function greet(greeting) {
    console.log("hello");
}
greet("hello");
function greet1(greeting) {
    return true;
}
greet("hello");
