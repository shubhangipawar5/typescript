"use strict";
// let users:string[] = ['shubhh','aayu','som']
// console.log(users)
// let nums:number[]= [10,20,30]
// console.log(nums)
// users.push('abs')
// console.log(users)
//objects
let peronType = { age: 10, name: "shubh" };
console.log(peronType);
let mahiti = {
    name: "xyz",
    age: "xyz"
};
console.log(mahiti);
let slass = {
    name: "aayu",
    clas: 1
};
console.log(slass);
let users = {
    name: 'shubn',
    dob: 56
};
console.log(users);
//Union Types-> declaring more than 1 data type to a variable
let data = 100;
console.log(data);
data = "shubh";
console.log(data);
//optional parametrs
function add(a, b) {
    return b ? a + b : a; //if b exist then return sum alse retuen a
}
let sum = add(10);
console.log(sum);
let sums = add(10, 5);
console.log(sums);
