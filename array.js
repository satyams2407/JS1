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