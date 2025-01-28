console.log(null>0); //fasle
console.log(null == 0); // false
console.log(null >= 0); //true

// The reason is that an equality check  (==) and comparisons (> < >= <=) work differently
// Comparisons comvert null to a number, treating it as a 0, that's why line-3 (null>=0) is true and line-1 (null>0) is false

console.log(undefined == 0); // false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

//"===" strictly checks the datatypes along with the values while comparison
console.log("2" === 2);


