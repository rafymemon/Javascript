
/* The iifi function is used to avoid the pollution of the global scope */

(function name() {
    console.log("Sameer");

})(); // This is the IIFE function which is called immediately after its declaration
// Semicolon is used for the termination of the statement

    (() => {
        console.log(`IMIDIATELY INVOKED FUNCTION EXPRESSION`);


    })(); // The first brakcet is used for the declaration of the function and the other bracket is used for the calling of the function imidiately


    ( (name) => {
        console.log(`Hey ${name}, How are you?`);
        
    })('Rafy')