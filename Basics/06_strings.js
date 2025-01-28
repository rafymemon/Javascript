const name = "Rafy"
const age = 20

//console.log(`Hello my name is ${name} and my age is ${age}`); // This syntax is called (string interpolation)

const fullName = new String("Rafy Mustafa") // another type to declare a string
console.log(fullName[0]); //R ==> output
console.log(fullName.__proto__); // {}

//other common methods used in string
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.charAt(6)); // to find the character using the position/index
console.log(fullName.indexOf('u')); //to find the index/position using the character

const newString = fullName.substring(0, 4) 
console.log(newString);

const anotherString = fullName.slice(-5, 1) // use for slicing
console.log(anotherString);

const newStringTwo = new String("     Rafy    ")
console.log(newStringTwo);
console.log(newStringTwo.trim()); // use to trim all the blank spaces 

const url = "https://abcd.com//abcd%293xyz"
console.log(url.replace('%293','-')); // replace a perticular part
console.log(url.includes('r')); // check wether a perticular word or letter is present in the value
console.log(url.includes('x'));










