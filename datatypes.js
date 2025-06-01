const score = "33"
console.log(typeof(score))

const value = Number(score)
console.log(typeof(score))
console.log(value);


//conversion   Boolean , String , Number

// "33" => 33
// "33abc" => NaN
// true => 1
// "true" => NaN

const num = 1
const isBool = Boolean(num)
console.log(isBool);

// 1 => true ; 0 => false; "" => false; "abc" => true


let a;
const b = String(a)
console.log(typeof(b));

let nullNumber = null;
console.log(nullNumber);
console.log(typeof(nullNumber));