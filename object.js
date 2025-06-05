
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


const tinder = {}

tinder.id = "abc11"
tinder.dating = "false"

console.log(tinder);

let myName = "Satyam"
const regularUser = {
    name : myName,
    fullName : {
        regularUsername : {
            firstname : "Satyam",
            lastname : "Singh"
        }
    }
}
console.log(regularUser);

console.log(regularUser.fullName.regularUsername.firstname);


const obj1= {1:"1",2:"2"}
const obj2= {3:"3",4:"4"}

// to merge to objects 

// const obj3 = Object.assign({} , obj1, obj2)

//or 
const obj3 = {...obj1, ...obj2}

console.log(obj3);

console.log(Object.keys(obj3));  // returns array

console.log(obj3.hasOwnProperty("13"));

const {1 : one} = obj3
console.log(1);
console.log(one);
