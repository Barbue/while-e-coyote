const prompt = require('prompt-sync')({sigint: true});

/*
Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10
*/


let string = prompt("Enter string: ")

let string2 = string

while(string2.length <= 10){

string2 = string2 + string

console.log(string2)
}



    


