const prompt = require('prompt-sync')({sigint: true});

/*
Write a program, fibonacci.js that accepts a number, n, from the user and consequently logs the first n values in the fibonacci sequence.

The fibonacci sequence starts with 0 then 1. Each subsequent value can be obtained by summing the previous two values:
*/


let nacci1 = 0
let fibon2 = 1
let fibonacci = nacci1 + fibon2

let number = Number(prompt("Enter a value for number: ")) 

console.log(nacci1)
console.log(fibon2)

while(fibonacci <= number){

fibonacci  = nacci1 + fibon2;
nacci1  = fibon2;
fibon2  = fibonacci;


console.log(fibonacci);
}



 





