const arr1 = [1,2,3,4]
console.log(arr1[0])

const arr2 = new Array(1,2,3)

arr1.push(5)
arr1.push(6)


console.log(arr1);
arr1.pop()

arr1.unshift(9) // add element to first of the array
console.log(arr1);


const newArr = arr1.join()  // bind all elements as a string

console.log(newArr);
console.log(typeof newArr);


// slice and splice

const Arr1 = [1,2,3,4,5,6]

console.log("A", Arr1)
//slice
const s1 = Arr1.slice(1,3) //doesnt change the array 

console.log(`${s1}`)

console.log("B" , Arr1)

const s2 = Arr1.splice(1,3) //remove the range of element from the array 

console.log(`${s2}`)

console.log(`C ${Arr1}`)


//concat

const a1 = [1,2]
const a2 = [3,4]
const r1 = a1.concat(a2)
console.log(r1); // or use spread operator to use single element

const result = [...a1,...a2]
console.log(result);

const another_array = [1,2,[3,4],[5,6,[7,8,9]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);


let a= 100
let b= 200
let c= 300

console.log(Array.of(a,b,c));
