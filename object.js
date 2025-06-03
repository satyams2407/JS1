
const sym = Symbol("key1")

// we save key as a string 
const obj = {
    name : "Satyam",
    emai : "satyam@google.com",
    arr : [1,2,3,4],
    age : 20,
    [sym] : "kyevalue"   // for symbol we use brackets
}
 
console.log(obj.name);   // can use both methods
console.log(obj["name"]); 
console.log(obj[sym]);
console.log(obj.arr[0]);
console.log(obj["arr"]);

// Object.freeze(obj)   // to freeze an object so it remains unchanged

obj.name = "abc"
console.log(obj);

obj.greetings = function(){
    this.name = "Satyam singh"
    console.log(`well hello there ${obj.name} or use ${this.name}`);
}

console.log(obj.greetings());


