
// For Loop

for (let i = 0; i < 10; i++) {
    const element = i;
    //if(element == 5) console.log(`${element} is the mid number`);
    
  //  console.log(element);
    
    
}

// Pyramid For Loop

let rows = 5;
for (let i = 1; i <= rows; i++) {
    let str = '';
    for (let j = 1; j <= rows - i; j++) {
        str += ' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        str += '*';
    }
   // console.log(str);
}

// Table of 5

for (let i = 1; i <= 10; i++) {
    // console.log(`5 x ${i} = ${5 * i}`);
    // console.log(5 + "*" + i + "=" + 5*i);
    
}

let myArray = ["Superman", "Batman", "Spiderman", "Ninja"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element)
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) { console.log(`Detected 5`); break; }
    
    //console.log(`Value of index is ${index}`);
    
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) { console.log(`Detected 5`); continue; }
    
    console.log(`Value of index is ${index}`);
    
    
}