
const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes) // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes) //concat merge both arrays into a new array and does not change the original array
// console.log(all_heroes); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // spread operator to merge both arrays into a new array and does not change the original array
//console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // flat method is used to convert a nested array into a single array
console.log(real_another_array);


console.log(Array.isArray("Rafy Mustafa")); // false


console.log(Array.from("Rafy Mustafa")); // ["R", "a", "f", "y", " ", "M", "u", "s", "t", "a", "f", "a"]

console.log(Array.from({name : "Rafy:"})); // [] ==> empty array bcz it is not an iterable object


let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1, score2, score3)); // [100, 100, 100] ==> create an array of the values
