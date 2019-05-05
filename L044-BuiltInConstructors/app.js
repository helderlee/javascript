/**
 * Built In Constructors
 */

 // STRING

const name = new String('Jeff');
name.foo = 'bar';

console.log(name);

console.log(typeof name);

console.log(name == 'Jeff'); // compares value

console.log(name === 'Jeff'); // compares value and type

// NUMBER

const num1 = 5;
const num2 = new Number(5);

console.log(typeof num1);
console.log(typeof num2);

// FUNCTION

const getSum1 = function(x, y) {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum1(1,1));
console.log(getSum2(1,1));

// OBJECT
const john1 = {name: 'John'};
const john2 = new Object({name: 'John'});

console.log(john1);
console.log(john2);

// ARRAY
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);
console.log(arr2);

// REGULAR EXPRESSIONS
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);