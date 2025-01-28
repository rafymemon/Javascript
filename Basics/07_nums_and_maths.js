const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherName = 123.8596
console.log(otherName.toPrecision(4)); //roundup to the presiced value given

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //indicate the values by commas according to the US standard


//++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++
console.log(Math.PI); // 3.1415926....

console.log(Math.abs(-4)) //change the negative value into positive
console.log(Math.round(5.632)); //roundof the numbers to the nearest digits
console.log(Math.ceil(5.32)); //round of to the upper digit
console.log(Math.floor(5.32)); //round of to the lower digit
console.log(Math.random()); //give a random value
console.log(Math.sqrt(4)) //give the sqaure root of a value
console.log(Math.min(3, 43, 53, 2,1, 88)); //Give the minimum value among the numbers
console.log(Math.max(3, 43, 53, 2,1, 88)); //Give the maximum value among the numbers

console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
