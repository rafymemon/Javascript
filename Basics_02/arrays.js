// Arrays

// The Arrays object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

const myArray = [1, 2, 3, 4, 5];
// console.log(myArray[1]); // 2

const heroes = ['Batman', 'Superman, Spiderman', 'Ironman'];

const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr2[0]); // 1

myArr2.push(6) // Add an element to the end of the array
myArr2.push(7)
//console.log(myArr2);

myArr2.pop() // Remove the last element from the array
// console.log(myArr2)

//myArr2.unshift(9) // Add an element to the beginning of the array (not specifically used, due to its inefficiency in large arrays) 
//console.log(myArr2);

//myArr2.shift() // Remove the first element from the array (not specifically used, due to its inefficiency in large arrays)
//console.log(myArr2);

// console.log(myArr2.includes(8)); // used to check wether the value is present in the array or not
// console.log(myArr2.indexOf(3)) //used to check the index of the value in the array



const newArr = myArr2.join() // Convert the array to a string
//console.log(myArr2)
//console.log(newArr)
//console.log(typeof newArr); //String

//Slice, Splice

console.log("A ", myArr2);

const myn1 = myArr2.slice(1, 3) // Extracts a section of the array and returns a new array
console.log(myn1)
console.log("B ", myArr2)

const myn2 = myArr2.splice(1, 3)  
console.log(myn2)
console.log("C ", myArr2)