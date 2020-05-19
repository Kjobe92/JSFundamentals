/*
TERNARIES

5-expressionAndOperators
*/

let x= -6;

x > 0 ? console.log('x is positive') : console.log('x is negative');

if (x > 0){
console.log('x is positive');
 } else {
     console.log('x is negative');
 }

let greeting = 'salutations';

if (greeting.length > 10){
    console.log('that is a long greeting');
} else if (greeting.length == 10){
    console.log('your gretting is exactly 10 characters!');
} else {
    console.log('what a normal greeting');
}

greeting.length > 10 ? console.log('that is a long greeting!') :
greeting.length == 10 ? console.log('your greeting is exactly 10 charaters!') :
console.log('what a normal greeting');

/*Ternaries They are a really fast and ellegant way of checking your conditional checks just ? and colons. 
? tell you that you have an expression before it and a code to run after it. Colon 
*/