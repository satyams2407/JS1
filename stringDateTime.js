const str = "HEllo World  ";
const len = str.length;
const substr = str.substr(0,4);
console.log(len);
console.log(substr);
console.log(str.trim());



// Dates

const myDate = new Date();  // to make an object of date and u can perform various methods to it

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());


let newDate = new Date("01-01-2025");
console.log(newDate.toDateString());

let myTimeStamp = new Date().getTime();

console.log(myTimeStamp); // both are same 
console.log(Date.now());
