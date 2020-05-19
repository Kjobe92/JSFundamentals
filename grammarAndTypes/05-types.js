/*
TYPES

1-grammarAndTypes
05-types.js
*/

//Boolean
//dark blue equates to reserved words
var on=true;
console.log(on);

let off=false;
console.log(off);

//boolean can represent: true/false, yes/no, on/off, 0/1

//undefined
/*
Undefined usually means a variable has been declared, but it's not been assigned a value
*/

let grass;
console.log(grass);

var undef= undefined;
console.log(undef);

//undefined usually means that you have forgotten about something. You have not filled the bucket. 

//Null 
/*
Null means a variable has been declared and assigned a value of null 
*/

//So what is the difference? Undefined is a bucket that feels empty. And we've forgotten to fill it. Null means that we have not forgotten to fill the bucket it means that theres nothing

var empty=null;
console.log(empty);

/*Null and undefined both represent variables with no value inside. Think of it this way--null values are for gag gifts that are boxes intentionally given with nothing inside (because that's the gag).
Undefined values are gifts given when the person giving the gift has forgotten to put the gift inside. 
*/

//Numbers
let myLiteralAge=90
console.log(myLiteralAge);

let precise=99999999999999;
console.log(precise);

let rounded=9999999999999999;
console.log(rounded);

let notQuite=0.2+0.1;
console.log(notQuite);

//JavaScript is not great with numbers so if you get a number with a decimal point..you should only care about the important decimal

let numbersAreHard=(0.2*10+0.1*10)/10;
console.log(numbersAreHard);

//Strings
//String is any value within quotes; JS spits out the values within the quotes
let stringOne="double quotes";
let stringTwo='single quotes';
console.log(stringOne, stringTwo);

//string concatenation vs addition
let first=1050+100;
let second='1050'+'100';
console.log(first);
console.log(second);

//When there is a + sign inbetween two numbers it adds them together. 
//When the plus line sees a string on either sides of it, it combines them into one long number.

let third=1050+'100';
console.log(third);
console.log(typeof third);
//If it has a number and a string...it automatically thinks they're both strings and combines them into one. 

//type of will tell you what you are using. In this case it would be a string. Super helpful to be able to tell you what is in your bucket.

//Interpolation
//let you use strings with dynamic content (they require backticks)

//Example 1:
let age=32;
let string=`my age is: ${age}`
console.log(string);

//Dynamic contents is basically your variables

//Objects
/*
What is an object?
An object is a container that stores propert names and thei values
(it can hold mulitple data types)

Denoted by {}
Have keys and values--color(key):'blue' (value), they are seperated with a colon, each key-value pair is seperated with a coma
*/

let hulk={
    color: 'green',
    age: 42,
    isStrong: true
}

console.log(hulk);
console.log(hulk.age);
console.log(hulk.color);
console.log(typeof hulk);

//Here color is a 'String', Age is a number, isStrong is a boolean, Hulk is a variable, the object is everything else


//Arrays
/*
Arrays stores mulitple values in an ordered way. Objects can store a bunch of different values...arrays can do that too but they arrange them in a number sequence
Such as Arrays do it like 1,2,3,4 and Objects do it like age, color, isStrong. 
Denoted by []
Has values of (blue, green, yellow), seperated by comas
*/

var stepsToBrushTeeth=['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush'];
//Array Indexing             0                      1                   2           3             4
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[3]);
console.log(typeof stepsToBrushTeeth);

//Objects are like parents of arrays
