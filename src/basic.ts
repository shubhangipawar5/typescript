
// let users:string[] = ['shubhh','aayu','som']
// console.log(users)
// let nums:number[]= [10,20,30]
// console.log(nums)
// users.push('abs')
// console.log(users)

//objects

let peronType:{age:number,name:string} = {age:10,name:"shubh"}

console.log(peronType)

let mahiti:any = {
    name:"xyz",
    age:"xyz"
}
console.log(mahiti)
//using type
type xyz = {name:string,clas:number}
let slass:xyz = {
    name:"aayu",
    clas:1
}
console.log(slass)
//using interface
interface usersType{
    name:string,
    dob:number
}

 let users:usersType = {
    name:'shubn',
    dob:56
}

console.log(users)

//Union Types-> declaring more than 1 data type to a variable
let data: number | string | boolean=100
console.log(data)
data = "shubh"
console.log(data)

//optional parametrs
function add(a:number,b?:number):number{
    return b?a+b:a     //if b exist then return sum alse retuen a
}
let sum = add(10)
console.log(sum)
let sums = add(10,5)
console.log(sums)

