/**
 * Arrays
 */

const numbers = [23, 45, 67, 43, 32, 87, 89];
const numbers2 = new Array(23, 21, 45, 67, 47, 36);
const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [23, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

console.log(mixed);

let val;

val = numbers.length;
console.log(val);

val = Array.isArray(numbers);
console.log(val);

val = numbers[3];
console.log(val);

numbers[2] = 100;
console.log(numbers);

val = numbers.indexOf(32);
console.log(val);

numbers.push(250);
console.log(numbers);

numbers.unshift(120);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.splice(1, 1);
console.log(numbers);

numbers.reverse();
console.log(numbers);

val = numbers.concat(numbers2);
console.log(val);

val = fruits.sort();
console.log(val);

val = numbers.sort();
console.log(val);

val = numbers.sort(function (x, y) {
  return x - y;
});
console.log(val);

function under40(num) {
  return num < 40;
}

val = numbers.find(under40);
console.log(val);
