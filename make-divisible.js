const prompt = require('prompt-sync')({sigint: true});

/*
Write a program that prompts the user for two numberx, x and y. The program should add one to x until it is divisble by y.


*/

let x = Number(prompt(" Enter x: "))
let y = Number(prompt(" Enter y: "))



while(x % y !== 0){
   x += 1
   console.log(x)
   
}
console.log(` ${x} is divisible by ${y}`)




