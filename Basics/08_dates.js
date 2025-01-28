//Dates
let myDate = new Date()
// console.log(myDate)
//console.log(myDate.toString()); //Print the date with universal time
// console.log(myDate.toDateString()); //Print the date with the day, month and year
// console.log(myDate.toLocaleString()); //Print the date with the local time
// console.log(myDate.toString());


//console.log(typeof(myDate)); //Object


let myCreatedDate = new Date(2025, 2, 20) //Year, Month, Day (Note : Month starts from 0)
//console.log(myCreatedDate.toString()); //Print the date with universal time

// let newDate = new Date("2025-03-20")
// let newDate = new Date("01-03-2025")
// console.log(newDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp); //Print the timestamp of the date

// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth()+1); //Print the month
console.log(newDate.getDay()); //Print the day

newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'UTC'
})