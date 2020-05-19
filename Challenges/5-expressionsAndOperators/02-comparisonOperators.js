/*
COMPARISON OPERATORS

5-expressionAndOperators
02-comparisonOperators.js
*/

//equality comparison operator
console.log('3'==3);
console.log(4 ==4);
console.log(3=='4');

//strict equality comparison operator
console.log(3==3);
console.log('3'===3);

//not equal comparison operator ! is called a bang
console.log('3' !=4);
console.log('3' !=3);

//string not equal comparison operator, we see a false because they are of the same value and the same type and the double == cares about that
console.log('3' !==3);
console.log(3 !==3);

//greater than
console.log(3 > 2);
console.log(2 > 3);

//less than
console.log(2 < 3);
console.log(3 > 2);

//greater than or equal to
console.log(3 >= 2);
console.log(3 >= 3);

//less than or qual to
console.log(2 <= 3);
console.log(3 <= 2);

//And inspects (both expressions on either side of the operator must be true for 'And' to return true)
console.log(1<2 && 3>0);
console.log(2<1 && 3>0);

//Or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1<2 || 3<0);
//One side is true 1 is less than two but 3 is not less than 0 but since one side is true the whole expression is true
console.log(2<1 || 3<0);
//Neither one of these is true so this expression is false

let obj={key:'test'};
console.log(obj == {key: 'test'});
//This is false. The problem is this youre not comparing the actual values..youre comparing is it the exact same way. 

console.log(obj == obj);
//contexts are both the same

let arr = [1,2,3,4];
console.log(arr ==[1,2,3,4]);
console.log(arr == arr);
//if the things are different even if there contents are the same you get a false. If were talking about the same thing twice then you'll get your true
